import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/customButton";

const WatchMiddleSection = ({ animeBlocks }) => {
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
            /Watch together
          </div>
          <div className="text-4xl ">Browse</div>
          <div className="flex flex-row items-center justify-between">
            {" "}
            <span className="flex gap-3 text-gray-600">
              <CustomButton classname="hover:text-gray-400 focus:text-gray-300">
                All
              </CustomButton>
              <CustomButton classname="hover:text-gray-400 focus:text-gray-300">
                Live
              </CustomButton>
              <CustomButton classname="hover:text-gray-400 focus:text-gray-300">
                Schedule
              </CustomButton>
              <CustomButton classname="hover:text-gray-400 focus:text-gray-300">
                Waiting
              </CustomButton>
              <CustomButton classname="hover:text-gray-400 focus:text-gray-300">
                Ended
              </CustomButton>
            </span>{" "}
            <CustomButton classname="bg-white text-black p-1 rounded text-sm">
              My Rooms
            </CustomButton>
          </div>
        </div>
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
          {animeBlocks.map((item, index) => {
            return (
              <>
                <div className="bg-teal-900 hover:bg-teal-700 w-full h-auto flex flex-col gap-3 rounded-xl text-sm  p-3">
                  <div className="bg-[url(/img1.jpg)] bg-cover bg-center bg-no-repeat flex justify-start rounded-xl items-start pl-5 mobile:pl-2 lgMobile:pl-2 pt-4 w-[100%] h-[200px]">
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
export default WatchMiddleSection;
