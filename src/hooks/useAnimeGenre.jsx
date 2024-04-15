import {useQuery} from "@tanstack/react-query"
import { getAnimeGenres } from "../config/axios"

const AnimeGenre=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getAnimeGenres(),
        }
    )
}
export default AnimeGenre;