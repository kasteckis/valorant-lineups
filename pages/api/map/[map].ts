import type { NextApiRequest, NextApiResponse } from 'next'
import {Map} from "../maps";
import {ErrorResponse} from "../../../utils/errorResponse";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Map | ErrorResponse>
) {
    let { map } = req.query;
    map = map ? map.toString() : undefined;

    if (!map) {
        res.status(404).json(
            {
                error: 'Map not found',
            }
        )
        return
    }

    res.status(200).json(
        {
            name: map, // Haven
            shortName: map, // haven
            picture: '/maps/haven.png',
        }
    )
}
