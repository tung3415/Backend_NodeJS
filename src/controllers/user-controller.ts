import { Request, Response } from "express";
import { getAllUser, handleCreateUser, handleDeleteUser, getUserById, updateUserById } from "services/user-service";

const getHomePage = async (req: Request, res: Response) => {
  // Get Data
  const users = await getAllUser();
  return res.render("home.ejs", {
    users: users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs");
};

const postCreateUser = (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;
  // Hanlde create user
  handleCreateUser(fullName, email, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  // Handle delete user
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  // Handle delete user
  const user = await getUserById(id);
  return res.render("view-user.ejs", { id: id, user: user });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const { id, fullName, email, address } = req.body;
  // Handle update user Service
  await updateUserById(id, fullName, email, address);
  // View
  return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };
