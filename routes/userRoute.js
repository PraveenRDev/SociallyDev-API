import express from 'express'
import { registerUser } from '../controllers/userController.js'
import { userValidator } from '../models/validations/user.js'
const router = express.Router()

// signup route
router.route('/').post(userValidator, registerUser)

export default router
