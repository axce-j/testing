import {useQuery} from "@tanstack/react-query"
import { getAnimeGenres } from "../config/axios"

const AnimeGenre=()=>{
    return useQuery(
        {
            queryKey:['anime-genre'],
            queryFn:()=>getAnimeGenres(),
            onSuccess:(data)=>console.log({data})
        }
    )
}
export default AnimeGenre;