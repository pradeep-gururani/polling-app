import React, { Component } from 'react';
import Auth from './containers/auth';
import './App.css';

class App extends Component {
  render() {
    console.log('props-->-->', this.props);
    return (
      <div className="App"> 
        <Auth />
      </div>
    );
  }
}

export default App;
