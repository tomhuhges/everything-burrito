import React from 'react'
import { Link } from 'react-router'

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Page not found!</h1>
				<p>Whoopsie doodle! Nothing here!</p>
				<p><Link to="/">Back to home</Link></p>
			</div>
		)
	}
}