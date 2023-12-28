import React, { useMemo, useState } from "react";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import TableComp from "../../Extras/TableComp";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ViewDelete from "./ViewDelete";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import NotificationPopUp from "./NotificationPopUp";
import { Row } from "@tanstack/react-table";
import { RowData } from "@tanstack/react-table";
import NotificationData from "../Constants/NotificationData";



const columnHelper = createColumnHelper<TableProps>();

interface TabViewRows {
  [key: string]: boolean;
}

const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleTabView = (row: { id: string | number }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
  };

  const data = useMemo(() => NotificationData, []);

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
      cell: ({ row }: { row: Row<TableProps> }) => (
        <div className="flex  justify-center items-center relative">
          <button onClick={() => toggleTabView(row)}>
            <MoreIcon />
          </button>
          {tabViewRows[row.id] && <ViewDelete handleOpenModal={handleOpenModal} />}
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