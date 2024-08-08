import expess from "express";

import { taskController } from "../controller/taskController.js";

const router = expess.Router();

router.get("/", taskController.getTasks); //pega as tasks de um usuário (id do usuário vem do req/token)

router.post("/", taskController.createTask); //cria uma task (id do usuário vem do req/token)
router.put("/", taskController.editTask);
router.put("/:conclude", taskController.concludeTask); //marca ou desmarca uma task como concluída

router.delete("/all", taskController.deleteTasks); //apaga todas as task
router.delete("/:taskId", taskController.deleteTask); //apaga uma task

export default router;
