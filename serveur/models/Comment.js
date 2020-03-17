const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  commentedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: false },
  text: {type: String, require: true},
  date: {type: Date, default: Date.now}
});
module.exports = Comment = mongoose.model("comment", CommentSchema);
