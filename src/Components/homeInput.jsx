import { CheckboxIcon, InputGroup,Input, InputLeftElement, InputRightElement } from "@chakra-ui/react";

const HomeInput=({width,height,placeholder,onChange})=>{
  const widthNew=`${width}`
  const heightNew=`${height}`
  const placeholderNew=`${placeholder}`
  const handleChange=(e)=>{
    if(onChange){
      onChange(e.target.value)
    }
  }
    return(
    <>
    <InputGroup width={widthNew} >
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize=".8rem"
              height={heightNew}
            >
              <img src="Vector.png" width="40%"  alt="" />
            </InputLeftElement>
            <Input height={heightNew}backgroundColor="#272424d9" 
            fontSize=".8rem"
            placeholder={placeholder}
            onChange={handleChange}
             />
            <InputRightElement fontSize=".7rem" width="7rem" height={heightNew}>
              <CheckboxIcon color="green.500" />
              <div className="flex flex-row gap-2  items-center w-100%">
              <i> <img src="book.png" width="11"alt="" /></i>
                Easy Access
              </div>
                
            </InputRightElement>
          </InputGroup>
    </>
    )
}

export default HomeInput;