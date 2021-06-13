import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Bex', age: 28},
            { name: 'Becky', age: 34},
            { name: 'Bexter', age: 26}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Bexica', age: 28},
                { name: 'Becky', age: 39},
                { name: 'Dexter', age: 26}
            ],
            otherState: personsState.otherState
        });
    };

    return (
        <div className="App">
            <h1>Hi, Im a React App</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            />
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
}

export default App;
