import React, {useMemo} from "react";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import TableComp from "../../Extras/TableComp";
import UploadedData from "../Constants/UploadedData";


const UploadedDocuments = () => {
    const data = useMemo(() => UploadedData, []);

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
