import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";

interface AdminActionColumnProps {
  row: Row<any>;
  setStatus: (status: string) => void; // Add setStatus prop
}

const AdminActionColumn: React.FC<AdminActionColumnProps> = ({ row, setStatus }) => {
  const [isActive, setIsActive] = useState(row.original.status === "Enabled");

  const toggleStatus = () => {
    const newStatus = isActive ? "Disabled" : "Enabled"; // Toggle the status
    setIsActive(!isActive); // Toggle the isActive state
    setStatus(newStatus); // Update the status in the parent component
  };

  return (
    <div className="flex justify-center items-center relative">
      <button className={`${isActive ? "bg-red-400" : "bg-green-400"} px-2 rounded-md`} onClick={toggleStatus}>
        {isActive ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default AdminActionColumn;
