import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";
import Link from "next/link";

interface AdminActionColumnProps {
  row: Row<any>;
}

const AdminAllBetAction: React.FC<AdminActionColumnProps> = ({ row }) => {  
    const queryParams = { id: row.original.id };

  return (
    <Link href={{pathname:'/admin/manage-users/bettor-details', query: queryParams }} className="">
      <button className="bg-black text-white px-2 py-1">
      Details
      </button>
    </Link>
  );
};

export default AdminAllBetAction;
