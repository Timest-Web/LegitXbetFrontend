import { useQuery } from "@tanstack/react-query";

const useGetTopLeaguesFootball = () => {
  const getGetToplLeagues = async () => {
    try {
      const response = await fetch(
        "https://legitx.ng/bookmaking/football/matches/top-leagues",
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
    queryFn: getGetToplLeagues,
    queryKey: ["GET_TOP_LEAGUES_DATA"],
  });
  return query;
};

export default useGetTopLeaguesFootball;
