import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

import {Home, Error} from './containers/pages';

class App extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Error} />
            </Switch>
            </>
        );
    }
}
export default App;