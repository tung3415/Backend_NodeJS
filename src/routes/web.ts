import express, { Express } from "express";
import {
  getCreateUserPage,
  getHomePage,
  postCreateUser,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
} from "controllers/user-controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  // Homepage
  router.get("/", getHomePage);
  // Create-user Page
  router.get("/create-user", getCreateUserPage);
  // Create user
  router.post("/handle-create-user", postCreateUser);
  // Delete user
  router.post("/handle-delete-user/:id", postDeleteUser);
  // View user
  router.get("/handle-view-user/:id", getViewUser);
  // Update user
  router.post("/handle-update-user/:id", postUpdateUser);
  app.use("/", router);
};

export default webRoutes;
