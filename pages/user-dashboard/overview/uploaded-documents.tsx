import UploadedDocuments from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Overview/Components/UploadedDocuments";
import MobileUploadedDocuments from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileOverview/MobileUploadedDocuments";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const UploadedDocument: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<UploadedDocuments {...props} />}
      mobileViewDisplay={<MobileUploadedDocuments {...props} />}
    />
);

export default UploadedDocument;
