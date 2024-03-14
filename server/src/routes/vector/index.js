const express = require("express")
const VectorController = require("../../controllers/VectorController")

const vectorRouter = express.Router()


vectorRouter.post('/extract', VectorController.extractContentFromUrl)
vectorRouter.get('/search', VectorController.searchForWebPage)

module.exports = vectorRouter