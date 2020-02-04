//Initialize React
import React from 'react';

// Import the use of the backend Routes
import {BrowserRouter as Router, Route } from "react-router-dom";

//Import BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exrcise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


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
