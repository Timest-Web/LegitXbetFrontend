export const getUserProfile = async () => { 
    try {
            const userDetails = localStorage.getItem('access') || '{}';
            const parsedDetails = JSON.parse(userDetails);
            const response = await fetch('https://legitx.ng/auth/profile', {
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
