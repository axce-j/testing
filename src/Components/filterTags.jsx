import { useState } from "react";
import CustomButton from "./customButton.jsx";
import CustomButtonBrowse from "./customButtonBrowse.jsx";

const FilterTags = ({
  animeDataContent,
  animeBlocks,
  animeGenreData,
  filterList,
  setFilterList,
}) => {
  const [toggleDown, setToggleDown] = useState("");

  const handleFilterSelection = (item, index) => {
    // Check if the item is already in the filterList subarray
    if (!filterList[index].includes(item)) {
      // If not, add it to the subarray
      setFilterList((prevFilterList) => {
        const updatedFilterList = [...prevFilterList]; // Create a copy of the filterList
        updatedFilterList[index] = [...updatedFilterList[index], item]; // Add the item to the subarray
        return updatedFilterList; // Update the state with the updated filterList
      });
    } else {
      // If the item is already in the subarray, remove it
      setFilterList((prevFilterList) => {
        const updatedFilterList = [...prevFilterList]; // Create a copy of the filterList
        updatedFilterList[index] = updatedFilterList[index].filter(
          (filteredItem) => filteredItem !== item
        ); // Remove the item from the subarray
        return updatedFilterList; // Update the state with the updated filterList
      });
    }
  };

  const manageFilterReset = () => {
    setFilterList([[], [], [], [], [], [], [], []]);
  };

  // console.log(filterList)
  const manageToggleDown = (e) => {
    if (toggleDown === e) {
      setToggleDown("");
    } else {
      setToggleDown(e);
    }
  };
  const filterTypes = [
    "Select Genre",
    "Select episodes",
    "Select Season",
    "Select Type",
    "Select Status",
    "Select Rating",
    "Select Year",
    "Select Score",
  ];

  // Check if animeGenreData exists and has the expected structure
  const filterByGenre =
    animeGenreData?.data?.data instanceof Array
      ? animeGenreData?.data.data.map((item) => item.name)
      : [];

  const filterByEpisodesNoDuplicates = [
    "above 10",
    "above 50",
    "above 100",
    "above 1000",
  ];

  const filterBySeasonNoDuplicates = animeDataContent
    ? [...new Set(animeDataContent.map((item) => item.season))]
    : [];

  const filterByTypeNoDuplicates = animeDataContent
    ? [...new Set(animeDataContent.map((item) => item.type))]
    : [];

  const filterByStatusNoDuplicates = animeDataContent
    ? [...new Set(animeDataContent.map((item) => item.status))]
    : [];

  const filterByRatingoDuplicates = animeDataContent
    ? [...new Set(animeDataContent.map((item) => item.rating))]
    : [];

  const filterByYearNoDuplicates = [
    "> 1950",
    "> 1990",
    "> 2000",
    "> 2010",
    "> 2020",
  ];

  const filterByScoreNoDuplicates = ["+6", "+7", "+8", "+9"];

  const animeFiltersBy = [
    filterByGenre,
    filterByEpisodesNoDuplicates,
    filterBySeasonNoDuplicates,
    filterByTypeNoDuplicates,
    filterByStatusNoDuplicates,
    filterByRatingoDuplicates,
    filterByYearNoDuplicates,
    filterByScoreNoDuplicates,
  ];

  // console.log(animeFiltersBy[3]);

  // console.log(animeFiltersBy[]);
  return (
    <>
      <div className="flex flex-col flex-wrap  items-center justify-center  gap-3">
        <div className="flex flex-row w-full gap-3 justify-center items-center">
          <div className=" h-6 md:w-[55%] lg:w-[60%]  flex py-4 items-center bg-gray-700 md:justify-center rounded order-first ">
            <span className="w-[4%]">
              <img src="Vector.png" alt="" />
            </span>
            <input
              type="text"
              placeholder="search here..."
              className="w-[90%]  pl-5 text-xs h-[20px] bg-gray-700 outline-none rounded"
            />
          </div>
          <div
            onClick={() => manageFilterReset()}
            className=" mobile:hidden lgMobile:flex sm:flex xl:flex lg:flex md:flex ml:flex  flex-row gap-2 itmes-center bg-pink-900 hover:bg-red-400 w-fit px-2 rounded w-24"
          >
            {" "}
            <span className="flex flex-row items-center ">
              <i>
                <img src="./filter.png" width="15px" height="10px" alt="" />
              </i>
            </span>
            <CustomButtonBrowse classname=" font-medium h-10  bg-pink-900 hover:bg-red-400 ">
              Clear{" "}
            </CustomButtonBrowse>
          </div>
        </div>

        <div className=" justify-center items-center grid gap-x-3 gap-y-1 mobile:grid-cols-[1fr,1fr] lgMobile:grid-cols-[1fr,1fr,1fr,1fr]">
          {filterTypes?.map((items, index) => (
            <div key={index} className="flex flex-col gap-2">
              <CustomButtonBrowse
                key={index}
                onClick={() => manageToggleDown(items)}
                classname="flex flex-row justify-between items-center px-2"
              >
                <span>{items}</span>
                <span>$$</span>
              </CustomButtonBrowse>
              <div className="">
                <div
                  className={` absolute   z-20 bg-[rgba(32,32,35)] ${
                    toggleDown === items ? ` ` : `hidden`
                  } 
                        flex grid md:flex-wrap
                        md:flex-col 
                        mobile:grid-cols-[1fr] 
                         
                        mobile:overflow-auto 
                         mobile:max-h-[20vh]     
                          md:max-h-[54vh]   md:max-w-[75vw] 
                          xl:max-h-[40vh]
                            lg:max-w-[80vw] 
                           p-3
                             `}
                >
                  {animeFiltersBy[index]?.map((item, innerIndex) => (
                    <CustomButton
                      onClick={() => handleFilterSelection(item, index)}
                      key={innerIndex}
                      classname=" mobile:w-auto md:w-auto flex flex-row gap-2 justify-start hover:text-teal-400 items-center lg:p-[6px] md:p-[3px]"
                    >
                      <span
                        className={`w-3 h-3 bg-gray-500 rounded ${
                          filterList[index].includes(item)
                            ? `bg-teal-700`
                            : `bg-gray-400`
                        }  flex items-center justify-center`}
                      ></span>
                      <span
                        className={`${
                          filterList[index].includes(item)
                            ? `text-teal-700 font-bold `
                            : `text-gray-200`
                        } text-[.6rem] `}
                      >
                        {item}
                      </span>
                    </CustomButton>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden sm:hidden lgMobile:hidden flex flex-row justify-center gap-2 bg-pink-900 hover:bg-red-400">
          <span>
            <i>
              <img src="filter.png" width="10px" height="10px" alt="" />
            </i>
          </span>
          <CustomButtonBrowse
            onClick={() => manageFilterReset()}
            classname="w-32"
          >
            Clear
          </CustomButtonBrowse>
        </div>
      </div>
    </>
  );
};

export default FilterTags;
