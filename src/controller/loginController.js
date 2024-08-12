import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

import { loginModel } from "../model/loginModel.js";
import dotenv from "dotenv";

dotenv.config();

export const loginController = {
  getTokenUser: async (req, res) => {
    const data = req.body;

    const user = await loginModel.getUser(data);

    if (!user) {
      return res
        .status(404)
        .json({ erro: "Não existe uma conta criada com esse Email" });
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (isMatch) {
      const token = JWT.sign(
        { id: user.id, email: user.email, adm: user.adm },
        process.env.SECRET_KEY
      );

      res.status(200).json({ token });
    } else res.status(401).json({ erro: "Email ou senha incorretos" });
  },
};
