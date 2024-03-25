import AdminDashboardLayout from "../../../shared/AdminDashboardLayout";

const EmailControl = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-4">
        <h2 className="font-bold text-lg">Email Control</h2>
        <form className="grid grid-cols-2 gap-6 bg-white w-[90%] mt-7 p-6 text-sm">
          <div className="flex flex-col space-y-1">
            <label className="font-bold">From Email</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">From Email Name</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Host</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Port</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Encryption</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Username</label>
            <input className="p-2 bg-gray-200 w-[80%]" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold">Password</label>
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

export default EmailControl;
