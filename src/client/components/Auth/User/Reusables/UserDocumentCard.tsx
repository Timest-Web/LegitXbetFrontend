import React from "react";
import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";

const UserDocumentCard = () => {
  return (
    <div className=" bg-white rounded-2xl w-[481px] h-[277px] p-8 flex space-x-16 text-sm font-bold ">
      <div className="flex flex-col space-y-3" >
        <div className="bg-[#ECEEF1] w-[88px] h-[88px] rounded-full flex justify-center items-center ">
          <DocumentSvg />
        </div>
        <h3>Documents</h3>
      </div>
      <div className="flex flex-col space-y-3" >
        <div className="bg-[#ECEEF1] w-[88px] h-[88px] rounded-full flex justify-center items-center ">
          <NotificationIcon/>
        </div>
        <h3>Notifications</h3>
      </div>
    </div>
  );
};

export default UserDocumentCard;
