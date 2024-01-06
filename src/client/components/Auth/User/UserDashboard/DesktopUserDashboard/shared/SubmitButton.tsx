import React from "react";

interface SubmitButtonProps {
  buttonContent: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonContent }) => {
  return (
    <button className="bg-black text-white text-xs font-medium w-[5.813rem] h-[1.688rem] md:w-32 md:h-10 rounded md:p-2 ">
      {buttonContent}
    </button>
  );
};

export default SubmitButton;
