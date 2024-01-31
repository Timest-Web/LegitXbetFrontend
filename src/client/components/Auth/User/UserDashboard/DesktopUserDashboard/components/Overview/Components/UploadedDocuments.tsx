import React from "react";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import UploadedDocumentsInnerComp from "./UploadedDocumentsInnerComp";

const UploadedDocuments = () => {
  return <LayoutDashboard content={<UploadedDocumentsInnerComp />} />;
};

export default UploadedDocuments;
