"use server";

import { db } from "./db";

type userData = {
  email: string;
  name: string;
  password: string;
};
export const createUser = async (data: userData) => {
  return db.user.create({
    data: {
      email: data.email,
      name: data.name,
      avatarUrl: "/avatar-url",
    },
  });
};

export const login = async (data: userData) => {
  let user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return new Error("Invalid login credential");
  }

  return user;
};

export const userDetails = async (email: string) => {
  let userData = await db.user.findUnique({
    where: {
      email,
    },
    include: {
      Agency: {
        include: {
          SidebarOption: true,
          SubAccount: {
            include: {
              SidebarOption: true,
            },
          },
        },
      },
      Permissions: true,
    },
  });

  if (!userData) {
    return new Error("User with this email was not found!");
  }

  return userData;
};
