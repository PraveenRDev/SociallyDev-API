import { validationResult } from 'express-validator'
import { sendErrorResponse } from '../../controllers/mainController.js'
import { RESPONSE_STATUS } from '../../utils/constants.js'

export default (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return sendErrorResponse(res, RESPONSE_STATUS.VALIDATION_ERROR, errors.array()[0].msg)
	}
	next()
}
