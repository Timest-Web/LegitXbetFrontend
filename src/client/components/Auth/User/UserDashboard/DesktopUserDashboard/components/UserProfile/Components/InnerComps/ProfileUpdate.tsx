import React, { useState, ChangeEvent } from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import InputField from "../ProfileReusables/InputField";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="mt-12">
      <h2 className="font-bold mb-3 pl-4">Gender</h2>
      <div className="flex space-x-8">
        <div className="flex space-x-1 ">
          <input
            type="radio"
            id="male"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
            className="w-[1.375rem] h-[1.375rem] mr-4 text-base bg-[green]"
          />
          <label htmlFor="male" className="font-bold">
            Male
          </label>
        </div>
        <div className="flex space-x-1">
          <input
            type="radio"
            id="female"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
            className="w-[1.375rem] h-[1.375rem] mr-4 text-base"
          />
          <label htmlFor="female" className="font-bold">
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

const ProfileUpdate: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSaveUpdate = () => {
    console.log("Save and update");
  };

  return (
    <div className="pb-24 md:pb-0">
      <ProfileVeriReuse isInsideSecurityComp />
      <ProfileReusableCard
        profileContent={
          <div>
            <div className="flex space-x-8 font-bold text-[#292D32] mb-6">
              <h3>Mobile No</h3>
              <h3>+234 818 217 5835</h3>
            </div>
            <form className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-16">
              <div className="flex flex-col space-y-6 md:space-y-12">
                <InputField
                  label="Firstname"
                  type="text"
                  placeholder="e.g bayo ojo"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <InputField
                  label="Date of birth"
                  type="text"
                  placeholder="23/04/1997"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <InputField
                  label="Email"
                  type="email"
                  placeholder="johnpaul@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-6">
                <InputField
                  label="Lastname"
                  type="text"
                  placeholder="e.g bayo ojo"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <GenderSelection />
                <button
                  onClick={handleSaveUpdate}
                  className="bg-black text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium mt-8 md:mt-[6.5rem]"
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

export default ProfileUpdate;
