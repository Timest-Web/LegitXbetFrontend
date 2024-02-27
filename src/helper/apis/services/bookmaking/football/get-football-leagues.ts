import { useQuery } from "@tanstack/react-query";

const useGetFootballLeagues = () => {
  const getFootLeagues = async () => {
    try {
      const response = await fetch(
        "https://legitx.ng/bookmaking/football/leagues",
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
    queryFn: getFootLeagues,
    queryKey: ["GET_FOOTBALL_LEAGUES"],
  });

  return query;
};

export default useGetFootballLeagues;
