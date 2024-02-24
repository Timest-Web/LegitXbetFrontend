import { useQuery } from "@tanstack/react-query";

const useGetFootballLeaguesFeed = () => {
  const getProfile = async () => {
    try {
      const response = await fetch(
        "https://legitx.ng/bookmaking/football/leagues/fixtures/feed",
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
    queryFn: getProfile,
    queryKey: ["GET_FOOTBALL_LEAGUES_FEED"],
  });

  return query;
};

export default useGetFootballLeaguesFeed;
