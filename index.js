const express = require("express");

const server = express();

server.get("/test", (req, res)=>{
    res.send("<h1>Done</h1>");
})

console.log("Server on. \nPort:8090");
server.listen(8090);
