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
                    <select className="p-3 w-[80%] bg-gray-200 rounded-sm">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
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
                <div className="flex space-x-6 mt-4">
                  <div className="space-y-1 flex flex-col">
                    <label className="font-bold">Status </label>
                    <select className="p-2 w-32 bg-gray-200 rounded-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1 ">
                    <label className="font-bold ">Email Verification</label>
                    <select className="p-2 w-32 bg-gray-200 rounded-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="font-bold">2FA Status</label>
                    <select className="p-2 w-32 bg-gray-200 rounded-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="font-bold ">2FA Verification</label>
                    <select className="p-2 w-32 bg-gray-200 rounded-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button className="bg-black w-32 p-2 text-white rounded-md">
                    Submit
                  </button>
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
