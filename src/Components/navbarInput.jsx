import { Center } from "@chakra-ui/react";
import CustomButton from "./customButton";
import { useNavigate } from "react-router-dom";

const NavBarInput = ({
  setSearchBar,
  searchClick,
  className,
  manageInputSearchOption,
  animeSearchData,
  searchOption,
  animeSearchDataContent
}) => {
   
  // console.log(searchOption);
  const inputclasses = `${className}`;
  const navigate = useNavigate();
  // const inputSearchvalue= document.querySelector("#input")
  // console.log(searchOption);
  return (
    <>
      <div onClick={setSearchBar} className={inputclasses}>
        <div className="relative w-[30rem]">
          <div className="flex flex-col bg-[rgba(32,32,35,1)] absolute top-0 left-0  rounded-lg w-full max-w-full ">
            <div className="flex flex-col px-2 p-1 ">
              <div className="flex flex-row bg-[rgba(32,32,35,1)] p-1 items-center px-2 rounded-lg gap-5">
                <div>
                  <i>
                    <img src="Vector.png" alt="" />
                  </i>
                </div>

                <div className="w-full">
                  {}
                  <input
                    onChange={manageInputSearchOption}
                    type="text"
                    id="input"
                    placeholder="Search Here"
                    className={` bg-transparent text-xs border-transparent focus:border-transparent  focus:outline-none w-full`}
                    style={{ borderBottomColor: "transparent" }}
                    value={searchOption === null ? "" : searchOption}
                  />
                </div>
                <div className=" w-[10rem] flex justify-end ">
                  {searchOption !== null ? (
                    <div className="flex flex-row  text-xs items-center underline gap-2 font-medium ">
                      {" "}
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          manageInputSearchOption("empty");
                        }}
                      >
                        Clear
                      </div>
                    </div>
                  ) : (
                    <div className="flex text-xs items-center gap-2 w-full justify-end font-medium">
                      <div>
                        <i>
                          <img
                            src="book.png"
                            width="15"
                            className="min-w-[13px]"
                            alt=""
                          />
                        </i>
                      </div>
                      <div>Quick Access</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              // direction="column"
              className={` flex flex-col  max-h-fit  overflow-hidden ${
                searchOption !== null && searchOption !== ""
                  ? `max-h-fit`
                  : `hidden`
              } transition duration-[4s]`}
              style={{
                transition: "max-height 5s",
              }}
            >
              <div className="flex flex-row justify-between px-3 items-start ">
                <span>Anime</span>{" "}
                <div className="flex flex-row gap-3 items-center">
                  <span>
                    <i>
                      <img src="filter.png" width="15" alt="" />
                    </i>
                  </span>
                </div>
              </div>
              <div
                className={`w-full max-h-[450px] flex flex-col  px-1 bg-gray-900 overflow-y-scroll gap-1 ${
                  searchOption == null ? `hidden` : ``
                }`}
              >
                {searchOption == null || searchOption == ""
                  ? ""
                  : animeSearchDataContent?.map((items, index) => {
                      const title = items?.title;
                      const score = items?.score;
                      const producers = items?.producers[0]?.name;
                      const images = items?.images?.jpg?.image_url;
                      const year = items?.year;
                      const mal_id = items?.mal_id;

                      return (
                        <div
                          key={mal_id}
                          className=" grid grid-cols-[1fr,4fr] gap-2 items-center px-3 py-1 bg-gray-800"
                        >
                          <div className=" w-full">
                            {" "}
                            <div
                              className="w-24 h-[80px] "
                              style={{
                                background: `url(${images})`,
                                backgroundPosition: "Center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                          </div>
                          <div className="flex flex-col gap-3 flex-wrap">
                            <div className="font-bold break-words text-sm">
                              {title}
                            </div>
                            <div className="flex  gap-3 text-xs justify-end ">
                              {" "}
                              <div> {score}</div>
                              <div> {producers} </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
              <div className="flex flex-row px-5 gap-3  p-1 bg-[rgba(2,1,10,0.7)] text-xs items-center">
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <i>
                      <img src="arrowUp.png" alt="" />
                    </i>
                  </span>
                  <span>
                    <i>
                      <img src="arrowDown.png" alt="" />
                    </i>
                  </span>
                  <span>to navigate</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  {" "}
                  <span>
                    <i>
                      <img src="turn_right.png" alt="" />
                    </i>
                  </span>
                  <span>to select</span>
                </div>
                <div className="flex flex-row  items-center gap-2">
                  <span>
                    <i>
                      <img src="arrow-square-right.png" alt="" />
                    </i>
                  </span>
                  <span>to exit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarInput;

{
  /* <div onClick={setSearchBar}>
<div className="relative w-[30rem]">
  <div className="flex flex-col bg-[rgba(32,32,35,1)] absolute top-0 left-0  rounded-lg w-full max-w-full ">
    <div className="flex flex-col px-2 p-1 ">
      <div className="flex flex-row bg-[rgba(32,32,35,1)] p-1 items-center px-2 rounded-lg gap-5">
        <div>
          <i>
            <img src="Vector.png" alt="" />
          </i>
        </div>

        <div className="w-full">
          {" "}
          <input
            type="text"
            placeholder="Search Here"
            className="  bg-transparent text-xs border-transparent focus:border-transparent focus:outline-none w-full"
            style={{ borderBottomColor: "transparent" }}
          />
        </div>
        <div className=" w-[10rem] flex justify-end">
          {searchClick ? (
            <div className="flex flex-row text-xs items-center gap-2 font-medium ">
              {" "}
              <div>Clear</div>
            </div>
          ) : (
            <div className="flex text-xs items-center gap-2 w-full justify-end font-medium">
              <div>
                <i>
                  <img
                    src="book.png"
                    width="15"
                    className="min-w-[13px]"
                    alt=""
                  />
                </i>
              </div>
              <div>Quick Access</div>
            </div>
          )}
        </div>
      </div>
    </div>
    <div
      // direction="column"
      className={` flex flex-col  max-h-fit  overflow-hidden ${
        searchClick ? `max-h-fit` : `max-h-0`
      } transition duration-[4s]`}
      style={{
        transition: "max-height 5s",
      }}
    >
      <div className="flex flex-row justify-between px-3 items-start">
        <span className="flex flex-col gap-[.01rem]">
          {" "}
          <span>Anime</span> <span>______</span>
        </span>{" "}
        <div className="flex flex-row gap-3 items-center">
          <span>
            <i>
              <img src="filter.png" width="15" alt="" />
            </i>
          </span>
          <span className="text-gray-500 hover:text-white">
            Filter
          </span>
        </div>
      </div>
      <div className="flex flex-row px-5 gap-3  p-1 bg-[rgba(7,4,11,0.7)] text-xs items-center">
        <div className="flex flex-row items-center gap-2">
          <span>
            <i>
              <img src="arrowUp.png" alt="" />
            </i>
          </span>
          <span>
            <i>
              <img src="arrowDown.png" alt="" />
            </i>
          </span>
          <span>to navigate</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          {" "}
          <span>
            <i>
              <img src="/turn_right.png" alt="" />
            </i>
          </span>
          <span>to select</span>
        </div>
        <div className="flex flex-row  items-center gap-2">
          <span>
            <i>
              <img src="arrow-square-right.png" alt="" />
            </i>
          </span>
          <span>to exit</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
