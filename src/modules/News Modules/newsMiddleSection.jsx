import HomeInput from "../../Components/homeInput"
import AnimeNews from "../../hooks/UseAnimeNews"
const NewsMiddleSection=()=>{
    const {isError,isLoading,data,error}=AnimeNews(2);
   const ani=data;
   console.log(ani);
    return(
        
        <>
        <div className="text-white mt-20">
            <div className="flex justify-center w-full"><HomeInput width="480px" height="25px" placeholder="search anime news..."/></div>
            <div>

            </div>
            </div>
        </>
    )
}
export default NewsMiddleSection