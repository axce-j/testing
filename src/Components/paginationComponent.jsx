import CustomButton from "./customButton";

const PaginationComponent=({pagination,paginationNumbers , paginationNumbersArray,manageNextButton,managePreviousButton, setPagination,setToPaginationEnd , setPaginationNumbers,managePaginationOnClick,paginationNumbersCurrentPage})=>{

  
    
      return(
        <>
          <div className="bg-gray-700 px-2 h-[30px] flex items-center  rounded">
          <CustomButton
          onClick={()=>managePreviousButton()}
          classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              {"<"}
            </CustomButton>
            <CustomButton onClick={()=>managePaginationOnClick(paginationNumbersArray[0])} classname={`px-2 hover:bg-teal-800 ${paginationNumbersCurrentPage==paginationNumbersArray[0]?`bg-teal-600`:``} w-full h-full `}>
              {paginationNumbersArray[0]}
            </CustomButton>
            <CustomButton  onClick={()=>managePaginationOnClick(paginationNumbersArray[1])} classname={`px-2 hover:bg-teal-800 ${paginationNumbersCurrentPage==paginationNumbersArray[1]?`bg-teal-600`:``} w-full h-full `}>
            {paginationNumbersArray[1]}
            </CustomButton>
            <CustomButton onClick={()=>managePaginationOnClick(paginationNumbersArray[2])} classname={`px-2 hover:bg-teal-800 ${paginationNumbersCurrentPage==paginationNumbersArray[2]?`bg-teal-600`:``} w-full h-full `}>
            {paginationNumbersArray[2]}
            </CustomButton>
            <CustomButton onClick={()=>managePaginationOnClick(paginationNumbersArray[3])} classname={`px-2 hover:bg-teal-800 ${paginationNumbersCurrentPage==paginationNumbersArray[3]?`bg-teal-600`:``} w-full h-full `}>
            {paginationNumbersArray[3]}
            </CustomButton>
            <CustomButton onClick={()=>managePaginationOnClick(paginationNumbersArray[4])} classname={`px-2 hover:bg-teal-800 ${paginationNumbersCurrentPage==paginationNumbersArray[4]?`bg-teal-600`:``} w-full h-full `}>
            {paginationNumbersArray[4]}
            </CustomButton>
            <CustomButton
            onClick={()=>manageNextButton()
              
            }
            classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              {">"}
            </CustomButton>
            <CustomButton onClick={()=>setToPaginationEnd()} classname="px-2 hover:bg-teal-800 w-full h-full focus:bg-teal-700">
              {">>"}
            </CustomButton>
          </div>

          
        </>
    )
}

export default PaginationComponent;