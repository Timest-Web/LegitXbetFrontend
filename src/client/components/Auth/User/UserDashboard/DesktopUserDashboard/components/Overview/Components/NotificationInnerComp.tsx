import React, { useMemo, useState } from "react";
import NotificationPopUp from "./NotificationPopUp";
import NotificationData from "../Constants/NotificationData";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import NotificationColumn from "./NotificationColumn";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";

const NotificationInnerComp = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => NotificationData, []);
  const columns: any = NotificationColumn(handleClick);

  return (
    <div>
      <TableComp
        data={data}
        columns={columns}
        searchField={false}
        filterField={true}
        tableTitle="Notifications"
      />

      <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={<NotificationPopUp />}
      />
    </div>
  );
};

export default NotificationInnerComp;
