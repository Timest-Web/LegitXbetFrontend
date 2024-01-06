import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BalanceCard from "../../../DesktopUserDashboard/shared/BalanceCard";
import UserDocumentCard from "../../../DesktopUserDashboard/shared/UserDocumentCard";
import AllBetTable from "../../../DesktopUserDashboard/shared/InactiveTable";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import OverViewHeader from "../../../DesktopUserDashboard/components/Overview/Components/OverviewHeader";

const renderCarouselItems = () => {
  return (
    <Carousel.Item>
      <div className="flex space-x-3">
        <div className="">
          <UserDocumentCard />
        </div>
        <div className="w-56">
          <BalanceCard buttonText="" buttonState={false} />
        </div>
      </div>
    </Carousel.Item>
  );
};

const MobileOverview = () => {
  const headers = OverViewHeader();
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <CustomCarousel renderCarouselItems={renderCarouselItems} />
            <div>
              <AllBetTable
                title="All Bets"
                headers={headers}
                noBetsMessage="No bets placed"
                placeBetButtonText=" Place a bet"
                buttonAction={undefined}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default MobileOverview;
