import React from "react";
import Padlock from "@/src/client/shared/Svg/Padlock";

const ProfileUpdate = () => {
  return (
    <div>
      <div className="flex space-x-6 font-bold opacity-50 pl-6 mt-6">
        <div className="flex space-x-3">
          <Padlock />
          <h3>Security & Safety</h3>
        </div>
        <h3>Profile Verification</h3>
      </div>
      <div className=" bg-white w-[980px] h-[544px] rounded-[20px] p-12 mt-4">
        <div className="flex space-x-8 font-bold text-[#292D32] mb-4">
          <h3>Mobile No</h3>
          <h3>+234 818 217 5835</h3>
        </div>
        <form className=" flex space-x-16 ">
          <section className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-2">
              <label className="font-bold pl-4">Firstname</label>
              <input className="bg-[#ECEEF1] w-[306px] h-[45px] "></input>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold pl-4">Date of birth</label>
              <input className="bg-[#ECEEF1] w-[306px] h-[45px] "></input>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold pl-4">Email</label>
              <input className="bg-[#ECEEF1] w-[306px] h-[45px] "></input>
            </div>
          </section>
          <section className="flex flex-col ">
            <div className="flex flex-col space-y-2">
              <label className="font-bold pl-4">Lastname</label>
              <input className="bg-[#ECEEF1] w-[306px] h-[45px] "></input>
            </div>
            <div className="mt-12">
              <h2 className="font-bold mb-3 pl-4">Gender</h2>
              <section className="flex space-x-8">
                <div className="flex space-x-1">
                  <input
                    type="radio"
                    className="w-[22px] h-[22px] mr-4 text-base "
                  />
                  <label className="font-bold">Male</label>
                </div>
                <div className="flex space-x-1">
                  <input
                    type="radio"
                    className="w-[22px] h-[22px] mr-4 text-base "
                  />
                  <label className="font-bold">Female</label>
                </div>
              </section>
            </div>
            <button className="bg-black text-white w-[115px] h-[31px] text-[15px] rounded font-medium mt-[6.5rem] ">
              Save & Update
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
