import CustomButton from "./customButton";

const ReleaseSectionHomepage=({animeBlocks,subtitle,viewPortWidth,viewPortWidth2,method,displaySection,seasonData,navigate})=>{

  const seasonDataContent=seasonData?.data?.data
  return(
        <>
           <div className={` w-full grid grid-cols-auto  gap-4 py-2 ${viewPortWidth2? (displaySection===0? `block`:`hidden`) :``} `}>
                <div className="flex flex-row justify-between items-center max-h-[50px]">
                  <div className="flex flex-row justify-start gap-3 text-3xl mobile:text-xl items-center ">
                    <span>New Release</span>
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
                  {seasonDataContent?.sort((a,b)=>b.year-a.year)?.slice(0,10)?.map((response, index) => {
                       const images= response?.images?.jpg?.image_url;
                       const titles=response?.title;
                       const year=response?.year;
                       const type= response?.type;
                       const score=response?.score;
                       const rank=response?.rank;
                       const animeId= response?.mal_id
                      //  const favorites=response?.favorites
                    return (
                      <div
                      onClick={()=> navigate(`/special/${animeId}`)}

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
                              <span>{rank}</span>
                            </CustomButton>
                            <span>. {type}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
        </>
    )
}

export default ReleaseSectionHomepage;