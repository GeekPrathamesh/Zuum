# ZUUM — Real-Time Chat Application

Live Demo: https://zuum-cobi.vercel.app/

Tech Stack: React, Node.js, Express, MongoDB, Socket.io, AWS EC2, NGINX

---

## Overview

ZUUM is a full-stack real-time chat application inspired by WhatsApp.  
It supports secure authentication, one-to-one messaging, online/offline presence, and image sharing using WebSockets.

The frontend is built with React, while the backend uses Node.js, Express, and Socket.io for real-time communication. The application is deployed using AWS EC2 and NGINX.

---

## Features

- JWT-based user authentication  
- Real-time one-to-one messaging  
- Online / offline user presence  
- Image sharing using Cloudinary  
- Message seen status  
- User profiles with bio and profile picture  
- Persistent WebSocket connections  
- Fully deployed and production-ready  

---

## Tech Stack

### Frontend
- React (Vite)
- Context API
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.io
- JWT Authentication
- Cloudinary

### Deployment
- Frontend: Vercel  
- Backend: AWS EC2  
- Reverse Proxy: NGINX  
- OS: Ubuntu Server  

---

## Project Structure

ZUUM
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── context
│ │ ├── pages
│ │ ├── lib
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js
│
├── server
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── lib
│ └── server.js

yaml
Copy code

---

## Real-Time Architecture

- Users connect via Socket.io using their `userId`
- Online users are tracked using a socket-to-user map
- Messages are emitted instantly if the receiver is online
- Messages are stored in MongoDB
- Online user list is broadcast to all connected clients

---

## Authentication Flow

1. User signs up or logs in  
2. Server generates a JWT token  
3. Token is sent in request headers  
4. Protected routes validate token middleware  
5. Socket connection attaches `userId` via handshake query  

---

## Environment Variables

### Backend (`.env`)
PORT=
MONGO_URI=
JWTSECRET_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NODE_ENV=

shell
Copy code

### Frontend (`.env`)
VITE_BACKEND_URL=

yaml
Copy code

---

## Run Locally

### Backend
```bash
cd server
npm install
npm run dev
Frontend
bash
Copy code
cd frontend
npm install
npm run dev
Future Improvements
Group chats

Typing indicators

Message reactions

Read receipts

Push notifications

Author
Prathamesh Teli
LinkedIn: https://www.linkedin.com/in/geekprathamesh
GitHub: https://github.com/GeekPrathamesh

markdown
Copy code

---

### ✅ This README is:
- Minimal
- Professional
- Recruiter-friendly
- Honest
- Copy–paste ready

If you want next:
- README for **Sketchy-AI**
- README for **Food Delivery App**
- GitHub profile audit (what recruiters notice first)

Just tell me 👍