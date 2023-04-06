
// const express = require('express');
// const { Model } = require('mongoose');
// const router = express.Router();
// const passport = require("passport")
// //imported model
// const User = require("../models/userModel")

// router.get("/login2",(req,res)=>{
//     res.render("login2")
//   });

// // we redirect to a path and render a page
// router.post("/login2", passport.authenticate("local", {failureRedirect: "/login2"}), async(req,res)=>{
//     req.session.user = req.user 
//     let userExist = await User.findOne({username: req.user.username,password: req.user.password});
//     console.log("this user exists", userExist)
//     console.log("this is the user session:", req.session)
//     // res.redirect("/students")
//     if(req.user.role == "ao" && userExist){
//       res.redirect("/aodash")
//     }
//     else if(req.user.role == "uf" && userExist){
//       res.redirect("/ufdash")
//     }
//     else if (req.user.role == "ao" && userExist){
//       res.redirect("aodash")
//     }
//       else{res.send("you are not registered")}

// })

// router.post("/authRoutes", (req,res)=>{
//   if(req.session){
//     req.session.destroy((error)=>{
//       if (error){
//       res.status(400).send("unable to logout user")
//     }else{
//       return res.redirect("/login2")
//     }
//   })
// }
// })


//   module.exports  = router