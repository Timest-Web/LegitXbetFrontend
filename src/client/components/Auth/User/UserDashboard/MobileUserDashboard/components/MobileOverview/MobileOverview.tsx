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
import {
  GenericBurgerRegular,
  ControlsCloseSmall,
} from "@heathmont/moon-icons-tw";

const MobileOverview = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [hamIcon, setHamIcon] = useState(true);
  const [closeIcon, setCloseIcon] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [betHistory, setBetHistory] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
    setHamIcon(!hamIcon);
    setCloseIcon(!closeIcon);
  };

  const handleBetHistory = ()=>{
    setBetHistory(!betHistory)
  }

  const handleDepositClick = () => {
    setDepositModalOpen(true);
  };

  const handleWithdrawalClick = () => {
    setWithdrawalModalOpen(true);
  };
  const headers = OverViewHeader();
  const renderCarouselItems = () => {
    return (
      <Carousel.Item className="mb-4">
        <div className="">
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

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-12">
            <div className="flex justify-between">
              <p className=" font-bold mb-4 ">Welcome, Johnson</p>
              {/* <div className="relative" onClick={handleHamburger}>
                {hamIcon && <GenericBurgerRegular className=" text-moon-32 "/>}
                {closeIcon && <ControlsCloseSmall className=" text-moon-32 "/>}
                {hamburger && (
                  <div className="absolute right-[0px]">
                    <OverviewWelcomeTab />
                  </div>
                )}
              </div> */}
            </div>
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
            <div className="bg-white h-12 w-72 p-3 my-4" onClick={handleBetHistory}>
              <p>Bet History</p>
            </div>
            { betHistory &&
              <AllBetTable
                title="All Bets"
                headers={headers}
                noBetsMessage="No bets placed"
                placeBetButtonText=" Place a bet"
                buttonAction={undefined}
                buttonLink=""
              />
            }
            <div className="bg-white h-12 w-72 p-3 mt-4 mb-16" onClick={handleBetHistory}>
              <p>Deposit History</p>
            </div>
            <OverviewWelcomeTab/>
          </div>
        }
      />
    </div>
  );
};

export default MobileOverview;
