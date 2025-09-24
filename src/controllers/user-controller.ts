import { Request, Response } from "express";
import { handleCreateUser } from "../services/user-service";

const getHomePage = (req: Request, res: Response) => {
  return res.render("home.ejs");
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

export { getHomePage, getCreateUserPage, postCreateUser };
