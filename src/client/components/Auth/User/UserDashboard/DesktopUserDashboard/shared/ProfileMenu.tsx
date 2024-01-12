 import React, { ReactNode } from 'react';

interface ProfileMenuProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ title, children, isActive }) => {
  return (
    <div
      className={`flex space-x-2  md:space-x-3 text-[#292D32] text-sm font-bold ${
        isActive ? "opacity-100" : "opacity-50"
      } hover:opacity-100 cursor-pointer`}
    >
      <div>{children}</div>
      <h2 className='md:hover:bg-black md:hover:text-white md:hover:py-1 md:hover:px-2 md:hover:rounded-3xl '>{title}</h2>
    </div>
  );
};

export default ProfileMenu;
