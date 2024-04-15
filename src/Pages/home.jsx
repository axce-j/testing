import { useEffect, useState } from "react";
import TopAnime from "../hooks/useTopAnime.jsx"
// import HomeInput from "../Components/homeInput";
import MiddleSection from "../modules/homePage  Modules/middleSection.jsx"
import FooterSection from "../modules/homePage  Modules/footerSection.jsx"
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx"
 

// import  Axios  from "axios";
const Home = () => {


 
  
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
    setSearchClick(!searchClick);
    setclick(false)
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
  return (
    <>
      <div 
      // onClick={changeAllStates}
        id="topDiv"
        className="grid grid-rows-auto gap-32 h-screen  text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] w-full z-50">

          <NavBarSection viewPortWidth2={viewPortWidth2} viewPortWidth={viewPortWidth} clicked={clicked} dropDownItems={dropDownItems} handleclick={handleclick}  setSearchBar2={setSearchBar2} searchClick2={searchClick2} setSearchBar={setSearchBar} searchClick={searchClick} />
        
        </nav>

        <div className="w-full mt-10 z-30">
          {" "}
          <MiddleSection tabsData={tabsData} tabState={tabState} contentData={contentData} handleContentData={handleContentData} contentState={contentState} handleTabData={handleTabData} viewPortWidth={viewPortWidth} subtitle={subtitle} rating={rating} animeBlocks={animeBlocks} method={method} Days={Days} viewPortWidth2={viewPortWidth2} handleDisplaysection={handleDisplaysection} displaySection={displaySection} setDisplaySection={setDisplaySection}   />
         
        
        </div>

        <div  className="w-full">
          <FooterSection />
        </div>
     
      </div>
    </>
  );
};

export default Home;
























 