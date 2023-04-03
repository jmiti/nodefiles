const mongoose =require("mongoose")
const passportLocalMongoose =require("passport-local-mongoose")

const userSchema =new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
    },

    lastname:{
        type:String,
        trim:true,
    },

    uniqueid:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },

    dob:{
        type:String,
        trim:true,
        
    },

    gender:{
        type:String,
        trim:true,
        
    },

    email:{
        type:String,
        trim:true,
        unique:true,
    },

    phonenumber:{
        type:String,
        trim:true,
        
    },

    nin:{
        type:String,
        trim:true,
        
    },

    role:{
        type:String,
        trim:true,
        
    },
    address:{
        type:String,
        trim:true,
        
    },

    ward:{
        type:String,
        trim:true,
        
    },

    password:{
        type:String,
        
    },

})
userSchema.plugin(passportLocalMongoose, {usernameField: "uniqueid"});
module.exports = mongoose.model("User",userSchema)