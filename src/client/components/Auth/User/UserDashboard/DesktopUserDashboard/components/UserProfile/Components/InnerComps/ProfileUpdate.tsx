import React, { useEffect, useState } from "react";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import InputField from "../ProfileReusables/InputField";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import { useMutation } from "@tanstack/react-query";
import { profileDetails } from "@/src/helper/apis/services/auth/profile-details.api";
import useGetUserProfile from "@/src/helper/apis/services/auth/get-user-profile.api";

const ProfileUpdate = () => {
  const { totalPersonalDetails, setTotalPersonalDetails } =
    useProfileContext()!;
  const [isEditable, setIsEditable] = useState(true);

  const { data: userDetails, isLoading, error } = useGetUserProfile();
  // console.log(userDetails.bvn, userDetails.name);
  const fullName = userDetails?.name || "";
  const [firstName, lastName] = fullName.split(" ");

  useEffect(() => {
    if (userDetails) {
      setTotalPersonalDetails({
        firstName: firstName,
        lastName: lastName,
        dob: userDetails.dob,
        address: userDetails.address,
        bvn: userDetails.bvn,
      });
      setIsEditable(false); // Set isEditable to false when userDetails is available
    }
  }, [userDetails, setTotalPersonalDetails]);

  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: profileDetails,
    onSuccess: () => {
      console.log("Profile Details updated successfully");
      setIsEditable(false)
    },
  });
  const handleSaveUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formatDate = (date: any) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
      };

    
      const formattedDateOfBirth = formatDate(
        new Date(totalPersonalDetails.dob)
      );

      await updateProfile({
        name: totalPersonalDetails.firstName + totalPersonalDetails.lastName,
        address: totalPersonalDetails.address,
        dateOfBirth: formattedDateOfBirth,
        bvn: totalPersonalDetails.bvn,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pb-24 md:pb-0">
      <ProfileVeriReuse isInsidePersonalDetails />
      <ProfileReusableCard
        profileContent={
          <div>
            <form
              onSubmit={handleSaveUpdate}
              className="grid md:grid-cols-2 grid-cols-1 gap-8"
            >
              <InputField
                label="First Name"
                type="text"
                placeholder="e.g. Bayo"
                value={totalPersonalDetails.firstName}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    firstName: e.target.value,
                  }))
                }
                disabled={!isEditable}
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="e.g bayo ojo"
                value={totalPersonalDetails.lastName}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    lastName: e.target.value,
                  }))
                }
                disabled={!isEditable}
              />
              <InputField
                label="Date of Birth"
                type="date"
                placeholder="23/04/1997"
                value={totalPersonalDetails.dob}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    dob: e.target.value,
                  }))
                }
                disabled={!isEditable}
              />
              <InputField
                label="Address"
                type="text"
                placeholder="23, Bourdillon"
                value={totalPersonalDetails.address}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    address: e.target.value,
                  }))
                }
                disabled={!isEditable}
              />
              <InputField
                label="BVN"
                type="text"
                placeholder="226643828"
                value={totalPersonalDetails.bvn}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    bvn: e.target.value,
                  }))
                }
                disabled={!isEditable}
              />

              <button
                disabled={!isEditable}
                type="submit"
                className={!isEditable ? "bg-black opacity-50 text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium": "bg-black text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium"}
              >
                Save & Update
              </button>
            </form>
          </div>
        }
      />
    </div>
  );
};

export default ProfileUpdate;
