import React from "react";

interface GeneralCardProps {
  generalCardContent: React.JSX.Element;
}

const GeneralCard: React.FC<GeneralCardProps> = ({ generalCardContent }) => {
  return (
    <div className="bg-white w-[61.25rem] h-[34rem] rounded-[1.25rem] p-8 mt-4">
      <div className="flex space-x-2 font-bold mb-4 cursor-pointer">
        <h3 className="opacity-50 hover:opacity-100">Live Chat</h3>
        <h3 className="hover:opacity-100">Open a Ticket</h3>
      </div>
      <hr></hr>
      {generalCardContent}
    </div>
  );
};

export default GeneralCard;
