import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import useUser from "../../Context/UserContext/useUser";

type Data = {
  link: string;
  title: string;
  icon: React.ReactNode;
};

type DropDownProps = {
  icon: React.ReactNode;
  data: Data[] | undefined;
  onClick?: () => void;
  title: string;
};

const DropdownIcon = ({ data, icon, title }: DropDownProps) => {
  const { handleUserLogout } = useUser();
  const [isClick, setIsClick] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsClick(!isClick)}
        className="flex items-center justify-between mr-2 cursor-pointer"
      >
        <div className="flex items-center w-full space-x-2">
          {icon}
          <p className="text-white font-bold text-xs">{title}</p>
        </div>
      </div>

      {isClick ? (
        <div
          className="absolute bg-black border p-3 mt-5 space-y-3 rounded-xl w-36"
          onClick={() => setIsClick(false)}
        >
          {data?.map((value, index) => (
            <Link
              href={value.link}
              key={index}
              onClick={() => {
                index === 2 && handleUserLogout();
              }}
              className="flex items-center w-full space-x-4"
            >
              {value.icon}
              <p className="text-white font-bold text-xs">{value.title}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownIcon;
