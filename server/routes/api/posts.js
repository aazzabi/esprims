const express = require('express')
const router = express.Router()
const {
    check,
    validationResult
} = require("express-validator/check");
const auth = require('../../middleware/auth')

const Post = require("../../models/Post")
const Profile = require("../../models/Profile")
const User = require("../../models/User")
    // @route POST api/posts 
    // @desc Create a post 
    // @access Private 

router.post('/', [auth, [check('text', 'text is required').not().isEmpty()]], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        const post = await newPost.save()
        res.json(post)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error');
    }

})

// @route Get api/posts 
// @desc get all posts 
// @access Private 

router.get('/', auth, async(req, res) => {

    try {
        const posts = await Post.find().sort({
            date: -1
        })
        res.json(posts);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error');
    }

})

// @route Get api/posts/:id 
// @desc get a post by id
// @access Private 

router.get('/:id', auth, async(req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (post)
            res.json(post)
        else {
            res.status(404).json({
                msg: 'Post not found '
            })
        }
    } catch (err) {
        if (err.kind == 'ObjectId') {
            res.status(404).json({
                msg: 'Post not found '
            })
        }
        console.error(err.message)
        res.status(500).send('server error');
    }

})

// @route Delete api/posts/:id 
// @desc Delete a post
// @access Private 
router.delete('/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({
                msg: 'Post not found '
            })
        }
        //Check User
        if (post.user.toString() !== req.user.id) {
            return res.status(401).send('User not unauthorized ')

        }
        await post.remove();
        res.json({
            msg: 'Post removed'
        });

    } catch (err) {
        if (err.kind == 'ObjectId') {
            res.status(404).json({
                msg: 'Post not found '
            })
        }
        console.error(err.message)
        res.status(500).send('server error');
    }
})




// @route Put api/posts/like/:id 
// @desc like a post
// @access Private 
router.put('/like/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (post.likes.filter(
                like => like.user.toString() === req.user.id)
            .length > 0) {
            return res.status(400).json({
                msg: 'Post already liked'
            });
        }


        post.likes.unshift({
            user: req.user.id
        })

        await post.save()
        res.json(post.likes);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error');
    }
})




// @route Put api/posts/unlike/:id 
// @desc unlike a post
// @access Private 
router.put('/unlike/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            //check if post has already been liked
        if (post.likes.filter(
                like => like.user.toString() === req.user.id)
            .length === 0) {
            return res.status(400).json({
                msg: 'Post has not been liked yet'
            });
        }
        //get remove index
        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);
        post.likes.splice(removeIndex, 1)



        await post.save()
        res.json(post.likes);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error');
    }
})

// @route post api/posts/Comment 
// @desc Comment on a post 
// @access Private 
router.post('/comment/:id', [auth, [check('text', 'text is required').not().isEmpty()]], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id)

        const newComment = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        post.comments.unshift(newComment)
        post.save()
        res.json(post)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error');
    }

})

// @route Delete api/posts/Comment/:id/:comment_id
// @desc Delete Comment 
// @access Private 
router.delete('/comment/:id/:comment_id', auth, async(req, res) => {
    const post = await Post.findById(req.params.id);

    //Pull Out Commment 
    const comment = await post.comments.find(comment => comment.id === req.params.comment_id)

    //Make Sure Comment Exists
    if (!comment)
        return res.status(404).send({
            msg: "Comment does not exist"
        });

    //Check user 
    if (comment.user.toString() != req.user.id) {
        return res.status(401).send({
            msg: "User not authorized "
        });

    }

    //Get remove index 
    const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id)

    post.comments.splice(removeIndex, 1)
    await post.save()
    res.json(post.comments)
})
module.exports = router