import React from 'react';
import {Switch, Route, } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';


const Main = ()=>(
     
        
            <Switch>
                <Route exact path = "/"  component = { Home } />
                <Route   path = "/About"  component = { About } />
                <Route  path = "/Resume"  component= { Resume } />
                <Route  path = "/Project" component = { Project } />
                <Route  path = "/Contact" component = { Contact } />
            </Switch>
)
export default Main;
