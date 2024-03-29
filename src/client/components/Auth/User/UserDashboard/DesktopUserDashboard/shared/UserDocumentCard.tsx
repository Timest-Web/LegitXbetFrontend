import React from "react";
import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";
import Link from "next/link";

const UserDocumentCard = () => {
  return (
    <div className="bg-white rounded-2xl w-[15.063rem] h-[10rem] md:w-[30.0625rem] md:h-[16.3125rem] p-4 md:p-8 flex space-x-4 text-xs md:text-sm font-bold">
      <Link href="/user-dashboard/overview/uploaded_documents">
        <div className="flex flex-col space-y-2">
          <div className="bg-[#ECEEF1] w-[3.25rem] h-[3.25rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full flex justify-center items-center">
            <DocumentSvg />
          </div>
          <h3>Documents</h3>
        </div>
      </Link>
      <Link href="/user-dashboard/overview/notifications">
        <div className="flex flex-col space-y-2">
          <div className="bg-[#ECEEF1] w-[3.25rem] h-[3.25rem] md:w-[5.5rem] md:h-[5.5rem]  rounded-full flex justify-center items-center">
            <NotificationIcon />
          </div>
          <h3>Notifications</h3>
        </div>
      </Link>
    </div>
  );
};

export default UserDocumentCard;
