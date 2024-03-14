const VectorRepository = require("../repositories/VectorRepository");

class VectorController {
    static extractContentFromUrl = async (req, res, next) => {
        try {
            const url = req.body.url;
            if (!url) {
                return res.status(400).send({ error: "URL is required" })
            }
            const data = await VectorRepository.getPageTextAndEmbedding(url)
            res.status(200).send(data)
        } catch (err) {
            next(err)
        }
    }

    static searchForWebPage = async (req, res, next) => {
        try {
            let search = req.query?.query || "";
            search = search.trim() 
            if (!search) {
                return res.status(400).send({ error: "Search query is required" })
            }
            const data = await VectorRepository.getRelevantUrls(search)
            res.status(200).send(data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = VectorController;