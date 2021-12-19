const router = require("express").Router();
const Post = require("../models/post");

router.post("/", async (req, res) => {
  if (req.body.password !== process.env.EDIT_PASS)
    return res.status(401).json({ msg: "Not authorized" });
  const post = new Post({
    data: req.body.data,
  });
  try {
    const savedPost = await post.save();
    console.log("New post");
    res.status(200).json({ msg: savedPost });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
