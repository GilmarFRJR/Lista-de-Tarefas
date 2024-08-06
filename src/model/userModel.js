import db from "../libs/prisma.js";

export const userModel = {
  getAll: async () => {
    return await db.UserProfile.findMany({
      select: {
        name: true,
        email: true,
        password: true,
        tasks: true,
      },
    });
  },

  getOne: async (id) => {
    return await db.UserProfile.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        password: true,
        _count: { select: { tasks: true } },
        tasks: true,
      },
    });
  },

  upsert: async (data) => {
    const user = await db.UserProfile.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return await db.UserProfile.upsert({
        where: { email: data.email },
        update: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        create: {
          name: data.name,
          email: data.email,
          password: data.password,
          // adm: true,
        },
      });
    }
  },

  delete: async (id) => {
    return await db.UserProfile.delete({
      where: {
        id,
      },
    });
  },
};
