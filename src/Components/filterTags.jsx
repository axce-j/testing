import CustomButtonBrowse from "./customButtonBrowse.jsx";

const FilterTags = ({ animeDataContent }) => {
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
          {" "}
          <div>
            <CustomButtonBrowse classname="">Select genre</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Rating</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Season</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Type</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Status</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Rating</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Year</CustomButtonBrowse>
          </div>
          <div>
            <CustomButtonBrowse>Select Score</CustomButtonBrowse>
          </div>
          
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
