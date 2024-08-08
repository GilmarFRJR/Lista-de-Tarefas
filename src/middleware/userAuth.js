import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userAuth = {
  identify: async (req, res, next) => {
    if (!req.headers.authorization)
      return res.status(401).json({ erro: "Você não está logado" });

    const [authType, token] = req.headers.authorization.split(" ");

    try {
      const decoded = JWT.verify(token, process.env.SECRET_KEY);

      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ erro: "Token inválido" });
    }
  },
};
