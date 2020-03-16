const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId
    },
    name: String,
    avatar: String
  },
  topic: {
    type: Number,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Comment = mongoose.model("comment", CommentSchema);
