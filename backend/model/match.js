const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatchSchema = new Schema({
  userID: String,
  likedUserID: String,
});

const Match = mongoose.model('match', MatchSchema);
module.exports = Match;
