import './index.css';

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Music from './components/music/Music';
import Prime from './components/prime/Prime';
import Graph from './components/graph/Graph';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => (
    <Switch>
        <Route  exact path="/" component={App} />
        <Route  path="/Music" component={Music} />
        <Route  path="/Prime" component={Prime} />
        <Route  path="/Graph" component={Graph} />
    </Switch>
)

render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('root')
)
