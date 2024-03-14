import AllBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/AllBets";
import RefundedBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/RefundedBets";
import type { NextPage } from "next";

const RefundedBet: NextPage = (props) => (
  <div>
    <RefundedBets {...props} />
  </div>
);

export default RefundedBet;
