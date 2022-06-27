const express = require("express");
const router = express.Router();
const { getUsers, getUser, saveUser } = require("../controllers/usersController");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/save", saveUser);

module.exports = router;
