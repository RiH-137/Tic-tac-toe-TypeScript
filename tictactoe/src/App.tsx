import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/Block';

function App() {
  return (
    <div className="App">
    <div className="board">
      <div className="row">
        <Block/>
        <Block/>
        <Block/>
      </div>
      <div className="row">
        <Block/>
        <Block/>
        <Block/>
      </div>
      <div className="row">
        <Block/>
        <Block/>
        <Block/>
      </div>

    </div></div>
  );
}

export default App;
