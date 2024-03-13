import SelectedGame from "@/src/client/components/SportCategory/SelectedGame";
import { UpdateDocumentTitle } from "@/src/client/shared/Utils/UpdateDocumentTitle";
import React from "react";

const SelectedGamePage = () => {
  UpdateDocumentTitle("More Match Odds - LegitXbet");
  return <SelectedGame />;
};

export default SelectedGamePage;
