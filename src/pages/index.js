import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Chart from './chart'
import Trades from './trades'
import NavBar from '../components/NavBar'

class Pages extends Component {
    render() {
        return(
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/chart'>
                        <Chart/>
                    </Route>
                    <Route exact path='/trades'>
                        <Trades />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Pages;