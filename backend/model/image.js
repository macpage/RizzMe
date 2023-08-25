const mongoose = require('mongoose');
const internal = require('stream');

const ImageSchema = new mongoose.Schema({
  image: String,
  username: String,
  index: Number,
});

const ImageModel = mongoose.model('images', ImageSchema);
module.exports = ImageModel;
