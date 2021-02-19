const express = require("express");

const UserController = require("../../Controllers/UserController");
const { catchErrors } = require("../../helpers");

const router = express.Router();
router.get("/", catchErrors(UserController.getUsers));

module.exports = router;
