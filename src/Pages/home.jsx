import { useEffect, useState } from "react";
import TopAnime from "../hooks/useTopAnime.jsx"
// import HomeInput from "../Components/homeInput";
import MiddleSection from "../modules/homePage  Modules/middleSection.jsx"
import FooterSection from "../modules/homePage  Modules/footerSection.jsx"
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx"
// import  Axios  from "axios";
const Home = () => {

 const {isError,isLoading,data,error}=TopAnime();
//  console.log(data);

//  const help = () => { 
//   Axios.get("https://api.jikan.moe/v4/top/anime")
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message));
// };

// help();


  // const topDiv=document.getElementById("topDiv")
  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);
  
  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection ,setDisplaySection]= useState(1)
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
        "TYPES",
        "UPDATE",
        "ONGOING",
        "SPECIAL",
        "ADDED",
        "REQUEST",
        "watch2gether",
        "DONATE",
        "RANDOM",
        "READ MANGA",
      ];
      const animeTitles = [
        "Attack on Titan",
        "Naruto",
        "One Piece",
        "Death Note",
        "Dragon Ball Z",
        "My Hero Academia",
        "Fullmetal Alchemist: Brotherhood",
        "Demon Slayer: Kimetsu no Yaiba",
        "Tokyo Ghoul",
        "Sword Art Online"
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
    console.log("iiii");
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
          <MiddleSection animeTitles={animeTitles} viewPortWidth={viewPortWidth} subtitle={subtitle} rating={rating} animeBlocks={animeBlocks} method={method} Days={Days} viewPortWidth2={viewPortWidth2} handleDisplaysection={handleDisplaysection} displaySection={displaySection} setDisplaySection={setDisplaySection} data={data}/>
         
        
        </div>

        <div  className="w-full">
          <FooterSection />
        </div>
     
      </div>
    </>
  );
};

export default Home;
























 