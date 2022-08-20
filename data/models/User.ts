import mongoose from 'mongoose';

// scheme for user data (similar to ../types.ts)
const UserSchema = new mongoose.Schema({
	name: String,
	password: String
});

// create model if doesnt already exist in cache; make it default export
export const UserModel = mongoose.models.User || mongoose.model('users', UserSchema);