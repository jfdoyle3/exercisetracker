// Ititalize Mongoose and Schema
const mongoose=require('mongoose'),
      Schema=mongoose.Schema;

//Alt?
//import { Schema } from "mongoose";

// Create the Schema / Table for the Database
// Setters / Getters
const  userSchema= new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
   }, {
       timestamps: true,
   });

// Export Schema Model 
const User=mongoose.model('User',userSchema);
module.exports=User;