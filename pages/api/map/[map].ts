import type { NextApiRequest, NextApiResponse } from 'next'
import {ValorantMap} from "../maps";
import {ErrorResponse} from "../../../utils/errorResponse";
import {PrismaClient} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ValorantMap | ErrorResponse>
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

    const prisma = new PrismaClient()

    const mapEntity = await prisma.map.findFirst({
        where: {
            shortName: map
        }
    });

    if (mapEntity) {
        res.status(200).json(mapEntity)
    } else {
        res.status(404).json(
            {
                error: 'Map not found',
            }
        )
    }
}
