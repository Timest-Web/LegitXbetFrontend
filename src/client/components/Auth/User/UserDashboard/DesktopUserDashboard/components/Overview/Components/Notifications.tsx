import React from "react";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import NotificationInnerComp from "./NotificationInnerComp";

const Notifications = () => {
  return <LayoutDashboard content={<NotificationInnerComp />} />;
};

export default Notifications;
