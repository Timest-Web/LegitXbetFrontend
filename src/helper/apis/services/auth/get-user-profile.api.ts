import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
    const getProfile = async () => {
        try {
            const userDetails = localStorage.getItem("access") || "{}";
            const parsedDetails = JSON.parse(userDetails);
            const response = await fetch("https://legitx.ng/auth/profile", {
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

    const query = useQuery({
        queryFn: getProfile,
        queryKey: ['USER_PROFILE']
    });

    return query;
}

export default useGetUserProfile;
