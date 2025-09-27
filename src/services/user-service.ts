import getConnection from "config/database";
import { prisma } from "config/client";

const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const handleCreateUser = async (fullName: string, email: string, address: string) => {
  const newUser = await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
  return newUser;
};

const handleDeleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: +id,
    },
  });
  return deleteUser;
};

const getUserById = async (id: string) => {
  const user = prisma.user.findUnique({
    where: { id: +id },
  });
  return user;
};

const updateUserById = async (id: string, fullName: string, email: string, address: string) => {
  const updateUser = await prisma.user.update({
    where: {
      id: +id,
    },
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
  return updateUser;
};

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById };
