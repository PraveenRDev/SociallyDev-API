import mongoose from 'mongoose'
import { STATUS_TYPES } from '../utils/constants'

const likeSchema = mongoose.Schema(
	{
		likeType: {
			type: Number,
			default: 1,
		},
		likedUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{ timestamps: true }
)

const commentSchema = mongoose.Schema(
	{
		comment: {
			type: String,
			default: null,
		},
		status: {
			type: Number,
			default: STATUS_TYPES.ACTIVE,
		},
		commentedUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{ timestamps: true }
)

const postSchema = mongoose.Schema(
	{
		description: {
			type: String,
			default: null,
		},
		imageName: {
			type: String,
			default: null,
		},
		status: {
			type: Number,
			default: STATUS_TYPES.ACTIVE,
		},
		creator: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		isAnonymous: {
			type: Boolean,
			default: false,
		},
		likes: [likeSchema],
		comments: [commentSchema],
	},
	{ timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

export default Post
