import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state = { term : ''}

		// need to bind the context of this so it is correct context.
		// also seems to work if you just use arrow function for onInputChange()
		// this.OnonInputChange = this.onInputChange.bind(this)
	}

	onInputChange = (e) => {
		console.log(e.target.value)
		this.setState({ term: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		// call action creator here 
		// need to connnect to redux 
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit} className="input-group">
				<input 
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>

		)
	}
}