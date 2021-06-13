import React, { Component } from 'react';
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component{
    state = {
        username: 'superuser'
    }

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div>
                <UserInput changed={this.usernameChangedHandler}/>
                <UserOutput username={this.state.username} />
                <UserOutput username="Bex"/>
                <UserOutput username="Bexter"/>
            </div>
        )
    }
}

export default App;
