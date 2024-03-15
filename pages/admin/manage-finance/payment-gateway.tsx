import PaymentGateway from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Payment Gateway/PaymentGateway";
import type { NextPage } from "next";
import Head from "next/head";

const PaymentGates: NextPage = (props) => (
  <div>
    <Head><title>Payment Gateway - LegitXbet</title></Head>
    <PaymentGateway {...props} />
  </div>
);

export default PaymentGates;
