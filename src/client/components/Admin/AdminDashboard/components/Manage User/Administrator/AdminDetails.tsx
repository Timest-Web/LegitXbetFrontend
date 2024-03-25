import { useRouter } from "next/router";
import adminDetails from "../../../constant/AdminDetail.json";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";

const AdminDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const admin = adminDetails.find((admin) => admin.id === Number(id));
  return (
    <AdminDashboardLayout>
      {admin ? (
        <section className="p-5">
          <div className="w-[70%] bg-white p-4 rounded-md">
            <h3 className="font-bold text-lg">Personal Information</h3>
            <div className="mt-4 space-y-3">
              <p className="font-bold text-sm">
                Username:
                   <span className=" font-bold opacity-80 text-sm">
                  {admin.name}
                </span>
              </p>
              <p className="font-bold text-sm">
                Email:
                 <span className=" font-bold opacity-80 text-sm">
                  {admin.email}
                </span>
              </p>
              <p className="font-bold text-sm">
                Role:
                 <span className=" font-bold opacity-80 text-sm">
                  {admin.role}
                </span>
              </p>
            </div>
          </div>
        </section>
      ) : (
        <p>Not Found</p>
      )}
    </AdminDashboardLayout>
  );
};

export default AdminDetails;
