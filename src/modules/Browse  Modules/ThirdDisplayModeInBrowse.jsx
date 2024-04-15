import CustomButton from "../../Components/customButton";

const ThirdDisplayModeInBrowse=({ reviewsDataContent,filterDisplay})=>{
  return(
    <>

<div
          className={` w-full ${filterDisplay==="thirdDisplaySection"?`grid`:`hidden` } grid-cols-auto          
           `}
        >
         
          <div className="flex flex-col gap-4">
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
                    className="grid rounded-lg md:grid-cols-[auto,6fr]
                  mobile:grid-cols-[auto,1fr] gap-7 lgMobile:grid-cols-[auto,3fr]  items-center h-32
                           bg-[#101010] "
                  >
                   
                    <div className="mobile:w-[85px]">
                      {" "}
                      <img
                        src={images}
                        className="h-32  w-full rounded "
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row   w-full items-center justify-between      ">
                      <div className="pl-2 flex flex-col gap-2">{titles}222
                      
                      <div>333</div></div>
                      <div className="flex flex-row w-[70%] pr-12  gap-12 justify-end items-center">
                        <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs mobile:gap-1 font-medium rounded-lg">
                          <span>{score}</span>
                          <span>1098</span>
                        </CustomButton>
                        <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs  mobile:gap-1  font-medium items-center rounded-lg ">
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

export default ThirdDisplayModeInBrowse;