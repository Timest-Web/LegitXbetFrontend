import React, { useState } from "react";
import { Modal, Button } from "@heathmont/moon-core-tw";

interface CardPopUpProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CardPopUp: React.FC<CardPopUpProps> = ({ isOpen, closeModal }) => {
  return (
    <>
      <Modal open={isOpen} onClose={closeModal}> 
        <Modal.Backdrop className="relative" />
        <Modal.Panel className="absolute left-[14.1rem]">
          <div className="bg-white w-[980px] h-[648px] rounded-2xl p-12">
            <ul className="flex space-x-16 font-bold opacity-50 mb-6">
              <li>Card Debit</li>
              <li>Bank Transfer</li>
              <li>Direct Bank USSD</li>
            </ul>
            <hr></hr>
            <form className="mt-16 ">
              <section className="flex space-x-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-base">Card Number</label>
                  <input
                    placeholder="e.g  555*******567"
                    type="text"
                    className="bg-[#ECEEF1] w-[19.125rem] h-[2.813rem] p-2"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-base">Expiry</label>
                  <input
                    placeholder="e.g 24/2023"
                    type="text"
                    className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">CVV</label>
                  <input
                    placeholder="3 Digit at the back of card"
                    type="text"
                    className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2 text-xs"
                  />
                </div>
              </section>
              <section className="flex space-x-8 mt-12">
                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-base">Amount</label>
                  <input
                    placeholder=""
                    type="text"
                    className="bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] p-2"
                  />
                </div>
                <button className="bg-black text-white font-medium w-32 h-10 rounded p-2 mt-9 ">
                  Top Up
                </button>
              </section>
            </form>
            <p className="mt-60 font-bold" >NB -   Minimum deposit amount is NGN 100.00 - you can deposit at least NGN 100.00 in one transaction.</p>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default CardPopUp;
