import React, { useState } from "react";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import InputField from "../ProfileReusables/InputField";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

const ProfileUpdate: React.FC = () => {
  const { totalPersonalDetails, handleInputChange } = useProfileContext()!;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSaveUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true)
    console.log(totalPersonalDetails);
  };

  return (
    <div className="pb-24 md:pb-0">
      <ProfileVeriReuse isInsidePersonalDetails />
      <ProfileReusableCard
        profileContent={
          <div>
            {!isFormSubmitted ? <form
              action="submit"
              onSubmit={handleSaveUpdate}
              className=" grid md:grid-cols-2 grid-cols-1 gap-8 "
            >
              <InputField
                label="Firstname"
                type="text"
                placeholder="e.g bayo ojo"
                value={totalPersonalDetails.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <InputField
                label="Lastname"
                type="text"
                placeholder="e.g bayo ojo"
                value={totalPersonalDetails.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <InputField
                label="Date of birth"
                type="text"
                placeholder="23/04/1997"
                value={totalPersonalDetails.dob}
                onChange={(e) => handleInputChange("dob", e.target.value)}
              />
              <InputField
                label="Address"
                type="text"
                placeholder="23, Bourdillon"
                value={totalPersonalDetails.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />

              <InputField
                label="BVN"
                type="text"
                placeholder="226643828"
                value={totalPersonalDetails.bvn}
                onChange={(e) => handleInputChange("bvn", e.target.value)}
              />
              <button
                onClick={handleSaveUpdate}
                className="bg-black text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium "
              >
                Save & Update
              </button>
            </form> :
            <p className="">Your Profile has been updated</p>}
          
          </div>
        }
      />
    </div>
  );
};

export default ProfileUpdate;
