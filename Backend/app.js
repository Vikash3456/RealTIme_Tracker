const express=require('express')
const app =express() 
const http=require('http')
const path = require('path')
const socketio=require('socket.io') // set up socket io and runs on http server which is node packeage 

const server= http.createServer(app)
const io =socketio(server)

app.use(express.static('public'))
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public"))) //set up public folder so that use all static file like css 


io.on("connection",function(socket){ //connection req comes form ../public/js/script.js --> from frontend
    socket.on("send-location",function(data){
        io.emit("recive-location",{id:socket.id,...data})// transer/send data from backend to front or all those who are connected  
    });
    console.log("connected")

    //make if 
  socket.on("disconnect",function(){
    io.emit("user-disconnect",socket.id)
  })
})
app.get("/map",(req,res)=>{
    res.render("index")
})

server.listen('3000',()=>{
    console.log("server is running on port 3000")
})