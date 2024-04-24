import {useQuery} from "@tanstack/react-query"
import { getAnimeTopReviews } from "../config/axios"

const TopAnimeReviewsData=(reviewsId )=>{
    return useQuery(
        {
            queryKey:['TopAnimeReviewsData'],
            queryFn:()=>getAnimeTopReviews(reviewsId ),
        }
    )
}
export default TopAnimeReviewsData;