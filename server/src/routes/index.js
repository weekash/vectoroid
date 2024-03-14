const express = require("express")
const vectorRouter = require("./vector");

const router = express.Router()

router.use('/vector',vectorRouter)

module.exports = router;