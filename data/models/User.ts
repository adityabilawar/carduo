import mongoose from 'mongoose';

// scheme for user data (similar to ../types.ts)
const UserSchema = new mongoose.Schema({
	name: String,
	password: String
});

// create model if doesnt already exist in cache
module.exports = mongoose.models.User || mongoose.model('users', UserSchema);