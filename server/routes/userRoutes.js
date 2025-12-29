import express from "express";
import { checkAuth, login, Signup, updateProfile } from "../controllers/Usercontroller.js";
import { protectedRoute } from "../middleware/Auth.js";
const userRouter = express.Router();
userRouter.post("/signup",Signup);
userRouter.post("/login",login);
userRouter.put("/update-profile",protectedRoute,updateProfile);
userRouter.get("/check",protectedRoute,checkAuth);

export default userRouter;