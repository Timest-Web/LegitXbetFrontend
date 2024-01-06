import React, { useMemo, useState } from "react";
import NotificationPopUp from "./NotificationPopUp";
import NotificationData from "../Constants/NotificationData";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import NotificationColumn from "./NotificationColumn";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import TableComp from "../../../shared/ActiveTableComp";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal/DesktopModal";

const Notifications = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => NotificationData, []);
  const columns: any = NotificationColumn(handleClick);

  return (
    <div>
      <LayoutDashboard
        content={
          <TableComp
            data={data}
            columns={columns}
            searchField={false}
            filterField={true}
            tableTitle="Notifications"
          />
        }
      />
      <DesktopModal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={<NotificationPopUp />}
      />
    </div>
  );
};

export default Notifications;
