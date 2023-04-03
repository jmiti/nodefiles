const express = require('express');
const { Model } = require('mongoose');
const router = express.Router();
//imported model
const User = require("../models/userModel")

router.get("/signup",(req,res)=>{
    res.render("signup")
  });


  module.exports=router