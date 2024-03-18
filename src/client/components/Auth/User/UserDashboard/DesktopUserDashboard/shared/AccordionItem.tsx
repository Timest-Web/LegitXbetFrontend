import { ControlsChevronDown, ControlsChevronUp } from "@heathmont/moon-icons-tw";
import { ReactNode, useState } from "react";

interface AccordionItemProps {
    title: string;
    icon?: React.JSX.Element;
    children: ReactNode;
    initiallyOpen?: boolean;
  }
  
  const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    icon,
    children,
    initiallyOpen = false,
  }) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
  <div className="cursor-pointer">
    <div className="flex w-full justify-between items-center" onClick={toggleAccordion}>
      <div className="flex space-x-3 items-center">
        <div className="">{icon}</div>
        <div className="text-sm font-bold opacity-50">{title}</div>
      </div>
      <div>{isOpen ? <ControlsChevronUp /> : <ControlsChevronDown />}</div>
    </div>
    <div className={`overflow-hidden transition-all duration-[900ms] ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <div className="flex flex-col space-y-2 ml-12 mt-4 text-sm font-bold hover:opacity-100">
        {children}
      </div>
    </div>
  </div>
  
    );
  };

  export default AccordionItem