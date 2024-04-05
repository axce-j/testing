const FooterSection=()=>{
    return(
        <>
           <footer
          className="py-[5rem]  relative px-[2rem] w-full mobile:h-[300px] mobile:py-[1rem] lgMobile:h-[350px] lgMobile:py-[2rem]"
          style={{
            backgroundImage: "url(/img10.jpg)",
            backgroundColor: "rgba(0,0,0,.7)",
            backgroundBlendMode: "overlay",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col  justify-start h-auto gap-5  box-border mobile:gap-2 mobile:text-[60%] lgMobile:gap-3">
            {" "}
            <div>
              <div className=" flex text-xs flex-row items-end gap-2 ">
                <span className="text-2xl ">A-Z List</span>
                <span className="text-[rgb(63,74,73)]">
                  Searching anime order by alphabet name A-z
                </span>
              </div>
              
            </div>
            <div className="flex flex-col gap-3">
              <div className=" flex flex-row items-center gap-6">
                {" "}
                <span>
                  <img src="/logo3.png" alt="logo" width="150" className="mobile:w-20" />
                </span>
                <span className="bg-white flex flex-row gap-3 rounded-2xl text-black p-2 text-xs font-bold mobile:w-20 mobile:gap-2 mobile:text-[10px] mobile:text-center mobile:flex-col">
                  Join now
                  <span className="flex flex-row gap-2 mobile:gap-3">
                  <i >
                    <img src="/twitter.png" className="mobile:w-[15px]" alt="twitter" />
                  </i>
                  <i>
                    <img src="discord.png" className="mobile:w-[15px]" alt="discord" />
                  </i>
                  <i>
                    <img src="messenger.png" className="mobile:w-[15px]" alt="messenger" />
                  </i>
                  </span>
                
                </span>
              </div>
              <div className=" flex flex-row gap-5   ">
                <span className="text-[rgb(63,74,73)]  ">Get help here</span>
                <span>FAQ</span>
                <span>Contact</span>
                <span>Request</span>
              </div>
              <div className="flex flex-row gap-5  ">
                <span className="text-[rgb(63,74,73)]  text-medium">
                  Check my friends
                </span>
                <span>fmovies</span>
                <span>read manga online</span>
                <span>Request</span>
              </div>
            </div>
            <div className=" text-[rgb(63,74,73)] lgMobile:text-xs ">
              <span className=" block">
                Copyright © aniwave.to. All Rights Reserved
              </span>
              <span>
                This site does not store any files on its server. All contents
                are provided by non-affiliated third parties.
              </span>
            </div>
          </div>
        </footer>
        </>
    )
}
export default FooterSection;