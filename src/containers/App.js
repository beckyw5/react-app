import React, { Component } from 'react';
import './App.css';

import Intro from "../components/Intro/intro";
import Persons from "../components/Persons/Persons";

class App extends Component {
    state = {
        persons: [
            { id: 123, name: 'Bex', age: 28},
            { id: 456, name: 'Becky', age: 34},
            { id: 789, name: 'Bexter', age: 26}
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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
        }

        return (
            <div className="app">
                <Intro toggle={this.togglePersonHandler} style={style} title={this.props.appTitle}/>
                {persons}
            </div>
        )
    }
}

export default App;
