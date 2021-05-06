// import validate from '../models/validations/validate.js'
import userRoute from './userRoute.js'

export default function (app) {
	app.get('/', (req, res) => res.send('Socially Dev API'))
	app.use('/api/v1/user', userRoute)
}
