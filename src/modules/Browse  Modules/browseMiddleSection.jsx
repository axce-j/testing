import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/customButton";
import FilterTags from "../../Components/filterTags.jsx"

const BrowseMiddleSection = ({ animeBlocks,viewPortWidth,handleTabData,tabState,tabsData,reviewsData,animeData }) => {
  const reviewsDataContent=reviewsData?.data?.data
  const animeDataContent=animeData?.data
  console.log(animeDataContent);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-20 p-3 w-full flex flex-col gap-10">
        <div className="flex flex-col w-full gap-3 text-gray-300">
          <div className="text-gray-400">
            {" "}
            <span onClick={() => navigate("/home")} className="text-gray-600">
              <a href="">Home</a>
            </span>{" "}
            /Filter
          </div>
          <div className="text-4xl ">Browse</div>
         
        </div>
    <div className="flex gap-12">
      <div className="flex flex-col gap-12">
        <div>
           <FilterTags animeDataContent={animeDataContent}/>
        </div>




        <div
          className="grid
                mobile:grid-cols-[repeat(2,minmax(100px,180px))]         
                lgMobile:grid-cols-[repeat(2,minmax(150px,195px))]
                sm:grid-cols-[repeat(3,minmax(150px,250px))]
                sm:grid-rows-[repeat(3,minmax(200px,300px))]
                md:grid-cols-[repeat(3,minmax(200px,300px))]
                lg:grid-cols-[repeat(4,minmax(200px,300px))]
                xl:grid-cols-[repeat(4,minmax(220px,350px))]
                ml:grid-cols-[repeat(4,minmax(320px,450px))]
            justify-center grid-rows-auto  gap-5
            
            "
        >
          {animeBlocks.map((item, index) => {
            return (
              <>
                <div className="bg-teal-900 hover:bg-teal-700 w-full h-auto flex flex-col gap-3 rounded-xl text-sm  p-3">
                  <div className="bg-[url(\img1.jpg)] bg-cover bg-center bg-no-repeat flex justify-start rounded-xl items-start pl-5 mobile:pl-2 lgMobile:pl-2 pt-4 w-[100%] h-[200px]">
                    <div
                      className="flex items-center
                    justift-center  flex-row gap-2  w-[400px] box.border"
                    >
                      <span>
                        <img
                          src="img7.jpg"
                           
                          className="h-[90px] w-[80px]
                          mobile:w-[65px] lgMobile:w-[65px] rounded"
                          alt=""
                        />
                      </span>
                      <span className="flex flex-col gap-[.2rem] text-xs mobile:text-[07px] lgMobile:text-[11px]">
                        <CustomButton classname="bg-red-800 w-12 mobile:w-[20px] lgMobile:w-[28px]">
                          Live
                        </CustomButton>
                        <span>{item}</span>
                        <div className="flex flex-row gap-1 mobile:flex-col lgMobile:flex-col"><span>
                          EP1 SUB{" "}
                        </span>  <span>23:45 2</span></div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row pl-4 mobile:pl-2 mobile:gap-1 w-full items-center gap-2">
                    <span>
                      <img
                        src="img5.jpg"
                        className="w-[50px] h-[60px] mobile:h-[40px] lgMobile:h-[40px]"
                        style={{
                        
                          aspectRatio: "4/3",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </span>
                    <span className="flex flex-col items-start justify-center font-bold mobile:text-[9px] lgMobile:text-[8px] ">
                      <span>{item}</span>
                      <span className="mobile:text-[6px]">anywamy .1 minute ago</span>
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
        <div
            className={`w-full grid grid-rows-[auto,1fr]  gap-2 py-2 ${
              viewPortWidth ? `hidden` : `block`
            }`}
          >
            <div className="flex flex-row justify-between items-center max-h-[30px]">
              {" "}
              <div className="pl-2 text-xl">Top anime</div>
              <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
             
              {tabsData?.map((items,index)=>(
              <span onClick={()=>handleTabData(index)} key={index} className={` ${tabState===items?`bg-red-400`:``} rounded p-1 text-[12px]`}>{items}</span> 
              ))
        
            }
            </div>
            </div>
            <div className="flex flex-col gap-2">
              {reviewsDataContent?.sort((a,b)=>b.favorites-a.favorites)?.slice(0,10)?.map((response, index) => {
                 const images= response?.entry?.images?.jpg?.image_url;
                 const titles=response?.entry?.title;
                //  const rank=response?.rank;
                 const type= response?.type;
                 const score=response?.score;
                //  const popularity=response?.popularity
                //  const favorites=response?.favorites
                //  console.log(response);
                return (
                  <div
                    key={index}
                    className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                  >
                    <div className="text-[3.3rem] font-bold text-center">
                      {index}
                    </div>
                    <div>
                      {" "}
                      <img src={images} className="h-fill" alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <div>{titles}</div>
                      <div className="flex flex-row gap-3 items-center">
                        {/* <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs font-medium rounded-lg">
                          <span>{favorites}</span>
                        
                        </CustomButton> */}
                        <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs font-medium items-center rounded-lg ">
                          <img src="mic.png" width="10" alt="" />{" "}
                          <span>{score}</span>
                        </CustomButton>
                        <span>. { type}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    </div>
        <div
          className=" w-full
              justify-center items-center flex   jsutify-between text-xs flex-row"
        >
          <div className="bg-gray-700 px-2 h-[30px] flex items-center  rounded">
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              1
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              2
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              3
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              4
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              5
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              {">"}
            </CustomButton>
            <CustomButton classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              {">>"}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrowseMiddleSection;
