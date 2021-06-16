import React from 'react';

const intro = (props) => {
    return (
        <div className="app__title">
            <h1>Hi, Im a React App</h1>
            <button
                style={props.style}
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default intro;