import React, { useMemo} from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import UnsettledData from "../Constant/unsettledData";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import betHistoryColumns from "./betHistoryColumns";
import BetStatusTab from "./BetStatusTab";

const BetHistoryUnsettled = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const data = useMemo(() => UnsettledData, []);
  const columns = betHistoryColumns(handleClick);

  return (
        <div>
          <TableComp
            data={data}
            columns={columns}
            searchField={true}
            filterField={true}
            tableTitle="Bet History"
            betStatus={<BetStatusTab isUnsettled/>}
          />
          <Modal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<BetHistoryPopUp  />}
          />
        </div>
  );
};

export default BetHistoryUnsettled;
