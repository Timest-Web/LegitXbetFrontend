import React, { useState } from "react";
import paystackLogo from "../../../../../assets/Paystack_Logo.png";
import flutterwaveLogo from "../../../../../assets/Flutterwave_Logo.png";
import Image from "next/image";
import Link from "next/link";

const DepositContainer = () => {

  return (
    <div className="bg-[#ECEEF1] flex justify-center items-center md:justify-start text-sm md:text-base rounded-2xl md:p-1">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <Link href="/user-dashboard/deposit/deposit-paystack">
          <div className="flex justify-center items-center bg-white rounded-lg w-64 p-5 md:p-12 md:w-72 md:h-24 drop-shadow-xl ">
            <Image width={90} height={90} src={paystackLogo} alt="paystack-logo" />
          </div>
        </Link>
        <div className="flex justify-center items-center drop-shadow-lg w-64 p-4 rounded-lg  bg-white">
          <Link href="/user-dashboard/deposit/deposit-flutterwave">
            <Image width={110} height={110} src={flutterwaveLogo} alt="flutterwave-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositContainer;
