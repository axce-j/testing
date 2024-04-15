import { useState } from "react";
import CustomButton from "./customButton.jsx";
import CustomButtonBrowse from "./customButtonBrowse.jsx";

const FilterTags = ({ animeDataContent, animeBlocks,animeGenreData }) => {
  const [toggleDown, setToggleDown] = useState("");
  const manageToggleDown = (e) => {
    if (toggleDown === e) {
      setToggleDown("");
    } else {
      setToggleDown(e);
    }
  };
  const filterTypes = [
    "Select Genre",
    "Select people",
    "Select Season",
    "Select Type",
    "Select Status",
    "Select Rating",
    "Select Year",
    "Select Score",
  ];
  const filterByType=animeGenreData?.data
  const animeFiltersBy=[]
 

 

console.log(filterByType);
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
          <div className=" mobile:hidden lgMobile:flex sm:flex xl:flex lg:flex md:flex ml:flex  flex-row gap-2 itmes-center bg-pink-900 hover:bg-red-400 w-fit px-2 rounded w-24">
            {" "}
            <span className="flex flex-row items-center ">
              <i>
                <img src="./filter.png" width="15px" height="10px" alt="" />
              </i>
            </span>
            <CustomButtonBrowse classname=" font-medium h-10  bg-pink-900 hover:bg-red-400 ">
              Filter
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
                  <div >
                                     
                      <div                         
                        className={` absolute w-fit z-20 bg-[rgba(32,32,35)] ${
                          toggleDown === items ? `` : `hidden`
                        } grid grid-cols-[1fr,1fr] justify-start items-start p-3 gap-x-6 gap-y-3`}
                      >
                        {animeBlocks?.map((item, innerIndex) => (
                          
                            
                              <CustomButton
                                key={innerIndex}
                                classname="w-full flex flex-row gap-2 justify-start items-center"
                              >
                                <input type="checkBox" /> {item}
                              </CustomButton>
                             
                        
          ))}
                      </div>
                    </div>
                  </div>
               
             
            )
          )}
        </div>
        <div className="md:hidden sm:hidden lgMobile:hidden flex flex-row justify-center gap-2 bg-pink-900 hover:bg-red-400">
          <span>
            <i>
              <img src="filter.png" width="10px" height="10px" alt="" />
            </i>
          </span>
          <CustomButtonBrowse classname="w-32">Filter</CustomButtonBrowse>
        </div>
      </div>
    </>
  );
};

export default FilterTags;
