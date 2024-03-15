import { useRouter } from "next/router";
import BettorLayout from "./BettorLayout";
import bettorDetail from "../../../../constant/BettorsDetail.json";

const BettorPassword = () => {
    const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  return (
    <div>
      {bettor ? (
        <BettorLayout
          content={
            <div className="text-sm">
               <p className="font-bold">{bettor.bettor} Password Settings</p> 
               <form className="space-y-4">
               <label className="font-bold flex flex-col mt-3">
                  Old Password
                  <input className="p-3 w-[90%] bg-gray-200 rounded-sm" />
                </label>
                <label className="font-bold flex flex-col mt-3">
                  New Password
                  <input className="p-3 w-[90%] bg-gray-200 rounded-sm" />
                </label>
                <button className="bg-black w-32 p-2 text-xs text-white">Update</button>
               </form>
            </div>
          }
        />
      ) : (
        <p>Bettor not found</p>
      )}
    </div>
  );
}
 
export default BettorPassword;