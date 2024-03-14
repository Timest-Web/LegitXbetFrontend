import React from "react";
import { Helmet } from "react-helmet";
import Football from "@/src/client/components/SportCategory/Football";
import { UpdateDocumentTitle } from "@/src/client/shared/Utils/UpdateDocumentTitle";

const FootballPage = () => {
  UpdateDocumentTitle("Football Sport - LegitXbet");
  return <Football />;
};

export default FootballPage;
