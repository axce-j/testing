import CustomButton from "../../Components/customButton";

const SecondDisplayModeInBrowse=({animeBlocks,reviewsDataContent,filterDisplay})=>{
  return(
    <>

<div
          className={` w-full ${filterDisplay==="secondDisplaySection"?`grid`:`hidden` }   }       
           `}
        >
         
          <div className="  lg:grid-cols-[1fr,1fr] lg:grid  flex flex-col gap-6 w-full">
            {reviewsDataContent
              ?.sort((a, b) => b.favorites - a.favorites)
              ?.slice(0, 30)
              ?.map((response, index) => {
                const images = response?.images?.jpg?.image_url;
                const titles = response?.title_english;
                //  const rank=response?.rank;
                // const type = response?.type;
                const score = response?.score;
                //  const popularity=response?.popularity
                // const favorites = response?.favorites;
                return (
                  <div
                    key={index}
                    className="grid rounded-lg  
                  gap-6  h-48  grid-cols-[auto,3fr]   
                         pr-2 bg-[#101010] "
                  >

                     
                  
                    <div className="mobile:w-[120px]">
                      {" "}
                      <img
                        src={images}
                        className="h-48   mobile:w-full rounded "
                        alt=""
                      />
                    </div>


                    <div className="flex flex-col gap-6 w-full items-start  mobile:text-[12px] pt-9  ">
                      <div className="pl-2 flex flex-col gap-2">{titles}222
                      
                      <div>333</div></div>
                      <div className="flex flex-row w-[70%] justify-between items-center">
                        <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1 font-medium rounded-lg">
                          <span>{score}</span>
                          <span>1098</span>
                        </CustomButton>
                        <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1  font-medium items-center rounded-lg ">
                          <img
                            src="mic.png"
                            width="10"
                            className="mobile:w-[5px]"
                            alt=""
                          />{" "}
                          <span>1061</span>
                        </CustomButton>
                        <span>fav</span>
                        <span>. TV</span>
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

export default SecondDisplayModeInBrowse;