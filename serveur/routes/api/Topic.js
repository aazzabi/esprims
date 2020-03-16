const express = require("express");
const router = express.Router();
const Topic = require("../../models/Topic");
const Comment = require("../../models/Comment");

router.post("/add", async (req, res) => {
    Topic.create({
        title: req.body.title,
        description: req.body.description,
        createdAt: new Date(),
        user: req.body.user,
        categorie: req.body.categorie,
    })
        .then((data) => {
            res.set('Content-Type', 'application/json');
            res.status(202).json(data);

        })
        .catch(error => {
            res.set('Content-Type', 'text/html');
            res.status(500).send(error);
        });
});
router.post("/addCommentToTopic/:idTopic/:idUser", async (req, res) => {
    const topic = await Topic.findById(req.params.idTopic);
    const userConnected = await User.findById(req.params.userId);
    Comment.create({
        text: req.body.text,
        user: userConnected,
        commentedAt: new Date(),
        topic: topic,
    }).then(async (data) => {
        const tp = await Topic.update({"_id": req.params.idTopic}, {"$push": {"comments": data}});
        res.set('Content-Type', 'application/json');
        res.status(202).json(topic);
    })
        .catch(error => {
            console.log(error);
            res.set('Content-Type', 'text/html');
            res.status(500).send(error);
        });
});
router.get("/commentsByTopicId/:idTopic", async (req, res) => {
    const topic = await Topic.findById(req.params.idTopic);
    console.log(topic);
    var tab = new Array();
    //var comments = await Comment.find({"_id": topic.comments._id}).exec();
    for (const c of topic.comments) {
        const ca = await Comment.findById(c._id);
        tab.push(ca);
    }

    console.log(tab);
    return res.status(200).send(tab);
});
router.get("/deleteComment/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    console.log(comment.topic);
    const r = await Topic.update({"_id": comment.topic}, {"$pull": {"comments": comment._id}});
    Comment.deleteOne({"_id": comment._id})
        .then(() => {
            res.set('Content-Type', 'text/html');
            res.status(202).send("The comment Was Deleted Successfully !");
        })
        .catch(error => {
            res.set('Content-Type', 'text/html');
            res.status(500).send(error);
        });
});

module.exports = router;
