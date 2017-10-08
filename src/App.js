import React, { Component } from 'react';
import './App.css';
import './Skeleton.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Voters from './Voters';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <div className="container">
            <Header />
            <Voters />
            <Footer />
          </div>
        </div> 
    );
  }
}

export default App;

/*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Voters />
        <Card />
      </div>

*/