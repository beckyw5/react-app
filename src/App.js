import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: 'Bex', age: 28},
            { name: 'Becky', age: 34},
            { name: 'Bexter', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28},
                { name: 'Becky', age: 39},
                { name: 'Dexter', age: 26}
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Bex', age: 28},
                { name: event.target.value, age: 39},
                { name: 'Dexter', age: 26}
            ]
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div className="app__person">
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
            );
        }

        return (
            <div className="app">
                <div className="app__title">
                    <h1>Hi, Im a React App</h1>
                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>Toggle Persons</button>
                </div>
                {persons}
            </div>
        )
    }
}

export default App;
