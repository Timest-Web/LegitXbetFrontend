import React from "react";

interface PopUpContainerProps {
  popUpContent: React.JSX.Element;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({ popUpContent }) => {
    
  return (
    <div className="bg-white w-[980px] h-[648px] rounded-2xl p-12">
      {popUpContent}
    </div>
  );
};

export default PopUpContainer;
