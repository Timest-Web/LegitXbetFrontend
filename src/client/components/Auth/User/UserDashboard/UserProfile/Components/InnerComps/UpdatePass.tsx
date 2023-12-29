import React from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import MultiReuse from "../ProfileReusables/MultiReuse";

const UpdatePass = () => {
  return (
    <div>
      <ProfileVeriReuse isInsideSecurityComp />
      <div className="bg-white w-[61.25rem] h-[34rem] rounded-[20px] p-12 mt-4">
        <MultiReuse />
        <form className="flex space-x-6">
          <div className="flex flex-col space-y-4">
            <label htmlFor="oldPassword" className="font-bold pl-4">
              Old Password
            </label>
            <input
              id="oldPassword"
              className="bg-[#ECEEF1] w-[19.0625rem] h-[2.8125rem] p-2 rounded"
              type="password"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="newPassword" className="font-bold pl-4">
              New Password
            </label>
            <input
              id="newPassword"
              className="bg-[#ECEEF1] w-[19.0625rem] h-[2.8125rem] p-2 rounded"
              type="password"
            />
          </div>
          <button className="bg-black text-white w-[7.1875rem] h-[1.9375rem] text-[15px] rounded font-medium mt-[3rem]">
            Save & Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePass;
