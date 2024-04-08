import {useQuery} from "@tanstack/react-query"
import { getAnimeTopReviews } from "../config/axios"

const TopAnimeReviewsData=()=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getAnimeTopReviews(),
        }
    )
}
export default TopAnimeReviewsData;