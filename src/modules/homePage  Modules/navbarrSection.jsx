import CustomButton from "../../Components/customButton.jsx";
import NavBarInput from "../../Components/navbarInput.jsx";
import { useNavigate } from "react-router-dom";

const NavBarSection = ({
  viewPortWidth2,
  viewPortWidth,
  handleclick,
  dropDownItems,
  clicked,
  setSearchBar2,
  searchClick2,
  setSearchBar,
  searchClick,
  setSearchOption,
  searchOption,
  animeSearchData,
}) => {
  const changeImage = !clicked ? "dash.png" : "close.png";
  const navigate = useNavigate();
  const manageInputSearchOption = (searchValue) => {
    if (searchValue === "empty") {
      setSearchOption(null);
    } else {
      setSearchOption(searchValue.target.value);
    }
    console.log(searchValue.target.value);
  };
  const animeSearchDataContent = animeSearchData?.data?.data;
  return (
    <>
      <div
        className="px-4 py-3
     flex items-center flex-row gap-1 w-full"
      >
        <div className="flex  flex-row w-full relative gap-6  ">
          <div className="flex flex-row  items-center gap-3">
            <div onClick={handleclick}>
              <i>
                <img
                  className="ease-in cursor-pointer active:bg-teal-900 min-w-55 w-full"
                  src={changeImage}
                  width="30"
                  alt="dash"
                />
              </i>
            </div>
            <div
              id="dropDown"
              className={`bg-[#101010]  py-2 h-auto  grid grid-rows-auto
                md:grid-cols-2 md:text-xs
                sm:grid-cols-3 sm:text-[10px]
                lgMobile:grid-cols-3 lgMobile:text-[10px]
                mobile:grid-cols-3 mobile:text-[6px]
                text-[rgb(189,199,192)] font-medium  absolute  left-0 top-0 mt-[3.8rem] z-[90] ${
                  clicked ? `block` : `hidden`
                }`}
            >
              {dropDownItems.map((response, index) => {
                return (
                  <CustomButton
                    onClick={() => {
                      if (response === "BROWSE") {
                        navigate("/browse");
                      }
                      if (response === "NEWS") {
                        navigate("/news");
                      }
                      if (response === "READ MANGA") {
                        navigate("/readManga");
                      }
                      if (response === "HOME") {
                        navigate("/home");
                      }
                    }}
                    key={index}
                    classname="hover:bg-[rgba(0,0,0,.6)] py-2 hover:text-teal-900 px-5 w-full"
                  >
                    {response}
                  </CustomButton>
                );
              })}
            </div>
            <i
              onClick={() => navigate("/home")}
              className="flex cursor-pointer w-full"
            >
              <img src="./logo3.png " className="w-[150px]  " alt="" />
            </i>
          </div>
          <div>
            <NavBarInput
              searchClick={searchClick}
              setSearchBar={setSearchBar}
              searchOption={searchOption}
              animeSearchData={animeSearchData}
              setSearchOption={setSearchOption}
              manageInputSearchOption={manageInputSearchOption}
              className={`${viewPortWidth ? `hidden` : `block`}`}
            />
          </div>

          <div
            className={`${viewPortWidth2 ? `hidden` : ``}${
              viewPortWidth && !viewPortWidth2
                ? `text-white text-m flex flex-row items-center gap-6 justify-end w-full `
                : ` text-white text-m flex flex-row items-center gap-6 justify-start w-full`
            }`}
          >
            <span
              onClick={() => navigate("/browse")}
              className="flex flex-row gap-1 cursor-pointer items-center hover:text-teal-800"
            >
              <i>
                <img src="sideshow.png" alt="" />
              </i>
              Browse
            </span>
            <span
              onClick={() => navigate("/news")}
              className="flex flex-row gap-1 cursor-pointer items-center hover:text-teal-800"
            >
              <i>
                <img src="shuffle.png" alt="" />
              </i>
              News
            </span>
            <span
              onClick={() => navigate("/readManga")}
              className="flex flex-row gap-1 cursor-pointer items-center hover:text-teal-800"
            >
              <i>
                <img src="book.png" alt="" />
              </i>
              Read Manga
            </span>
            <span className="flex flex-row items-center justify-around">
              <CustomButton
                key="help"
                // onClick={setLanguage}
                // classname={` ${
                //   languageEnglish
                //     ? `bg-teal-900 text-white`
                //     : `bg-white text-teal-900 `
                // } p-1 rounded-r-2  text-xs `}
              >
                EN
              </CustomButton>
              <CustomButton classname="bg-teal-900 p-1 cursor-pointer px-2 rounded-l-2 text-xs">
                JP
              </CustomButton>
            </span>
          </div>
        </div>

        <div className="flex flex-col w-auto min-w-[9rem]  justify-center items-end gap-4 ">
          <div className={`flex flex-row items-center gap-3`}>
            <i
              onClick={setSearchBar2}
              className={` ${viewPortWidth ? `block` : `hidden`}`}
            >
              <img className="text-white" src="Vector.png" alt="" />
            </i>
            <CustomButton classname=" items-center flex font-bold gap-2 bg-teal-800 hover:bg-teal-900 rounded-lg p-2 px-3 font-bold">
              <span>Sign in</span>
              <i className={`${viewPortWidth ? `hidden` : `block`}`}>
                <img src="arrow.png" width="25px" alt="" />
              </i>
            </CustomButton>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex flex-col gap-2 py-1 px-4 ${
          searchClick2 && viewPortWidth ? `block` : `block`
        }`}
      >
        <input
          onChange={manageInputSearchOption}
          type="text"
          placeholder="search Anime..."
          className="w-full text-black rounded p-2"
          value={searchOption === null ? "" : searchOption}
        />
        <div className="flex justify-between ">
          <div className=" inline-block underline mb-[4px] text-gray-500">Anime</div>
          <CustomButton  onClick={() => {
                          manageInputSearchOption("empty");
                        }} classname={`   block ${(searchOption !== null )?`block`:`hidden`}cursor-pointer text-gray-500`}> Clear</CustomButton>
          <CustomButton className="flex flex-row items-center gap-3">
            <span>
              <i>
                <img src="filter.png" width="15" alt="" />
              </i>
            </span>
            <span className="text-gray-500 hover:text-white">Filter</span>
          </CustomButton>
        </div>
       
       <div className={`w-full bg-gray-800  ${searchOption == "" ? `hidden` : ``}`}>
       <div className="w-full bg-gray-800 text-white text-center py-2  border-b-2 border-teal-600 ">
    <div className="w-full">View All</div>
  </div>
        <div className={`flex flex-col  overflow-x-scroll relative`}>
        
  <div className={`flex flex-row max-h-[450px] bg-black  `}>
    {/* Scrollable Content */}
    {searchOption == null || searchOption == "" ? "" : (
      animeSearchDataContent?.map((items, index) => {
        console.log(searchOption);
        const title = items?.title;
        const score = items?.score;
        const producers = items?.producers[0]?.name;
        const images = items?.images?.jpg?.image_url;
        const year = items?.year;
        const mal_id = items?.mal_id;

        return (
          <div key={mal_id} className="grid grid-cols-[1fr,4fr] gap-2 items-center px-3 py-1 border-r-2 border-black bg-gray-800">
            <div className="w-full">
              <div
                className="w-24 h-[80px]"
                style={{
                  background: `url(${images})`,
                  backgroundPosition: "Center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-3 flex-wrap">
              <div className="font-bold break-words text-xs">{title}</div>
              <div className="flex gap-3 text-xs justify-end">
                <div>{score}</div>
                <div>{producers}</div>
              </div>
            </div>
          </div>
        );
      })
    )}
  </div>

  {/* Fixed "View All" option */}
 
</div>
       </div>


      </div>
    </>
  );
};
export default NavBarSection;
