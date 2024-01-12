import React from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import MultiReuse from "../ProfileReusables/MultiReuse";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

const UpdatePass = () => {
  return (
    <div className="pb-20 md:pb-0">
      <ProfileVeriReuse isInsideSecurityComp />
      <ProfileReusableCard
        profileContent={
          <div>
            <MultiReuse isInsideUpdatePassword />
            <form className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6">
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
              <div className="">
                <button className="bg-black text-white w-[7.1875rem] h-[1.9375rem] text-[15px] rounded font-medium mt-[3rem] md:mt-12">
                  Save & Update
                </button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
};

export default UpdatePass;
