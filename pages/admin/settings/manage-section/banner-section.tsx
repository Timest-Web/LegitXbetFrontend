import BannerSection from "@/src/client/components/Admin/AdminDashboard/components/Settings/Manage Section/BannerSection";
import type { NextPage } from "next";
import Head from "next/head";

const Banner: NextPage = (props) => (
  <div>
    <Head>
      <title>Banner - LegitXbet</title>
    </Head>
    <BannerSection {...props} />
  </div>
);

export default Banner;
