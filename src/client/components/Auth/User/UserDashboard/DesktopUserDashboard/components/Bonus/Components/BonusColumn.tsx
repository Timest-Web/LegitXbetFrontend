import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import SubmitButton from "../../../shared/SubmitButton";
import Modal from "@/src/client/shared/Modal";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import DepositContainer from "../../Deposit/Components/DepositModal/DepositContainer";

const columnHelper = createColumnHelper<TableProps>();

const BonusColumn = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  return [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Bonus Id",
      accessorKey: "bonus_Id",
    },
    {
      header: "Start date",
      accessorKey: "start_date",
    },
    {
      header: "Exp. date",
      accessorKey: "exp_date",
    },
    { header: "Type", accessorKey: "type" },
    {
      header: "Percentage",
      accessorKey: "percentage",
    },
    columnHelper.accessor("action", {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <div>
          {" "}
          <div onClick={handleClick}>
            <SubmitButton buttonContent="Deposit" />
          </div>
          <Modal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<DepositContainer />}
          />
        </div>
      ),
    }),
  ];
};

export default BonusColumn;
