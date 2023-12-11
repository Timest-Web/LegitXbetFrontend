import React from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import MultiReuse from "../ProfileReusables/MultiReuse";

const UpdatePass = () => {
  return (
    <div>
      <ProfileVeriReuse />
      <div className=" bg-white w-[980px] h-[544px] rounded-[20px] p-12 mt-4">
        <MultiReuse/>
        <form className="flex space-x-6">
          <div className="flex flex-col space-y-4 ">
            <label className="font-bold pl-4">Old Password</label>
            <input className="bg-[#ECEEF1] w-[306px] h-[45px] p-2 rounded" type="text" />
          </div>
          <div className="flex flex-col space-y-4 ">
            <label className="font-bold pl-4">New Password</label>
            <input className="bg-[#ECEEF1] w-[306px] h-[45px] p-2 rounded" type="text" />
          </div>
          <button className="bg-black text-white w-[115px] h-[31px] text-[15px] rounded font-medium mt-[3rem] ">
              Save & Update
            </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePass;
