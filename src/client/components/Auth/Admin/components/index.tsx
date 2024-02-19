import Image from "next/image";
import logo from "../../../../../assets/logo1.png";
import HomeIcon from "@mui/icons-material/Home";
import AccordionComp from "./AccordionComp";

const AdminPage = () => {
  return (
    <div>
      <div className="bg-black w-72 h-screen p-3 text-white">
        <Image src={logo} alt="logo" />
        <section className="mt-12 [&>*]:pl-4 space-y-4">
          <div className="flex space-x-2">
            <HomeIcon /> <p className="pt-1">Dashboard</p>
          </div>
          <section>
            <h3 className="text-xs font-bold mb-2">BET SETUP</h3>
            <div className="space-y-1">
              <p>Sport Categories</p>
              <p>Manage Leagues</p>
              <div>
                <AccordionComp
                  accordionHeader="Manage Matches"
                  accordionContent={
                    <div>
                      <p>All Matches</p>
                      <p>Running Matches</p>
                      <p>Upcoming Matches</p>
                      <p>Closed Matches</p>
                    </div>
                  }
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
