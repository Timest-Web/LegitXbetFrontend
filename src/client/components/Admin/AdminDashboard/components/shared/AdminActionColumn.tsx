import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";

interface AdminActionColumnProps {
  row: Row<any>;
}

const AdminActionColumn: React.FC<AdminActionColumnProps> = ({ row }) => {
  const [status, setStatus] = useState(row.original.status);

  const toggleStatus = () => {
    const newStatus = status === "Disabled" ? "Enabled" : "Disabled";
    setStatus(newStatus);
    row.original.status = newStatus;
  };

  return (
    <div className="flex justify-center items-center relative">
      <button className={`${status === "Enabled"? "bg-red-400 px-2 rounded-md": "bg-green-400 px-2 rounded-md"}`} onClick={toggleStatus}>
        {status === "Enabled" ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default AdminActionColumn;
