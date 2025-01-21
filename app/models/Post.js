import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		slug: { type: String, trim: true, unique: true, lowerCase: true, required: true },
		title: { type: String, min: 3, max: 100, required: true, trim: true, unique: true },
		description: { type: String, min: 1, required: true, trim: true },
		coverImage: { type: String },
		isActive: { type: Boolean, default: false },
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		publishedAt: { type: Date },
	},
	{ timestamps: true },
);

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
