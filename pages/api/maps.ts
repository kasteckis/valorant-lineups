import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorResponse} from "../../utils/errorResponse";

export interface Map {
    name: string,
    shortName: string,
    picture: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Map[] | ErrorResponse>
) {
    const { agent } = req.query;

    if (!agent) {
        res.status(400).json({ error: 'Missing agent parameter' });
        return
    }

    res.status(200).json([
        {
            name: 'Ascent',
            shortName: 'ascent',
            picture: '/maps/ascent.png',
        },
    ])
}
