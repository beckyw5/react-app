import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi, Im a React App</h1>
  //   </div>
  // );
    return React.createElement('div', {className: 'App'},  React.createElement('h1', null,'Hi, I\'m a React App'));
}

export default App;
