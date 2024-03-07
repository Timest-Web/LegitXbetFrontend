import { useQuery } from "@tanstack/react-query";

const useGetFootballPageMatches = () => {
  const getFootballMatches = async () => {
    try {
      const response = await fetch(
        "https://legitx.ng/bookmaking/pages/sports/football",
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
    queryFn: getFootballMatches,
    queryKey: ["GET_FOOTBALL_PAGE_MATCHES"],
  });

  return query;
};

export default useGetFootballPageMatches;
