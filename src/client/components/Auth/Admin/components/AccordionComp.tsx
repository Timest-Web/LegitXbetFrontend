import React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { ClassNames } from "@emotion/react";
// import { makeStyles } from "@mui/styles";
import { Accordion } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';

interface AccordionCompProps {
  accordionHeader: string;
  accordionContent: React.JSX.Element;
}

const AccordionComp: React.FC<AccordionCompProps> = ({
  accordionHeader,
  accordionContent,
}) => {
   
  return (
    // <Accordion className="p-0" sx={{bgcolor: 'red', width: '190px', borderCollapse: 'collapse'}} >
    //   <AccordionSummary
    //     expandIcon={<ExpandMoreIcon />}
    //     aria-controls="panel1-content"
    //     id="panel1-header"
    //   >
    //     {accordionHeader}
    //   </AccordionSummary>
    //   <AccordionDetails>{accordionContent}</AccordionDetails>
    // </Accordion>
    <Accordion className="p-[-4rem]">
    <Accordion.Item value="item-1">
      <Accordion.Header className="moon-open:[&_svg]:rotate-180">
        <Accordion.Button>
          <span>{accordionHeader}</span>
          <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
        </Accordion.Button>
      </Accordion.Header>
      <Accordion.Content>
        {accordionContent}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  );
};

export default AccordionComp;
