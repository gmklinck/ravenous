import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp';

const business = {

}

class App extends Component {
  constuctor() {
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setState({businessess: this.state.businesses})
    })
  }
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp}/>
  <BusinessList businesses={businesses}/>
</div>
    );
  }
}

export default App;
