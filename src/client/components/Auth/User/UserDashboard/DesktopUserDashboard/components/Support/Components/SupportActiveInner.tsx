import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import SupportTicketData from "../Constants/SupportTicketData";
import SupportActiveColumn from "./SupportActiveColumn";
import { ticketList } from "./SupportInactive";
import TableComp from "../../../shared/ActiveTableComp";

const SupportActiveInner = () => {
  const data = useMemo(() => ticketList, []);

  const columns = SupportActiveColumn();

  return (
    <div>
      <div className="hidden md:block">
        <TableComp data={data} columns={columns} tableTitle="" />
      </div>
      <div className="md:hidden">
        {data.map((ticket, index) => (
          <div className="bg-white rounded-lg space-y-3 p-3 mb-3" key={index}>
            <p className="flex justify-between font-bold">
              Subject <span>{ticket.subject}</span>
            </p>
            <p className="flex justify-between font-bold">
              Message<span>{ticket.message}</span>
            </p>
            <p className="flex justify-between font-bold">
              Priority<span>{ticket.priority}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportActiveInner;
