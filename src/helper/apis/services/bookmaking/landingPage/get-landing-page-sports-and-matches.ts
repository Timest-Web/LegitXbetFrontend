import { useQuery } from "@tanstack/react-query";

const useGetLandingPageSportsMatches = () => {
  const getLandingPageSportData = async () => {
    try {
      const response = await fetch(
        "https://legitx.ng/bookmaking/pages/landing-page",
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
    queryFn: getLandingPageSportData,
    queryKey: ["GET_SPORTS_DATA"],
  });

  return query;
};

export default useGetLandingPageSportsMatches;
