import axios, { AxiosPromise } from 'axios';
import indexPage from '../data/index.json';

/** @description - Адрес /api для запросов на бэк */
// const apiUrl = `${process.env.API_URL}/api`

export const getIndexPage = () => indexPage;

const createAxiosInstance = (baseURL: string | undefined, API_KEY: string | undefined) =>
    axios.create({
        baseURL: baseURL,
        headers: {
            Accept: 'application/json',
            'X-Yandex-API-Key': API_KEY ?? ''
        }
    });

const axiosOpenApiInstance = createAxiosInstance(process.env.API_URL_YANDEX_WEATHER, process.env.API_KEY2);

export const getWeather = (params: { lat: number; lon: number; lang?: string }): Promise<AxiosPromise> =>
    axiosOpenApiInstance.get(`/`, { params });

export const getWeatherFetch = (params?: { lat: number; lon: number; lang?: string }): Promise<AxiosPromise> =>
    axios.post(`/api/getWeather`, { params });
