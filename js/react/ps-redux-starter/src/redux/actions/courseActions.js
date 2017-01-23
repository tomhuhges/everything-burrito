import * as types from './constants'

export function createCourse (course) {
	return { type: types.CREATE_COURSE, course }
} 