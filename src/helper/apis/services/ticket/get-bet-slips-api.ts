import { useQuery } from "@tanstack/react-query";

const useGetBetSlip = () => {
  const getBetSlip = async () => {
    try {
      const userDetails = localStorage.getItem("access") || "{}";
      const parsedDetails = JSON.parse(userDetails);
      const response = await fetch("https://legitx.ng/ticket/bet-slips", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${parsedDetails?.accessToken}`,
        },
      });
      const data = await response.json();
      data.statusCode = response.status;
      return data;
    } catch (error) {
      console.error("An error occurred during the API request:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  };

  const query = useQuery({
    queryFn: getBetSlip,
    queryKey: ["GET_BET_SLIP"],
  });

  return query;
};

export default useGetBetSlip;
