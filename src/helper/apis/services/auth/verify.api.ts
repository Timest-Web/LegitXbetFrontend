export interface VerifiyUserPayload {
    phoneNumber: string,
    code: string
}

export interface VerifiyResponse {
    message: string;
    statusCode: number
}

export const otpVerification: (payload: VerifiyUserPayload) => Promise<VerifiyResponse> = async (payload) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/verifiy`, {
            method: 'POST',
            headers: {'Content-type': 'application/json',},
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

