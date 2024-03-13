import useGetBetSlip from "@/src/helper/apis/services/ticket/get-bet-slips-api";
import { Loader } from "@heathmont/moon-core-tw";
import Receipt from "../../../../shared/Svg/Receipt";
import BetItem from "../components/BetItem";
import Link from "next/link";

const MyBet = () => {
  const { data } = useGetBetSlip();
  console.log(data);

  if (!data) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader size="xs" />
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className="flex items-center justify-center px-16 py-28">
        <div className="flex flex-col items-center justify-center">
          <Receipt />
          <p className="text-gray-600 text-xs">No bet selection yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      {data.slice(0, 3).map((value: any, index: number) => (
        <div key={index} className="p-4 border rounded-md">
          {value?.bookedGames.map((val: any, indx: number) => (
            <div key={indx}>
              <BetItem
                index={indx}
                value={{
                  id: val.id,
                  odd: val.odd,
                  time: val.time,
                  oddName: val.oddName,
                  teamOne: val.homeTeam,
                  teamTwo: val.awayTeam,
                }}
                onDelete={undefined}
              />
              <hr className="my-2" />
            </div>
          ))}

          <div className="mt-2 w-full">
            <BetInfo label="Stake" value={`N${value.stake}`} />
            <BetInfo label="Possible Win" value={`N${value.possibleWin}`} />
            <BetInfo label="Status" value={value.status} />
            <BetInfo label="Date" value="Feb 2" />
          </div>
        </div>
      ))}
      {data.length > 2 && (
        <Link href="user-dashboard/bet-history">
          <button className="bg-gray-200 text-black font-bold py-1 w-full rounded-lg text-[11px] mt-3">
            View More
          </button>
        </Link>
      )}
    </div>
  );
};

export default MyBet;

const BetInfo = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between text-[12px] w-full">
    <p className="text-gray-800">{label}:</p>
    <p className="text-black font-bold">{value}</p>
  </div>
);
