import { useRouter } from "next/router";
import FixtureDetails from "./FixtureDetails";
import useFormatDate from "@/src/client/shared/Hooks/useFormatDate";
import useBetSlipQuery from "@/src/client/shared/Hooks/useBetSlip";

const TicketDetails = () => {
  const { data: betSlipData = [] } = useBetSlipQuery();
  const formatDate = useFormatDate();
  const router = useRouter();
  const { id, date, status, stake, returnStake, totalOdd, type } = router.query;

  const formattedData = betSlipData.map((betslip: any, index: number) => ({
    ...betslip,
    serialNumber: index + 1,
    amount: betslip.possibleWin.toLocaleString(),
    date: formatDate(betslip.createdAt),
  }));

  const currentBetSlip = formattedData.find(
    (betslip: any) => betslip.id === Number(id)
  );

  return (
    <div className="">
      <p className="p-2 bg-black text-white">Ticket Details</p>
      <section className="bg-white text-sm p-2">
        <div className="flex justify-between">
          <p>
            Ticket ID: <span className="font-bold">{id}</span>
          </p>
          <p className="text-sm font-bold">{date}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">{type}</p>
          <p>
            Status: <span className="font-bold">{status}</span>
          </p>
        </div>
        <div className="mt-3 space-y-1">
          <p>
            Total Odds: <span className="font-bold">{totalOdd}</span>
          </p>
          <p>
            Total Stake: <span className="font-bold">NGN {stake}</span>
          </p>
          <p>
            Total Return: <span className="font-bold">NGN {returnStake}</span>
          </p>
        </div>
      </section>
      {currentBetSlip &&
        currentBetSlip.bookedGames.map((game: any, index: number) => (
          <div
            key={index}
            className=" md:flex md:justify-between mt-6 md:mt-3 text-sm m-auto p-3 bg-white"
          >
            <div>
              <p className="text-sm">{game.date}</p>

              <FixtureDetails matchId={game.matchId} />
            </div>
            <section>
              <p>
                Pick: <span className="font-bold"> {game.odd}</span>
              </p>
              <p>
                Market: <span className="font-bold"> {game.marketName}</span>
              </p>
            </section>
          </div>
        ))}
    </div>
  );
};

export default TicketDetails;
