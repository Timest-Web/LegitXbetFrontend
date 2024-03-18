import { useRouter } from "next/router";
import bettorDetail from "../../../../constant/BettorsDetail.json";
import BettorLayout from "./BettorLayout";

const BettorDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  
  return (
    <div>
      {bettor ? (
        <BettorLayout
          content={
            <div>
              <h3 className="font-bold text-lg mb-4">
                Information of {bettor.bettor}
              </h3>
              <form className="text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <label className="font-bold flex flex-col">
                    Name
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    Phone Number
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    Email
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    Gender
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                </div>
                <label className="font-bold flex flex-col mt-3">
                  Address
                  <input className="p-3 w-[90%] bg-gray-200 rounded-sm" />
                </label>
                <div className="flex justify-between mt-4">
                  <label className="font-bold flex flex-col">
                    Zip Code
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    City
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    Country
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                </div>
                <div className="flex justify-between mt-4">
                  <label className="font-bold flex flex-col">
                    Status
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    Email Verification
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    2FA Status
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                  <label className="font-bold flex flex-col">
                    2FA Verification
                    <input className="p-3 w-[80%] bg-gray-200 rounded-sm" />
                  </label>
                </div>
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

export default BettorDetails;
