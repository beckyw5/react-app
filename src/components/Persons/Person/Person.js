import React from 'react';
import '../Person/Person.css';

const person = props => {
    return (
        <div className="person">
            <p onClick={props.click}>Hi, My name is {props.name} and I am {props.age} years old.</p>
            {props.children && <p>{props.children}</p>}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;