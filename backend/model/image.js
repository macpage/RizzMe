const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  image: String,
  username: String,
});

const ImageModel = mongoose.model('images', ImageSchema);
module.exports = ImageModel;
