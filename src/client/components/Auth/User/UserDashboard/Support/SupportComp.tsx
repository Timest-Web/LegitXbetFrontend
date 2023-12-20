import React from "react";

interface SupportProps{
  supportContent: React.JSX.Element;
}

const SupportComp: React.FC<SupportProps> = ({supportContent}) => {
supportContent

  return (
    <div className="bg-white w-[980px] h-[544px] rounded-[20px] p-8 mt-4">
      <div className="flex space-x-6 font-bold pl-6 pb-2 border-b-2 border-solid">
        <h3 className="opacity-50 hover:opacity-100 ">Live Chat</h3>
        <h3 className="opacity-50 hover:opacity-100 ">Open a Ticket</h3>
      </div>
      <div>
        {supportContent}
      </div>

    </div>
  );
};

export default SupportComp;
