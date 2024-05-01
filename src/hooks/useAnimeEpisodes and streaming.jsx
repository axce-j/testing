import {useQuery} from "@tanstack/react-query"
import { getAnimeEpisodes, getAnimeStreamingLink } from "../config/axios"

 const AnimeEpisodes=(episodeId, pageId)=>{
    return useQuery(
        {
            queryKey:['getAnimeEpisodes'],
            queryFn:()=>getAnimeEpisodes(episodeId,pageId),
        }
    )
}

export const AnimeStreamingLink=(animeId)=>{
    return useQuery(
        {
            queryKey:[getAnimeStreamingLink],
            queryFn:()=>getAnimeStreamingLink(animeId)
        }
    )
}
export default AnimeEpisodes;