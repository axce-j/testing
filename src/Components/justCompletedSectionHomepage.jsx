import CustomButton from "./customButton";

const JustCompletedSectionHomepage=({animeBlocks,subtitle,viewPortWidth,viewPortWidth2, method,displaySection})=>{
    return(
        <>
        <div className={` w-full grid grid-cols-auto  gap-4 py-2 ${viewPortWidth2? (displaySection===3? `block`:`hidden`) :``} `}>
                <div className="flex flex-row justify-between items-center max-h-[50px]">
                  <div className="flex flex-row justify-start gap-3 text-3xl mobile:text-xl items-center ">
                    <span>JUST COMPLETED</span>
                    <i>
                      <img
                        src="/arrow.png"
                        className="flex items-center"
                        width="23"
                        alt=""
                      />
                    </i>
                  </div>
                </div>
                <div className={`grid  w-full 
                 mobile:grid-cols-[1fr]   lgMobile:grid-cols-[1fr]   justify-between gap-4 ${viewPortWidth?`grid-cols-[1fr,1fr]`:`grid-cols-auto`}`}>
                  {animeBlocks.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`grid rounded-lg  gap-5 items-center px-2 py-2 bg-[#101010] ${viewPortWidth?`grid-cols-[.6fr,5fr] `:`grid-cols-[2fr,5fr] `}`}
                      >
                        <div>
                          {" "}
                          <img src="/img7.jpg" className={`${viewPortWidth?` h-[50px] rounded`:`h-fill` }`} alt="" />
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
        </>
    )
}

export default JustCompletedSectionHomepage