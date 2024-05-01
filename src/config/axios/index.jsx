// import { axios } from "./config"
import  Axios  from "axios";
import { BASE_API_URL } from "../../export";
 const x=3
const axios =Axios.create({
    baseURL: BASE_API_URL
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

export const getAnimeSearch=(searchValue)=>{
    // console.log(searchValue);
    return axios.get(`anime?q=${searchValue}`)
}

export const getAnimeGenres=()=>{
    return axios.get(`genres/anime`)
}

export const getAnimeEpisodes=(episodeId,pageId)=>{
    return axios.get(`anime/${episodeId}/episodes?page=${pageId}`)
}

export const getAnimeStreamingLink=(animeID)=>{
    return axios.get(`anime/${animeID}/streaming`)
}



export default x;