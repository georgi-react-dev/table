const express = require("express");
const router = express.Router();
const { getNames } = require("../controllers/namesController");

router.get("/", getNames);

module.exports = router;
