import CustomButton from "../../Components/customButton";
import HomeInput from "../../Components/homeInput";
import AnimeData from "../../hooks/useAnime";
import AnimeNews from "../../hooks/useAnime";
import { useNavigate } from "react-router-dom";
const NewsMiddleSection = ({ animeBlocks }) => {
  const navigate = useNavigate();
  const { isError, isLoading, data, error } = AnimeData();
  const ani = data?.data?.data;
  console.log(ani);
  return (
    <>
      <div className="text-white mt-24">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <HomeInput
            width="480px"
            height="25px"
            placeholder="search anime news..."
          />
          <div className="text-center text-2xl text-[rgba(132,133,141,0.7)]">
            Get Latest Anime news
          </div>
        </div>
        <div>
          <div className="mt-20 p-3 w-full flex flex-col gap-10">
            <div
              className="grid
                mobile:grid-cols-[repeat(2,minmax(100px,180px))]         
                lgMobile:grid-cols-[repeat(2,minmax(150px,195px))]
                sm:grid-cols-[repeat(3,minmax(150px,250px))]
                sm:grid-rows-[repeat(3,minmax(200px,300px))]
                md:grid-cols-[repeat(3,minmax(200px,300px))]
                lg:grid-cols-[repeat(4,minmax(200px,300px))]
                xl:grid-cols-[repeat(4,minmax(250px,400px))]
                ml:grid-cols-[repeat(4,minmax(500px,550px))]
            justify-center grid-rows-auto  gap-5
            
            "
            >
              {ani?.map((response, index) => {

                const images = response?.images?.jpg?.image_url;
                const titles = response?.title;
                const titles_english= response?.title_english;
                const youtubeImages =
                  response?.trailer?.images?.large_image_url;
                //  const rank=response?.rank;
                const id = response?.mal_id;
                const score = response?.score;
                //  const popularity=response?.popularity
                const favorites = response?.favorites;
                const mainTitle= titles_english !== null ? titles_english
                 : titles;
                 console.log(mainTitle);
                const mainImage =
                images !== null ? images : youtubeImages;
                return (
                  <>
                    <div
                      className="    w-full h-auto flex flex-col gap-3 rounded-xl text-sm  p-3"
                      style={{
                        background: 'rgba(53, 125, 112, 0.85)',
                        boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.17 )',
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        borderRadius: '10px',
                        border: '1px solid rgba( 255, 255, 255, 0.98 )'
                      }}
                    >
                      <div
                      onClick={()=>navigate(`/newsPage/${id}`)}
                        className=" bg-cover bg-center bg-no-repeat flex justify-start rounded-xl items-start pl-5 mobile:pl-2 lgMobile:pl-2 pt-4 w-[100%] h-[200px]"
                        style={{
                          backgroundImage: `url(${mainImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                      
                      </div>
                      <div 
                       onClick={()=>navigate(`/newsPage/${id}`)}
                       className="flex flex-row pl-4 mobile:pl-2 mobile:gap-1 w-full items-center gap-2">
                      <div
                          className="grid items-center
                    justift-center  grid-cols-[1fr,3fr] gap-2  w-[400px] box.border"
                        >
                          <span>
                            <img
                             style={{
                                aspectRatio: "4/3",
                                objectFit: "cover",
                              }}
                              src={images}
                              className="h-[90px] w-[80px]
                          mobile:w-[65px] lgMobile:w-[65px] rounded"
                              alt=""
                            />
                          </span>
                          <span className="flex flex-col  items-center gap-[.2rem] sm:text-lg font-bold mobile:text-[07px] lgMobile:text-[11px]">
                            <CustomButton classname="bg-red-800  p-1 sm:text-xl sm:w-[150px]  mobile:w-[20px] lgMobile:w-[28px]">
                              News
                            </CustomButton>
                            <span>{mainTitle}</span>
                          </span>
                        </div>
                  
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* <div
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
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsMiddleSection;
