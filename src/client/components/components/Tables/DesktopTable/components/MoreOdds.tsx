import RightArrow from "@/src/client/shared/Svg/RightArrow";
import Link from "next/link";

export const MoreOdds = () => (
  <Link href={`/sports/football/40`}
    className={`flex items-center justify-between text-xs bg-lightAsh w-20 px-2 h-6 rounded-md cursor-pointer`}
  >
    <p>All</p>
    <div className="flex items-center space-x-1">
      <p>Odds</p>
      <RightArrow />
    </div>
  </Link>
);