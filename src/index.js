import _ from 'lodash';
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

    this.videoSearch('test');
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({ key: YOUTUBE_API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
};

// Take this components generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
