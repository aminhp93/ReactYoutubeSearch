import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyAjP07KG9IoX47GBwpLRy3qff6QqVe0HKc';

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: []};

		YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
			// this.setState({videos: videos});
			this.setState({videos});
		});
	};

	render() {
		return (
			<div>
				<SearchBar/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}
