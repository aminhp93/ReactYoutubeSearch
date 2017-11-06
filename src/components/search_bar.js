import React, {Component} from 'react';

// const SearchBar = () => {
// 	return <input />
// };

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: 'Starting Value' };
	}

	render(){
		return (
			<div>
				<input value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>
				Value of the input {this.state.term}
			</div>
		)
	}
}

export default SearchBar; 