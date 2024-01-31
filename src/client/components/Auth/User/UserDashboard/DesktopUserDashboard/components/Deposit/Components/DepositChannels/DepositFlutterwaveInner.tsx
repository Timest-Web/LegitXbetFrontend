import Image from "next/image";
import PopUpContainer from "../../../../shared/PopUpContainer";
import flutterwaveLogo from "../../../../../assets/FlutterwaveLogo.png";
import LayoutDashboard from "../../../../shared/LayoutDashboard";
import React, { useState } from 'react';
import DepositForm from "./DepositForm";

const DepositFlutterwaveInner = () => {
  return (
        <PopUpContainer
          popUpContent={
            <div>
             <div className="w-36"><Image src={flutterwaveLogo} alt="Flutterwave-logo" /></div> 
              <p className="my-4">
                You can securely transfer money to your LegitXbet account
                through Flutterwave, utilizing your personal bank account. Simply
                input the desired deposit amount.You will then be directed to
                the Flutterwave online cashier to choose from various payment
                methods such as Bank Transfer, USSD, Visa QR, and others. Once
                Flutterwave confirms the transaction, we will promptly credit the
                funds to your LegitXbet account. Please be aware that your bank
                may impose an additional fee for deposits made through the
                transfer method.
              </p>
             <DepositForm/>
            </div>
          }
        />
  );
};

export default DepositFlutterwaveInner;
