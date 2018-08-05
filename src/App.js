import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './containers/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Qiita API Getting Started</h1>
        </header>
        <ItemList />
      </div>
    );
  }
}

export default App;
