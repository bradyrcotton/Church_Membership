import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from '../Roster/roster';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            users: ''
        }
    }


    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Roster} />
                </Switch>
            </div>
        )
    }
}

export default App
