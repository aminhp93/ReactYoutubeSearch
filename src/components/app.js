import React, { Component } from 'react';

import SearchBar from './search_bar';

const API_KEY = 'AIzaSyAjP07KG9IoX47GBwpLRy3qff6QqVe0HKc';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar/>
      </div>
    );
  }
}
