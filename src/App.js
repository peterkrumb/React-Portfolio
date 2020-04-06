import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import Nav from './components/Nav'
import './App.scss'
import './index.scss'
import Education from './components/pages/Education';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';

function App () {
  return(
    <Router>
    
    <Nav /> 
    <Route exact path="/" component={About} />
    <Route exact path="/Education" component={Education} />
    <Route exact path="/Skills" component={Skills} />
    <Route exact path="/Projects" component={Projects} />
    </Router>
  )
  };


export default App;
