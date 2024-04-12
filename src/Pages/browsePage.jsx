import { useEffect, useState } from "react";
// import HomeInput from "../Components/homeInput";
import BrowseMiddleSection from "../modules/Browse  Modules/browseMiddleSection.jsx";
import FooterSection from "../modules/homePage  Modules/footerSection.jsx";
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx";
import TopAnimeReviewsData from "../hooks/useTopAnimeReviews.jsx";
import AnimeData from "../hooks/useAnime.jsx";
const WatchSection = () => {
  // const topDiv=document.getElementById("topDiv")
  const tabsData = [
    "Day",
    "Week",
    "Month",    ];

  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);

  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection, setDisplaySection] = useState(1);
  const [tabState,setTabState]=useState(tabsData[0])
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)

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
    "SPECIAL",
    "ADDED",
    "REQUEST",
    "watch2gether",
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
    setSearchClick(false);
  };

  const setSearchBar = () => {
    setSearchClick(!searchClick);
    setclick(false);
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
    console.log("iiii");
    if (languageEnglish === false) {
      setToNotEnglish(true);
    } else if (languageEnglish === true) {
      setToNotEnglish(false);
    }
  };
  const handleDisplaysection = (e) => {
    setDisplaySection(e);
  };


  const {isError:reviewsIsError,isLoading:reviewsIsLoading,data:reviewsData,error:reviewsError}=TopAnimeReviewsData();
  const { isError:animeIsError, isLoading:animeIsLoading, data:animeData, error:animeError } = AnimeData(1);
  const handleTabData=(i)=>{
    setTabState(tabsData[i])
}
 
 // const changeAllStates=()=>{

  //   setSearchClick(false)
  //   setSearchClick2(false)
  //   setclick(false)

  // }
  return (
    <>
      <div
        // onClick={changeAllStates}
        id="topDiv"
        className="grid grid-rows-auto gap-12 h-screen text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] w-full">
          <NavBarSection
            viewPortWidth2={viewPortWidth2}
            viewPortWidth={viewPortWidth}
            clicked={clicked}
            dropDownItems={dropDownItems}
            handleclick={handleclick}
            setSearchBar2={setSearchBar2}
            searchClick2={searchClick2}
            setSearchBar={setSearchBar}
            searchClick={searchClick}
          />
        </nav>

        <div className="w-full mt-10"> 
        <BrowseMiddleSection animeBlocks={animeBlocks}viewPortWidth={viewPortWidth} handleTabData={handleTabData} tabState={tabState} reviewsData={reviewsData} tabsData={tabsData} animeData={animeData}/>
        </div>

        <div className="     bottom-0 left-0 right-0 ">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default WatchSection;
