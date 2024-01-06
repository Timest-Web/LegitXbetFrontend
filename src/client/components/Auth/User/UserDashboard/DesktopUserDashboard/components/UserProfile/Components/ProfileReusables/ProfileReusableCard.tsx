import React from "react";

interface ProfileReusableProps {
  profileContent: React.JSX.Element;
}

const ProfileReusableCard: React.FC<ProfileReusableProps> = ({ profileContent }) => {
    
  return (
    <div className="bg-white w-[full] h-screen md:h-[40.5rem] rounded-2xl p-12 mt-4">
      {profileContent}
    </div>
  );
};

export default ProfileReusableCard;
