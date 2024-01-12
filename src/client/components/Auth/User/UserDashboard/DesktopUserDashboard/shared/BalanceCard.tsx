import React from "react";
import TagIcon from "@/src/client/shared/Svg/TagIcon";
import RepeatIcon from "@/src/client/shared/Svg/RepeatIcon";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import SubmitButton from "./SubmitButton";

interface BalanceCardProps {
  firstButtonText: string;
  secondButtonText: string;
  buttonState: boolean;
  secondButton: boolean;
  balanceButtonAction?: (buttonType: "first" | "second") => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  firstButtonText,
  secondButtonText,
  buttonState,
  balanceButtonAction,
  secondButton,
}) => {
  const handleFirstButtonClick = () => {
    if (balanceButtonAction) {
      balanceButtonAction("first");
    }
  };

  const handleSecondButtonClick = () => {
    if (balanceButtonAction) {
      balanceButtonAction("second");
    }
  };

  return (
    <div className=" bg-white rounded-2xl w-[15.063rem] h-[10rem] md:w-[30.0625rem] md:h-[16.3125rem] p-3 md:p-8 text-xs md:text-base flex justify-between ">
      <section className="flex flex-col space-y-3 ">
        <div className="bg-[#ECEEF1] w-[3.25rem] h-[3.25rem] md:w-[4.375rem] md:h-[4.375rem] rounded-full flex justify-center items-center ">
          <TagIcon />
        </div>
        <div className="flex space-x-2 ml-1 md:ml-0 md:mt-6 md:mb-2 font-bold">
          <RepeatIcon />
          <h3>NGN 26.24</h3>
        </div>
        <h3 className="mb-2 ml-1 md:ml-0 text-[13px] md:text-sm">Balance</h3>
        <div className="flex space-x-3 hover:[&>*]:opacity-70">
          {buttonState && (
            <div onClick={handleFirstButtonClick}>
              <SubmitButton buttonContent={firstButtonText} />
            </div>
          )}
          {secondButton && (
            <div onClick={handleSecondButtonClick}>
              <SubmitButton buttonContent={secondButtonText} />
            </div>
          )}
        </div>
      </section>
      <div>
        <MoreIcon />
      </div>
    </div>
  );
};

export default BalanceCard;
