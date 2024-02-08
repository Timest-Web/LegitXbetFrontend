import React, { ChangeEvent, useEffect, useState } from "react";
import { useProfileContext } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import InputField from "../ProfileReusables/InputField";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

interface TotalPersonalDetails {
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  bvn: string;
}

const ProfileUpdate: React.FC = () => {
  const { totalPersonalDetails, handleInputChange } = useProfileContext()!;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [persistedValues, setPersistedValues] = useState<TotalPersonalDetails>({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    bvn: "",
  });

  useEffect(() => {
    const storedFormStatus = localStorage.getItem("isFormSubmitted");
    if (storedFormStatus) {
      setIsFormSubmitted(true);
    }

    const storedValues = localStorage.getItem("persistedValues");
    if (storedValues) {
      setPersistedValues(JSON.parse(storedValues));
    } else {
      setPersistedValues(totalPersonalDetails);
    }
  }, [totalPersonalDetails]);

  const handleSaveUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    localStorage.setItem("isFormSubmitted", "true");
  };

  const handleInputChangePersist = (
    field: keyof TotalPersonalDetails,
    value: string
  ) => {
    handleInputChange(field, value);
    setPersistedValues((prev) => ({
      ...prev,
      [field]: value,
    }));
    localStorage.setItem(
      "persistedValues",
      JSON.stringify({ ...persistedValues, [field]: value })
    );
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
                placeholder="e.g bayo ojo"
                value={persistedValues.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChangePersist("firstName", e.target.value)
                }
                disabled={isFormSubmitted}
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="e.g bayo ojo"
                value={persistedValues.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChangePersist("lastName", e.target.value)
                }
                disabled={isFormSubmitted}
              />
              <InputField
                label="Date of Birth"
                type="text"
                placeholder="23/04/1997"
                value={persistedValues.dob}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChangePersist("dob", e.target.value)
                }
                disabled={isFormSubmitted}
              />
              <InputField
                label="Address"
                type="text"
                placeholder="23, Bourdillon"
                value={persistedValues.address}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChangePersist("address", e.target.value)
                }
                disabled={isFormSubmitted}
              />
              <InputField
                label="BVN"
                type="text"
                placeholder="226643828"
                value={persistedValues.bvn}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChangePersist("bvn", e.target.value)
                }
                disabled={isFormSubmitted}
              />
              <button
                type="submit"
                className="bg-black text-white w-[7.1875rem] h-[2.4375rem] text-[15px] rounded font-medium"
                disabled={isFormSubmitted}
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
