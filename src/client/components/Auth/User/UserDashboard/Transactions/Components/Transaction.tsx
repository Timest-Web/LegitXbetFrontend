import TransactionInner from "./TransactionInner";
import LayoutDashboard from "../../Extras/LayoutDashboard";

const Transaction = () => {
    return ( <LayoutDashboard content={<TransactionInner/>} /> );
}
 
export default Transaction;