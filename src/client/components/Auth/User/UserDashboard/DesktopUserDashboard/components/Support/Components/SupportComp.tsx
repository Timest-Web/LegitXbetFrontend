import React from "react";
import Link from "next/link";

interface SupportProps{
  supportContent: React.JSX.Element;
  isLiveChat?: boolean
  isOpenTicket?: boolean
}

const SupportComp: React.FC<SupportProps> = ({supportContent, isLiveChat, isOpenTicket}) => {
supportContent

  return (
    <div className="bg-white w-full h-[34rem] rounded-[20px] p-8 mt-4">
      <div className="flex justify-center md:justify-start space-x-6 font-bold md:pl-6 pb-2 border-b-2 border-solid">
       <Link href='/user_dashboard/user_support'><h3 className={isLiveChat? "opacity:100":"opacity-50 hover:opacity-100 cursor-pointer "}>Live Chat</h3></Link> 
       <Link href='/user_dashboard/user_support/empty_ticket' ><h3 className={isOpenTicket? "opacity:100":"opacity-50 hover:opacity-100 cursor-pointer "}>Open a Ticket</h3></Link> 
      </div>
      <div>
        {supportContent}
      </div> 

    </div>
  );
};

export default SupportComp;
