import PredictionLog from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/PredictionLog";
import type { NextPage } from "next";
import Head from "next/head";

const PredictionLogs: NextPage = (props) => (
  <div>
    <Head>
      <title>Prediction Log</title>
    </Head>
    <PredictionLog {...props} />
  </div>
);

export default PredictionLogs;
