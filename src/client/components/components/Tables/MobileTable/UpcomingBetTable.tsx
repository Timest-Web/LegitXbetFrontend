import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";


export const CustomBetTable = ({
  data,
  viewFeatureMatches
}:{
  data: any,
  viewFeatureMatches: number
}) => {
  // console.log(data);
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

