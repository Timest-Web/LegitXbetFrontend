import React from "react";

interface ProfileReusableProps {
  profileContent: React.JSX.Element;
}

const ProfileReusableCard: React.FC<ProfileReusableProps> = ({ profileContent }) => {
    
  return (
    <div className="bg-white w-[full] md:h-[32rem] rounded-2xl py-6 px-8 md:p-12 mt-4">
      {profileContent}
    </div>
  );
};

export default ProfileReusableCard;
