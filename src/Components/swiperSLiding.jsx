import { Box } from "@chakra-ui/react";
import CustomButton from "./customButton";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Pagination } from 'swiper/modules';
const SwiperSliding=({subtitle,rating,viewPortWidth,animeTitles,topAnimeData})=>{
 const animeHeaderContent=topAnimeData?.data?.data
//  console.log(animeHeaderContent)
    return(
        
      <div className=" w-[96vw]  ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full  py-8 ">
        

{animeHeaderContent?.map((response,index)=>{
 const images= response?.images?.jpg?.large_image_url;
 const titles=response?.title_english;
 const animeRating=response?.rating;
 const synopsis= response?.synopsis;
 const animeYear=response?.year;

//  console.log({synopsis})

 const truncateSynopsis=(text,maxlength)=>{
  if (!text ){
    return ""
  }
  const words=text.split(' ')

  if(words.length >maxlength){
    return words.slice(0,maxlength).join(' ') + "...";

  } else {
    return text
  }
 };

//  console.log(titles);

    return(
        
        <SwiperSlide key={index}   >  
        <div className="  lg:mt-10   lg:p-5" style={viewPortWidth ? {
    display: "block",
    backgroundImage: `url(${images})`,
    backgroundColor:"rgba(0,0,0,0.8)",
    backgroundBlendMode:"overlay",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "30vh",
    width: "100%",
    height: "30rem"
  } : {
    display:"grid",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 2fr",
}
  }>
    
       <div className={` flex flex-col  text-start px-4 box-border   h-full gap-4 text-[#9797a596] mobile:w-full mobile:items-center lgMobile:w-[70%] ${viewPortWidth? `justify-end w-[50%]   py-2`:`w-full justify-center`} `}>
   
   <Box className="text-[3rem] text-white font-bold md:text-xl sm:text-xl lgMobile:text-xl mobile:text-xl">
     <h1 >
    {titles}
     </h1>
   </Box>
   <Box className={` flex flex-row bg- items-center justify-start gap-2 md:hidden sm:hidden mobile:hidden lgMobile:hidden`}>
     <CustomButton
       classname=" border-[3px] rounded-lg 
                              border-teal-900    text-center font-bold flex items-center text-xs w-[50px] 
                              h-[30px] justify-center"
     >
      {animeRating}
     </CustomButton>

     <CustomButton
       classname="  bg-teal-900 rounded-lg flex justify-center items-center font-black text-xs w-[30px] h-[30px]
             "
     >
       HD
     </CustomButton>
     <CustomButton
       classname="  bg-teal-900 rounded-lg flex justify-center items-start font-bold text-lg w-[30px] h-[30px]
             "
     >
       {subtitle}
     </CustomButton>
     <i>
       <img
         src="mic.png"
         className="w-[20px] h-[20px]"
         alt="mic"
       />
     </i>
     <span
       className="
             flex jsutify-center items-center text-center"
     >
       {animeYear}
     </span>
   </Box>
   <Box className="mobile:text-center">
   {truncateSynopsis(synopsis,20)}
   </Box>


     <div  className="   w-full flex justify-start mobile:justify-center"> 
       <CustomButton
             classname=" flex flex-row text-white rounded-xl p-3 items-center gap-3  font-bold
               bg-teal-800 mobile:items-centerhover:bg-teal-900
               "
           >
             <i>
               <img src="playBut.png" className=" w-3  " alt="play button" />
             </i>{" "}
             Play Now
           </CustomButton></div>
         

 
</div>
 
<div
 className={`  ${
   !viewPortWidth
     ? `border-2 border-[#767676a7] rounded-xl object-fit  max-h-[500px] overflow-hidden flex justify-center items-center`
     : `hidden`
 }`}
>
 <img className="rounded-xl   w-[100%]" src={images} alt="" />
</div>
    </div>
        </SwiperSlide>
         
    )
})}

</Swiper>

      </div>

      
         
      
    )
}
export default SwiperSliding;