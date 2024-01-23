import React, { ReactNode } from "react";

interface ProfileMenuProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  title,
  children,
  isActive,
}) => {
  return (
    <div
      className={`flex space-x-2 md:space-x-3 text-[#292D32] text-sm font-bold ${
        isActive ? "opacity-100" : "opacity-50"
      } hover:opacity-100 cursor-pointer`}
    >
      <div>{children}</div>
      <h2
        className={`hover:bg-black hover:text-white hover:py-1 hover:px-2 hover:rounded-3xl ${
          isActive ? "bg-black text-white py-1 px-2 rounded-3xl" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default ProfileMenu;
