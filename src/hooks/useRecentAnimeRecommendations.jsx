import {useQuery} from "@tanstack/react-query"
import { getRecentAnimeRecommendations } from "../config/axios"

const RecentAnimeRecommendations=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getRecentAnimeRecommendations(),
        }
    )
}
export default RecentAnimeRecommendations;