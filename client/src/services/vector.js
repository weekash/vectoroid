import request from "../utils/axios"
const VECTOR_API_URL = '/vector'

// api call to vectorize a url
export async function sendUrlForVectorization(url){
    return await request.post(`${VECTOR_API_URL}/extract`,{url})
}

// api call to search for relevant content
export async function searchForContent(query){
    return await request.get(`${VECTOR_API_URL}/search`,{
        params:{query}
    })
}
