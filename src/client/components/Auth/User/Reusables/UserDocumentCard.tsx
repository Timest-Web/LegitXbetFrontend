import React from "react";
import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";
import Link from "next/link";

const UserDocumentCard = () => {
  return (
    <div className="bg-white rounded-2xl w-[30.0625rem] h-[16.3125rem] p-8 flex space-x-4 text-sm font-bold">
      <Link href="/user_dashboard/overview/uploaded_documents">
        <div className="flex flex-col space-y-2">
          <div className="bg-[#ECEEF1] w-[5.5rem] h-[5.5rem] rounded-full flex justify-center items-center">
            <DocumentSvg />
          </div>
          <h3>Documents</h3>
        </div>
      </Link>
      <Link href="/user_dashboard/overview/notifications">
        <div className="flex flex-col space-y-2">
          <div className="bg-[#ECEEF1] w-[5.5rem] h-[5.5rem] rounded-full flex justify-center items-center">
            <NotificationIcon />
          </div>
          <h3>Notifications</h3>
        </div>
      </Link>
    </div>
  );
};

export default UserDocumentCard;
