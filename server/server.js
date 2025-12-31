import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http"
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";


const app=express();
// socket.io supports this http server only
const server=http.createServer(app);

//initialize socket.io server
export const io = new Server(server,{
    cors:{origin:"*"}
})

// store online user
export const userSocketMap={};  //{userId:socketId}

// Socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected", userId);

  if (userId) userSocketMap[userId] = socket.id;

  // Emit online users to all connected clients
  io.emit("getonlineusers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getonlineusers", Object.keys(userSocketMap));
  });
});


//middlewere
app.use(express.json({limit:"4mb"}));
app.use(cors());

//routes 
app.use("/api/status",(req,res)=>{
res.send("server is live!")
})
app.use("/api/Auth",userRouter);
app.use("/api/messages",messageRouter);


//connect to database
await connectDB();

const PORT = process.env.PORT || 7001;

server.listen(PORT, () => {
  console.log("server running on PORT:", PORT);
});


//export server for vercel
export default server;

