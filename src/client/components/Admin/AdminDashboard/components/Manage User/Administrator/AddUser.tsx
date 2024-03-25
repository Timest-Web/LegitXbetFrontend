

const AddUser = () => {
  return (
      <div className="p-4 ">
        <h2 className="font-bold text-lg">Add User</h2>
        <form className="bg-white w-full mt-4 p-4 rounded-md">
          <p className="mt-2 mb-4 font-bold">User Details</p>
          <div className="grid grid-cols-2 gap-8 w-[80%]">
            <div className="flex flex-col space-y-1 text-sm">
              <label className="font-bold">Name</label>
              <input
                className="bg-gray-200 p-2"
                type="text"
                placeholder="Alabanza Pablo"
              />
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <label className="font-bold">Email</label>
              <input
                className="bg-gray-200 p-2 "
                type="text"
                placeholder="alabanza@yahoo.com"
              />
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <label className="font-bold">Password</label>
              <input
                className="bg-gray-200 p-2 "
                type="password"
                placeholder=""
              />
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <label className="font-bold">Roles</label>
              <select className="w-44 p-2 bg-gray-200">
                <option>Admin</option>
                <option>Support</option>
              </select>
            </div>
            <button type="submit" className="bg-black text-white p-1 w-32 rounded-md">Submit</button>
          </div>
        </form>
      </div>
  );
};

export default AddUser;
