import { RESPONSE_STATUS, STATUS } from '../utils/constants.js'

export const sendSuccessResponse = function (res, data = null, message = '') {
	return res.json({
		data,
		status: true,
		success: RESPONSE_STATUS.SUCCESS,
		message,
	})
}

export const sendErrorResponse = function (res, status, message) {
	console.log(message.stack)
	return res.json({
		data: null,
		status,
		success: STATUS.FAIL,
		message,
	})
}

export const sendException = function (res, data) {
	console.log(data.stack)

	// data.stack has the complete error info which later can be added to log errors.
	return res.json({
		data: null,
		status: RESPONSE_STATUS.BAD_REQUEST,
		success: STATUS.FAIL,
		message: data.toString(),
	})
}
