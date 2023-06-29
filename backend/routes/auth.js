const express = require("express");
const router = express.Router();
const View = require("../models/Authmodel");
var randomstring = require("randomstring");

//POST
router.post("/", async (req, res) => {
  console.log(req.body);
  const userName="siva", password="siva123"
    if(userName===req.body.adminEmail && password === req.body.adminPassword ){
      const searchUser =[{userName:"siva",password:"siva123"}] //await View.find({ password: req.body.adminPassword, userEmail: req.body.adminEmail });
      console.log("from admin",searchUser);
      let Authresponse = {
          'username': searchUser[0].userName,
          'authToken': randomstring.generate()
      }
      console.log(Authresponse);
      res.json(Authresponse)
    }
    else{
      res.status(404).json({ message: "invalid credentials" });
    }
});


module.exports = router;
