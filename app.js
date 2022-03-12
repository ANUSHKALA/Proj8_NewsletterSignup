// mailchimp credentials
API = "60c6a28576a4fc40bba8b48380b2330b-us14";
const aud_key = "27b317e5ad";

/*The process. env property is an inbuilt
 application programming interface of the process module
  which is used to get the user environment.
 Syntax: process.env. Return Value: This property returns an object containing the user environment 
 */

const mailChimp = require("@mailchimp/mailchimp_marketing")
const express = require("express");
const bodyParser = require("body-parser");
// const fetch = require("node-fetch");
// const request = require("request");
// const https = require("https");


const path = require("path");

const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static("public"));


app.get("/",function (req,res) {
    res.sendFile(__dirname+"/HTML/signup.html")
});

app.post("/post",(req,res) => {
   
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fields: {
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    fetch('https://us14.api.mailchimp.com/3.0/lists/27b317e5ad',{
        method : 'POST',
        headers : {
            Authorization: 'auth 60c6a28576a4fc40bba8b48380b2330b-us14'
        },
        body: jsonData,
    })//.then(res.statusCode === 200 ?
    //     res.redirect( __dirname +'/success.html'):
    //     res.redirect('/HTML/faliure.html'))
    //     .catch(err => console.log("not again"))

 
})

app.listen(3000,function(){
    console.log("This server is active on port 3000.")
})



// API Key
// 60c6a28576a4fc40bba8b48380b2330b-us14
// Audience key/List ID
// 27b317e5ad