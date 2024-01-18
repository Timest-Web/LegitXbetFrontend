const baseUrl = "https://legitx.ng/auth";
// const baseUrl = "http://localhost:3000/api/v1";

export interface payloadProps {
  phoneNumber: string;
  password: string;
}

export interface otpPayloadProps {
    phoneNumber: string;
    code: string;
}

export const signIn: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
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


export const signUp: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        data.statusCode = response.status;
        console.log(data);
        return data;
    } catch (error) {
        console.error('An error occurred during the API request:', error);
        return { statusCode: 500, error: 'Internal Server Error' };
    }
};

export const otpVerification: (payload: otpPayloadProps) => Promise<any> = async (payload) => {
    try {
        const response = await fetch(`${baseUrl}/verify`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        data.statusCode = response.status;
        console.log(data);
        return data;
    } catch (error) {
        console.error('An error occurred during the API request:', error);
        return { statusCode: 500, error: 'Internal Server Error' };
    }
};