const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/ufdash", connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("ufDash")
  });



  module.exports=router