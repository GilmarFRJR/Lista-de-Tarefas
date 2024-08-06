import db from "../libs/prisma.js";

export const taskModel = {
  get: async (userId) => {
    return await db.Task.findMany({
      where: { userId },
      select: {
        title: true,
        description: true,
        referenceImage: true,
        conclude: true,
      },
    });
  },

  create: async (data) => {
    return await db.Task.create({
      data: {
        userId: data.userId,
        title: data.title,
        description: data.description,
        referenceImage: data.referenceImage,
      },
    });
  },

  edit: async () => {
    return await db.Task.update({
      data: {
        title: data.title,
        description: data.description,
        referenceImage: data.referenceImage,
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

  deleteOne: async (id) => {
    return await db.Task.delete({
      where: {
        id,
      },
    });
  },

  deleteAll: async () => {
    return await db.Task.deleteMany();
  },
};
