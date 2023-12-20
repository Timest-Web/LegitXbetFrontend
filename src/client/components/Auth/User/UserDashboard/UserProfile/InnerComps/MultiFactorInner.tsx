import React from "react";
import MultiReuse from "../ProfileReusables/MultiReuse";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import ProfileButton from "../ProfileReusables/ProfileButton";

const MultiFactorInner = () => {
  return (
    <div>
      <ProfileVeriReuse />
      <div className=" bg-white w-[980px] h-[544px] rounded-[20px] p-12 pl-16 mt-4">
        <MultiReuse />
        <form className="flex flex-col space-y-16">
          <section className="flex space-x-8">
            <div className="flex space-x-5">
              <input className="w-[22px] h-[22px]" type="radio" />
              <label className="font-bold">Activate</label>
            </div>
            <div className="flex space-x-5">
              <input className="w-[22px] h-[22px]" type="radio" />
              <label className="font-bold">Deactivate</label>
            </div>
          </section>
          <div className="flex space-x-10">
            <input
              type="text"
              className="bg-[#ECEEF1] w-[306px] h-[45px] p-2 rounded"
            />
            <ProfileButton />
          </div>
        </form>
        <h3 className=" font-medium mt-56 ">NB -   Channels could be SMS or Emails Verification upon sign in</h3>
      </div>
    </div>
  );
};

export default MultiFactorInner;