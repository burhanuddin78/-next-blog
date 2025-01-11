import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			default: 'Anonymous',
			min: 2,
			max: 100,
			// required: [true, "Name must be provided"],
		},
		email: {
			type: String,
			required: [true, 'Please provide your email'],
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			min: 5,
			// required: [true, "Password must be provided"],
		},

		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},

		active: {
			type: Boolean,
			default: false,
		},
		softDelete: {
			type: Boolean,
			default: false,
		},
		lastLoginAt: {
			type: String,
			default: Date.now(),
		},

		issuedAt: {
			type: Number,
			default: 101010,
		},
		occupation: String,
		deletedAt: String,
		image: String,
		bio: String,
		lastLoginIp: String,
		city: String,
		state: String,
		country: String,

		phoneNumber: String,

		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
	},
	{ timestamps: true },
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);
// const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
