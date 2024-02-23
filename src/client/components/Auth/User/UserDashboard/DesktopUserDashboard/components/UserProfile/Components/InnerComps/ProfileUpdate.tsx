import React, { useEffect, useState } from "react";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import InputField from "../ProfileReusables/InputField";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import axios from "axios";

const ProfileUpdate = () => {
  const { totalPersonalDetails, setTotalPersonalDetails } = useProfileContext()!;

  const user = useUser();

  const [isFormEditable, setIsFormEditable] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedValue = window.localStorage.getItem("isFormEditable");
      return storedValue ? JSON.parse(storedValue) : true;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedFormValues = JSON.parse(window.localStorage.getItem("formValues") || "{}");
      setTotalPersonalDetails(prevValues => ({
        ...prevValues,
        ...storedFormValues
      }));
    }
  }, [setTotalPersonalDetails]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem("formValues", JSON.stringify(totalPersonalDetails));
    }
  }, [totalPersonalDetails]);

  const handleSaveUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormEditable(false);
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
                disabled={!isFormEditable}
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
              />
              <InputField
                label="BVN"
                type="password"
                placeholder="226643828"
                value={totalPersonalDetails.bvn}
                onChange={(e) =>
                  setTotalPersonalDetails((prevValues) => ({
                    ...prevValues,
                    bvn: e.target.value,
                  }))
                }
              />

              <button
                type="submit"
                className="bg-black text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium"
                disabled={!isFormEditable}
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
