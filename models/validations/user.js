import { check } from 'express-validator'
import User from '../User.js'
import validate from './validate.js'

const checkUniqueUserEmail = async (email) => {
	const user = await User.find({ email })
	if (!user) {
		throw new Error('Email already exists')
	}
	return true
}

const checkUniqueUserUserId = async (userId) => {
	const user = await User.find({ userId })
	if (!user) {
		throw new Error('UserId already exists')
	}
	return true
}

export const userValidator = [
	check('firstName')
		.notEmpty()
		.withMessage('First Name cannot be empty')
		.bail()
		.isAlpha()
		.withMessage('First Name can only be alphabets')
		.bail(),
	check('lastName')
		.notEmpty()
		.withMessage('Last Name cannot be empty')
		.bail()
		.isAlpha()
		.withMessage('Last Name can only be alphabets')
		.bail(),
	check('email')
		.notEmpty()
		.withMessage('Email cannot be empty')
		.bail()
		.isEmail()
		.withMessage('Invalid Email address')
		.bail()
		.custom((email) => checkUniqueUserEmail(email))
		.bail(),
	check('password')
		.notEmpty()
		.withMessage('Password cannot be empty')
		.bail()
		.isLength({ min: 6, max: 15 })
		.withMessage('Password should be 6-15 characters')
		.bail()
		.isAlphanumeric()
		.withMessage('Password should contain both letters and numbers')
		.bail(),
	check('userId')
		.notEmpty()
		.withMessage('UserId cannot be empty')
		.bail()
		.custom((userId) => checkUniqueUserUserId(userId)),
	validate,
]
