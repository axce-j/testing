import {useQuery} from "@tanstack/react-query"
import { getAnime} from "../config/axios"

const AnimeData=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getAnime(),
        
        }
    )
}
export default AnimeData;