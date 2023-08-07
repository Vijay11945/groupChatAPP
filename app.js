const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded());

app.get("/",(req,res) => {
   fs.readFile('username.text',(err,data)=>{
    if(err)
    {
        console.log(err);
        data = 'No Chat Exists';
    }
    res.send(
        '${data}<form action = "/" method = "POST" onsubmit = "document.getElementById("username").value = localStorage.getItem(,username,)" > <input type = "text" name = "message" id = "message">  <input type = "hidden" name = "username" id = "username"> <br /> <button type = "submit">send</button>  </form>'      
        );
   })
});

app.post("/",(req,res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.text", '${req.body.username}: ${req.body.username}',{flag: 'a'},(err) =>
    err ? console.log(err) : res.redirect("/")
);
});

app.get("/login",(req,res) => {
    res.send(
        '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name= "title"><button type="submit">add</button></form>'
);
    });
app.listen(3000);
