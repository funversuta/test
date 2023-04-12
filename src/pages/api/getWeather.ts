import { NextApiRequest, NextApiResponse } from 'next';
import { getWeather } from '@/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await getWeather(req.body.params);
        res.status(200).json(data.data);
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).end(error.message);
    }
}
