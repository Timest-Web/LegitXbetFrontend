import React, { useState } from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import MultiReuse from "../ProfileReusables/MultiReuse";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/src/helper/apis/services/change-password/change-password.api";
import { error } from "console";

const UpdatePass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { mutateAsync: updatePassword } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      console.log("Password changed successfully");
    }
  });

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePassword({ oldPassword, newPassword });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pb-20 md:pb-0">
      <ProfileVeriReuse isInsideSecurityComp />
      <ProfileReusableCard
        profileContent={
          <div>
            <MultiReuse isInsideUpdatePassword />
            <form
              onSubmit={handlePasswordSubmit}
              className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6"
            >
              <div className="flex flex-col space-y-4">
                <label htmlFor="oldPassword" className="font-bold pl-4">
                  Old Password
                </label>
                <input
                  id="oldPassword"
                  className="bg-[#ECEEF1] w-[19.0625rem] h-[2.8125rem] p-2 rounded"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
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
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-black text-white w-[7.1875rem] h-[1.9375rem] text-[15px] rounded font-medium mt-[3rem] md:mt-12"
                >
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
