import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {

	let component
	beforeEach(() => {
		const props = { comments: ['hello', 'this is a great comment'] }
		component = renderComponent(CommentList, null, props)
	})

	it('has comment-list class', () => {
		expect(component).to.have.class('comment-list')
	})
	it('has a ul', () => {
		expect(component.find('ul')).to.exist
	})

	it('shows an li for each comment', () => {
		expect(component.find('li').length).to.equal(2)
	})
	it('shows each comment that is provided', () => {
		expect(component).to.contain('hello')
		expect(component).to.contain('this is a great comment')
	})

})

