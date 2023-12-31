import React, {useMemo} from "react";
import UploadedData from "../Constants/UploadedData";
import UploadedColumn from "../Constants/UploadedColumn";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import TableComp from "../../../shared/ActiveTableComp";


const UploadedDocuments = () => {
    const data = useMemo(() => UploadedData, []);
    const columns: any = UploadedColumn()

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
