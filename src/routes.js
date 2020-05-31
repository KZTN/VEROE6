import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dasboard';
import Impact from './pages/Impact';
import About from './pages/About';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/impact" component={Impact}/>
            <Route path="/about" component={About}/>
        </Switch>
        </BrowserRouter>
    )
}
