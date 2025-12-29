import express from "express";
import { protectedRoute } from "../middleware/Auth.js";
import {  getMessagesselecteduser, getUsers, markMessageseen } from "../controllers/Messagecontroller.js";
const messageRouter = express.Router();

messageRouter.get("/users",protectedRoute,getUsers);
messageRouter.get("/:id",protectedRoute,getMessagesselecteduser);
messageRouter.put("mark/:id",protectedRoute,markMessageseen);
export default messageRouter;