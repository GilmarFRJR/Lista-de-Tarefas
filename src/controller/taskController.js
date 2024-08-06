import { taskModel } from "../model/taskModel.js";

export const taskController = {
  getTasks: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const tasks = await taskModel.get(id);

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTask: async (req, res) => {
    const data = req.body;

    try {
      const task = await taskModel.create(data);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  editTask: async (req, res) => {
    const data = req.body;

    try {
      const task = await taskModel.edit(data);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  concludeTask: async (req, res) => {
    const id = parseInt(req.params.id);
    const status = JSON.parse(req.params.conclude.toLowerCase());

    try {
      const task = await taskModel.conclude(id, status);

      res.status(200).json({ message: "Tudo certo!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTask: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const task = await taskModel.deleteOne(id);

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
