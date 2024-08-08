import express from "express";

import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/task", userAuth.identify, taskRoutes);

export default router;
