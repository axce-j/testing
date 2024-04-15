import {useQuery} from "@tanstack/react-query"
import { getAnime, getAnimeNews} from "../config/axios"

const AnimeNewsData=(newsId)=>{
    return useQuery(
        {
            queryKey:['AnimeNewsData',newsId],
            queryFn:()=>getAnimeNews(newsId),
        
        }
    )
}
export default AnimeNewsData;