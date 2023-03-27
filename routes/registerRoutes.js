const express = require('express');
const router = express.Router();
//imported model
const Register = require("../models/regiterModel")

router.get("/register",(req,res)=>{
    res.render("register")
  });



router.post("/register", async(req,res)=>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect("/")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router

