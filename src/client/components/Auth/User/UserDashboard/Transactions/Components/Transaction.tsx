import TransactionInner from "./TransactionInner";
import LayoutDashboard from "../../shared/LayoutDashboard";

const Transaction = () => {
    return ( <LayoutDashboard content={<TransactionInner/>} /> );
}
 
export default Transaction;