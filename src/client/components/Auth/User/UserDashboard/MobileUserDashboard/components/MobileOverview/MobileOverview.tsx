import React, { useState } from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BalanceCard from "../../../DesktopUserDashboard/shared/BalanceCard";
import UserDocumentCard from "../../../DesktopUserDashboard/shared/UserDocumentCard";
import AllBetTable from "../../../DesktopUserDashboard/shared/InactiveTable";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import OverViewHeader from "../../../DesktopUserDashboard/components/Overview/Components/OverviewHeader";
import Modal from "@/src/client/shared/Modal";
import DepositContainer from "../../../DesktopUserDashboard/components/Deposit/Components/DepositModal/DepositContainer";
import WithdrawPop from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawPop";
import OverviewWelcomeTab from "../../../DesktopUserDashboard/components/Overview/Components/OverviewWelcomeTab";


const renderCarouselItems = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  const handleDepositClick = () => {
    setDepositModalOpen(true);
  };

  const handleWithdrawalClick = () => {
    setWithdrawalModalOpen(true);
  };
  return (
    <Carousel.Item className="mb-4">
      
      <div className="flex space-x-8">
        <OverviewWelcomeTab/>
      <BalanceCard
          buttonState={true}
          secondButton={true}
          firstButtonText="Deposit"
          secondButtonText="Withdrawal"
          balanceButtonAction={(buttonType) => {
            if (buttonType === "first") {
              handleDepositClick();
            } else if (buttonType === "second") {
              handleWithdrawalClick();
            }
          }}
        />
      </div>
      <Modal
          openModal={isDepositModalOpen}
          setOpenModal={setDepositModalOpen}
          className="custom-modal-class"
          modalContent={<DepositContainer />}
        />
        <Modal
          openModal={isWithdrawalModalOpen}
          setOpenModal={setWithdrawalModalOpen}
          className="custom-modal-class"
          modalContent={<WithdrawPop />}
        />
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
            <p className=" font-bold mb-4 ">Welcome, Johnson</p>
            <CustomCarousel renderCarouselItems={renderCarouselItems} />
            <div>
              <AllBetTable
                title="All Bets"
                headers={headers}
                noBetsMessage="No bets placed"
                placeBetButtonText=" Place a bet"
                buttonAction={undefined}
                buttonLink=""
              />
            </div>
          </div>
          
        }
      />
    
      
    </div>
  );
};

export default MobileOverview;
