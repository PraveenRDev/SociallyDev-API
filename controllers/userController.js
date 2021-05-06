import User from '../models/User.js'
import {
	RESPONSE_MESSAGE,
	RESPONSE_STATUS,
	STATUS,
} from '../utils/constants.js'
import {
	sendSuccessResponse,
	sendErrorResponse,
	sendException,
} from './mainController.js'

/*
 @desc  Register a user
 @route POST /api/users 
 @access public
*/

export const registerUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, userId } = req.body

		const existing = await User.aggregate([
			{ $match: { $or: [{ email }, { password }] } },
			{ $count: 'noOfUsers' },
		])

		console.log(existing)

		if (existing && existing.length > 0 && existing[0].noOfUsers !== 0) {
			sendErrorResponse(res, RESPONSE_STATUS.BAD_REQUEST)
			return
		}

		const createdUser = await new User({
			firstName,
			lastName,
			email,
			password,
			userId,
		}).save()

		console.log(createdUser)

		if (createdUser) {
			const data = { firstName, lastName, email, userId }
			sendSuccessResponse(res, data, RESPONSE_MESSAGE.USER_CREATED_SUCCESSFULLY)
		} else {
			sendErrorResponse(res, RESPONSE_STATUS.NOT_FOUND)
		}
	} catch (ex) {
		sendException(res, ex)
	}
}
