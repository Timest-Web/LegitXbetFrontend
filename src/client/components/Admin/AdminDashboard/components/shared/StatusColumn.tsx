import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";

interface AdminActionColumnProps {
  row: Row<any>;
}

const StatusColumn: React.FC<AdminActionColumnProps> = ({ row }) => {
  const [status, setStatus] = useState(row.original.status);

  return (
    <div className="flex justify-center items-center relative">
      <button className={`${status === "Enabled"? "bg-blue-400 px-2": "bg-green-400 px-2 "}`} >
        {status === "Enabled" ? "Disabled" : "Enabled"}
      </button>
    </div>
  );
};

export default StatusColumn;
