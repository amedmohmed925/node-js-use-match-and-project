const express = require("express");
const { getUsersAbove30, getUserByNameAndAge } = require("../controllers/userController");

const router = express.Router();


router.get("/above-30", getUsersAbove30);

router.get("/find/:name", getUserByNameAndAge);

module.exports = router;
