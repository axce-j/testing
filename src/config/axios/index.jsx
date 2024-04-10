import  Axios  from "axios";
import { BASE_API_URL } from "../../export";

const axios =Axios.create({
    baseURL: `${BASE_API_URL}`
})

export const getTopAnime = ()=> {
    return axios.get("top/anime")
}
export const getRecentAnimeRecommendations=()=>{
    return axios.get("recommendations/anime")
}
export const getAnimeTopReviews=()=>{
    return axios.get("top/reviews")
}
export const getAnime=()=>{
    return axios.get("anime")
}
export const getAnimeNews=(id)=>{
    return axios.get(`anime/${id}/news`)
}
export const getAnimeId=(id)=>{
    return axios.get(`anime/${id}`)
}
export default axios;