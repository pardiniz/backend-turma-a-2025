//const express = require('express');
import express from 'express';
const server = express();
 
import routerPayment from './routes/payment.routes.js';

server.use(express.json());
server.use("/api",routerPayment);

const PORT = process.env.PORT || 3000;

server.get("/",(req,res)=>{
    res.send("GET" + new Date());
});

server.post("/",(req,res)=>{
    res.send("post" + new Date());
});

server.patch("/",(req,res)=>{
    res.send("patch" + new Date());
});
server.delete("/",(req,res)=>{
    res.send("delete " + new Date());
});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});