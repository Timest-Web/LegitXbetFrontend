import React from "react";
import PopUpContainer from "../../shared/PopUpContainer";
import Image from "next/image";
import gtbLogo from "../../assets/gtbank 1.png";
import SubmitButton from "../../shared/SubmitButton";

const WithdrawPop = () => {
  return (
    <PopUpContainer
      popUpContent={
        <div>
          <h2 className="font-bold mb-4 pl-16 ">Card Debit</h2>
          <hr></hr>
          <form className="mt-8 px-16">
            <section className="flex space-x-44">
              <div>
                <label className="font-bold pl-10 ">Bank Name</label>
                <div className="flex space-x-5 mt-4">
                  <input className="w-5 h-5" type="radio"></input>
                  <Image width={24} height={24} src={gtbLogo} alt="gtb" />
                  <h3 className="text-xs pt-1">GTBank</h3>
                </div>
              </div>
              <div className="flex flex-col space-y-3 font-bold">
                <h3>Account Number</h3>
                <h3>****8994</h3>
              </div>
            </section>
            <section className="flex space-x-24 mt-12">
              <div className="flex flex-col space-y-3 ">
                <div className="flex space-x-5">
                  <input className="w-5 h-5" type="radio"></input>
                  <label className="font-bold">
                    Withdraw to a new bank account
                  </label>
                </div>
                <input
                  placeholder="Choose a Bank"
                  className=" bg-[#F5F5F5] w-[19.0625rem] h-11 p-3 text-sm "
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="font-bold">Account No.</label>
                <input
                  className="bg-[#F5F5F5] w-[19.0625rem] h-11 p-4 text-sm"
                  placeholder="e.g  555*******567"
                />
              </div>
            </section>
            <section className="flex space-x-6 mt-12">
              <div className="flex flex-col space-y-3">
                <label className="font-bold">Amount</label>
                <input
                  placeholder="Min 1.00"
                  className="bg-[#F5F5F5] w-[10.4375rem] h-11 p-4 text-sm"
                ></input>
              </div>
              <div>
                <div className="mt-9">
                  <SubmitButton buttonContent="Withdraw" />
                </div>
              </div>
            </section>
          </form>
          <p className="font-bold mt-20">
            NB - Minimum per transaction is NGN 1.00. | Maximum per transaction
            is NGN 9,999,999.00.
          </p>
        </div>
      }
    />
  );
};

export default WithdrawPop;
