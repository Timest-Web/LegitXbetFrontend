import { useRouter } from "next/router";
import BettorLayout from "./BettorLayout";
import bettorDetail from "../../../../constant/BettorsDetail.json";

const BettorBalance = () => {
  const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  return (
    <div>
      {bettor ? (
        <BettorLayout
          content={
            <div className="text-sm">
              <p className="font-bold">{bettor.bettor} Balance Update</p>
              <form className="space-y-4">
                <label className="font-bold flex flex-col mt-3">
                  Operation
                  <select className="p-3 w-[90%] bg-gray-200 rounded-sm">
                    <option>Add Money</option>
                    <option>Deduct Money</option>
                  </select>
                </label>
                <label className="font-bold flex flex-col mt-3">
                  Amount
                  <input className="p-3 w-[90%] bg-gray-200 rounded-sm" />
                </label>
                <label className="font-bold flex flex-col mt-3">
                  Message
                  <textarea className="p-3 w-[90%] bg-gray-200 rounded-sm" />
                </label>
                <button className="bg-black w-32 p-2 rounded-md text-xs text-white">
                  Update
                </button>
              </form>
            </div>
          }
        />
      ) : (
        <p>Bettor not found</p>
      )}
    </div>
  );
};

export default BettorBalance;
