import TransactionInner from "./TransactionInner";
import LayoutDashboard from "../LayoutDashboard";

const Transaction = () => {
    return ( <LayoutDashboard content={<TransactionInner/>} /> );
}
 
export default Transaction;