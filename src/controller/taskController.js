import { taskModel } from "../model/taskModel.js";

export const taskController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await taskModel.get(req.user.id);

      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTask: async (req, res) => {
    const data = req.body;

    try {
      const task = await taskModel.create(req.user.id, data);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  editTask: async (req, res) => {
    const data = req.body;

    try {
      const task = await taskModel.edit(data);

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  concludeTask: async (req, res) => {
    const status = JSON.parse(req.params.conclude.toLowerCase());

    try {
      const task = await taskModel.conclude(req.user.id, status);

      res.status(200).json({ message: "Tudo certo!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTask: async (req, res) => {
    const taskId = parseInt(req.params.taskId);

    try {
      const task = await taskModel.deleteOne(taskId);

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTasks: async (req, res) => {
    try {
      const task = await taskModel.deleteAll();

      res.status(200).json({ message: "Tudo certo!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
