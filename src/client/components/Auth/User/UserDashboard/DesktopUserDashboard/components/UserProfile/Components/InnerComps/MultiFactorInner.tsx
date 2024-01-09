import React from "react";
import MultiReuse from "../ProfileReusables/MultiReuse";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import ProfileButton from "../ProfileReusables/ProfileButton";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

const MultiFactorInner = () => {
  return (
    <div className="pb-24 md:pb-0">
      <ProfileVeriReuse isInsideSecurityComp />
      <ProfileReusableCard
        profileContent={
          <div>
            <MultiReuse />
            <form className="flex flex-col space-y-16">
              <section className="flex space-x-8">
                <div className="flex space-x-5">
                  <input
                    id="activate"
                    name="activationStatus"
                    className="w-[1.375rem] h-[1.375rem]"
                    type="radio"
                  />
                  <label htmlFor="activate" className="font-bold">
                    Activate
                  </label>
                </div>
                <div className="flex space-x-5">
                  <input
                    id="deactivate"
                    name="activationStatus"
                    className="w-[1.375rem] h-[1.375rem]"
                    type="radio"
                  />
                  <label htmlFor="deactivate" className="font-bold">
                    Deactivate
                  </label>
                </div>
              </section>

              <div className="flex flex-col space-y-4 md:flex-row md:space-x-10">
                <input
                  type="text"
                  className="bg-[#ECEEF1] w-[19.0625rem] h-[2.8125rem] p-2 rounded"
                  placeholder="Enter your value"
                />
                <ProfileButton />
              </div>
            </form>
            <h3 className="font-medium mt-56">
              NB - Channels could be SMS or Emails Verification upon sign in
            </h3>
          </div>
        }
      />
    </div>
  );
};

export default MultiFactorInner;
