import {useQuery} from "@tanstack/react-query"
import { getSeasonAnimeRecommendations } from "../config/axios"

const SeasonAnimeRecommendations=( )=>{
    return useQuery(
        {
            queryKey:['SeasonAnimeRecommendations'],
            queryFn:()=>getSeasonAnimeRecommendations( ),
        }
    )
}
export default SeasonAnimeRecommendations;