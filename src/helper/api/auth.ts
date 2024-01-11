const baseUrl = "https://legitx.ng/auth";
// const baseUrl = "http://localhost:3000/api/v1";

export interface payloadProps {
  phoneNumber: string;
  password: string;
}

export const signUp: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.log(error)
    }
};


export const signIn: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.log(error)
    }
};