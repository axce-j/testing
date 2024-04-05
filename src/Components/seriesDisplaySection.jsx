import CustomButton from "./customButton";
import ReleaseSectionHomepage from "./releaseSectionHomepage.jsx";
import NewlyAddedSectionHomepage from "./newlyAddedSecionHompage.jsx";
import JustCompletedSectionHomepage from "./justCompletedSectionHomepage.jsx";
const SeriesDisplaySection = ({
  rating,
  subtitle,
  viewPortWidth,
  animeBlocks,
  method,
  Days,
  viewPortWidth2,
  handleDisplaysection,
  displaySection,
  setDisplaySection,
}) => {
  return (
    <>
      <section className=" flex mt-20 box-border   px-4   flex-col gap-[10rem] w-full">
        <div
          className={` gap-4 ${
            viewPortWidth ? `block` : `grid grid-cols-[3fr,1fr]`
          }`}
        >
          <div className="grid grid-rows-[auto,1fr] gap-4">
            <div className="flex flex-row items-center min-h-[80px] justify-between mobile:flex-col mobile:items-start mobile:min-h-[60px]">
              <div className="text-2xl mobile:text-[15px] mobile:font-medium">Recently Updated</div>
              <div className="flex gap-2 mobile:text-xs  ">
                <span>
                  <a href="">All</a>
                </span>
                <span>
                  {" "}
                  <a href="">Sub</a>
                </span>
                <span>
                  <a href="">Dub</a>
                </span>
                <span>
                  <a href="">Chinese</a>
                </span>
                <span>
                  <a href="">Trending</a>
                </span>
                <span>
                  <a href="">Random</a>
                </span>

                <span className="flex flex-row gap-4">
                  <a href="">{"<"}</a>
                  <a href="">{">"}</a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="grid 
              ml:grid-cols-[repeat(5,minmax(150px,2fr))] 
              xl:grid-cols-[repeat(5,minmax(150px,2fr))] 
              lg:grid-cols-[repeat(5,minmax(150px,2fr))]
              md:grid-cols-[repeat(4,minmax(150px,1fr))]
              sm:grid-cols-[repeat(3,minmax(100px,1fr))]
              lgMobile:grid-cols-[repeat(3,minmax(100px,1fr))]
              mobile:grid-cols-[repeat(1,minmax(100px,1fr))]
              grid-rows-auto  gap-x-6 gap-y-9 box-border">
                {animeBlocks.map((items, index) => {
                  return (
                    <>
                      <div className="flex flex-col gap-4 " key={index}>
                        <div className="bg-gray-800 rounded-[.2rem]">
                          {" "}
                          <img
                            className="h-[15rem] object-cover object-top"
                            src="./img3.jpg"
                            alt=""
                          />
                          <div className="flex flex-row justify-between px-1 py-1">
                            <div className="flex flex-row  gap-2 items-center justify-start ">
                              <span className="bg-teal-900 p-1 text-xs rounded">
                                {subtitle}
                              </span>
                              <span>
                                <i>
                                  <img
                                    className="bg-teal-900 p-1 rounded"
                                    src="/mic.png"
                                    width="20"
                                    alt=""
                                  />
                                </i>
                              </span>
                              <span className="bg-teal-900 p-1 text-xs rounded">
                                {rating}
                              </span>
                            </div>
                            <div>{method}</div>
                          </div>
                        </div>

                        <div> {items}</div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div
                className={`flex justify-between w-full box-border ${
                  viewPortWidth ? `flex` : `hidden`
                }`}
              >
                <CustomButton classname=" bg-[rgba(32,32,35,1)] w-[45vw] h-[40px] rounded-lg hover:bg-[rgba(32,32,35,.2)] ">
                  {"<"}
                </CustomButton>
                <CustomButton classname=" bg-[rgba(32,32,35,1)] w-[45vw]  h-[40px] rounded-lg hover:bg-[rgba(32,32,35,.2)] ">
                  {">"}
                </CustomButton>
              </div>
            </div>
          </div>

          <div
            className={`w-full grid grid-cols-auto  gap-3 py-2 ${
              viewPortWidth ? `hidden` : `block`
            }`}
          >
            <div className="flex flex-row justify-between items-center max-h-[50px]">
              {" "}
              <div className="pl-2 text-2xl">Top anime</div>
              <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
                <span className="bg-red-400 rounded p-2 text-xs">Day</span>
                <span className="rounded p-2 text-xs">Week</span>
                <span className="rounded p-2 text-xs">Month</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {animeBlocks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                  >
                    <div  className="text-[3.3rem] font-bold text-center">
                      {index}
                    </div>
                    <div>
                      {" "}
                      <img src="/img7.jpg" className="h-fill" alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <div>{item}</div>
                      <div className="flex flex-row gap-3 items-center">
                        <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs font-medium rounded-lg">
                          <span>{subtitle}</span>
                          <span>1098</span>
                        </CustomButton>
                        <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs font-medium items-center rounded-lg ">
                          <img src="/mic.png" width="10" alt="" />{" "}
                          <span>1061</span>
                        </CustomButton>
                        <span>. {method}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`flex  gap-4 ${
            viewPortWidth ? `flex-col w-full` : `flex-row w-[70vw]`
          }`}
        >
          <div
            className={`bg-[#202023] px-1 py-1 flex flex-row justify-between rounded-lg gap-1 ${
              viewPortWidth2 ? `block` : `hidden`
            }`}
          >
            <CustomButton
              onClick={() => handleDisplaysection(1)}
              classname="hover:bg-gray-600 py-1 px-2 focus:bg-teal-800 rounded-lg w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-center mobile:px-0 mobile:gap-2  lgMobile:text-xs lgMobile:px-0 lgMobile:gap-2 lgMobile:justify-center "
            >
              <span>New</span><span>Release</span>  
            </CustomButton>
            <CustomButton
              onClick={() => handleDisplaysection(2)}
              classname="hover:bg-gray-600 py-1 px-2 focus:bg-teal-800 rounded-lg w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-center mobile:px-0 mobile:gap-2  lgMobile:text-xs lgMobile:px-0 lgMobile:gap-2 lgMobile:justify-center  "
            >
              <span>Newly</span><span>Added</span> 
            </CustomButton>
            <CustomButton
              onClick={() => handleDisplaysection(3)}
              classname="hover:bg-gray-600 py-1 px-2 focus:bg-teal-800 rounded-lg  w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-cente pmobile:x-0r mobile:gap-2 lgMobile:text-xs llgMobile:px-0 gMobile:gap-2 lgMobile:justify-center "
            >
              <span>Just</span><span>Completed</span> 
            </CustomButton>
          </div>
          <ReleaseSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
          />
          <NewlyAddedSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
          />
          <JustCompletedSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
          />
        </div>
        <div
          className={`flex flex-col mb-20 ${
            viewPortWidth ? `w-full` : `w-[70vw]`
          }`}
        >
          
          <div className="bg-[url(/img13.png)] bg-cover bg-no-repeat bg-center grid grid-rows-2 justify-center w-full items-center gap-6  p-3 px-6 text-3xl mobile:text-lg  "
          style={{
            backgroundColor:"rgba(0,0,0,0.65)",
            backgroundBlendMode:"overlay",
          }}
          >
            <div className="flex flex-row  gap-3 mobile:flex-col lgMobile:flex-col "><span className="font-medium">Estimated Schedule- </span><span className="text-gray-500 text-[80%]">  Now: 27/03/2024 14:07:59</span></div>
            <div className="flex w-full flex-row gap-8 mobile:gap-5 mobile:text-2xl  lgMobile:gap-5 lgMobile:text-2xl text-5xl font-bold overflow-hidden">
              {Days.map((items) => {
                return (
                  <>
                    <div>{items}</div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="bg-[#101010] grid grid-cols-[.5fr,4fr,1fr] w-full gap-4 p-3 text-lg">
            {animeBlocks.map((items, index) => {
              return (
                <>
                  <span className="flex justify-end"> {`${index}:00`}</span>
                  <span className="flex justify-start">{items}</span>
                  <span className="flex justify-start">
                    <CustomButton classname="bg-[rgba(5,12,13,.8)] p-2 rounded-xl text-xs">
                      Episode 50
                    </CustomButton>
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div
          className={` w-full grid grid-cols-auto  gap-3 py-2 ${
            viewPortWidth ? `block` : `hidden`
          } `}
        >
          <div className="flex flex-row justify-between items-center max-h-[50px]">
            {" "}
            <div className="pl-2 text-2xl">Top anime</div>
            <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
              <span className="bg-red-400 rounded p-2 text-xs">Day</span>
              <span className="rounded p-2 text-xs">Week</span>
              <span className="rounded p-2 text-xs">Month</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {animeBlocks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid rounded-lg grid-cols-[0.2fr,auto,6fr]
                  mobile:grid-cols-[.6fr,auto,2fr] mobile:gap-2 lgMobile:grid-cols-[.6fr,1fr,3fr] gap-4 items-center 
                         px-2 bg-[#101010] "
                >
                  <div className="text-[3.3rem] mobile:text-[2rem] font-bold text-center">
                    {index}
                  </div>
                  <div className="mobile:w-[45px]">
                    {" "}
                    <img src="/img7.jpg" className="h-20 mobile:w-full " alt="" />
                  </div>
                  <div className="flex flex-col justify-start w-full items-start mobile:text-[12px] gap-1">
                    <div>{item}</div>
                    <div className="flex flex-row gap-3 mobile:gap-1 w-full items-center">
                      <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1 font-medium rounded-lg">
                        <span>{subtitle}</span>
                        <span>1098</span>
                      </CustomButton>
                      <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1  font-medium items-center rounded-lg ">
                        <img src="/mic.png" width="10" className="mobile:w-[5px]" alt="" />{" "}
                        <span>1061</span>
                      </CustomButton>
                      <span>. {method}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeriesDisplaySection;
