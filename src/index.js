import React from 'react';
import ReactDOM from 'react-dom';

// Create new, HTML producing component
const App = () => {
  return <div>Hello! :3</div>;
};

// Take this components generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));