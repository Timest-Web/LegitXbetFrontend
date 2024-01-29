import TicketDetails from "../../../DesktopUserDashboard/components/BetHistory/Components/TicketDetails";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";

const MobileTicketDetails = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div className="pb-16">
          <TicketDetails />
        </div>
      }
    />
  );
};

export default MobileTicketDetails;
