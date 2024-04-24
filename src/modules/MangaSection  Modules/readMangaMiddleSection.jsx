import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/customButton";


const ReadMangaMiddleSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white w-full ">
        <div
          className=" h-[600px] w-full text-xl bg-[url(/img12.jpg)]  font-bold  flex flex-col justify-center items-center"
          style={{
            
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="  flex flex-col gap-4 items-center justify-center">
            {" "}
            <span>Read Manga Online For Free</span>
            <span>Unveil Your Love for Manga</span>
            <CustomButton
              onClick={() => navigate("/home")}
              classname="bg-teal-800 text-xl w-48 p-2 rounded-lg"
            >
              Go to HomePage
            </CustomButton>
          </div>
        </div>
        <div >
          <div className="bg-teal-900 h-full flex flex-col 
          gap-4 p-3 rounded-lg mx-10  -translate-y-20">
            <div className="w-full text-center font-extrabold bg-white text-black rounded">
              launches next year
            </div>
            <div>
              MangaFire - Read Manga Online Free Are you looking for a platform
              to read manga online? Look no further than our website! With over
              30,000 titles, we offer an extensive collection of manga comics
              for all readers. Our platform provides a user-friendly interface
              that is easy to navigate and explore, so you can quickly find your
              desired title.
            </div>

            <div>
              We have a vast range of genres and sub-genres, ensuring there is
              something for everyone. From romance to action, we have got it all
              covered. We are always updating our platform with new and exciting
              manga titles, and all our comics are of high-quality scans. You'll
              never be disappointed with the quality of the images.
            </div>

            <div>
              Safe to use We understand how annoying it is to deal with pop-up
              ads and unwanted distractions while reading, which is why we have
              zero pop-up ads. Our platform is completely safe to use, and your
              reading experience will not be disrupted by unwanted
              advertisements.
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default ReadMangaMiddleSection;
