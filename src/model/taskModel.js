import db from "../libs/prisma.js";

export const taskModel = {
  get: async (userId) => {
    return await db.Task.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        description: true,
        referenceImage: true,
        conclude: true,
      },
    });
  },

  create: async (userId, data) => {
    return await db.Task.create({
      data: {
        userId,
        title: data.title,
        description: data.description,
      },
    });
  },

  edit: async (data) => {
    return await db.Task.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
      },
    });
  },

  conclude: async (id, status) => {
    return await db.Task.update({
      where: { id },
      data: {
        conclude: status,
      },
    });
  },

  deleteOne: async (taskId) => {
    return await db.Task.delete({
      where: {
        id: taskId,
      },
    });
  },

  deleteAll: async () => {
    return await db.Task.deleteMany();
  },
};
