
interface BetData {
    no: number;
    reference_id: string;
    date: string;
    status: string;
    amount: string;
    pot_win: string;
    action: string;
  }
  
  const UnsettledData: BetData[] = [
    {
      no: 1,
      reference_id: "675654456",
      date: "11/27/2023",
      status: "unsettled",
      amount: "500",
      pot_win: "80000",
      action: "actionicon",
    },
    {
      no: 2,
      reference_id: "96521856",
      date: "04/16/2023",
      status: "unsettled",
      amount: "600",
      pot_win: "300000",
      action: "actionicon",
    },
  ];


  export default UnsettledData