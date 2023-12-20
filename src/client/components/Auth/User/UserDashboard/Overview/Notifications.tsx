import React, { useMemo, useState } from "react";
import LayoutDashboard from "../../Reusables/LayoutDashboard";
import TableComp from "../../Reusables/TableComp";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ViewDelete from "./ViewDelete";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import NotificationPopUp from "./NotificationPopUp";

const mData = [
  {
    messages:
      "Lorem ipsum dolor sit amet consectetur. Phasellus urna phasellus orci...",
    date: "11/27/2023",
    time: "17:30",
  },
  {
    messages:
      "Lorem ipsum dolor sit amet consectetur. Phasellus urna phasellus orci...",
    date: "11/27/2023",
    time: "17:30",
  },
];

const columnHelper = createColumnHelper<TableProps>();

const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [viewState, setViewState] = useState<boolean>(false);
  const data = useMemo(() => mData, []);

  const columns: any = [
    {
      header: "Messages",
      accessorKey: "messages",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Time",
      accessorKey: "time",
    },
    columnHelper.accessor("action", {
      header: "Action",
      cell: () => (
        <div className="flex  justify-center items-center">
          <div onClick={handleOpenModal}>
            <MoreIcon />
          </div>
          {viewState && <ViewDelete />}
        </div>
      ),
    }),
  ];

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
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<NotificationPopUp />}
      />
    </div>
  );
};

export default Notifications;
