import React from 'react'

export default class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>This application uses: </p>
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Webpack</li>
					</ul>
			</div>
		)
	}
}