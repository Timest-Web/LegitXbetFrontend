import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";

const SportsAPI = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-4">
        <h2 className="font-bold text-lg">Sports API</h2>
        <form className="grid grid-cols-2 gap-6 bg-white w-[90%] mt-7 p-6 text-sm">
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Host</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">API Key</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Market Key</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Minimum Batting Account</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Maximum Batting Account</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="pt-4">
            <button className="bg-black rounded-md w-32 p-2 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminDashboardLayout>
  );
};

export default SportsAPI;
