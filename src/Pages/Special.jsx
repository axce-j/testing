import { useEffect, useState } from "react";
// import TopAnime from "../hooks/useTopAnime.jsx"
// import HomeInput from "../Components/homeInput";
// import MiddleSection from "../modules/homePage  Modules/middleSection.jsx"
import FooterSection from "../modules/homePage  Modules/footerSection.jsx"
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx"
import AnimeOnSearchData, { AnimeOnSearchRelatedData } from "../hooks/useAnimeSearch.jsx";
 
import MiddleSectionWatchAnime from "../modules/View Anime Modules/middleSectionWatchAnime.jsx"
import TopAnimeReviewsData from "../hooks/useTopAnimeReviews.jsx";
import AnimeEpisodes, { AnimeStreamingLink } from "../hooks/useAnimeEpisodes and streaming.jsx";
import { AnimeDataId } from "../hooks/useAnime.jsx";
import { useNavigate, useParams } from "react-router-dom";
// import AnimeEpisodes from "../hooks/useAnimeEpisodes.jsx";

// import  Axios  from "axios";
const Special = () => {

  const params= useParams()
  const {animeId}= useParams()
  const mainAnimeId=animeId
const navigate=useNavigate()
 console.log(animeId,"wwwwhjgjgjh");
  
//  console.log(data);

//  const help = () => { 
//   Axios.get("https://api.jikan.moe/v4/top/anime")
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message));
// };

// help();
const tabsData = [
  "Day",
  "Week",
  "Month",    ];
  const contentData = [
    "New Release",
    "Newly Added",
    "Just Completed",    ];

  // const topDiv=document.getElementById("topDiv")
  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);
  
  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection ,setDisplaySection]= useState(1)
  const [tabState,setTabState]=useState(tabsData[0])
  const [contentState,setContentState]=useState(contentData[0])
  const [searchOption,setSearchOption]= useState("")
  const [currentEpisode,setCurrentEpisode]=useState("")
  const [animeOption,setAnimeOption]=useState("")
  const [clickedAnimeID,setClickedAnimeID]=useState(mainAnimeId)



  const handleCurrentEpisode=(episodeValue)=>{
    setCurrentEpisode(episodeValue)
  }
  
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)
  const handleTabData=(i)=>{
      setTabState(tabsData[i])
  }
  const handleContentData=(i)=>{
    setContentState(contentData[i])
}

  useEffect(() => {
    function handleResize() {
      setViewPortWidth(window.innerWidth < 1203);
    }
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const [viewPortWidth2, setViewPortWidth2] = useState(false);
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)
  useEffect(() => {
    function handleResize2() {
      setViewPortWidth2(window.innerWidth < 760);
    }
    handleResize2(); // Check initial width
    window.addEventListener("resize", handleResize2); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize2); // Clean up event listener
    };
  }, []);
  const Days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const animeBlocks = [
    "GENRE",
    "NEWEST",
    "TYPES",
    "UPDATE",
    "ONGOING",
    "RANDOM",
    "ADDED",
    "BROWSE",
    "NEWS",
    "DONATE",
  ];
  const method = "TV";
  const rating = "13";
  const subtitle = "cc";
  const dropDownItems = !viewPortWidth2
    ? [
        "HOME",
        "GENRE",
        "NEWEST",
        "TYPES",
        "UPDATE",
        "ONGOING",
        "SPECIAL",
        "ADDED",
        "REQUEST",
      ]
      : [
        "HOME",
        "GENRE",
        "NEWEST",
        "ONGOING",
        "NEWS",
        "ADDED",
        "REQUEST",
        "BROWSE",
        "DONATE",
        "RANDOM",
        "READ MANGA",
      ];
     
  const handleclick = () => {
    // setclick(!clicked);
    if (clicked === false) {
      setclick(true);
    } else if (clicked === true) {
      setclick(false);
    }
    setSearchClick2(false);
    setSearchClick(false)
  };
  

  const setSearchBar = () => {
    // setSearchClick(!searchClick);
    // setclick(false)
  };
  const setSearchBar2 = () => {
    setclick(false);
    if (searchClick2 === false) {
      setSearchClick2(true);
    } else if (searchClick2 === true) {
      setSearchClick2(false);
    }
  };
  const setLanguage = () => {
    // console.log("iiii");
    if (languageEnglish === false) {
      setToNotEnglish(true);
    } else if (languageEnglish === true) {
      setToNotEnglish(false);
    }
  };
  const handleDisplaysection=(e)=>{
        setDisplaySection(e)
  }
  // const changeAllStates=()=>{
    
  //   setSearchClick(false)
  //   setSearchClick2(false)
  //   setclick(false)
    
  // }
  const {isError:reviewsIsError,isLoading:reviewsIsLoading,data:reviewsData,error:reviewsError}=TopAnimeReviewsData(4);

   const {isError:animeEpisodesIsError,isLoading:animeEpisodesIsLoading,data:animeEpisodesData,error:animeEpisodesError}=AnimeEpisodes(clickedAnimeID,1);

   const {isError:animeOnSearchRelatedIsError,isLoading:animeOnSearchRelatedIsLoading,data:animeOnSearchRelatedData,error:animeOnSearchRelatedError,refetch:refetchanimeOnSearchRelated}=AnimeOnSearchRelatedData(animeOption);
   useEffect(() => {
    refetchanimeOnSearchRelated()
  
  
  }, [animeOption]);
  

