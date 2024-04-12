import { Children } from "react";

const CustomButtonBrowse = ({ classname,children,onClick,style}) => {
    const buttonClasses=`${classname}`
  return (
  <button className={`${buttonClasses} hover:bg-[rgba(112,110,122,.6)] text-start pl-6 text-xs rounded-md w-40 lg:w-64 md:w-48 mobile:w-24 text-[10px] h-6 bg-gray-700`} onClick={onClick} style={style}>
    {children}
    </button>
  )
};

export default CustomButtonBrowse;
