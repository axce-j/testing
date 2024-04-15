import {useQuery} from "@tanstack/react-query"
import { getTopAnime } from "../config/axios"

const TopAnimeData=()=>{
    return useQuery(
        {
            queryKey:['TopAnimeData'],
            queryFn:()=>getTopAnime(),
        }
    )
}
export default TopAnimeData;