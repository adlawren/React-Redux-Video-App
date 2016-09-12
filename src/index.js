import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyDaOaFNHB6VQr-SYrfqpS9-CNpFqOuMmy4';

// Create new, HTML producing component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: YOUTUBE_API_KEY, term: 'test' }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
};

// Take this components generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
