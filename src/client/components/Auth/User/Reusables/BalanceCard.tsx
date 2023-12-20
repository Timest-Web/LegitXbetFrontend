import React from "react";
import TagIcon from "@/src/client/shared/Svg/TagIcon";
import RepeatIcon from "@/src/client/shared/Svg/RepeatIcon";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import SubmitButton from "./SubmitButton";

interface BalanceCardProps{
  buttonText: string;
  buttonState: boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({buttonText, buttonState}) => {
  return (
      <div className=" bg-white rounded-2xl w-[481px] h-[277px] p-8 text-base flex justify-between ">
        <section className="flex flex-col">
        <div className="bg-[#ECEEF1] w-[70px] h-[70px] rounded-full flex justify-center items-center ">
          <TagIcon/>
        </div>
            <div className="flex space-x-1 mt-6 mb-2 font-bold" >
                <RepeatIcon/>
                <h3>NGN 26.24</h3>
            </div>
            <h3 className="mb-2">Balance</h3>
           {buttonState && <SubmitButton buttonContent={buttonText}/>} 
        </section>
        <div><MoreIcon/></div>
      </div>
  );
};

export default BalanceCard;