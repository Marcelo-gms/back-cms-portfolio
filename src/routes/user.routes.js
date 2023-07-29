const router = require("express").Router();

const { register, login } = require("../controllers/UserController");
const imageUpload = require("../middlewares/imageUpload");

router.post("/register", register);
router.post("/login", login);

module.exports = router;