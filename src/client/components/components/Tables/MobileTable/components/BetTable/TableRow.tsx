import React from "react";
import Link from "next/link";
import Time from "@/src/client/shared/Svg/Time";
import Ranking from "@/src/client/shared/Svg/Ranking";
import { truncateText } from "@/src/client/shared/Utils/TruncateText";
import ScoreView from "../../../DesktopTable/components/ScoreView";
import { MoreOdds } from "../../../DesktopTable/components/MoreOdds";
import { OddsButtons } from "@/src/client/shared/Button/OddsButton/OddsButtons";
import { TableProps } from "../../../constant/data";

const TableRow = ({
  id,
  time,
  teamOne,
  teamTwo,
  home,
  draw,
  away,
  homeName,
  awayName,
  drawName,
  isLiveTable,
  teamOneScore,
  teamTwoScore,
  oddOne,
  oddTwo,
  oddThree,
  sport,
  marketId,
  marketName,
  league,
}: TableProps) => {
  const truncatedTeamOne = truncateText(teamOne, 10);
  const truncatedTeamTwo = truncateText(teamTwo, 10);
  // const winInt = parseFloat(home);
  // const drawInt = parseFloat(draw);
  // const loseInt = parseFloat(away);

  const selectedOddObj = {
    id,
    time,
    teamOne,
    teamTwo,
    home,
    draw,
    away,
    homeName,
    awayName,
    drawName,
    oddOne,
    oddTwo,
    oddThree,
    sport,
    marketId,
    marketName,
  };

  const href = `/sport/football/${
    league?.split(":")[1]
  }/${teamOne}-vs-${teamTwo}/${id}`;

  return (
    <div className={`bg-darkAsh w-full`}>
      <div className="flex flex-row w-full h-11">
        <Link href={href}>
          <div className="flex flex-col items-center justify-center w-20 h-11 text-[10px] space-x-1 border-r border-r-lightAsh">
            <div className="flex items-center justify-center space-x-1">
              <Time color="#E6EAEE" />
              <p className="text-gray-400 ">{time}</p>
            </div>
            <p className="text-[10px] text-gray-400">{`ID: ${id}`}</p>
          </div>
        </Link>
        <div className="flex items-center justify-between space-x-6  overflow-x-scroll border-t tablerow border-t-lightAsh w-screen text-gray-200 px-4 text-xs">
          <Link
            href={href}
            className="flex items-center space-x-4 justify-start text-[10px]"
          >
            <p>v</p>
            <div className="w-16">
              <p>{truncatedTeamOne}</p>
              <p>{truncatedTeamTwo}</p>
            </div>
          </Link>

          <div className="w-8">
            <Ranking />
          </div>
          <div className="flex space-x-6">
            {isLiveTable === true && (
              <ScoreView
                teamOneScore={teamOneScore}
                teamTwoScore={teamTwoScore}
              />
            )}
            <OddsButtons selectedOddObj={selectedOddObj} />
          </div>
          <MoreOdds href={href} />
        </div>
      </div>
    </div>
  );
};

export default TableRow;
