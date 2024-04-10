import { useParams,useNavigate } from "react-router-dom";
import AnimeNewsData from "../hooks/useAnimeNews.jsx";
import HomeInput from "../Components/homeInput.jsx";
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx";
import FooterSection from "../modules/homePage  Modules/footerSection.jsx";
import { useEffect, useState } from "react";
import CustomButton from "../Components/customButton.jsx";
import defaultImage from "/img12.jpg"
import { AnimeDataId } from "../hooks/useAnime.jsx";


const NewsMainPage = () => {
  //  console.log(data);

  //  const help = () => {
  //   Axios.get("https://api.jikan.moe/v4/top/anime")
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error.message));
  // };

  // help();

  const navigate = useNavigate()
  const tabsData = ["Day", "Week", "Month"];
  const contentData = ["New Release", "Newly Added", "Just Completed"];

  // const topDiv=document.getElementById("topDiv")
  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);

  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection, setDisplaySection] = useState(1);
  const [tabState, setTabState] = useState(tabsData[0]);
  const [contentState, setContentState] = useState(contentData[0]);
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)
  const handleTabData = (i) => {
    setTabState(tabsData[i]);
  };
  const handleContentData = (i) => {
    setContentState(contentData[i]);
  };

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
  // const changeAllStates=()=>{

  //   setSearchClick(false)
  //   setSearchClick2(false)
  //   setclick(false)

  // }
  // //////////////////////////////////////////////////////
  const params = useParams();
  const { newsId } = params;
  const { isError, isLoading, data, Error } = AnimeNewsData(newsId);
  const { isError:idIsError, isLoading:idIsLoading, data:idData, Error:idError } = AnimeDataId(newsId);
  
  
  const animeIdData= idData?.data
  const animeTitleId= animeIdData?.data?.title || animeIdData?.data?.title_english
  const newsData = data?.data;
  const firstImage=newsData?.data[0]?.images?.jpg?.image_url;
  const SecondImage=newsData?.data[1]?.images?.jpg?.image_url;
   
  
  const mainImage=  firstImage|| SecondImage ||  defaultImage
  console.log(newsData);
  return (
    <>
      <div
        // onClick={changeAllStates}
        id="topDiv"
        className="grid grid-rows-auto gap-32 h-screen  text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] w-full z-50">
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

        <div className="w-full mt-16 z-30">
          {" "}
          <div className="text-white w-full ">
            <div
              className=" h-[550px] w-full text-xl bg-cover bg-no-repeat    font-bold  flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${mainImage})`,
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="  flex flex-col w-full gap-6 items-center justify-center"
                // style={{
                //   transform: " translate(-473px, 17px) "
                // }}
              >
                {" "}
                <div className=" flex w-fit  justify-center p-3 items-center gap-2 flex-col "
                 style={{ background: 'rgba(10, 21, 20, 0.8)',
                  boxShadow: '0 3px 5px 0 rgba(31, 38, 135, 0.37)',
                  backdropFilter: 'blur(13.5px)',
                  WebkitBackdropFilter: 'blur(13.5px)',
                  borderRadius: '10px',
                }}>
                 <span className="text-sm font-bold text-teal-400"> Review latest knews from </span><span className="text-3xl">{animeTitleId}</span>
                </div>
                <CustomButton
                  onClick={() => navigate("/home")}
                  classname="bg-teal-800 text-xl w-48 p-2 rounded-lg"
                >
                  Go to HomePage
                </CustomButton>
              </div>
            </div>





            {(newsData?.data[0]?.mal_id)? (
             




<div className="flex flex-row justify-center">
{newsData?.data[0]?.excerpt ? (
  <div
    className="  h-full flex flex-col gap-4 p-3 rounded-lg mx-10  -translate-y-[2rem]"
    style={{
      background: "rgba( 84, 202, 158, 0.25)",
      boxShadow: "  0 2px 12px 0 rgba( 31, 38, 135, 0.37)",
      backdropFilter: "blur(7px)",
      WebkitBackdropFilter: "blur(7px)",
      borderRadius: "10px",
    }}
  >
    <div className="w-full text-center font-extrabold bg-white text-black rounded">
    {newsData?.data[0]?.title ? (
        <div
        
        >
          <span>{newsData?.data[0]?.title}</span>
        </div>
      ) : (
        []
      )}
    </div>
    <div className="flex flex-row items-center">
      <span>$-</span>
      <span>{newsData?.data[0]?.excerpt}</span>
    </div>
  </div>
) : (
  []
)}

{newsData?.data[1]?.excerpt ? (
  <div
    className="  h-full flex flex-col gap-4 p-3 rounded-lg mx-10  -translate-y-[2rem]"
    style={{
      background: "rgba( 84, 202, 158, 0.25)",
      boxShadow: "  0 2px 12px 0 rgba( 31, 38, 135, 0.37)",
      backdropFilter: "blur(7px)",
      WebkitBackdropFilter: "blur(7px)",
      borderRadius: "10px",
    }}
  >
    <div className="w-full text-center font-extrabold bg-white text-black rounded">
    {newsData?.data[1]?.title ? (
        <div
        
         
        >
          <span>{newsData?.data[1]?.title}</span>
        </div>
      ) : (
        []
      )}
    </div>
    <div className="flex flex-row items-center">
      <span>$-</span>
      <span>{newsData?.data[1]?.excerpt}</span>
    </div>
  </div>
) : (
  []
)}
</div>
              ) : (
                


                <div
                className="  h-full flex flex-col gap-4 p-3 rounded-lg mx-10  -translate-y-[2rem]"
                style={{
                  background: "rgba( 84, 202, 158, 0.25)",
                  boxShadow: "  0 2px 12px 0 rgba( 31, 38, 135, 0.37)",
                  backdropFilter: "blur(7px)",
                  WebkitBackdropFilter: "blur(7px)",
                  borderRadius: "10px",
                }}
              >
                <div className="w-full text-center font-extrabold bg-white text-black rounded">
                No news at the moment
                </div>
                <div className="flex flex-row items-center">
                  <span>$-</span>
                  <span>No news at the moment </span>
                </div>
              </div>
              )}

           
          </div>
        </div>

        <div className="w-full">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default NewsMainPage;
