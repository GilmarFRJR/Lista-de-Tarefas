import expess from "express";

import { userController } from "../controller/userController.js";
import { loginController } from "../controller/loginController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = expess.Router();

router.get("/", userController.getUsers); //pega todos os usuários | só add
router.get("/:id", userController.getUser); //pega 1 usuário e suas tasks | só adm

router.post("/", userController.upsertUser); //cria ou edita um perfil
router.post("/login", loginController.getToken); //gera um token de acesso

router.delete("/", userAuth.identify, userController.deleteUser); //deleta um usuário

export default router;
