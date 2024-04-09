import {useQuery} from "@tanstack/react-query"
import { getAnimeNews } from "../config/axios"

const AnimeNews=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getAnimeNews(2),
        
        }
    )
}
export default AnimeNews;