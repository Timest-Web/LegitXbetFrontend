import React from "react";
import Link from "next/link";
import DropdownIcon from "../../components/DropdonIcon";
import { USER_HEADER_DATA } from "../../constant";

const UserSection = ({
  userName,
  userBalance,
}: {
  userName: string;
  userBalance: number;
}) => {
  const extratedUserName = userName.split(" ")[0];

  return (
    <div className="flex items-center">
      {USER_HEADER_DATA.map((value, index) => (
        <div
          key={value.title}
          className={`flex items-center justify-center ${
            index === 1 ? "ml-7" : ""
          }`}
        >
          {index === 1 ? (
            <DropdownIcon
              title={extratedUserName ? extratedUserName : value.title}
              icon={value.icon}
              data={value.data}
            />
          ) : (
            <Link
              href={index === 2 ? "/user-dashboard/deposit" : ""}
              passHref
              className={`flex items-center justify-center space-x-2 ${
                index === 2 ? "flex-row-reverse space-x-4" : ""
              }`}
            >
              <div className={index === 2 ? "ml-2" : ""}>{value.icon}</div>
              <p className="text-center font-bold text-gray-200 text-sm">
                {index === 0 ? `N${userBalance}.00` : value.title}
              </p>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserSection;
