const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("foDash")
  });



  module.exports=router