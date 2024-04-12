import { useEffect, useState } from "react";
// import HomeInput from "../Components/homeInput";
import NewsMiddleSection from "../modules/News Modules/newsMiddleSection.jsx";
import FooterSection from "../modules/homePage  Modules/footerSection.jsx";
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx";
const RandomPage = () => {






  // const topDiv=document.getElementById("topDiv")
  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);

  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection, setDisplaySection] = useState(1);
  const [paginationNumbers,setPaginationNumbers]=useState({
    currentPage:1,
    displayedPagebegin:1,
    displayedPageSecondButton:2,
    displayedPageThirdButton:3,
    displayedPageFourthButton:4,
    displayedPageEnd:5,
    totalPages:1065
  });
  const [pagination,setPagination]=useState(paginationNumbers.currentPage);

  const paginationNumbersArray=[paginationNumbers.displayedPagebegin,paginationNumbers.displayedPageSecondButton,paginationNumbers.displayedPageThirdButton,paginationNumbers.displayedPageFourthButton,paginationNumbers.displayedPageEnd];
 
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)

  const manageNextButton=()=>{
    if (paginationNumbers.currentPage < paginationNumbers.totalPages){
      setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage + 1,displayedPagebegin:paginationNumbers.displayedPagebegin+1,displayedPageSecondButton:paginationNumbers.displayedPageSecondButton+1,displayedPageThirdButton:paginationNumbers.displayedPageThirdButton+1,displayedPageFourthButton:paginationNumbers.displayedPageFourthButton+1,displayedPageEnd:paginationNumbers.displayedPageEnd+1})
      console.log(paginationNumbers.currentPage)
    }
  }

  const managePreviousButton=()=>{
    if (paginationNumbers.currentPage >1 ){
      setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage - 1,displayedPagebegin:paginationNumbers.displayedPagebegin-1,displayedPageSecondButton:paginationNumbers.displayedPageSecondButton-1,displayedPageThirdButton:paginationNumbers.displayedPageThirdButton-1,displayedPageFourthButton:paginationNumbers.displayedPageFourthButton-1,displayedPageEnd:paginationNumbers.displayedPageEnd-1,});
      console.log(paginationNumbers.currentPage);
      
    }
  }
  const managePaginationOnClick=(e)=>{
    setPaginationNumbers({...paginationNumbers,currentPage:paginationNumbers.currentPage=e})
  }
  const setToPaginationEnd=()=>{
    setPaginationNumbers({...paginationNumbers,currentPage:paginationNumbers.currentPage=paginationNumbers.totalPages ,displayedPagebegin:paginationNumbers.displayedPagebegin=(paginationNumbers.totalPages-4),displayedPageSecondButton:paginationNumbers.displayedPageSecondButton=(paginationNumbers.totalPages-3),displayedPageThirdButton:paginationNumbers.displayedPageThirdButton=(paginationNumbers.totalPages-2),displayedPageFourthButton:paginationNumbers.displayedPageFourthButton=(paginationNumbers.totalPages-1),displayedPageEnd:paginationNumbers.displayedPageEnd=paginationNumbers.totalPages,});
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
   
  
  return (
    <>
      <div
        
        id="topDiv"
        className="grid grid-rows-auto gap-40 h-screen text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] w-full z-40">
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

        <div className="w-full mt-10 z-10"> 
        <NewsMiddleSection  pagination={pagination} paginationNumbers={paginationNumbers} manageNextButton={manageNextButton} paginationNumbersCurrentPage={paginationNumbers.currentPage} managePreviousButton={managePreviousButton}
         paginationNumbersArray={paginationNumbersArray} setPagination={setPagination} setPaginationNumbers={setPaginationNumbers} managePaginationOnClick={managePaginationOnClick} setToPaginationEnd={setToPaginationEnd}/>
        </div>

        <div className="flex flex-col justify-end items-end">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default RandomPage;
