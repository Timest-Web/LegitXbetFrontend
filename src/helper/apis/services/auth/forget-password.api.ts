export interface ForgetPasswordPayload {
      phoneNumber: string;
}

export interface ForgetPasswordResponse {
      message: string;
      statusCode: number;
}

export const forgetPassword: (payload: ForgetPasswordPayload) => Promise<ForgetPasswordResponse> = async (payload) => {
    try {
        const response = await fetch('https://legitx.ng/auth/forgot-password', {
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

