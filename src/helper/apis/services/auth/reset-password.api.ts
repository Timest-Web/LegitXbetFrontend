export interface ResetPasswordPayload {
    phoneNumber: string,
    code: string,
    newPassword?: string
}

export interface ResetPasswordResponse {
    message: string,
    statusCode: number;
}

export const resetPassword: (payload: ResetPasswordPayload) => Promise<ResetPasswordResponse> = async (payload) => {
    try {
        const response = await fetch('https://legitx.ng/auth/reset-password', {
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

