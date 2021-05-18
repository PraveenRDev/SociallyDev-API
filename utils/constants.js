export const RESPONSE_STATUS = {
	SUCCESS: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	VALIDATION_ERROR: 400,
	BAD_REQUEST: 401,
	NOT_FOUND: 404,
	INTERNAL_ERROR: 500,
}

export const RESPONSE_MESSAGE = {
	USER_CREATED_SUCCESSFULLY: 'User created successfully',
	USER_CREATED_UNSUCCESSFULLY: 'Error occured while creating a user',
	USER_LOGGED_IN_SUCCESSFULLY: 'User logged-in successfully',
	UNCESSFUL_LOGIN: 'Invalid login credentials',
	EXP_LOG_IN_UNSUCCESSFULLY: 'Error occured while logging-in',

	POST_CREATED_SUCCESSFULLY: 'Post Created successfully',
	POST_CREATED_UNSUCCESSFULLY: 'Error occured while creating the post',
}

export const STATUS = {
	SUCCESS: true,
	FAIL: false,
}

export const USER_TYPES = {
	ADMIN: 0,
	REGULAR: 1,
}

export const STATUS_TYPES = {
	ACTIVE: 1,
	INACTIVE: 2,
	DELETED: 3,
}
