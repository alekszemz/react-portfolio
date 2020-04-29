import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (//{return also work}
 <Switch>
   <Route exact path='/' component={LandingPage} />
   <Route path='/aboutme' component={AboutMe} />
   <Route path='/contact' component={Contact} />
   <Route path='/projects' component={Projects} />
   <Route path='/resume' component={Resume} />
 </Switch>
)

export default Main;