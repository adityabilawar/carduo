import mongoose from "mongoose";

// getting mongodb connection uri from .env
const { MONGODB_URI } = process.env;
if(!MONGODB_URI) throw new Error('MONGODB_URI undefined; Cannot connect to database');

// database connection func
export const connect = async() => {
	// connects using URI
	const conn = await mongoose
		.connect(MONGODB_URI)
		.catch(err => console.log(err));

	return conn;
}