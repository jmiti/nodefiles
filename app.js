const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require("path");
const { title } = require('process');
const router = express.Router();
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const session= require("express-session")
const passport= require("passport")


// we are creating an eviroment file
// require("dotenv").config();
const User = require("./models/userModel")
// importing database file directly
const config = require("./config/database")
const employeeRoutes = require("./routes/employeeRoutes")
const aboutRoutes = require("./routes/employeeAbout")
const contactRoutes = require("./routes/employeeContacts")
const registerRoutes = require("./routes/registerRoutes")
const loginRoutes = require("./routes/loginRoutes")
const signupRoutes = require("./routes/signupRoutes")
const authRoutes = require("./routes/authRoutes")

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized:false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// creating a connection between the controller and the database
mongoose.connect(config.database,{
  //useNew collects data from the front end then formats it
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
  console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})

app.set("view engine","pug"); 
app.set("views", path.join(__dirname ,"views"));
app.use(express.static(path.join(__dirname, "public")));


app.use("/",employeeRoutes)
app.use("/",aboutRoutes )
app.use("/",contactRoutes)
app.use("/",registerRoutes)
app.use("/",loginRoutes)
app.use("/",signupRoutes)
app.use("/",authRoutes)

app.get("*", (req,res)=>{
  res.status(404).send("page does not exist")
})












    // app.get('/', (req, res)=> { // new
   //res.send ('Homepage! Hello world.');
   // }):

   //app.get('/about', (req, res) => { // new res.send ('About page. 
  //res.send("about page nice.");
  // });

  //app.get('/contact', (req, res) => {
  // new res.send ('contact page. Nice.);


//app.get("/",(req,yes ) =>{
  //resizeBy.sendFile("index.html");
//}),

//app.get('/', (req, res) => { //new
  //res.sendFile(path.join(__dirname +'/index.html'));
//});


// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   });
//   app.use('/'router);
//    //_dirname :it will resolve to your project folder

  



// a route is a name of the path to a particular resource or a domain name 
//controll c to stop server






  



//this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000')); 