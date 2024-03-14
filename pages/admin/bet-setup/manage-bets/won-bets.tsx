import AllBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/AllBets";
import WonBets from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Bets/WonBets";
import type { NextPage } from "next";

const WonBet: NextPage = (props) => (
  <div>
    <WonBets {...props} />
  </div>
);

export default WonBet;
