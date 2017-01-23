import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../redux/actions/courseActions'

class CoursePage extends React.Component {
	constructor( props, context ) {
		super(props, context)
		this.state = {
			course: { title: "" }
		}
		this.onTitleChange = this.onTitleChange.bind(this)
		this.onClickSave = this.onClickSave.bind(this)
	}
	onTitleChange(e) {
		const course = this.state.course
		course.title = e.target.value
		this.setState({course: course})
	}
	onClickSave() {
		this.props.actions.createCourse(this.state.course)
	}
	courseRow(course, index) {
		return (
			<div key={index}>{course.title}</div>
		)
	}
	render() {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}
				/>
				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave}
				/>
			</div>
		)
	}
}

CoursePage.propTypes = {
	courses: React.PropTypes.array.isRequired,
	actions: React.PropTypes.object.isRequired
}

const mapStateToProps = ( state, ownProps) => ({ courses: state.courses })
const mapDispatchToProps = ( dispatch ) => ({ actions: bindActionCreators(courseActions, dispatch) })

export default connect( mapStateToProps, mapDispatchToProps )(CoursePage)