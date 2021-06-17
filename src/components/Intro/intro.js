import React from 'react';

import './intro.css';

const intro = (props) => {
    return (
        <div className="app__title">
            <h1>{props.title}</h1>
            <button
                style={props.style}
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default intro;