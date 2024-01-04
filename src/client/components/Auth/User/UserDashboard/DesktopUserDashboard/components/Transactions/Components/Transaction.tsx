import LayoutDashboard from "../../../shared/LayoutDashboard";
import TransactionInner from "./TransactionInner";

const Transaction = () => {
    return ( <LayoutDashboard content={<TransactionInner/>} /> );
}
 
export default Transaction;