import AdminDashboardLayout from "../../shared/AdminDashboardLayout";

const SMSSettings = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-4">
        <h2 className="font-bold text-lg">SMS Notification Settings</h2>
        <form className="bg-white rounded-md w-[95%] p-6 mt-7 text-sm">
          <div className="flex flex-col space-y-1">
            <label className="font-bold">SMS Send Method</label>
            <select className="p-3 w-[98%] bg-gray-200">
              <option>Airtel</option>
              <option>MTN</option>
              <option>Glo</option>
            </select>
          </div>
         <section className="mt-4 w-full flex space-x-7">
            <div className="flex w-full flex-col space-y-1">
                <label className="font-bold">API Key</label>
                <input className="w-[70%] p-2 bg-gray-200"/>
            </div>
            <div className="flex w-full flex-col space-y-1">
                <label className="font-bold">API Secret</label>
                <input className="w-[70%] p-2 bg-gray-200"/>
            </div>
         </section>
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

export default SMSSettings;
