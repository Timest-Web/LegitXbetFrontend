import TransactionInner from "./TransactionInner";
import LayoutDashboard from "../../Reusables/LayoutDashboard";

const Transaction = () => {
    return ( <LayoutDashboard content={<TransactionInner/>} /> );
}
 
export default Transaction;