import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {msg: ''}
  componentDidMount() {
    fetch('/hello').then(res => res.json()).then(res => this.setState({ msg: res.msg })); }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            { this.state.msg }
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

