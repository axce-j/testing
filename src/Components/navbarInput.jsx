import CustomButton from "./customButton"

const NavBarInput=({setSearchBar,searchClick,className})=>{
  const inputclasses=`${className}`
 return(
    <>
    <div onClick={setSearchBar} className={inputclasses}>
                      <div className="relative w-[30rem]">
                      <div className="flex flex-col bg-[rgba(32,32,35,1)] absolute top-0 left-0  rounded-lg w-full max-w-full ">
                        <div className="flex flex-col px-2 p-1 ">
                          <div className="flex flex-row bg-[rgba(32,32,35,1)] p-1 items-center px-2 rounded-lg gap-5">
                            <div>
                              <i>
                                <img src="/Vector.png" alt="" />
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
                                <div className="flex flex-row text-xs items-center underline gap-2 font-medium ">
                                  {" "}
                                  <div>Clear</div>
                                </div>
                              ) : (
                                <div className="flex text-xs items-center gap-2 w-full justify-end font-medium">
                                  <div>
                                    <i>
                                      <img
                                        src="/book.png"
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
                            searchClick ? `max-h-fit` : `hidden`
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
                                  <img src="/filter.png" width="15" alt="" />
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
                                  <img src="/arrowUp.png" alt="" />
                                </i>
                              </span>
                              <span>
                                <i>
                                  <img src="/arrowDown.png" alt="" />
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
                                  <img src="/arrow-square-right.png" alt="" />
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
 )
}

export default NavBarInput



{/* <div onClick={setSearchBar}>
<div className="relative w-[30rem]">
  <div className="flex flex-col bg-[rgba(32,32,35,1)] absolute top-0 left-0  rounded-lg w-full max-w-full ">
    <div className="flex flex-col px-2 p-1 ">
      <div className="flex flex-row bg-[rgba(32,32,35,1)] p-1 items-center px-2 rounded-lg gap-5">
        <div>
          <i>
            <img src="/Vector.png" alt="" />
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
                    src="/book.png"
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
              <img src="/filter.png" width="15" alt="" />
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
              <img src="/arrowUp.png" alt="" />
            </i>
          </span>
          <span>
            <i>
              <img src="/arrowDown.png" alt="" />
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
              <img src="/arrow-square-right.png" alt="" />
            </i>
          </span>
          <span>to exit</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}

