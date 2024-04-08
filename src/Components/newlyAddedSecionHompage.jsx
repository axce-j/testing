import CustomButton from "./customButton";

const NewlyAddedSectionHomepage = ({animeBlocks,subtitle,viewPortWidth,viewPortWidth2,method ,displaySection,recentData}) => {
 const recentDataContent= recentData?.data?.data
  return (<>
  <div className={` w-full grid grid-cols-auto  gap-4 py-2 ${viewPortWidth2? (displaySection===2? `block`:`hidden`) :``} `}>
                <div className="flex flex-row justify-between items-center max-h-[50px]">
                  <div className="flex flex-row justify-start gap-3 text-3xl mobile:text-xl items-center ">
                    <span>NEWLY ADDED</span>
                    <i>
                      <img
                        src="arrow.png"
                        className="flex items-center"
                        width="23"
                        alt=""
                      />
                    </i>
                  </div>
                </div>
                <div className={`grid  w-full 
                 mobile:grid-cols-[1fr]   lgMobile:grid-cols-[1fr] justify-between gap-4 ${viewPortWidth?`grid-cols-[1fr,1fr]`:`grid-cols-auto`}`}>
                {recentDataContent?.sort((a,b)=>a.year-b.year)?.slice(0,10)?.map((response, index) => {
                       const images= response?.images?.jpg?.image_url;
                       const titles=response?.title_english;
                      //  const year=response?.year;
                       const type= response?.type;
                       const score=response?.score;
                       const popularity=response?.popularity
                      //  const favorites=response?.favorites
                    return (
                      <div
                        key={index}
                        className={`grid rounded-lg  gap-5 items-center px-2 py-2  bg-[#101010] ${viewPortWidth?`grid-cols-[.6fr,5fr] `:`grid-cols-[2fr,5fr] `}`}
                      >
                        <div>
                          {" "}
                          <img src={images}className={`  ${viewPortWidth?` h-[50px] rounded`:`h-fill` }`} alt="" />
                        </div>
                        <div className="flex flex-col items-start  gap-1">
                          <div>{titles}</div>
                          <div className="flex flex-row  gap-3 items-center">
                            <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs font-medium rounded-lg">
                              <span>{score}</span>
                             
                            </CustomButton>
                            <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs font-medium items-center rounded-lg ">
                              <img src="mic.png" width="10" alt="" />{" "}
                              <span>{popularity}</span>
                            </CustomButton>
                            <span>. {type}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
  </>);
};

export default NewlyAddedSectionHomepage;
