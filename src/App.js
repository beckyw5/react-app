import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    state = {
        persons: [
            { name: 'Bex', age: 28},
            { name: 'Becky', age: 34},
            { name: 'Bexter', age: 26}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28},
                { name: 'Becky', age: 39},
                { name: 'Dexter', age: 26}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Bex', age: 28},
                { name: event.target.value, age: 39},
                { name: 'Dexter', age: 26}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, Im a React App</h1>
                <button onClick={() => this.switchNameHandler('Bex!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Rebecca")}
                    changed={this.nameChangedHandler}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        )
    };
}

export default App;
