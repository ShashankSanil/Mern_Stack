import express, { Router } from "express";
import {
  getUsers,
  addUser,
  getUserById,
  edituser,
  deleteUser,
} from "../controller/user-controller.js";

const route = express.Router();

route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUserById);
route.put("/:id", edituser);
route.delete("/:id", deleteUser);

export default route;
