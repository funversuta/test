import axios, { AxiosResponse } from 'axios';

const fetcherPure = (apiUrl: string) => {
    if (apiUrl === '') {
        console.error('fetcher.ts: Check your .env.local');
    }
    const axiosInstance = axios.create({ baseURL: apiUrl });

    return async (url: string) => {
        const response: AxiosResponse<Response> = await axiosInstance.get(url);

        return response.data;
    };
};

const apiUrl = process.env.API_URL ? process.env.API_URL : '';
//
const fetcher = fetcherPure(apiUrl);
//
export default fetcher;
