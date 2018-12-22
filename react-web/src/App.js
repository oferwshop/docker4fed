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
        <div style="height: 277px;max-height: 300px;">
          <img class="App-logo" src="http://pluspng.com/img-png/nodejs-logo-png--435.png" style={{height: '65%', marginRight: '60px', marginBottom: '35px'}}/>
          <img src="https://dwglogo.com/wp-content/uploads/2017/09/1300px-Docker_container_engine_logo.png" style={{height: '100%', paddingTop: '18px'}} className="App-logo"/>
          <img src={logo} className="App-logo" alt="logo" style={{height: '90%'}} />
        </div>
          <h1 style="z-index: 9999;margin-top: 100px;">
            { this.state.msg }
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

