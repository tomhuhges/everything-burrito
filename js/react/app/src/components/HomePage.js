import React from 'react'
import { Link } from 'react-router'

export  default class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		)
	}
}