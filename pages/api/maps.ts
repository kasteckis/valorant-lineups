import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorResponse} from "../../utils/errorResponse";
import {PrismaClient} from "@prisma/client";

export interface ValorantMap {
    id: number,
    name: string,
    shortName: string,
    picture: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ValorantMap[] | ErrorResponse>
) {
    const { agent } = req.query;

    if (!agent) {
        res.status(400).json({ error: 'Missing agent parameter' });
        return
    }

    const prisma = new PrismaClient()

    const maps: ValorantMap[] = await prisma.$queryRaw`
        SELECT DISTINCT Map.id, Map.name, Map.shortName, Map.picture FROM Map
        JOIN Lineup ON Map.id = Lineup.map_id
        JOIN Agent ON Agent.id = Lineup.agent_id
        WHERE Agent.name = ${agent}`

    res.status(200).json(maps)

    // res.status(200).json([
    //     {
    //         name: 'Ascent',
    //         shortName: 'ascent',
    //         picture: '/maps/ascent.png',
    //     },
    //     {
    //         name: 'Bind',
    //         shortName: 'bind',
    //         picture: '/maps/bind.png',
    //     },
    //     {
    //         name: 'Breeze',
    //         shortName: 'breeze',
    //         picture: '/maps/breeze.png',
    //     },
    //     {
    //         name: 'Fracture',
    //         shortName: 'fracture',
    //         picture: '/maps/fracture.png',
    //     },
    //     {
    //         name: 'Haven',
    //         shortName: 'haven',
    //         picture: '/maps/haven.png',
    //     },
    //     {
    //         name: 'Icebox',
    //         shortName: 'icebox',
    //         picture: '/maps/icebox.png',
    //     },
    //     {
    //         name: 'Pearl',
    //         shortName: 'pearl',
    //         picture: '/maps/pearl.png',
    //     },
    //     {
    //         name: 'Split',
    //         shortName: 'split',
    //         picture: '/maps/split.png',
    //     },
    // ])
}
