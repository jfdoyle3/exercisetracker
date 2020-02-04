// Create a Route from Express.
 const Router=require('express').Router(); // alt line
//import { Router }from 'express';

// Get the Model
let User=require('../models/user.model');

// This is localhost/users/                              // GET Request
Router.route('/').get ((req, res)=>{                     // ROUTE name
    User.find()                                          // FIND all Users 
    .then(users=> res.json(users))                       // THEN (promise) returns data in JSON format
    .catch(err=> res.status(400).json('Error: '+err));   // CATCH returns ERROR and displays it.
});

// This is localhost/users/add                          // POST Request
Router.route('/add').post((res,req) =>{                 // ROUTE name
    const username=req.body.username,                   // ADD a User from localhost/user/add/jim
          newUser=new User({username});                 // CREATE a newUser object in JSON format
        
    newUser.save()                                      // SAVE newUser to Database
    .then(()=>res.json('User Added!'))                  // THEN (promise) respond in JSON, new user Added
    .catch(err=>res.status(400).json('Error: '+ err));  // CATCH returns ERROR and displays it.
});

module.exports=Router;                                  // DEFAULT line for exporting Routers