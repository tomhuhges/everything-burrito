import React from 'react'
import { Link } from 'react-router'
import '../../index.css'
import 'bootstrap-css'

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src="" alt=""/>
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/👍🏻">Authors</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}