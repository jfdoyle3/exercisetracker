//Initialize React
import React from 'react';

// Import the use of the backend Routes
import {BrowserRouter as Router, Route } from "react-router-dom";

//Import BootStrap
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (

  // Use a Route
  <Router>
    <Navbar />
    <br />
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercises} />
    <Route path="/create" component={CreateExercises} />
    <Route path="/user" component={CreateUser} />
  </Router>
  );
}

export default App;
