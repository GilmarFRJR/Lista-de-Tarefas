import db from "../libs/prisma.js";

export const loginModel = {
  checksUser: async (data) => {
    const user = await db.UserProfile.findUnique({
      where: {
        email: data.email,
        password: data.password,
      },
      select: {
        id: true,
        email: true,
        adm: true,
      },
    });

    return user;
  },
};
