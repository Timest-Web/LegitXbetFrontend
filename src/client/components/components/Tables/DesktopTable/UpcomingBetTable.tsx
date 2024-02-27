import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";


export const UpcomingBetTable = ({
  data,
  viewFeatureMatches,
}: {
  data: any;
  viewFeatureMatches: number;
}) => {

  return (
    <BetTable
      href="upcominggames"
      icon={<MatchStar />}
      isLiveTable={false}
      sportData={data}
      contentTitle="Highlights"
      viewFeatureMatches={viewFeatureMatches}
    />
  );
};
