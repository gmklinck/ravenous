import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: this.state.businesses});
    })
  }
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businesses={this.state.businesses} />
</div>
    );
  }
}

export default App;
