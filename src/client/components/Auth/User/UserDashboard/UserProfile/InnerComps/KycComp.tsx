import React from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import Image from "next/image";
import pdfImg from "../../../UserAssets/export.png";

const KycComp = () => {
  return (
    <div>
      <ProfileVeriReuse />
      <div className=" bg-white w-[980px] h-[544px] rounded-[20px] p-12 mt-4">
        <div className="font-bold flex justify-between mb-8">
          <h2>Upload your Kyc for verification</h2>
          <h2>Verified documents would appear Here</h2>
        </div>
        <h2 className="font-bold mb-4">Document type</h2>
        <div>
          <form className="flex flex-col space-y-9">
            <div className="flex space-x-10 font-bold">
              <input type="radio" />
              <label>Int. Passport</label>
              <input type="radio" />
              <label>NIN</label>
              <input type="radio" />
              <label>Voters card</label>
              <input type="radio" />
              <label>Drivers License</label>
            </div>
            <div className="bg-[#ECEEF1] border-[#101010] border-2 border-dashed w-[287px] h-[139px] rounded-[20px] flex flex-col justify-center items-center">
              <Image src={pdfImg} alt="upload" />
              <h2>Upload pdf only</h2>
            </div>
            <button className="bg-[#101010] text-white w-[172px] h-[38px] p-1 rounded-[5px] ml-12 ">
              Send for verification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KycComp;
