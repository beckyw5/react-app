import React, { useEffect } from 'react';

import './Intro.css';

const Intro = (props) => {
    useEffect(() => {
        console.log('[intro.js] useEffect');
    });

    return (
        <div className="app__title">
            <h1>{props.title}</h1>
            <button
                style={props.style}
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default Intro;