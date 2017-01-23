import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends React.Component {

	constructor(props) {
		super(props)
		this.state = { comment: '' }

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()

		this.props.saveComment(this.state.comment)
		this.setState({comment: ''})
	}

	handleChange(e) {
		this.setState({comment: e.target.value})
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="comment-box">
				<h3>add a comment!</h3>
				<textarea
					value={this.state.comment}
					onChange={this.handleChange} />
				<div>
					<button action="submit">Submit comment</button>
				</div>
			</form>
		)
	}
}

export default connect(null, actions)(CommentBox)