import ArrowDownIcon from "@/src/client/shared/Svg/ArrowDownIcon";
import {
  ArrowsChevronDownDouble,
  ControlsChevronDown,
} from "@heathmont/moon-icons-tw";
import { ReactNode } from "react";

interface AdminMenuItemProps {
  icon: ReactNode;
  title: string;
}

const AdminMenuItem: React.FC<AdminMenuItemProps> = ({ icon, title }) => {
  return (
    <div className="flex justify-between pr-5 transition ease-in-out duration-300 delay-150 hover:bg-white hover:text-black hover:cursor-pointer">
      <div className="flex space-x-2 p-2  ">
        <div className="text-moon-24 ml-4">{icon}</div>
        <p className="text-xs pt-[0.2rem] font-bold">{title}</p>
      </div>
   { title === "Dashboard"? "": <div className="pt-[0.3rem]"><ControlsChevronDown className="font-bold" /></div> } 
    </div>
  );
};

export default AdminMenuItem;
