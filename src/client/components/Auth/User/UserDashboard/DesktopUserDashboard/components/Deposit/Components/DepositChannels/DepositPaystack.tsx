import Image from "next/image";
import PopUpContainer from "../../../../shared/PopUpContainer";
import paystackLogo from "../../../../../assets/PaystackImage.svg";
import LayoutDashboard from "../../../../shared/LayoutDashboard";
import React, { useState } from 'react';
import DepositForm from "./DepositForm";

const DepositPaystack = () => {
  return (
    <LayoutDashboard
      content={
        <PopUpContainer
          popUpContent={
            <div>
              <Image src={paystackLogo} alt="paystack-logo" />
              <p className="my-4">
                You can securely transfer money to your LegitXbet account
                through Paystack, utilizing your personal bank account. Simply
                input the desired deposit amount.You will then be directed to
                the Paystack online cashier to choose from various payment
                methods such as Bank Transfer, USSD, Visa QR, and others. Once
                Paystack confirms the transaction, we will promptly credit the
                funds to your LegitXbet account. Please be aware that your bank
                may impose an additional fee for deposits made through the
                transfer method.
              </p>
             <DepositForm/>
            </div>
          }
        />
      }
    />
  );
};

export default DepositPaystack;
