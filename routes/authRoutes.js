const express = require('express');
const { Model } = require('mongoose');
const router = express.Router();
const passport = require("passport")
//imported model
const User = require("../models/userModel")

router.get("/login2",(req,res)=>{
    res.render("login2")
  });


router.post("/login2", passport.authenticate("local", {failureRedirect: "/login2"}), async(req,res)=>{
    req.session.user = req.user 
    let userExist = await User.findOne({username: req.user.username,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session:", req.session)
    res.redirect("/students")
})




  module.exports  = router