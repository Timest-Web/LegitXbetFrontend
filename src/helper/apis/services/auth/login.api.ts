export interface LoginUserPayload {
      phoneNumber: string;
      password: string;
}

export interface LoginResponse {
      accessToken: string;
}

export const signIn: (payload: LoginUserPayload) => Promise<LoginResponse> = async (payload) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        data.statusCode = response.status;
        return data;
    } catch (error) {
        console.error('An error occurred during the API request:', error);
        return { statusCode: 500, error: 'Internal Server Error' };
    }
};

