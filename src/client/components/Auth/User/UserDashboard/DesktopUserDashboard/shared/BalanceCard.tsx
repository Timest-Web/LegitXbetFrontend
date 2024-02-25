import React, { useContext, useState } from "react";
import TagIcon from "@/src/client/shared/Svg/TagIcon";
import RepeatIcon from "@/src/client/shared/Svg/RepeatIcon";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import SubmitButton from "./SubmitButton";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import Link from "next/link";

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
  const { totalPersonalDetails, setTotalPersonalDetails } = useProfileContext()!;
  console.log(totalPersonalDetails)


  const emptyPersonalDetails = Object.values(totalPersonalDetails).every(
    (value) => value === ""
  );

  return (
    <div className=" bg-white rounded-2xl w-[99.5%]  md:w-[18.0625rem]  p-4 md:p-8 text-xs md:text-base flex justify-between ">
      <section className="flex flex-col space-y-2 md:space-y-3 ">

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
            <Link href='/user-dashboard/deposit'><SubmitButton buttonContent={firstButtonText} /></Link>  
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
