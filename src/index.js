import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyDaOaFNHB6VQr-SYrfqpS9-CNpFqOuMmy4';

// Create new, HTML producing component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: YOUTUBE_API_KEY, term: 'test'}, videos => {
      this.setState({ videos });
    });
  }

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
