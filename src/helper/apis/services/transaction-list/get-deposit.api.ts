import { useQuery } from "@tanstack/react-query";

 export const getDeposit = async () => {
        try {
            const userDetails = localStorage.getItem("access") || "{}";
            const parsedDetails = JSON.parse(userDetails);
            const response = await fetch("https://legitx.ng/transactions/credit", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${parsedDetails?.accessToken}`,
                },
            });
            const responseData = await response.json();
            console.log(parsedDetails?.accessToken)
            responseData.statusCode = responseData.status;
            return responseData;
        } catch (error) {
            console.error(error);
        }
    };




