import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import { Server } from 'socket.io'
import loadRoutes from './routes/index.js'
import connectDB from './config/database.js'

const app = new express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

loadRoutes(app)

const server = http.createServer(app)

// const io = new Server(server)
// io.on('connection', (socket) => {
// 	console.log('a user connected')
// 	socket.on('disconnect', () => {
// 		console.log('user disconnected')
// 	})
// })

server.listen(PORT, () => {
	console.log(`Servering from port ${PORT}`)
	connectDB()
})
