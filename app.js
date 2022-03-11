const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/",function (req,res) {

    res.sendFile(__dirname+"/HTML/signup.html")
    
})

app.post("/",function (req,res) {
    
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log(firstName);
    console.log(lastName);
    console.log(email);

})

app.listen(3000,function(){
    console.log("This server is active on port 3000.")
})