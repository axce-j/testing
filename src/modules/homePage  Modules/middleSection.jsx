 
import { useState } from "react";
import SeriesDisplaySection from "../../Components/seriesDisplaySection.jsx"
import SwiperSliding from "../../Components/swiperSLiding.jsx"
import SeasonAnimeRecommendations from "../../hooks/useSeasonAnimeRecommendations.jsx";
import TopAnimeData from "../../hooks/useTopAnime.jsx";
import TopAnimeReviewsData from "../../hooks/useTopAnimeReviews.jsx";
const MiddleSection= ({rating,subtitle,viewPortWidth,animeBlocks,method,Days,viewPortWidth2,handleDisplaysection,displaySection,setDisplaySection,tabsData,tabState,handleTabData,contentData,contentState,handleContentData,navigate})=>

{
  const [paginationNumbers,setPaginationNumbers]=useState({
      currentPage:1
,
      totalPages:20
    });

    const {isError:topAnimeIsError,isLoading:topAnimeIsLoading,data:topAnimeData,error:TopAnimeError}=TopAnimeData();
    const {isError:seasonIsError,isLoading:seasonIsLoading,data:seasonData,error:seasonError,}=SeasonAnimeRecommendations();
    const {isError:reviewsIsError,isLoading:reviewsIsLoading,data:reviewsData,error:reviewsError,refetch}=TopAnimeReviewsData(paginationNumbers.currentPage);

    //  console.log(seasonData);
    
   
    
      const manageNextButtonHome=()=>{
        // if (paginationNumbers.currentPage < paginationNumbers.totalPages){                 
          setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage + 1});
          refetch()
          console.log(paginationNumbers)
      }
    
      const managePreviousButtonHome=()=>{
        if (paginationNumbers.currentPage >1 ){
          setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage - 1});
           refetch()}
          }

   
    return(
        <>
         <header
            className=" w-full flex flex-col justify-center items-center "
          >
           <SwiperSliding viewPortWidth={viewPortWidth} topAnimeData={topAnimeData} navigate={navigate}/>
          
            
          </header>
          
          {/* middle section of main page  */}
         
              <SeriesDisplaySection
              
              viewPortWidth={viewPortWidth} viewPortWidth2={viewPortWidth2}subtitle={subtitle} rating={rating} animeBlocks={animeBlocks} method={method} Days={Days} handleDisplaysection={handleDisplaysection} displaySection={displaySection} setDisplaySection={setDisplaySection} seasonData={seasonData} reviewsData={reviewsData} tabState={tabState} tabsData={tabsData}  handleTabData={handleTabData} contentData={contentData} handleContentData={handleContentData} contentState={contentState} manageNextButtonHome={manageNextButtonHome} managePreviousButtonHome={managePreviousButtonHome} topAnimeData={topAnimeData} navigate={navigate} />
           </>
    )
}

export default MiddleSection;