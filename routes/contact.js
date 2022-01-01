const router = require("express").Router();
const { registerValidtaion } = require("../models/Validation");
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = registerValidtaion(req.body);
  if (error) return res.status(400).json({ msg: error });
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    // message: req.body.message,
  });
  try {
    const savedUser = await user.save();
    console.log("Add");
    res.status(200).json({ msg: savedUser.name });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
