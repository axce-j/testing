 
import { useState } from "react";
import SeriesDisplaySection from "../../Components/seriesDisplaySection.jsx"
import SwiperSliding from "../../Components/swiperSLiding.jsx"
import RecentAnimeRecommendations from "../../hooks/useRecentAnimeRecommendations.jsx";
import TopAnimeData from "../../hooks/useTopAnime.jsx";
import TopAnimeReviewsData from "../../hooks/useTopAnimeReviews.jsx";
const MiddleSection= ({rating,subtitle,viewPortWidth,animeBlocks,method,Days,viewPortWidth2,handleDisplaysection,displaySection,setDisplaySection,tabsData,tabState,handleTabData,contentData,contentState,handleContentData})=>

{
  const [paginationNumbers,setPaginationNumbers]=useState({
      currentPage:1,
      totalPages:20
    });
    
    const {isError:topAnimeIsError,isLoading:topAnimeIsLoading,data:topAnimeData,error:TopAnimeError}=TopAnimeData();
    const {isError:recentIsError,isLoading:recentIsLoading,data:recentData,error:recentError,refetch:refetchRecentAnime}=RecentAnimeRecommendations(paginationNumbers.currentPage);
    const {isError:reviewsIsError,isLoading:reviewsIsLoading,data:reviewsData,error:reviewsError}=TopAnimeReviewsData();

     
    
   
    
      const manageNextButtonHome=()=>{
        // if (paginationNumbers.currentPage < paginationNumbers.totalPages){                 
          setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage + 1})
          refetchRecentAnime()
          console.log(paginationNumbers)
      }
    
      const managePreviousButtonHome=()=>{
        if (paginationNumbers.currentPage >1 ){
          setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage - 1}); refetchRecentAnime()}}

   
    return(
        <>
         <header
            className=" w-full flex flex-col justify-center items-center "
          >
           <SwiperSliding viewPortWidth={viewPortWidth} topAnimeData={topAnimeData}/>
          
            
          </header>
          
          {/* middle section of main page  */}
         
              <SeriesDisplaySection
              
              viewPortWidth={viewPortWidth} viewPortWidth2={viewPortWidth2}subtitle={subtitle} rating={rating} animeBlocks={animeBlocks} method={method} Days={Days} handleDisplaysection={handleDisplaysection} displaySection={displaySection} setDisplaySection={setDisplaySection} recentData={recentData} reviewsData={reviewsData} tabState={tabState} tabsData={tabsData}  handleTabData={handleTabData} contentData={contentData} handleContentData={handleContentData} contentState={contentState} manageNextButtonHome={manageNextButtonHome} managePreviousButtonHome={managePreviousButtonHome}/>
           </>
    )
}

export default MiddleSection;