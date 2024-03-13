import { useQuery } from "@tanstack/react-query";

const useGetMatchById = (matchId: string) => {
  const getMatchById = async () => {
    try {
      const response = await fetch(
        `https://legitx.ng/bookmaking/football/matches/${matchId}`,
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
    queryFn: getMatchById,
    queryKey: ["GET_MATCH_BY_ID", matchId],
  });

  return query;
};

export default useGetMatchById;
