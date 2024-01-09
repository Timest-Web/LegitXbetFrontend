import React from "react";
import DepositContainer from "./DepositContainer";
import SubmitButton from "../../../../shared/SubmitButton";

const DepositCardForm = () => {
  return (
    <div>
      <form className="md:mt-6">
        <section className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-sm md:text-base">Card Number</label>
            <input
              placeholder="e.g  555*******567"
              type="text"
              className="bg-[#ECEEF1] w-[19.125rem] h-[2.813rem] p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-sm md:text-base">Expiry</label>
            <input
              placeholder="e.g 24/2023"
              type="text"
              className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-sm md:text-base">CVV</label>
            <input
              placeholder="3 Digit at the back of card"
              type="text"
              className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2 text-xs"
            />
          </div>
        </section>
        <section className="flex space-x-8 md:mt-4">
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-sm md:text-base">Amount</label>
            <input
              placeholder=""
              type="text"
              className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2"
            />
          </div>
          <div className="mt-8">
            <SubmitButton buttonContent="Top up" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default DepositCardForm;
