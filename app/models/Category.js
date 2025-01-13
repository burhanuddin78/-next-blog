import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
	{
		title: { type: String, min: 3, max: 20, required: true, lowercase: true, trim: true, unique: true },
		image: { type: String },
		isActive: { type: Boolean, default: true },
		color: { type: String, required: true },
	},
	{ timestamps: true },
);

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
