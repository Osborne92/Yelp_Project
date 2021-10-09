import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      businesses: []
    };

    this.yelpSearch = this.yelpSearch.bind(this)
  }

  yelpSearch(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(BusinessesPara => {
      this.setState({
        businesses: BusinessesPara
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Yelper</h1>
          <SearchBar searchYelp={this.yelpSearch} />
          <BusinessList businessArray={this.state.businesses} />
      </div>
    )
  }
}



export default App;