import { Children } from "react";

const CustomButton = ({ classname,children,onClick,style}) => {
    const buttonClasses=`${classname}`
  return (
  <button className={buttonClasses} onClick={onClick} style={style}>
    {children}
    </button>
  )
};

export default CustomButton;
