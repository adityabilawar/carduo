import mongoose from 'mongoose';
import { User } from '../types';

// scheme for user data (similar to ../types.ts)
const UserSchema = new mongoose.Schema<User>({
	name: String,
	password: String
});

// create model if doesnt already exist in cache
export default (mongoose.models.user as mongoose.Model<User> || mongoose.model('user', UserSchema));