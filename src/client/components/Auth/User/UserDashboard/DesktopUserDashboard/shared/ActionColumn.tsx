import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import { Row } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { useState } from "react";

interface ActionColumnProps {
  row: Row<TableProps>;

  popUpElement: React.JSX.Element;
}

interface TabViewRows {
  [key: string]: boolean;
}

const ActionColumn: React.FC<ActionColumnProps> = ({ row, popUpElement }) => {
  const toggleTabView = (row: { id: string | number }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
  };

  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});
  return (
    <div className="flex justify-center items-center relative">
      <button onClick={() => toggleTabView(row)}></button>
      {tabViewRows[row.id] && popUpElement}
    </div>
  );
};

export default ActionColumn;
