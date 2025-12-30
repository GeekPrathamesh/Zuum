import express from "express";
import { protectedRoute } from "../middleware/Auth.js";
import {  getMessagesselecteduser, getUsers, markMessageseen, sendMessage } from "../controllers/Messagecontroller.js";
const messageRouter = express.Router();

messageRouter.get("/users",protectedRoute,getUsers);
messageRouter.get("/:id",protectedRoute,getMessagesselecteduser);
messageRouter.put("/mark/:id",protectedRoute,markMessageseen);
messageRouter.post("/send/:id",protectedRoute,sendMessage);

export default messageRouter;