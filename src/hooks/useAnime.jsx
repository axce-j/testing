import {useQuery} from "@tanstack/react-query"
import { getAnime, getAnimeId} from "../config/axios"

const AnimeData=(pageId)=>{
    return useQuery(
        {
            queryKey:['AnimeData'],
            queryFn:()=>getAnime(pageId),
        
        }
    )
};

export const AnimeDataId=(id)=>{
    return useQuery(
        {
            queryKey:['AnimeDataId'],
            queryFn:()=>getAnimeId(id),
        
        }
    )
}
export default AnimeData;