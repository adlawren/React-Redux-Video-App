import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyDaOaFNHB6VQr-SYrfqpS9-CNpFqOuMmy4';

// Create new, HTML producing component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this components generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
