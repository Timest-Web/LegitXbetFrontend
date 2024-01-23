import React from "react";
import PopUpContainer from "../../../shared/PopUpContainer";
import WithdrawalForm from "./WithdrawalForm";

const WithdrawPop = () => {
  return (
    <PopUpContainer
      popUpContent={
          <WithdrawalForm/>
      }
    />
  );
};

export default WithdrawPop;
