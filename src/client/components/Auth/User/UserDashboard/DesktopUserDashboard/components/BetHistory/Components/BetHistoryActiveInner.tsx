import React, { useMemo} from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import mData from "../Constant/data";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import betHistoryColumns from "./betHistoryColumns";
import BetStatusTab from "./BetStatusTab";

const BetHistoryActiveInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const data = useMemo(() => mData, []);
  const columns = betHistoryColumns(handleClick);

  return (
        <div>
          <TableComp
            data={data}
            columns={columns}
            searchField={true}
            filterField={true}
            tableTitle="Bet History"
            betStatus={<BetStatusTab isSettled/>}
          />
          <Modal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<BetHistoryPopUp />}
          />
        </div>
  );
};

export default BetHistoryActiveInner;