import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http"
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
const app=express();
// socket.io supports this http server only
const server=http.createServer(app);

//middlewere
app.use(express.json({limit:"4mb"}));
app.use(cors());

//routes 
app.use("/api/status",(req,res)=>{
res.send("server is live!")
})
app.use("/api/Auth",userRouter);
app.use("/api/messages",messageRouter);

const PORT = process.env.PORT || 7000;

//connect to database
connectDB();
server.listen(PORT,()=>{
    console.log("server is running on PORT :",PORT);
    
})

