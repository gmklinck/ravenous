import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
    );
  }
}

export default App;
