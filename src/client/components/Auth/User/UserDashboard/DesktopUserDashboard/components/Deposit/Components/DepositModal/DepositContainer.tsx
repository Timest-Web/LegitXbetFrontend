import React, { useState } from "react";
import DepositCardForm from "./DepositCardForm";
import BankTransfer from "./BankTransfer";
import paystackLogo from "../../../../../assets/PaystackImage.svg";
import flutterwaveLogo from "../../../../../assets/FlutterwaveLogo.png"
import Image from "next/image";
import Link from "next/link";

const DepositContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["Card Debit", "Bank Transfer", "Direct Bank USSD"];

  return (
    <div className="bg-white flex space-x-8 text-sm md:text-base md:w-[36rem] md:h-[15rem] rounded-2xl p-6 md:p-12">
      {/* <ul className="flex space-x-16 font-bold md:mb-3">
        {tabNames.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabChange(index + 1)}
            className={activeTab === index + 1 ? "opacity-100 cursor-pointer" : "opacity-50 cursor-pointer"}
          >
            {tab}
          </li>
        ))}
      </ul>
      <hr />
      {activeTab === 1 && <DepositCardForm />}
      {activeTab === 2 && <BankTransfer />}
      {activeTab === 3 && <h3>USSD CODE</h3>}
      <p className=" md:mt-12 font-bold">
        NB - Minimum deposit amount is NGN 100.00 - you can deposit at least NGN
        100.00 in one transaction.
      </p> */}
     <Link href="/user-dashboard/deposit/deposit-paystack"><div className="drop-shadow-lg">
        <Image width={570} height={50} src={paystackLogo} alt="paystack-logo" />
      </div></Link> 
      <div className="drop-shadow-lg  ">
        <Image width={570} height={30} src={flutterwaveLogo} alt="flutterwave-logo" />
      </div>
    </div>
  );
};

export default DepositContainer;
