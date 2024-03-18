import AdminDashboardLayout from "../../shared/AdminDashboardLayout";

const AdminReferral = () => {
  return (
    <AdminDashboardLayout>
        <div className="p-3"> <h2 className="text-lg font-bold">Referral Settings</h2>
      <div className="w-96 mt-5 bg-white p-4 rounded-md">
        <h3 className="font-bold text-lg mb-3">Deposit Commission</h3>
        <div className="flex space-x-4">
          <button className="p-2 bg-green-200 rounded-md text-green-500 text-sm">Enable</button>
          <button className="p-2 bg-red-200 rounded-md text-red-500 text-sm">Disable</button>
        </div>
        <hr className="w-full p-2 mt-2"></hr>
        <div className="bg-black text-white p-3 flex justify-between rounded-t-md">
          <p>Level</p>
          <p>Commission</p>
        </div>
        <div className="flex justify-between text-sm p-3">
          <p>LEVEL# 1 </p>
          <p>7.00 %</p>
        </div>
        <hr className="p-2 mt-1"></hr>
        <div className="flex justify-between text-sm p-3">
          <p>LEVEL# 2 </p>
          <p>5.00 %</p>
        </div>
        <hr className="p-2 mt-1"></hr>
        <div className="flex justify-between text-sm p-3">
          <p>LEVEL# 3 </p>
          <p>2.00 %</p>
        </div>
        <hr className="p-2 mt-1"></hr>
        <form className="flex flex-col space-y-2 justify-center items-center">
          <input
            className="p-2 w-80 bg-gray-200 rounded-md text-sm"
            placeholder="How many level"
          />
          <button className="w-64 p-2 bg-black rounded-md text-white text-sm">Generate</button>
        </form>
      </div></div>
     
    </AdminDashboardLayout>
  );
};

export default AdminReferral;
