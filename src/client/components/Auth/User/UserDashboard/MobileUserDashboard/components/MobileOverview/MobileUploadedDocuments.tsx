import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import UploadedDocumentsInnerComp from "../../../DesktopUserDashboard/components/Overview/Components/UploadedDocumentsInnerComp";


const MobileUploadedDocuments = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
           <UploadedDocumentsInnerComp/>
          </div>
        }
      />
    </div>
  );
};

export default MobileUploadedDocuments;

