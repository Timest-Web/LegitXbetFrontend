import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileMenu from "./ProfileMenu";
import menuList from "./MenuList";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import { GenericLogOut } from "@heathmont/moon-icons-tw";
import AccordionItem from "./AccordionItem";


const SideBar = () => {
  const menuItems = menuList();
  const router = useRouter();
  const user = useUser();

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
                (item.title === "Withdrawal" &&
                  (router.pathname === "/user-dashboard/withdrawal" ||
                    router.pathname ===
                      "/user-dashboard/withdrawal/withrawal-history" ||
                    router.pathname ===
                      "/user-dashboard/withdrawal/send-to-friend")) ||
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
              {item.title === "Withdrawal" && (
                <>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/referral/referred-users`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/withdrawal"
                    passHref
                  >
                    <div className="hover:opacity-100">Withdraw Now</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/referral/referred-commisions`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/withdrawal/withdrawal-history"
                    passHref
                  >
                    <div className=" hover:opacity-100">Withdrawal History</div>
                  </Link>
                  <Link
                    className={`${
                      router.pathname ===
                      `/user-dashboard/user-support/referral/referred-commisions`
                        ? "bg-black opacity-100 text-white py-1 px-2 rounded-3xl"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    href="/user-dashboard/withdrawal/send-to-friend"
                    passHref
                  >
                    <div className=" hover:opacity-100">Send to Friend</div>
                  </Link>
                </>
              )}
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
                    <div className=" hover:opacity-100">
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
              {item.title !== "Withdrawal" &&
                item.title !== "Referral" &&
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
      <div className="flex space-x-2 opacity-50 pt-4">
        <GenericLogOut className="text-moon-24" />
        <p
          onClick={user.handleUserLogout}
          className="text-sm font-bold cursor-pointer"
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default SideBar;
