import React from "react";

interface PopUpContainerProps {
  popUpContent: React.JSX.Element;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({ popUpContent }) => {
    
  return (
    <div className="bg-white rounded-2xl p-6">
      {popUpContent}
    </div>
  );
};

export default PopUpContainer;
