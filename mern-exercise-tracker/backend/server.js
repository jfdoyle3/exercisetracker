// Initialize Express: Web Framework and CORS: Cross Origin Resource Sharing
const express=require('express'),
      cors=require('cors'),

//  MongoDB
      mongoose=require('mongoose'),

// Express server
      server=express(),
      port=process.env.PORT || 5000;

// Envoirnment Variables
require('dotenv').config();

// Middleware: CORS and parsing JSON data
server.use(cors());
server.use(express.json());

// Connect to Database
const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  const connection=mongoose.connection;
  connection.once('open', ()=>{
      console.log("Database is connected");
  });

// Routes: to Databases
// 1st: Require routes
const exercisesRouter=require('./routes/exercises'),
      usersRouter=require('./routes/users');
    
// 2nd: Use routes: Creates localhost/execises and /users
server.use('/exercises',exercisesRouter);
server.use('/users',usersRouter);



// Starts Server, Listens on Port
server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
