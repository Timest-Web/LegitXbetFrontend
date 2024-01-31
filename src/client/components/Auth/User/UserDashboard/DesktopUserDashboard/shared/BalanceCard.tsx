import React, { useContext, useState } from "react";
import TagIcon from "@/src/client/shared/Svg/TagIcon";
import RepeatIcon from "@/src/client/shared/Svg/RepeatIcon";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import SubmitButton from "./SubmitButton";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";

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

  const { balance, setBalance } = useContext(BalanceContext)!;
  const { totalPersonalDetails, handleInputChange } = useProfileContext()!;

  const emptyPersonalDetails = Object.values(totalPersonalDetails).some(
    (value) => value === ""
  );

  return (
    <div className=" bg-white rounded-2xl w-[99.5%] h-[13.5rem] md:w-[30.0625rem] md:h-[16.3125rem] p-4 md:p-8 text-xs md:text-base flex justify-between ">
      <section className="flex flex-col space-y-2 md:space-y-3 ">
        <div className="bg-[#ECEEF1] w-[4.25rem] h-[4.25rem] md:w-[4.375rem] md:h-[4.375rem] rounded-full flex justify-center items-center ">
          <TagIcon />
        </div>
        <div className="flex space-x-2 ml-1 md:ml-0 md:mt-6 md:mb-2 font-bold">
          <RepeatIcon />
          <h3 className="text-base md:text-sm">
            {!emptyPersonalDetails
              ? `NGN ${balance.toLocaleString()}`
              : "- - - -"}
          </h3>
        </div>
        <h3 className="mb-2 ml-1 md:ml-0 text-base md:text-sm">Balance</h3>
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
