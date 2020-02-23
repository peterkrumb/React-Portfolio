import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import Nav from './components/Nav'
import './App.css'
import './index.css'

function App () {
  return(
    <Router>
    <div>
    <Nav /> 
    <Route exact path="/" component={About} />
    </div>
    </Router>
  )
  };


export default App;
