import AllBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/AllBets";
import LostBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/LostBets";
import type { NextPage } from "next";

const LostBet: NextPage = (props) => (
  <div>
    <LostBets {...props} />
  </div>
);

export default LostBet;
