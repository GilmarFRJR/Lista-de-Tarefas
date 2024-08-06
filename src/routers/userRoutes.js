import expess from "express";

import { userController } from "../controller/userController.js";

const router = expess.Router();

router.get("/", userController.getUsers); //pega todos os usuários | só add
router.get("/:id", userController.getUser); //pega 1 usuário e suas tasks | só adm

router.post("/", userController.upsertUser); //cria ou edita um perfil

router.delete("/:id", userController.deleteUser); //deleta um usuário

export default router;
