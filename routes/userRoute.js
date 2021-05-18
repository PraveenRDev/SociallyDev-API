import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'
import { userValidator, loginValidator } from '../models/validations/user.js'
const router = express.Router()

// signup route
router.route('/').post(userValidator, registerUser)
router.route('/login').post(loginValidator, loginUser)

export default router
