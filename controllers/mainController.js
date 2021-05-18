import sgMail from '@sendgrid/mail'
import { RESPONSE_STATUS, STATUS } from '../utils/constants.js'

export const sendSuccessResponse = function (res, data = null, message = '') {
	return res.status(RESPONSE_STATUS.SUCCESS).json({
		data,
		status: RESPONSE_STATUS.SUCCESS,
		success: STATUS.SUCCESS,
		message,
	})
}

export const sendErrorResponse = function (res, status, message) {
	return res.status(RESPONSE_STATUS.SUCCESS).json({
		data: null,
		status,
		success: STATUS.FAIL,
		message,
	})
}

export const sendException = function (res, data) {
	// data.stack has the complete error info which later can be added to log errors.
	return res.status(RESPONSE_STATUS.INTERNAL_ERROR).json({
		data: null,
		status: RESPONSE_STATUS.INTERNAL_ERROR,
		success: STATUS.FAIL,
		message: data.toString(),
	})
}

export const sendEmail = function (email, name) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const msg = {
		to: email,
		from: 'support@sociallydev.com',
		templateId: 'd-d495f97a9f8c4fbdbb3e5bf19ac7ff12',
		dynamic_template_data: {
			user: name,
		},
	}

	sgMail
		.send(msg)
		.then((response) => {
			console.log('hello')
			console.log(response.body)
		})
		.catch((error) => {
			console.log('hello23')
			console.error(error)
		})
}
