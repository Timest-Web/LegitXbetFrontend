import React, {useMemo} from "react";
import UploadedData from "../Constants/UploadedData";
import UploadedColumn from "./UploadedColumn";
import TableComp from "../../../shared/ActiveTableComp";


const UploadedDocumentsInnerComp = () => {
    const data = useMemo(() => UploadedData, []);
    const columns: any = UploadedColumn()

  return (
        <TableComp
          data={data}
          columns={columns}
          searchField={false}
          filterField={false}
          tableTitle="Uploaded Documents"
        />
  );
};

export default UploadedDocumentsInnerComp;
