import React, { useEffect } from 'react';

import './Intro.css';

const Intro = (props) => {
    useEffect(() => {
        console.log('[intro.js] useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[intro.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[intro.js] 2 useEffect');
        return () => {
            console.log('[intro.js] 2nd cleanup work in useEffect');
        }
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