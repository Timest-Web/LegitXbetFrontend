import React from "react";
import Image from "next/image";
import BetWC from "../../../../assets/BonusWC.png";
import AllBetTable from "../../../shared/InactiveTable";

const BonusInner = () => {
  const headers = [
    "No",
    "Bonus Id",
    "Start date",
    "Exp. date",
    "Type",
  ];
  return (
    <div className="flex flex-col space-y-4 ">
      <Image src={BetWC} alt="betwc" />

      <div>
        {/* <AllBetTable
          title="Bonus & Promotions"
          headers={headers}
          noBetsMessage="No active Bonus"
          placeBetButtonText={undefined}
          buttonLink=""
          buttonAction={undefined}
        /> */}
      </div>
      <div className="bg-white">
        <div className="bg-black text-white text-lg font-bold p-2 w-full flex space-x-3 ">
          <span className="">Available Bonus</span>
        </div>
        <div className="bg-white p-4 space-y-4">
          {/* <section className="flex space-x-8">
            <p>Valid Bonus</p>
            <p>Expired Bonus</p>
          </section> */}
          <section className="mb-12 flex space-x-2 text-sm">
            <label>Redeem your code:</label>
            <input className="bg-gray-100 w-24 md:w-32  p-1" type="text" />
            <button className="bg-black  text-white text-xs w-16 md:w-24 p-1 rounded-md text-center">
              Redeem
            </button>
          </section>
          <table className="w-full">
            {headers.map((header)=><th>{header}</th>)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BonusInner;
