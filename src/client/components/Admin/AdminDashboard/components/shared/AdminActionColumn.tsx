import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";

interface AdminActionColumnProps {
  row: Row<any>;
  setStatus: (status: string) => void; // Add setStatus prop
  isEdit?: boolean;
}

const AdminActionColumn: React.FC<AdminActionColumnProps> = ({
  row,
  setStatus,
  isEdit,
}) => {
  const [isActive, setIsActive] = useState(row.original.status === "Enabled");

  const toggleStatus = () => {
    const newStatus = isActive ? "Disabled" : "Enabled"; // Toggle the status
    setIsActive(!isActive); // Toggle the isActive state
    setStatus(newStatus); // Update the status in the parent component
  };

  return (
    <div className=" flex space-x-3">
      <button
        className={`${
          isActive
            ? "text-red-400 border w-16 border-red-400 border-solid p-1 hover:bg-red-500 hover:text-white"
            : " text-green-400 border w-16 border-green-400 border-solid p-1 hover:bg-green-500 hover:text-white"
        } px-2 `}
        onClick={toggleStatus}
      >
        {isActive ? "Disable" : "Enable"}
      </button>
      {isEdit && (
        <button className="border border-solid border-black w-12 p-2 text-center hover:bg-black hover:text-white">
          Edit
        </button>
      )}
    </div>
  );
};

export default AdminActionColumn;
