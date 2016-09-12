import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyDaOaFNHB6VQr-SYrfqpS9-CNpFqOuMmy4';

YTSearch({ key: YOUTUBE_API_KEY, term: 'test'}, function(data) {
  console.log(data);
});

// Create new, HTML producing component
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

// Take this components generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
