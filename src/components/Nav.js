import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
        return(<div>
            <div class="sidenav">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            <Link to="/Education"  className={location.pathname === "/Education" ? "nav-link active" : "nav-link"}>Education</Link>
            <Link to="/Skills"  className={location.pathname === "/Skills" ? "nav-link active" : "nav-link"}>Skills</Link>
            <Link to="/Projects"  className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
          </div>
    
          </div>
        )
}

export default Nav;