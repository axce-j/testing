import CustomButton from "../../Components/customButton";

const SecondDisplayModeInBrowse = ({
  animeBlocks,
  reviewsDataContent,
  filterDisplay,
  animeDataContent,
  filterList,
  navigate,
}) => {
  return (
    <>
      <div
        className={` w-full ${
          filterDisplay === "secondDisplaySection" ? `grid` : `hidden`
        }   }       
           `}
      >
        <div className="  lg:grid-cols-[1fr,1fr] lg:grid  flex flex-col gap-6 w-full">
          {filterList.flat().length === 0
            ? animeDataContent
                // ?.sort((a, b) => b.favorites - a.favorites)
                // ?.slice(0, 30)
                ?.map((response, index) => {
                  const images = response?.images?.jpg?.image_url;
                  const titles = response?.title;
                  const rank = response?.rank;
                  const producers = response?.producers[0]?.name;
                  const type = response?.type;
                  const score = response?.score;
                  const status = response?.status;
                  const animeId = response?.mal_id;
                  return (
                    <div
                onClick={()=> navigate(`/special/${animeId}`)}

                      style={{
                        backgroundColor: "rgb(40,42,47)",

                        background:
                          "linear-gradient(90deg, rgba(4,22,47,0.9276960784313726) 22%, rgba(8,32,47,0.6615896358543417) 58%, rgba(10,38,77,0.468312324929972) 74%, rgba(17,31,144,0.36) 86%)",
                      }}
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
                      <div className="flex flex-col   justify-between">
                        <div className="flex flex-col gap-6 w-full items-start  mobile:text-[12px] pt-9  ">
                          <div className="pl-2 flex flex-col gap-2 font-bold text-[15px]">
                            {titles}

                            <div>
                              <CustomButton classname="bg-red-800 w-12 font-bold text-xs p-1 rounded mobile:w-[100px] lgMobile:w-[100px]">
                                {status}
                              </CustomButton>
                            </div>
                          </div>
                          <div className="flex flex-row w-[70%] justify-between items-center">
                            <div className="flex flex-row gap-4 mobile:flex-row justify-center lgMobile:flex-row">
                              <span className="bg-yellow-300 rounded-full text-black p-2 text-xs font-extrabold">
                                {rank}
                              </span>{" "}
                              <span className="bg-black text-yellow-300 font-extrabold text-xs rounded-full p-2">
                                {score}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className=" flex mobile:text-[9px] mb-2 text-teal-400 w-full justify-end  font-medium">
                          {producers}
                        </div>
                      </div>
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
                      results.episodes >=
                        Math.max(
                          ...filterList[1].map((item) =>
                            parseFloat(item.split(" ")[1])
                          )
                        ) ||
                      results.episodes == null) &&
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
                      results.year >=
                        Math.min(
                          ...filterList[6].map((item) =>
                            parseFloat(item.slice(2))
                          )
                        ) ||
                      (results.year <=
                        Math.min(
                          ...filterList[6].map((item) =>
                            parseFloat(item.slice(2))
                          )
                        ) &&
                        results.status == "Currently Airing")) &&
                    // Check if score matches any item in filterList
                    (filterList[7].length === 0 ||
                      (results.score >= Math.min(...filterList[7]) &&
                        results.score <= Math.max(...filterList[7]) + 0.99))
                )
                ?.map((response, index) => {
                  const images = response?.images?.jpg?.image_url;
                  const titles = response?.title;
                  const rank = response?.rank;
                  const producers = response?.producers[0]?.name;
                  const type = response?.type;
                  const score = response?.score;
                  const status = response?.status;
                  const animeId= response?.mal_id;
                  return (
                    <div
                onClick={()=> navigate(`/special/${animeId}`)}

                      style={{
                        backgroundColor: "rgb(40,42,47)",

                        background:
                          "linear-gradient(90deg, rgba(4,22,47,0.9276960784313726) 22%, rgba(8,32,47,0.6615896358543417) 58%, rgba(10,38,77,0.468312324929972) 74%, rgba(17,31,144,0.36) 86%)",
                      }}
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
                      <div className="flex flex-col   justify-between">
                        <div className="flex flex-col gap-6 w-full items-start  mobile:text-[12px] pt-9  ">
                          <div className="pl-2 flex flex-col gap-2 font-bold text-[15px]">
                            {titles}

                            <div>
                              <CustomButton classname="bg-red-800 w-12 font-bold text-xs p-1 rounded mobile:w-[100px] lgMobile:w-[100px]">
                                {status}
                              </CustomButton>
                            </div>
                          </div>
                          <div className="flex flex-row w-[70%] justify-between items-center">
                            <div className="flex flex-row gap-4 mobile:flex-row justify-center lgMobile:flex-row">
                              <span className="bg-yellow-300 rounded-full text-black p-2 text-xs font-extrabold">
                                {rank}
                              </span>{" "}
                              <span className="bg-black text-yellow-300 font-extrabold text-xs rounded-full p-2">
                                {score}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className=" flex mobile:text-[9px] mb-2 text-teal-400 w-full justify-end  font-medium">
                          {producers}
                        </div>
                      </div>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
};

export default SecondDisplayModeInBrowse;
