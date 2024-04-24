import  Axios  from "axios";
import { BASE_API_URL } from "../../export";

const axios =Axios.create({
    baseURL: `${BASE_API_URL}`
})

export const getTopAnime = ()=> {
    return axios.get("top/anime")
}
export const getSeasonAnimeRecommendations=()=>{
    
    return axios.get(`seasons/now`)
}

 
export const getAnimeTopReviews=(reviewsId)=>{
    
    return axios.get(`top/reviews?page=${reviewsId}`)
       
    
}
export const    getAnime=(pageId)=>{
    return axios.get(`anime?page=${pageId}`)
}
export const getAnimeNews=(id)=>{
    return axios.get(`anime/${id}/news`)
}
export const getAnimeId=(id)=>{
    return axios.get(`anime/${id}`)
}
export const getAnimeGenres=()=>{
    return axios.get(`genres/anime`)
}
 
export default axios;