import React from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";

const AllBetTable = () => {
  return (
    <div>
      <div className="flex justify-between px-8 ">
        <h2 className="font-bold" >All Bets</h2>
        <div className="flex space-x-2">
          <input type="text" className=" border-[#292D32] border w-[225px] h-[41px] rounded-[35px] bg-[#ECEEF1] " ></input>
          <input className=" border-[#292D32] border w-[135px] h-[35px] bg-[#ECEEF1] mt-[0.15rem] " ></input>
        </div>
      </div>
      <div className=" bg-white w-[980px] h-[544px] rounded-[20px] p-8 mt-4">
        <div>
          <ul className="font-bold flex justify-evenly ">
            <li>No</li>
            <li>Bet Id</li>
            <li>Date</li>
            <li>Type</li>
            <li>Status</li>
            <li>Stake Amt.</li>
            <li>Potential win</li>
          </ul>
          <hr></hr>
          <div className=" flex flex-col justify-center items-center mt-36 space-y-8 ">
            <PlaceBetIcon />
            <h3>No bets placed </h3>
            <button className="w-[128px] h-[38px] rounded-md bg-black p-2 text-white">
              Place a bet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBetTable;
