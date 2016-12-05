import React from 'react'
import { Link } from 'react-router'

export default class AuthorList extends React.Component {
	render () {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.authors.map(this.createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		)
	}
	createAuthorRow = (author) => {
		return (
			<tr key={author.id}>
				<td><Link to={`authors/${author.id}`}>{author.id}</Link></td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		)
	}
}

AuthorList.defaultProps = {
	authors: []
}

AuthorList.propTypes = {
	authors: React.PropTypes.array.isRequired
}