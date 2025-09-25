import express, { Express } from "express";
import { getCreateUserPage, getHomePage, postCreateUser } from "controllers/user-controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  // Homepage
  router.get("/", getHomePage);
  // Create user
  router.get("/create-user", getCreateUserPage);
  // Insert user into Database
  router.post("/handler-create-user", postCreateUser);
  app.use("/", router);
};

export default webRoutes;
