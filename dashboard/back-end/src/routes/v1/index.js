const express = require("express");

const userRoutes = require("./user.route");

const router = express.Router();

/**
 *  api/users
 */
router.use("/users", userRoutes);

module.exports = router;
