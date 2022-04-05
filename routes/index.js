const router = require("express").Router();
const authRoutes = require("./auth");
const authenticate = require("../middleware/authenticate");

router.use("/api/v1/auth", authRoutes);

module.exports = router;
