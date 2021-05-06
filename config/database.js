import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		console.log(`DB Connected, HOST: ${connection.host}`)
	} catch (error) {
		console.log(`Error while connecting to db..${error.message}`)
	}
}

export default connectDB
