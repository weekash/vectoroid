const WebPage = require('../models/WebPage')
class WebPageService {

    static createWebPageRecord = async(record)=>{
        return await WebPage.create(record)
    }

    static getRecordByUrl = async(url)=>{
        return await WebPage.findOne({url})
    }
    
    static searchRecordsByEmbeddings = async(embeddings)=>{
        return await WebPage.aggregate([
            {
                "$vectorSearch": {
                    "index": "vector_index",
                    "path": "embeddings",
                    "queryVector": embeddings,
                    "numCandidates": 60,
                    "limit": 3,
                  }
            },
            {
                "$project":{
                    "embeddings":0,
                    "score": { "$meta": "vectorSearchScore" }
                }
              }
        ])
    }
}

module.exports = WebPageService