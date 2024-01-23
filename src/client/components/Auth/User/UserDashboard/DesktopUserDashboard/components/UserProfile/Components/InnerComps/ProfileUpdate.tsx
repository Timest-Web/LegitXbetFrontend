import React from 'react';
import { useProfileContext } from '@/src/client/shared/Context/PersonalDetailsContext/ProfileContext';
import ProfileVeriReuse from '../ProfileReusables/ProfileVeriReuse';
import InputField from '../ProfileReusables/InputField';
import ProfileReusableCard from '../ProfileReusables/ProfileReusableCard';

const ProfileUpdate: React.FC = () => {
  const { totalPersonalDetails, handleInputChange } = useProfileContext()!;

  const handleSaveUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(totalPersonalDetails);
  };

  return (
    <div className="pb-24 md:pb-0">
      <ProfileVeriReuse isInsidePersonalDetails />
      <ProfileReusableCard
        profileContent={
          <div>
            <div className="flex space-x-8 font-bold text-[#292D32] mb-6">
              <h3>Mobile No</h3>
              <h3>+234 818 217 5835</h3>
            </div>
            <form
              action="submit"
              onSubmit={handleSaveUpdate}
              className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-16"
            >
              <div className="flex flex-col space-y-6 md:space-y-12">
                <InputField
                  label="Firstname"
                  type="text"
                  placeholder="e.g bayo ojo"
                  value={totalPersonalDetails.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
                <InputField
                  label="Date of birth"
                  type="text"
                  placeholder="23/04/1997"
                  value={totalPersonalDetails.dob}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                />
                <InputField
                  label="Address"
                  type="text"
                  placeholder="23, Bourdillon"
                  value={totalPersonalDetails.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-6">
                <InputField
                  label="Lastname"
                  type="text"
                  placeholder="e.g bayo ojo"
                  value={totalPersonalDetails.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
                <InputField
                  label="BVN"
                  type="text"
                  placeholder="226643828"
                  value={totalPersonalDetails.bvn}
                  onChange={(e) => handleInputChange('bvn', e.target.value)}
                />
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
