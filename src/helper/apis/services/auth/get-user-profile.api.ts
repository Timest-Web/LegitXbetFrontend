export const getUserProfile = async () => { 
    try {
            const userDetails = localStorage.getItem('access') || '{}';
            const parsedDetails = JSON.parse(userDetails);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}auth/profile`, {
            method: 'GET',
            headers: {
                  'Content-type': 'application/json',
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
