import React, { useState } from "react";
import DepositCardForm from "./DepositCardForm";
import BankTransfer from "./BankTransfer";
import paystackLogo from "../../../../../assets/Paystack_Logo.png";
import flutterwaveLogo from "../../../../../assets/Flutterwave_Logo.png";
import Image from "next/image";
import Link from "next/link";

const DepositContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["Card Debit", "Bank Transfer", "Direct Bank USSD"];

  return (
    <div className="bg-[#ECEEF1]  text-sm md:text-base rounded-2xl p-10">
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
      <p className="font-bold mb-6">Kindly select the channel for payment below</p>
      <div className="flex flex-col justify-center items-center space-y-6">
        <Link href="/user-dashboard/deposit/deposit-paystack">
          <div className=" bg-white w-64 p-4 drop-shadow-xl ">
            <Image src={paystackLogo} alt="paystack-logo" />
          </div>
        </Link>
        <div className="drop-shadow-lg w-64 p-2  bg-white">
          <Link href="/user-dashboard/deposit/deposit-flutterwave">
            <Image src={flutterwaveLogo} alt="flutterwave-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositContainer;
