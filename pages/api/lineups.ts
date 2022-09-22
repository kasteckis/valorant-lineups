import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorResponse} from "../../utils/errorResponse";

export interface Lineup {
    title: string,
    content: LineupContent[],
}

export interface LineupContent {
    title: string,
    type: 'video' | 'image',
    url: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Lineup[] | ErrorResponse>
) {
    const { agent, map } = req.query;

    if (!agent) {
        res.status(400).json({ error: 'Missing agent parameter' });
        return
    }

    if (!map) {
        res.status(400).json({ error: 'Missing map parameter' });
        return
    }

    res.status(200).json([
        {
            title: 'Ascent',
            content: [
                {
                    title: 'test lineup video',
                    type: 'video',
                    url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
                },
                {
                    title: 'test lineup image',
                    type: 'image',
                    url: 'https://i.imgur.com/P9XsnQl.png',
                },
            ]
        },
    ])
}
