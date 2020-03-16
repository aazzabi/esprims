const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.post("/add", async (req, res) => {
  try {
    const comment = await new Comment({
      text: req.body.text,
      topic: req.body.topic,
      user: req.body.user
    }).save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route GET api/profile
// @desc get all profiles
// @access Public
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

// @route Delete api/posts/:id
// @desc Delete a post
// @access Private

// @access Private
router.delete("/delete/:id", async (req, res) => {
  try {
      console.log("deleting .....")
    const comment = await Comment.findById(req.params.id);
    if (comment) {
      console.log("deleting ..... 1" , comment )
      await Comment.remove({_id:req.params.id} );
      return res.json({
        msg: " Comment Deleted "
      });
    } else {
      return res.status(404).json({
        msg: "Comment not found "
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
