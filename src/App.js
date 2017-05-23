import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

    const courses = [
      { name: 'complete ios10 coures', price: 199 },
      { name: 'complete pentesting coures', price: 499 },
      { name: 'complete front end dev coures', price: 399 },
      { name: 'complete bug bounty coures', price: 299 }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
