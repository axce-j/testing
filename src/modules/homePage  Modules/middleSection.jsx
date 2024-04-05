 
import SeriesDisplaySection from "../../Components/seriesDisplaySection.jsx"
import SwiperSliding from "../../Components/swiperSLiding.jsx"
const MiddleSection= ({rating,subtitle,viewPortWidth,animeBlocks,method,Days,viewPortWidth2,handleDisplaysection,displaySection,setDisplaySection,animeTitles})=>{
    return(
        <>
         <header
            className=" w-full flex flex-col justify-center items-center "
          >
           <SwiperSliding animeTitles={animeTitles} rating={rating} subtitle={subtitle} viewPortWidth={viewPortWidth}/>
          
            
          </header>
          
          {/* middle section of main page  */}
         
              <SeriesDisplaySection
              
              viewPortWidth={viewPortWidth} viewPortWidth2={viewPortWidth2}subtitle={subtitle} rating={rating} animeBlocks={animeBlocks} method={method} Days={Days} handleDisplaysection={handleDisplaysection} displaySection={displaySection} setDisplaySection={setDisplaySection}/>
           </>
    )
}

export default MiddleSection;