const {isError:animeStreamingLinkIsError,isLoading:animeStreamingLinkIsLoading,data:animeStreamingLinkData,error:animeStreamingLinkError}=AnimeStreamingLink(clickedAnimeID)
const {isError:animeDataIdIsError,isLoading:animeDataIdIsLoading,data:animeDataIdData,error:animeDataIdError,refetch:refetchCliquedAnime}=AnimeDataId(clickedAnimeID);
// console.log(animeDataIdData);
  const { isError:animeSearchIsError, isLoading:animeSearchIsLoading, data:animeSearchData, error:animeSearchError,refetch:refetchingSearch } = AnimeOnSearchData(searchOption);
  useEffect(() => {
    refetchingSearch()
  
  
  }, [searchOption]);
  useEffect(() => {
    setClickedAnimeID(mainAnimeId);
    refetchCliquedAnime();
    
  
  
  }, [mainAnimeId])
  
  // console.log(animeOption,"www")
  return (
    <>
      <div 
      // onClick={changeAllStates}
        id="topDiv"
        className="grid grid-rows-auto gap-32 h-screen  text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] w-full z-50">

          <NavBarSection viewPortWidth2={viewPortWidth2} viewPortWidth={viewPortWidth} clicked={clicked} dropDownItems={dropDownItems} handleclick={handleclick}  setSearchBar2={setSearchBar2} searchClick2={searchClick2} setSearchBar={setSearchBar} searchClick={searchClick} 
          searchOption={searchOption} setSearchOption={setSearchOption}  animeSearchData={animeSearchData && animeSearchData}/>
        
        </nav>

        <div className="w-full mt-24 z-30">
          {" "}
          
          <MiddleSectionWatchAnime viewPortWidth={viewPortWidth} tabState={tabState} tabsData={tabsData} handleTabData={handleTabData} reviewsData={reviewsData} animeEpisodesData={animeEpisodesData} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode} handleCurrentEpisode={handleCurrentEpisode} animeStreamingLinkData={animeStreamingLinkData} animeDataIdData={animeDataIdData} setAnimeOption={setAnimeOption} animeOnSearchRelatedData={animeOnSearchRelatedData} navigate={navigate}/>
        
        </div>

        <div  className="w-full">
          <FooterSection />
        </div>
     
      </div>
    </>
  );
};

export default Special;
























 