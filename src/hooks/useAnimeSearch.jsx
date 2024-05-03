import {useQuery} from "@tanstack/react-query"
import { getAnimeSearch } from "../config/axios";


const AnimeOnSearchData=(searchValue)=>{
    return useQuery(
        {
            queryKey:['AnimeOnSearchData'],
            queryFn:()=>getAnimeSearch(searchValue),
        
        }
    )
};


export const AnimeOnSearchRelatedData=(AnimeOption)=>{
    return useQuery(
        {
            queryKey:['AnimeOnSearchRelatedData'],
            queryFn:()=>getAnimeSearch(AnimeOption),
        
        }
    )
};


 
export default AnimeOnSearchData;