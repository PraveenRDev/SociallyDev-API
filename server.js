import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import loadRoutes from './routes/index.js'
import connectDB from './config/database.js'

const app = new express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())

loadRoutes(app)

app.listen(PORT, () => {
	console.log(`Servering from port ${PORT}`)
	connectDB()
})
