const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  filename: String,
  likes: Number,
  age: Number,
  gender: String,
  height: Number,
  searchTag: String,
  tag_1: String,
  tag_2: String,
  tag_3: String,
  liked: [String],
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
