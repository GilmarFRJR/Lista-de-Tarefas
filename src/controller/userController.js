import { taskModel } from "../model/taskModel.js";
import { userModel } from "../model/userModel.js";

export const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await userModel.getAll();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUser: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const user = await userModel.getOne(id);

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  upsertUser: async (req, res) => {
    const data = req.body;

    try {
      const user = await userModel.upsert(data);

      user
        ? res.status(201).json(user)
        : res.json({ erro: "Email já está em uso." });
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
