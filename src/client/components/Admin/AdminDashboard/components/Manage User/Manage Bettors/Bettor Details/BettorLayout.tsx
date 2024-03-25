import { useRouter } from "next/router";
import bettorDetail from "../../../../constant/BettorsDetail.json";
import AdminDashboardLayout from "../../../shared/AdminDashboardLayout";
import { ReactNode } from "react";
import Link from "next/link";

interface BettorLayoutProps {
  content: ReactNode;
}

const BettorLayout: React.FC<BettorLayoutProps> = ({ content }) => {
  const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  const queryParams = { id: bettor?.id };
  return (
    <AdminDashboardLayout>
      {bettor ? (
        <div className="flex space-x-6">
          <div className="flex flex-col w-[30%]">
            <section className="bg-white text-sm h-44 rounded-lg ml-6 mt-4 p-2">
              <h2 className="font-bold">User Information</h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-bold">Name:</span>
                  <span>{bettor.bettor}</span>
                </p>
                <p>
                  <span className="font-bold">Email:</span>
                  <span>{bettor.email}</span>
                </p>
                <p>
                  <span className="font-bold">Balance:</span>
                  <span>{bettor.balance}</span>
                </p>
              </div>
            </section>
            <section className="bg-white text-sm flex flex-col font-bold space-y-5  rounded-lg ml-6 mt-4 p-2">
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-details",
                  query: queryParams,
                }}
              >
                Profile
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-password",
                  query: queryParams,
                }}
              >
                Password
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/manage-balance",
                  query: queryParams,
                }}
              >
                Manage Balance
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/send-mail",
                  query: queryParams,
                }}
              >
                Send Email
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-prediction-log",
                  query: queryParams,
                }}
              >
                Prediction-log
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-payment-log",
                  query: queryParams,
                }}
              >
                Payment Log
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-withdrawal-log",
                  query: queryParams,
                }}
              >
                Withdraw Log
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={{
                  pathname: "/admin/manage-users/bettor-transaction",
                  query: queryParams,
                }}
              >
                Transaction
              </Link>
            </section>
          </div>

          <div className="w-[65%] ">
            <div className="bg-white p-5 w-full mt-4 rounded-lg">{content}</div>
            <section className="mt-6 flex space-x-6">
              <button className="bg-blue-500 w-36 p-2 rounded-md text-white text-sm ">
                Login as Bettor
              </button>
              <button className="bg-red-600 w-36 p-2 rounded-md text-white text-sm ">
                Ban Bettor
              </button>
            </section>
          </div>
        </div>
      ) : (
        <p>Bettor not found</p>
      )}
    </AdminDashboardLayout>
  );
};

export default BettorLayout;
