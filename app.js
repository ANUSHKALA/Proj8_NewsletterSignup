const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
//app.use(bodyParser,urlencoded({extended : true}));

app.use(express.static("public"));

app.get("/",function (req,res) {

    res.sendFile(__dirname+"/HTML/signup.html")
    
})

app.listen(3000,function(){
    console.log("This server is active on port 3000.")
})