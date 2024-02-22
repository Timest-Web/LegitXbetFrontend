import React, { useState } from "react";
import paystackLogo from "../../../../../assets/Paystack_Logo.png";
import flutterwaveLogo from "../../../../../assets/Flutterwave_Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import { useRouter } from "next/router";

const DepositContainer = () => {
  const { totalPersonalDetails, setTotalPersonalDetails } = useProfileContext()!;
  const router = useRouter();

  const handleProfileDetails = () => {
    if (Object.values(totalPersonalDetails).some((value) => value === "")) {
      alert("Fill Up Your Personal Details")
      router.push("/user-dashboard/profile");
    }
  };

  return (
    <div className="bg-[#ECEEF1] flex justify-center items-center md:justify-start text-sm md:text-base rounded-2xl md:p-1">
      <div onClick={handleProfileDetails} className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <Link href="/user-dashboard/deposit/deposit-paystack">
          <div className="flex justify-center items-center bg-white rounded-lg w-64 p-5 md:p-12 md:w-72 md:h-24 drop-shadow-xl ">
            <Image
              width={90}
              height={90}
              src={paystackLogo}
              alt="paystack-logo"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center drop-shadow-lg w-64 p-4 rounded-lg  bg-white">
          <Link href="/user-dashboard/deposit/deposit-flutterwave">
            <Image
              width={110}
              height={110}
              src={flutterwaveLogo}
              alt="flutterwave-logo"
            />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default DepositContainer;
