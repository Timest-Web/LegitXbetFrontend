import React, { useState } from "react";
import DepositCardForm from "./DepositCardForm";
import BankTransfer from "./BankTransfer";

const DepositContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["Card Debit", "Bank Transfer", "Direct Bank USSD"];

  return (
    <div className="bg-white text-sm md:text-base rounded-2xl p-6 md:p-12">
      <ul className="flex space-x-16 font-bold md:mb-3">
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
      </p>
    </div>
  );
};

export default DepositContainer;
