import bcrypt from "bcrypt";

import { userModel } from "../model/userModel.js";

export const userController = {
  getUsers: async (req, res) => {
    try {
      if (req.user.adm === true) {
        const users = await userModel.getAll();

        res.status(200).json(users);
      } else {
        res.status(403).json({
          erro: "Você não está autorizado a ver a lista de usuários.",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message, teste: "teste" });
    }
  },

  getUser: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      if (req.user.adm === true) {
        const user = await userModel.getOne(id);

        res.status(200).json(user);
      } else {
        res.status(403).json({
          erro: "Você não está autorizado a ver a lista de usuários.",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  upsertUser: async (req, res) => {
    const data = req.body;

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    try {
      const user = await userModel.upsert(data);

      user
        ? res.status(201).json(user)
        : res.status(409).json({ erro: "Email já está em uso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await userModel.getOne(req.user.id);

      if (user) {
        const userDelete = await userModel.delete(req.user.id);
        res.status(200).json(userDelete);
      } else {
        res.status(404).json({ erro: "Esse usuário não existe." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
