const mailChimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const bodyParser = require("body-parser");
// const fetch = require("node-fetch");
// const request = require("request");
// const https = require("https");
// const path = require("path");

const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static("public"));


app.get("/",function (req,res) {
    res.sendFile(__dirname+"/HTML/signup.html")
});

mailChimp.setConfig({
    apiKey : "60c6a28576a4fc40bba8b48380b2330b-us14",
    server : 'us14',
});

app.post("/post",(req,res) => {
   
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const listId = "27b317e5ad";

    const user = {
        firstName : firstName,
        lastName : lastName,
        email : email,
    };

    async function addContact(){

        const response = await mailChimp.lists.addListMember(listId, {
            email_address : user.email,
            status : 'subscribed',
            merge_fields : {
                FNAME : user.firstName,
                LNAME :user.lastName,
            }
        });
        res.sendFile(__dirname+"/HTML/success.html");
        console.log("FINALLY, it worked!" )
    } 

    addContact().catch(err => console.log(err));

})

app.post("/faliure",function (req,res){
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("This server is active on port 3000.")
})



// API Key
// 60c6a28576a4fc40bba8b48380b2330b-us14

// Audience key/List ID
// 27b317e5ad