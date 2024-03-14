const WebPageService = require("../services/WebPageService")
const CustomError = require("../utils/CustomError")
const { getEmbeddings } = require("../utils/Gemini")
const scrapWebPage = require("../utils/Scrapper")

class VectorRepository {

    static getPageTextAndEmbedding = async(url)=>{
        //check if url is already processed
        let record = await WebPageService.getRecordByUrl(url)
        if(record){
            throw new CustomError("URL already processed",400)
        }
        const text = await scrapWebPage(url)
        const embeddings = await getEmbeddings(text)
        await WebPageService.createWebPageRecord({
            url,
            content: text,
            embeddings
        })
        return {text, embeddings}
    }

    static getRelevantUrls = async(search)=>{
        const embeddings = await getEmbeddings(search)
        return await WebPageService.searchRecordsByEmbeddings(embeddings)
    }

}

module.exports = VectorRepository

