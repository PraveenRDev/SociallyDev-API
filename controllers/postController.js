/*
    @desc  Create a post
    @route POST /api/posts 
    @access private
*/

import Post from '../models/Post'
import { RESPONSE_MESSAGE, RESPONSE_STATUS } from '../utils/constants'
import { sendErrorResponse, sendException, sendSuccessResponse } from './mainController'

const createPost = async (req, res) => {
	try {
		const { description, imageName, isAnonymous } = req.body

		const createdPost = await new Post({
			description,
			imageName,
			isAnonymous,
		}).save()

		if (createdPost) {
			sendSuccessResponse(res, createdPost, RESPONSE_MESSAGE.POST_CREATED_SUCCESSFULLY)
		} else {
			sendErrorResponse(res, RESPONSE_STATUS.BAD_REQUEST, RESPONSE_MESSAGE.POST_CREATED_SUCCESSFULLY)
		}
	} catch (ex) {
		sendException(res, ex, RESPONSE_MESSAGE.POST_CREATED_UNSUCCESSFULLY)
	}
}
