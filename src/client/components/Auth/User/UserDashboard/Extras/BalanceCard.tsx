import React from "react";
import TagIcon from "@/src/client/shared/Svg/TagIcon";
import RepeatIcon from "@/src/client/shared/Svg/RepeatIcon";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import SubmitButton from "./SubmitButton";

interface BalanceCardProps {
  buttonText: string;
  buttonState: boolean;
  balanceButtonAction?: ()=> void
}

const BalanceCard: React.FC<BalanceCardProps> = ({ buttonText, buttonState, balanceButtonAction }) => {
  return (
    <div className=" bg-white rounded-2xl w-[30.0625rem] h-[16.3125rem] p-8 text-base flex justify-between ">
      <section className="flex flex-col">
        <div className="bg-[#ECEEF1] w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center ">
          <TagIcon />
        </div>
        <div className="flex space-x-2 mt-6 mb-2 font-bold">
          <RepeatIcon />
          <h3>NGN 26.24</h3>
        </div>
        <h3 className="mb-2">Balance</h3>
        {buttonState && <div onClick={balanceButtonAction} ><SubmitButton buttonContent={buttonText} /></div>}
      </section>
      <div><MoreIcon /></div>
    </div>
  );
};

export default BalanceCard;
