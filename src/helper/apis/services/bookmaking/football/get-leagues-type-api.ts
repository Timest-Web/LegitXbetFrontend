import { useQuery } from "@tanstack/react-query";

const useGetFootballLeague = ({leagueName}: {leagueName: string}) => {
    console.log(leagueName);
  const getFootballlLeagues = async () => {
    try {
      const response = await fetch(
        `https://legitx.ng/bookmaking/football/matches/leagues/${leagueName}`,
        {
          method: "GET",
        }
      );
      const responseData = await response.json();
      responseData.statusCode = responseData.status;

      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  const query = useQuery({
    queryFn: getFootballlLeagues,
    queryKey: ["GET_TOP_LEAGUES_DATA"],
  });
  return query;
};

export default useGetFootballLeague;
