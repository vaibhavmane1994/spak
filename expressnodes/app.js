const express = require("express");

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
const  fs = require('fs');

const users =[];

app.get("/", (request,response)=>{
    response.send("<h1>hello World</h1>");

 
})

app.post("/api/users",(request,response)=>{
    console.log(request.body);
    users.push(request.body)
    fs.appendFile('words.json',JSON.stringify(request.body),(err ,jsonString)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Jsonstring",jsonString);
            response.send(jsonString);
        }
    });
    response.send(request.body)
});
app.get("/api/users",(request,response)=>{
    response.send(users);
})
app.listen(8000,()=>{ console.log("express js is running 3002");});