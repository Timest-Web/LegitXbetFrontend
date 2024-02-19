import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileMenu from "./ProfileMenu";
import menuList from "./MenuList";
import {
  ControlsChevronDown,
  ControlsChevronUp,
} from "@heathmont/moon-icons-tw";

interface AccordionItemProps {
  title: string;
  icon?: React.JSX.Element;
  children: ReactNode;
  initiallyOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  icon,
  children,
  initiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" cursor-pointer">
      <div className="flex space-x-3" onClick={toggleAccordion}>
        <div className="">{icon}</div>
        <div className="text-sm font-bold opacity-50 ">{title}</div>
        {isOpen ? <ControlsChevronUp /> : <ControlsChevronDown />}
      </div>
      {isOpen && (
        <div className=" flex flex-col space-y-2 ml-12 mt-4 text-sm font-bold hover:opacity-100">
          {children}
        </div>
      )}
    </div>
  );
};

const SideBar = () => {
  const menuItems = menuList();
  const router = useRouter();

  return (
    <div className="bg-white   md:w-[17rem] md:rounded-2xl p-7 flex flex-col space-y-7 ">
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.title === "Deposit" ||
          item.title === "Withdrawal" ||
          item.title === "Referral" ||
          item.title === "Support Ticket" ||
          item.title === "Account Setting" ? (
            <AccordionItem
              title={item.title}
              icon={item.icon}
              initiallyOpen={
                router.pathname.includes(
                  `/user-dashboard/${item.title.toLowerCase()}`
                ) ||
                router.pathname.includes(
                  `/user-dashboard/${item.title.toLowerCase()}/${item.title.toLowerCase()}-history`
                ) ||
                (item.title === "Referral" &&
                  (router.pathname ===
                    "/user-dashboard/referral/referred-users" ||
                    router.pathname ===
                      "/user-dashboard/referral/referred-commisions")) ||
                (item.title === "Support Ticket" &&
                  (router.pathname === "/user-dashboard/user-support" ||
                    router.pathname ===
                      "/user-dashboard/user-support/support-ticket")) ||
                (item.title === "Account Setting" &&
                  (router.pathname === "/user-dashboard/profile" ||
                    router.pathname ===
                      "/user-dashboard/profile/update-password" ||
                    router.pathname === "/user-dashboard/profile/multifactor"))
              }
            >
              {item.title === "Referral" && (
                <>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/referral/referred-users`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/referral/referred-users"
                    passHref
                  >
                    <div className="hover:opacity-100">Referred Users</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/referral/referred-commisions`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/referral/referred-commisions"
                    passHref
                  >
                    <div className="opacity-50 hover:opacity-100">
                      Referred Commission
                    </div>
                  </Link>
                </>
              )}
              {item.title === "Support Ticket" && (
                <>
                  <Link
                    className={`${
                      router.pathname === `/user-dashboard/user-support`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/user-support"
                    passHref
                  >
                    <div className=" hover:opacity-100">Open a Ticket</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/support-ticket`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/user-support/support-ticket"
                    passHref
                  >
                    <div className=" hover:opacity-100">My Ticket</div>
                  </Link>
                </>
              )}
              {item.title === "Account Setting" && (
                <div className="flex flex-col space-y-2">
                  <Link
                    className={`${
                      router.pathname === `/user-dashboard/profile`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/profile"
                    passHref
                  >
                    <div className="hover:opacity-100">Profile Setting</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/profile/update-password`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/profile/update-password"
                    passHref
                  >
                    <div className=" hover:opacity-100">Change Password</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname === `/user-dashboard/profile/multifactor`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/profile/multifactor"
                    passHref
                  >
                    <div className=" hover:opacity-100">2FA</div>
                  </Link>
                </div>
              )}
              {item.title !== "Referral" &&
                item.title !== "Support Ticket" &&
                item.title !== "Account Setting" && (
                  <>
                    <Link
                      href={`/user-dashboard/${item.title.toLowerCase()}`}
                      passHref
                    >
                      <div
                        className={`${
                          router.pathname ===
                          `/user-dashboard/${item.title.toLowerCase()}`
                            ? "bg-black opacity-100 text-white py-1 px-1 rounded-3xl"
                            : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        {item.title} Now
                      </div>
                    </Link>
                    <Link
                      href={`/user-dashboard/${item.title.toLowerCase()}/${item.title.toLowerCase()}-history`}
                      passHref
                    >
                      <div
                        className={`${
                          router.pathname ===
                          `/user-dashboard/${item.title.toLowerCase()}/${item.title.toLowerCase()}-history`
                            ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                            : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        {item.title} History
                      </div>
                    </Link>
                  </>
                )}
            </AccordionItem>
          ) : (
            <Link href={item.href || "/"} passHref>
              <ProfileMenu
                title={item.title}
                isActive={
                  router.pathname === item.href ||
                  (router.pathname.startsWith(item.href || "/") &&
                    item.title !== "Dashboard")
                }
              >
                {item.icon}
              </ProfileMenu>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
