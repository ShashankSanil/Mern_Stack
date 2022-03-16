import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user')
const User = mongoose.model("user", userSchema);

export default User;