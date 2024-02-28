import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
  const getTicket = async () => {
    try {
      const userDetails = localStorage.getItem("access") || "{}";
      const parsedDetails = JSON.parse(userDetails);
      const response = await fetch("https://legitx.ng/ticket/get-ticket", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${parsedDetails?.accessToken}`,
        },
      });
      const responseData = await response.json();
      responseData.statusCode = responseData.status;

      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  const query = useQuery({
    queryFn: getTicket,
    queryKey: ["GET_TICKET"],
  });

  return query;
};

export default useGetUserProfile;
