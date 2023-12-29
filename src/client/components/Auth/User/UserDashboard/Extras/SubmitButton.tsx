import React from "react";

interface SubmitButtonProps {
  buttonContent: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonContent }) => {
  return (
    <button className="bg-black text-white font-medium w-32 h-10 rounded p-2">
      {buttonContent}
    </button>
  );
};

export default SubmitButton;
