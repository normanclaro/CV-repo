import React from "react";
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Languages from "../pages/Languages";
import Skills from "../pages/Skills"
import Experience from "../pages/Experience"
import Education from "../pages/Education"
import Main from "../pages/Main"

export default function NavBar(){
    
    return(
        <Router>
          <Link to="/Main">
          <Button variant="outline-primary" className="buttons">Home</Button>
          </Link>
          <Link to="/Skills">
          <Button variant="outline-secondary" className="buttons">Skills</Button>
          </Link>
          <Link to="/Languages">
          <Button variant="outline-secondary" className="buttons">Languages</Button>
          </Link>
          <Link to="/Education">
          <Button variant="outline-secondary" className="buttons">Education</Button>
          </Link>
          <Link to="/Experience">
          <Button variant="outline-secondary" className="buttons">Experience</Button>
          </Link>
          <hr/>
            <Switch>
            <Route path="/Main">
            <Main/>
            </Route>
            <Route path="/Skills">
              <Skills/>
            </Route>
            <Route path="/Languages">
              <Languages/>
            </Route>
            <Route path="/Education">
              <Education/>
            </Route>
            <Route path="/Experience">
              <Experience/>
            </Route>
            </Switch>
          </Router>
    )
};