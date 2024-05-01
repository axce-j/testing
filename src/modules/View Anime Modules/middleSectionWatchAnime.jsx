import CustomButton from "../../Components/customButton";

const MiddleSectionWatchAnime = ({
  viewPortWidth,
  tabState,
  tabsData,
  handleTabData,
  reviewsData,
  animeEpisodesData,
  setCurrentEpisode,
  currentEpisode,
  handleCurrentEpisode,
  animeStreamingLinkData,
  animeDataIdData,
}) => {
  const reviewsDataContent = reviewsData?.data?.data;
  const animeEpisodesDataContent = animeEpisodesData?.data?.data;
  const animeStreamingLinkDataContent = animeStreamingLinkData?.data?.data;
  const animeDataIdDataContent = animeDataIdData?.data?.data;
  // begining of data from the animeDataIdData endpoint
  const imagesDataContent = animeDataIdDataContent?.images?.jpg?.image_url;
  const largeImagesDataContent = animeDataIdDataContent?.images?.jpg?.large_image_url;
  const titlesDataContent = animeDataIdDataContent?.title;
  const rank = animeDataIdDataContent?.rank;
  const typeDataContent = animeDataIdDataContent?.type;
  const scoreDataContent = animeDataIdDataContent?.score;
  const synopsisDataContent = animeDataIdDataContent?.synopsis;
  const durationDataContent = animeDataIdDataContent?.duration;
  const episodesDataContent = animeDataIdDataContent?.episodes;
  const popularityDataContent = animeDataIdDataContent?.popularity;
  const favoritesDataContent = animeDataIdDataContent?.favorites;
  const sourceDataContent = animeDataIdDataContent?.source;
  const yearDataContent = animeDataIdDataContent?.year;
  const seasonDataContent = animeDataIdDataContent?.season;
  const ratingDataContent = animeDataIdDataContent?.rating;
  const producersDataContent = animeDataIdDataContent?.producers;
  const trailer = animeDataIdDataContent?.trailer;
  // end of data from the animeDataIdData endpoint
  console.log(largeImagesDataContent);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-row">
          <div className="flex flex-row gap-2">
            <div
              className={`w-[18vw] h-auto max-h-[70vh] px-2 bg-[rgba(16,16,16,1)] `}
            >
              {animeEpisodesDataContent?.some((item) => item.mal_id > 29) ? (
                <div className="grid grid-cols-4 w-full h-full p-2 gap-3 overflow-y-scroll">
                  {animeEpisodesDataContent?.map((episodes) => {
                    const titles = episodes?.title;
                    const episodeNumber = episodes?.mal_id;
                    const airedDate = episodes?.aired;

                    return (
                      <div
                        key={episodeNumber}
                        className=" px-3 py-2 text-[12px] rounded-lg bg-red-600 w-fit"
                      >
                        {episodeNumber}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  className={`grid grid-cols-1 w-full h-full  justify-start `}
                >
                  {animeEpisodesDataContent?.map((episodes) => {
                    const titles = episodes?.title;
                    const episodeNumber = episodes?.mal_id;
                    const airedDate = episodes?.aired;
                    // console.log((animeEpisodesDataContent?.filter(item=>item?.episode.mal_id) %2==0));

                    return (
                      <CustomButton
                        onClick={() => handleCurrentEpisode(episodeNumber)}
                        key={episodeNumber}
                        classname={` grid grid-cols-[auto,1fr] gap-5 px-3 hover:bg-[rgba(255,255,255,0.8)] hover:text-black hover:font-bold  focus:bg-white focus:text-black focus:font-bold  ${
                          episodeNumber % 2 === 0
                            ? `bg-teal-700`
                            : `bg-teal-900`
                        } text-[12px] justify-start `}
                      >
                        <div>{episodeNumber}</div>
                        <div>{titles}</div>
                      </CustomButton>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-[50vw] h-[70vh] justify-center flex items-center bg-green-700"
              style={{
                backgroundImage:`url(${largeImagesDataContent})`,
                backgroundPosition:"Center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
              }}>
                 <div className="w-32 h-32 flex justify-center items-center bg-black rounded-full border border-[8px] border-teal-600"> <img src="playBut.png" className="text-xs " alt="play button" /></div>
              </div>
              <div className="flex w-full justify-between flex-row ">
                <div className=" flex gap-3 flex-col bg-[rgba(34,34,34,0.7)] p-3 w-[60%] h-48 ">
                  <span> You're currently watching </span>{" "}
                  <span className="text-teal-500 font-md">
                    {" "}
                    Episode{currentEpisode}
                  </span>
                  <span>
                   unfortunately to view these series go to the following sites listed
                  </span>
                </div>
                <div
                  className=" bg-pink-700 w-full h-48 px-4 flex flex-col gap-3 py-3"
                  style={{
                    background: "rgba( 35, 27, 27, 0.5 )",
                    boxShadow: " 0 2px 2px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 9px )",
                    webkitBackdropFilter: "blur( 9px )",
                    // borderRadius: "10px",
                    // border: "1px solid rgba( 255, 255, 255, 0.18 )",
                  }}
                >
                  {animeStreamingLinkDataContent?.map((items, index) => {
                    const streamingName = items?.name;
                    const streamingUrl = items?.url;
                    // console.log(animeStreamingLinkDataContent);
                    return (
                      <div
                        key={index}
                        className="bg-teal-700  rounded pl-3 "
                        style={{
                          backgroundColor: "rgb(37,154,129)",
                          background:
                            "linear-gradient(90deg, rgba(37,154,129,0.6223739495798319) 22%, rgba(40,47,45,0.6615896358543417) 58%, rgba(40,42,47,0.6896008403361344) 74%, rgba(8,7,51,0.7400210084033614) 86%)",
                        }}
                      >
                        <div className="">{streamingName}</div>
                        <div>{streamingUrl}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
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
                {tabsData?.map((items, index) => (
                  <span
                    onClick={() => handleTabData(index)}
                    key={index}
                    className={` ${
                      tabState === items ? `bg-red-400` : ``
                    } rounded p-1 text-[12px] cursor-pointer`}
                  >
                    {items}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {reviewsDataContent
                ?.sort((a, b) => b.favorites - a.favorites)
                ?.slice(0, 5)
                ?.map((response, index) => {
                  const images = response?.entry?.images?.jpg?.image_url;
                  const titles = response?.entry?.title;
                  //  const rank=response?.rank;
                  const type = response?.type;
                  const score = response?.score;
                  //  const popularity=response?.popularity
                  //  const favorites=response?.favorites
                  //  console.log(response);
                  return (
                    <div
                      key={index}
                      className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                    >
                      <div className="text-[2.3rem] font-bold text-center">
                        {index}
                      </div>
                      <div className="w-full">
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
                          <span>. {type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mobile:flex lgMobile:flex sm:flex  mobile:flex-col-reverse lgMobile:flex-col-reverse sm:flex-col-reverse lg:grid lg:grid-cols-[2fr,1fr]  w-[68vw] p-2 gap-5 justify-start h-72 ">
          <div className="w-full flex flex-row">
            <div className="w-full h-32">
              <img src={`url(${imagesDataContent})`} alt="image" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-xs">
                <div className="text-2xl">{titlesDataContent}</div>
                <div className="italic">
                  <span>{ratingDataContent}</span> <span></span>
                  {typeDataContent}
                </div>
              </div>
              <div className="text-[10px]">{synopsisDataContent}</div>
              <div className="text-[10px] font-semibold grid grid-cols-2">

              <div >
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">Episode: </span>
                  <span>{episodesDataContent} </span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">Duration: </span>
                  <span>{durationDataContent}</span>
                </div>

                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">rank: </span>
                  <span>{rank}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">score: </span>
                  <span>{scoreDataContent}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">season: </span>
                  <span>{seasonDataContent}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">source: </span>
                  <span>{sourceDataContent}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">favorites: </span>
                  <span>{favoritesDataContent}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">popularity: </span>
                  <span>{popularityDataContent}</span>
                </div>
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">producers: </span>
                  <span>{producersDataContent?.map((items,index)=>{
                    return(
                      <span key={index}>{items.name}</span>
                    )
                  })}</span>
                </div>
                
                <div>
                  {" "}
                  <span className="text-teal-300 font-sm text-[10px]">year: </span>
                  <span>{yearDataContent}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className=" flex flex-col w-[350px] h-32 rounded-xl bg-yellow-100 gap-2 text-black p-3 pl-7">
              <div className="text-2xl font-bold">
                {"5/10"} <span className="text-xs">{"900"} reviews</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-[2.3rem] w-[12rem] flex flex-row gap-2 items-center justify-center bg-black rounded-xl p-2 ">
                  <div className=" bg-gray-400 w-8 h-6 rounded-full hover:bg-[rgba(400,662,100,.8)]"></div>
                  <div className=" bg-gray-400 w-8 h-6 rounded-full hover:bg-[rgba(400,662,100,.8)]"></div>
                  <div className=" bg-gray-400 w-8 h-6 rounded-full hover:bg-[rgba(400,662,100,.8)]"></div>
                  <div className=" bg-gray-400 w-8 h-6 rounded-full hover:bg-[rgba(400,662,100,.8)]"></div>
                  <div className=" bg-gray-400 w-8 h-6 rounded-full hover:bg-[rgba(400,662,100,.8)]"></div>
                </div>
                <div className="text-xs pl-4">
                  You have rated: <span>{"masterpeice"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[4fr,1fr]">
          <div className="flex w-full min-h-[1200px] bg-orange-500">
            comments
          </div>
          <div
            className={`w-full grid grid-rows-[auto,1fr]  gap-2 py-2 ${
              viewPortWidth ? `hidden` : `block`
            }`}
          >
            {" "}
            <div className="pl-2 text-xl">Recommended</div>
            <div className="flex flex-col gap-2">
              {reviewsDataContent
                ?.sort((a, b) => a.score - b.score)
                ?.slice(0, 12)
                ?.map((response, index) => {
                  const images = response?.entry?.images?.jpg?.image_url;
                  const titles = response?.entry?.title;
                  //  const rank=response?.rank;
                  const type = response?.type;
                  const score = response?.score;
                  //  const popularity=response?.popularity
                  //  const favorites=response?.favorites
                  //  console.log(response);
                  return (
                    <div
                      key={index}
                      className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                    >
                      <div className="text-[2.3rem] font-bold text-center">
                        {index + 1}
                      </div>
                      <div className="w-full">
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
                          <span>. {type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSectionWatchAnime;
