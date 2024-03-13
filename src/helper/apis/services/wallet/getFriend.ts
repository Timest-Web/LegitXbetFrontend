export const getFriend = async (phoneNumber: number) => {
    try {
      const userDetails = localStorage.getItem("access") || "{}";
      const parsedDetails = JSON.parse(userDetails);
      const response = await fetch(
        `https://legitx.ng/users/user-with-phone/${phoneNumber}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${parsedDetails?.accessToken}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch friend data: ${response.status}`);
      }
  
      const responseData = await response.text(); 
      return responseData; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
  