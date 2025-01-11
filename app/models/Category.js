import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
	{
		name: { type: String, min: 3, max: 20, required: true },
		image: { type: String },
		isActive: { type: Boolean, default: true },
		color: { type: String, required: true },
	},
	{ timestamps: true },
);

const User = mongoose.models.User || mongoose.model('Category', CategorySchema);

export default User;
