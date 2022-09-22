import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorResponse} from "../../utils/errorResponse";

export interface ValorantMap {
    name: string,
    shortName: string,
    picture: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ValorantMap[] | ErrorResponse>
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
        {
            name: 'Bind',
            shortName: 'bind',
            picture: '/maps/bind.png',
        },
        {
            name: 'Breeze',
            shortName: 'breeze',
            picture: '/maps/breeze.png',
        },
        {
            name: 'Fracture',
            shortName: 'fracture',
            picture: '/maps/fracture.png',
        },
        {
            name: 'Haven',
            shortName: 'haven',
            picture: '/maps/haven.png',
        },
        {
            name: 'Icebox',
            shortName: 'icebox',
            picture: '/maps/icebox.png',
        },
        {
            name: 'Pearl',
            shortName: 'pearl',
            picture: '/maps/pearl.png',
        },
        {
            name: 'Split',
            shortName: 'split',
            picture: '/maps/split.png',
        },
    ])
}
