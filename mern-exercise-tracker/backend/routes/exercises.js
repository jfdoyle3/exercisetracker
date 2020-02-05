// Create a Route from Express.
const Router=require('express').Router(); // alt line
//import { Router }from 'express';

// Get Model
let Exercise=require('../models/exercise.model');

// This is localhost/exercises/                          // GET Request
Router.route('/').get ((req, res)=>{                     // ROUTE name
    Exercise.find()                                      // FIND all Users 
    .then(exercises=> res.json(exercises))               // THEN (promise) returns data in JSON format
    .catch(err=> res.status(400).json('Error: '+err));   // CATCH returns ERROR and displays it.
});

// This is localhost/exercises/add                       // POST Request
Router.route('/add').post((req,res) =>{                  // ROUTE name
    const username=req.body.username,                    // ADD an Execerise
          description=req.body.description,
          duration=Number(req.body.duration),
          date=Date.parse(req.body.date),                 
          
          newExercise=new Exercise({                     // CREATE a newExercise OBJECT in JSON format
              username,
              description,
              duration,
              date,
          });                
     
    newExercise.save()                                  // SAVE newExercise to Database
    .then(()=>res.json('Exercise Added!'))              // THEN (promise) respond in JSON, new user Added
    .catch(err=>res.status(400).json('Error: '+ err));  // CATCH returns ERROR and displays it.
});

module.exports=Router;                                  // DEFAULT line for exporting Router
