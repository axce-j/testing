import CustomButton from "../../Components/customButton";

const FirstDisplayModeInBrowse = ({
  animeBlocks,
  filterDisplay,
  animeDataContent,
  filterList,
  setFilterList,
  navigate,
}) => {
  // const minSelectedScore = Math.min(...filterList[7]) 
  // const scoresAboveThreshold = animeDataContent
  // .filter((item) => item.score > filterList[7])
  // .map((item) => item.score);


  
  return (
    <>
      <div
        className={`${
          filterDisplay === "firstDisplaySection" ? `grid` : `hidden`
        }
                mobile:grid-cols-[repeat(2,minmax(100px,180px))]         
                lgMobile:grid-cols-[repeat(2,minmax(150px,195px))]
                sm:grid-cols-[repeat(3,minmax(150px,250px))]
                sm:grid-rows-[repeat(3,minmax(200px,300px))]
                md:grid-cols-[repeat(3,minmax(200px,300px))]
                lg:grid-cols-[repeat(4,minmax(200px,300px))]
                xl:grid-cols-[repeat(4,minmax(220px,350px))]
                ml:grid-cols-[repeat(4,minmax(320px,450px))]
            justify-center grid-rows-auto  gap-5`}
      >
        {
        
        
        filterList.flat().length === 0
          ? animeDataContent?.map((response, index) => {
              const images = response?.images?.jpg?.image_url;
              const titles = response?.title;
              const rank = response?.rank;
              const producers = response?.producers[0]?.name;
              const type = response?.type;
              const score = response?.score;
              const status = response?.status;
              const animeId =response?.mal_id
              console.log(animeId);
              return (
                <div
                  key={index}
                  onClick={()=> navigate(`/special/${animeId}`)}
                  className="  hover:bg-teal-700 w-full h-auto flex flex-col gap-3 cursor-pointer rounded-xl text-sm  p-3"
                  style={{
                    backgroundColor: "rgb(40,42,47)",
                    background:
                      "inear-gradient(90deg, rgba(40,42,47,0.9276960784313726) 22%, rgba(40,42,47,0.6615896358543417) 58%, rgba(40,42,47,0.468312324929972) 74%, rgba(7,51,44,0.36) 86%)",
                  }}
                >
                  <div
                    className="  bg-cover bg-center bg-no-repeat flex justify-start rounded-xl items-start pl-5 mobile:pl-2 lgMobile:pl-2 pt-4 w-[100%] h-[200px]"
                    style={{
                      backgroundColor: "rgb(40,42,47)",

                      background:
                        "linear-gradient(90deg, rgba(4,27,12,0.9276960784313726) 22%, rgba(8,32,47,0.6615896358543417) 58%, rgba(10,38,77,0.468312324929972) 74%, rgba(17,31,144,0.36) 86%)",
                    }}
                  >
                    <div
                      className="flex items-center
                      justift-center  flex-row gap-2  w-[400px] box.border"
                    >
                      <span>
                        <img
                          src={images}
                          className="h-[90px] w-[80px]
                            mobile:w-[65px] lgMobile:w-[65px] rounded"
                          alt=""
                        />
                      </span>
                      <span className="flex flex-col gap-[.2rem] text-xs mobile:text-[07px] lgMobile:text-[11px]">
                        <CustomButton classname="bg-red-800 w-12 font-bold p-1 rounded mobile:w-[100px] lgMobile:w-[100px]">
                          {status}
                        </CustomButton>
                        <span> </span>
                        <div className="flex flex-row gap-4 mobile:flex-row justify-center lgMobile:flex-row">
                          <span className="bg-yellow-300 rounded-full text-black p-2 text-xs font-extrabold">
                            {rank}
                          </span>{" "}
                          <span className="bg-black text-yellow-300 font-extrabold rounded-full p-2">
                            {score}
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row pl-4 mobile:pl-2 mobile:gap-1 w-full items-center gap-2">
                    <span>
                      <img
                        src={images}
                        className="w-[50px] h-[60px] mobile:h-[40px] lgMobile:h-[40px]"
                        style={{
                          aspectRatio: "4/3",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </span>
                    <span className="flex flex-col items-start justify-center font-bold mobile:text-[9px] lgMobile:text-[12px] ">
                      <span>{titles}</span>
                    </span>
                  </div>
                  <span className="mobile:text-[9px] text-teal-400 font-medium">
                    {producers}
                  </span>
                </div>
              );
            })
          : animeDataContent
              ?.filter(
                (results) =>
                  // Check if at least one genre matches any item in filterList
                  (filterList[0].length === 0 ||
                    results.genres.some((genre) =>
                      filterList[0].includes(genre.name)
                    )) &&
                  // Check if episodes matches any item in filterList
                  (filterList[1].length === 0 ||
                    (
                      (results.episodes >= Math.max(...filterList[1].map(item => parseFloat(item.split(' ')[1])))) 

                      ||

                      (results.episodes == null)


                    )
                    
                  
                  ) &&
                  // Check if season matches any item in filterList
                  (filterList[2].length === 0 ||
                    filterList[2].includes(results.season)) &&
                  // Check if type matches any item in filterList
                  (filterList[3].length === 0 ||
                    filterList[3].includes(results.type)) &&
                  // Check if episodes matches any item in filterList
                  (filterList[4].length === 0 ||
                    filterList[4].includes(results.status)) &&
                  // Check if rating matches any item in filterList
                  (filterList[5].length === 0 ||
                    filterList[5].includes(results.rating)) &&
                  // Check if year matches any item in filterList
                  (filterList[6].length === 0 ||
                    (
                      
                      (results.year >= Math.min(...filterList[6].map(item => parseFloat(item.slice(2)))))
                      ||
                      (results.year <= Math.min(...filterList[6].map(item => parseFloat(item.slice(2)))) && results.status == "Currently Airing" )
                  
                  ) 
                  ) &&
                  // Check if score matches any item in filterList
                  (
                    filterList[7].length === 0 || ( (   results.score >= Math.min(...filterList[7]) ) && ( results.score <= (Math.max(...filterList[7])+ 0.99)))
                  ),
              )
              ?.map((response, index) => {
                console.log(  response)

                const images = response?.images?.jpg?.image_url;
                const titles = response?.title;
                const rank = response?.rank;
                const producers = response?.producers[0]?.name;
                const type = response?.type;
                const score = response?.score;
                const status = response?.status;
                const animeId=response?.mal_id
                return (
                  <div
                    key={index}
                    onClick={()=> navigate(`/special/${animeId}`)}
                    className="  hover:bg-teal-700 w-full h-auto flex flex-col gap-3 rounded-xl text-sm  p-3"
                    style={{
                      backgroundColor: "rgb(40,42,47)",
                      background:
                        "inear-gradient(90deg, rgba(40,42,47,0.9276960784313726) 22%, rgba(40,42,47,0.6615896358543417) 58%, rgba(40,42,47,0.468312324929972) 74%, rgba(7,51,44,0.36) 86%)",
                    }}
                  >
                    <div
                      className="  bg-cover bg-center bg-no-repeat flex justify-start rounded-xl items-start pl-5 mobile:pl-2 lgMobile:pl-2 pt-4 w-[100%] h-[200px]"
                      style={{
                        backgroundColor: "rgb(40,42,47)",

                        background:
                          "linear-gradient(90deg, rgba(4,27,12,0.9276960784313726) 22%, rgba(8,32,47,0.6615896358543417) 58%, rgba(10,38,77,0.468312324929972) 74%, rgba(17,31,144,0.36) 86%)",
                      }}
                    >
                      <div
                        className="flex items-center
                    justift-center  flex-row gap-2  w-[400px] box.border"
                      >
                        <span>
                          <img
                            src={images}
                            className="h-[90px] w-[80px]
                          mobile:w-[65px] lgMobile:w-[65px] rounded"
                            alt=""
                          />
                        </span>
                        <span className="flex flex-col gap-[.2rem] text-xs mobile:text-[07px] lgMobile:text-[11px]">
                          <CustomButton classname="bg-red-800 w-12 font-bold p-1 rounded mobile:w-[100px] lgMobile:w-[100px]">
                            {status}
                          </CustomButton>
                          <span> </span>
                          <div className="flex flex-row gap-4 mobile:flex-row justify-center lgMobile:flex-row">
                            <span className="bg-yellow-300 rounded-full text-black p-2 text-xs font-extrabold">
                              {rank}
                            </span>{" "}
                            <span className="bg-black text-yellow-300 font-extrabold rounded-full p-2">
                              {score}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row pl-4 mobile:pl-2 mobile:gap-1 w-full items-center gap-2">
                      <span>
                        <img
                          src={images}
                          className="w-[50px] h-[60px] mobile:h-[40px] lgMobile:h-[40px]"
                          style={{
                            aspectRatio: "4/3",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </span>
                      <span className="flex flex-col items-start justify-center font-bold mobile:text-[9px] lgMobile:text-[12px] ">
                        <span>{titles}</span>
                      </span>
                    </div>
                    <span className="mobile:text-[9px] text-teal-400 font-medium">
                      {producers}
                    </span>
                  </div>
                );
              })
              
              }
      </div>
    </>
  );
};

export default FirstDisplayModeInBrowse;
