
import { useMemo } from "react";
import mData from "../../../../../constant/MOCK_DATA (4).json";
import DepositContainer from "../DepositModal/DepositContainer";
import LayoutDashboard from "../../../../shared/LayoutDashboard";
import DepositActiveContentInner from "./DepositActiveContentInner";

const DepositActiveContent = () => {

	return (
		<LayoutDashboard
			content={
				<DepositActiveContentInner/>
			}
		/>
	);
};

export default DepositActiveContent;
