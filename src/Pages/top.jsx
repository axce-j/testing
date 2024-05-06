import CustomButton from "../Components/customButton.jsx";
import HomeInput from "../Components/homeInput.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Top = () => {
  const navigate = useNavigate();

  const handleIndividualClick = (e) => {
    navigate(`${e}`);
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    //  if (clicked===false){ setClicked(true)
    //   console.log("clicked")}
    //   else if (clicked===true){
    //       setClicked(false)
    //   }
  };

  const [dropped, setDropDOwn] = useState(false);

  const toggleDropDown = () => {
    setDropDOwn(!dropped);
  };

  return (
    <div
      style={{
        backgroundImage: "url(img6.jpg) ",
      }}
      className="h-screen  bg-[url(img6.jpg)] w-screen bg-cover  bg-center bg-no-repeat box-border bg-white min-w-[297px]"
    >
      <div
        style={{
          background: "linear-gradient(to bottom, #2f44466b,  black )",
          backdropFilter: "grayscale(100%)",
        }}
        className="p-3 h-[100vh] w-full  overflow-hidden"
      >
        <div className="text-white text-center text-9xl flex flex-col justify-center items-center gap-4">
          <div>
            <img src="logo3.png" alt="" />
          </div>
          <div >
            <HomeInput className="md:w-[35rem] w-[sm:25rem]" height="2rem" placeholder="Search anime..."/>
          </div>
        </div>
        <div className="text-white bg-black  w-full relative   ">
          <CustomButton
            onClick={() => handleIndividualClick("home")}
            classname={`  bg-[rgba(11,10,8)] rounded-full h-[6rem] w-[6rem] p-6  break-words text-m font-bold absolute  lg:inset-x-[47%]  lg:inset-y-[12%] sm:inset-x-[8%] sm:inset-y-[42%] inset-x-[42%] inset-y-[10%]  ${
              clicked ? `hidden` : `block`
            }`}
          >
            Home
          </CustomButton>
          <CustomButton
            onClick={() => handleIndividualClick("browse")}
            classname={`
                                                     bg-[rgba(12,13,15)] rounded-full h-[6rem] w-[6rem] p-  break-words text-m  font-bold absolute lg:inset-x-[12%] lg:inset-y-[44%] sm:inset-x-[33%] sm:inset-y-[66%]
                                                     inset-x-[66%] inset-y-[26%] ${
                                                       clicked
                                                         ? `hidden`
                                                         : `block`
                                                     }`}
          >
            Browse
          </CustomButton>
          <CustomButton
            onClick={() => handleIndividualClick("news")}
            classname={`
                                                      bg-[rgba(26,13,15)] rounded-full h-[6rem] w-[6rem] p-3  break-words text-m font-bold absolute lg:inset-x-[82%] lg:inset-y-[44%] sm:inset-x-[66%] sm:inset-y-[64%]
                                                      inset-x-[59%] inset-y-[48%] ${
                                                        clicked
                                                          ? `hidden`
                                                          : `block`
                                                      }`}
          >
Anime News          </CustomButton>
          <CustomButton
            onClick={() => handleIndividualClick("readManga")}
            classname={`
                                                      bg-[rgba(26,13,23)] rounded-full h-[6rem] w-[6rem] p-4  break-words text-m font-bold absolute lg:inset-x-[47%] lg:inset-y-[78%] sm:inset-x-[85%] sm:inset-y-[39%] inset-x-[39%] inset-y-[65%] ${
                                                        clicked
                                                          ? `hidden`
                                                          : `block`
                                                      }`}
          >
            Manga Page
          </CustomButton>
        </div>
        <div>
          <CustomButton
            onClick={handleClick}
            classname="
                                                    bg-[rgba(135,137,126)] rounded-full h-[10rem] w-[10rem]
                                                    lg:h-[4rem] lg:w-[8rem]
                                                    lg:text-md
                                                    lg:p-4
                                                    lg:font-extra-bold
                                                    mobile:h-[8rem] mobile:w-[8rem]
                                                    mobile:text-md
                                                    mobile:p-4
                                                    mobile:font-extra-bold p-8 break-words text-2xl font-bold absolute lg:inset-x-[46%] lg:inset-y-[46%] sm:inset-x-[44%] sm:inset-y-[29%] inset-x-[13%] inset-y-[32%]"
          >
            Explore
          </CustomButton>
        </div>
      </div>

      {!dropped && (
        <CustomButton
          classname=" text-white p-5  absolute bottom-1 left-1"
          onClick={toggleDropDown}
        >
          About Us
        </CustomButton>
      )}
      <div className="text-white flex w-[100vw]justify-center items-end">
        {dropped && (
          <div className="gap-4 text-sm gap-3  bg-black text-start flex flex-col justify-center items-ce w-full">
            <div className=" max-w-[60vw]">


            <div className="w-[full]">
              <h1 className="text-2xl">
                Aniwave.to - Watch Anime Online for FREE
              </h1>
              Near the end of 2016, after checking popular free anime streaming
              sites, we found most sites lacked a good user interface (UI) and
              did not provide a good user experience (UX). So, our product
              development team created 9anime to provide anime fans with a
              better one.
            </div>
            <div className="w-full">
              Because of DMCA issues and multiple ISPs blocking our domain, by
              the end of 2023, we decided to rebrand 9anime as AniWave. This new
              wave aims to bring even better things to anime fans.
            </div>
            <div className="w-full">
              <h1 className="text-2xl">1/ Whats Aniwave?</h1>
              Aniwave is a free anime streaming site where you can watch anime
              online in HD quality for free with English subtitles or dubbing.
              You can also download any anime you want without registration or
              payment required. Everything is free!
            </div>
            <div className="w-full">
              <h1 className="text-2xl">2/ Is Aniwave.to safe?</h1>
              Yes. We started this site to improve UX and are committed to
              keeping our users safe. We encourage all our users to notify us if
              anything looks suspicious. Please understand that we do have to
              run advertisements to maintain the site.
            </div>
            <div className="w-full">
              <h1 className="text-2xl">
                3/ What make Aniwave.to the best site to watch anime free
                online?
              </h1>
              - Content library: We were only a few hundred of old animes behind
              kisanime when it was around. We have been adding new and old
              animes every hour to our library. You can find almost everything
              here. After the closing of kissanime, we become the largest anime
              library on the web.
              <div>
                - Streaming experience: We have top of the line streaming
                servers. You can simply choose one that is fast for you.
              </div>
              <div>
                - Quality/Resolution: All our video files are encoded in highest
                possible resolution. We also have quality setting function that
                allows every user to enjoy streaming regardless of their
                internet speed.
              </div>
              <div>
                - Updates: Our content is updated hourly, most of the works done
                automatically so you will get update as fast as possible.
              </div>
              <div>
                - User interface: We focus on the simple and easy to use, so you
                will feel the life is easier here. We also have almost every
                feature that other anime streaming sites have, but not the
                opposite.
              </div>
              - Device compatibility: Aniwave works fine on both desktop and
              mobile devices, even with old browsers, so you can enjoy your
              anime anywhere you want.
              <div>
                So, if you want a good and safe place to watch anime online for
                free, give Aniwave a try, and if you like what we provided,
                please help us by sharing 9anime to your friends and do not
                forget to bookmark our site.
              </div>
              Thanks!
            </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Top;
