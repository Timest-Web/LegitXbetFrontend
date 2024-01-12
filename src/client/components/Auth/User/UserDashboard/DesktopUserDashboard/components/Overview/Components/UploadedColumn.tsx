import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import uploadedDoc from "../../../../assets/uploadeddoc.png";
import { Row } from "@tanstack/react-table";
import Image from "next/image";

const columnHelper = createColumnHelper<TableProps>();

const UploadedColumn = () => [
  {
    header: "No",
    accessorKey: "no",
  },
  {
    header: "Doc.",
    accessorKey: "reference_id",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  columnHelper.accessor("preview", {
    header: "Preview",
    cell: ({ row }: { row: Row<TableProps> }) => (
      <div className="flex justify-center items-center">
        <Image src={uploadedDoc} alt="uplaodedDoc" />
      </div>
    ),
  }),
];

export default UploadedColumn;
