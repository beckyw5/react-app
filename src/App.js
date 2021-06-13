import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    state = {
        persons: [
            { name: 'Bex', age: 28},
            { name: 'Becky', age: 34},
            { name: 'Bexter', age: 26}
        ]
    }

    switchNameHandler = () => {
        // console.log("Was clicked");
        // DONT DO THIS this.state.persons[0].name = 'Rebecca';
        this.setState({
            persons: [
                { name: 'Bexica', age: 28},
                { name: 'Becky', age: 39},
                { name: 'Dexter', age: 26}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, Im a React App</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;