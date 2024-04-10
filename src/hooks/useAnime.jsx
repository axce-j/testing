import {useQuery} from "@tanstack/react-query"
import { getAnime, getAnimeId} from "../config/axios"

const AnimeData=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getAnime(),
        
        }
    )
};

export const AnimeDataId=(id)=>{
    return useQuery(
        {
            queryKey:['product-dataId'],
            queryFn:()=>getAnimeId(id),
        
        }
    )
}
export default AnimeData;