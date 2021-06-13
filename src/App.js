import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

    render() {
        return (
            <div className="App">
                <h1>Hi, Im a React App</h1>
                <button>Switch Name</button>
                <Person name="Bex" age="28"/>
                <Person name="Becky" age="34">My Hobbies: Coding</Person>
                <Person name="Bexter" age="26"/>
            </div>
        );
    }
}

export default App;