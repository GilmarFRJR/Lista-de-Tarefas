import db from "../libs/prisma.js";

export const loginModel = {
  getUser: async (data) => {
    const user = await db.UserProfile.findUnique({
      where: {
        email: data.email,
      },
    });

    return user;
  },
};
