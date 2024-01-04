import React from "react";

interface PopUpContainerProps {
  popUpContent: React.JSX.Element;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({ popUpContent }) => {
    
  return (
    <div className="bg-white w-[61.25rem] h-[40.5rem] rounded-2xl p-12">
      {popUpContent}
    </div>
  );
};

export default PopUpContainer;
