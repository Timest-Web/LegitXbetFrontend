import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../assets/logo.jpg";
import useUser from "../../Context/UserContext/useUser";
import AuthContent from "@/src/client/components/Auth/User/UserAuth/Components/AuthContent";
import MobileTopDrawer from "../../Drawer/MobileTopDrawer";
import { Button } from "../../Button";
import { useLink } from "../../Hooks/useLink";
import { useVisibilityControl } from "../../Hooks/useVisibilityControl";
import { DATA, USER_HEADER_DATA } from "../constant";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

const TopHeader = () => {
  const {
    user: { name: username, amount: userBalance },
    handleUserLogout,
  } = useUser();
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const { link: click, handleClick: selectedHandle } = useLink("login");
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 h-12 w-full bg-black">
        <Link href="/">
          <Image src={Logo} alt="Logo alt" className="h-8 w-28" />
        </Link>

        {!username && (
          <div className="flex text-white text-xs space-x-2">
            <Button
              text="Log In"
              link=""
              className="border border-white px-3 py-[2px] rounded-md"
              onClick={() => {
                handleClick();
                selectedHandle("login");
              }}
            />
            <Button
              text="Register"
              link=""
              className="border border-white px-3 py-[2px] rounded-md"
              onClick={() => {
                handleClick();
                selectedHandle("register");
              }}
            />
          </div>
        )}

        {username && (
          <div className="flex items-center space-x-2">
            {USER_HEADER_DATA.slice(0, 2).map((value, index) => (
              <Link
                key={index}
                href="#"
                passHref
                className={`flex items-center justify-center space-x-1`}
                onClick={() => setIsClick(!isClick)}
              >
                <div>{value.icon}</div>
                <p className="text-center font-bold text-gray-200 text-[12px]">
                  {index === 1 ? username.split(" ")[1] : userBalance}
                </p>
              </Link>
            ))}
            <ControlsChevronDownSmall color="white" />
          </div>
        )}
      </div>

      {isClick ? (
        <div className="flex flex-col items-end justify-end w-full -mt-1 px-4 bg-black pb-1 space-y-2">
          {DATA.map((value, index) => (
            <Link
              onClick={() => {
                index === 2 && handleUserLogout();
              }}
              href={value.link}
              key={index}
              className="flex items-center space-x-3 px-6 text-white"
            >
              <p className="text-[12px]">{value.title}</p>
              {value.icon}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}

      {isOpen && (
        <MobileTopDrawer
          isOpen={isOpen}
          closeDrawer={setIsOpen}
          drawerContent={<AuthContent selectedButton={click} />}
        />
      )}
    </>
  );
};

export default TopHeader;
