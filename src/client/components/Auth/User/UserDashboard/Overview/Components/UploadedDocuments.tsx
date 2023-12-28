import React, {useMemo} from "react";
import LayoutDashboard from "../../Constants/LayoutDashboard";
import TableComp from "../../Constants/TableComp";

const mData = [
    {
      no: 1,
      reference_id: "337914456",
      date: "11/27/2023",
      status: "success",
      preview: "preview",
    },
    {
      no: 2,
      reference_id: "46787856",
      date: "04/16/2023",
      status: "success",
      preview: "preview",
    },
  ];


const UploadedDocuments = () => {
    const data = useMemo(() => mData, []);

    const columns: any = [
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
        {
          header: "Preview",
          accessorKey: "preview",
        },
        
      ];

  return (
    <LayoutDashboard
      content={
        <TableComp
          data={data}
          columns={columns}
          searchField={false}
          filterField={false}
          tableTitle="Uploaded Documents"
        />
      }
    />
  );
};

export default UploadedDocuments;
