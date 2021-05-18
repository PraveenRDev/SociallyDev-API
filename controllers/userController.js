import { generateToken } from '../config/jwt.js'
import User from '../models/User.js'
import { isValidEmail } from '../utils/common.js'
import { RESPONSE_MESSAGE, RESPONSE_STATUS, STATUS } from '../utils/constants.js'
import { sendSuccessResponse, sendErrorResponse, sendException, sendEmail } from './mainController.js'

/*
 @desc  Register a user
 @route POST /api/users 
 @access public
*/

export const registerUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, userId } = req.body

		const createdUser = await new User({
			firstName,
			lastName,
			email,
			password,
			userId,
		}).save()

		if (createdUser) {
			const { _id, firstName, lastName, userType } = createdUser
			const data = {
				_id,
				firstName,
				lastName,
				userType,
				token: generateToken(_id, userType),
			}
			sendSuccessResponse(res, data, RESPONSE_MESSAGE.USER_CREATED_SUCCESSFULLY)
			//sendEmail
		} else {
			sendErrorResponse(res, RESPONSE_STATUS.NOT_FOUND, RESPONSE_MESSAGE.USER_CREATED_UNSUCCESSFULLY)
		}
	} catch (ex) {
		sendException(res, ex, RESPONSE_MESSAGE.USER_CREATED_UNSUCCESSFULLY)
	}
}

/*
 @desc  Login User
 @route POST /api/login 
 @access public
*/

export const loginUser = async (req, res) => {
	try {
		const { credential, password } = req.body

		let user = null

		if (isValidEmail(credential)) {
			user = await User.findOne({ email: credential })
		} else {
			user = await User.findOne({ userId: credential })
		}

		if (user && (await user.matchPassword(password))) {
			const { _id, firstName, lastName, userType } = user
			const data = {
				_id,
				firstName,
				lastName,
				userType,
				token: generateToken(_id, userType),
			}
			sendSuccessResponse(res, data, RESPONSE_MESSAGE.USER_LOGGED_IN_SUCCESSFULLY)
		} else {
			sendErrorResponse(res, RESPONSE_STATUS.BAD_REQUEST, RESPONSE_MESSAGE.UNCESSFUL_LOGIN)
		}
	} catch (ex) {
		sendException(res, ex, RESPONSE_MESSAGE.EXP_LOG_IN_UNSUCCESSFULLY)
	}
}
