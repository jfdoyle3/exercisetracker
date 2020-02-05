// Initialize Mongoose and Schema
const mongoose=require('mongoose'),
      Schema=mongoose.Schema;

//Alt?
//import { Schema } from "mongoose";

// Create the Schema / Table for the Database
// Setters / Getters
const exerciseSchema=new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true,
});

// Export Schema Model 
const Exercise=mongoose.model('Exercise', exerciseSchema);   
module.exports=Exercise;