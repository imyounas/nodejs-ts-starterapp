import * as mongoose from "mongoose";

export interface User {
  _id: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const UserMongModel = mongoose.model<User & mongoose.Document>("Users", userSchema);

export default UserMongModel;
