import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorResponse} from "../../utils/errorResponse";
import {PrismaClient} from "@prisma/client";

export interface Lineup {
    id: number,
    title: string,
    picture: string,
    content: LineupContent[],
}

export interface LineupContent {
    id: number,
    title: string,
    type: 'video' | 'image',
    url: string,
}

export default async function handler(
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

    const prisma = new PrismaClient()

    const response: Lineup[] = []

    const lineupsRaw: Lineup[] = await prisma.$queryRaw`
        SELECT Lineup.id, Lineup.title, Lineup.picture FROM Lineup
        JOIN Agent ON Lineup.agent_id = Agent.id
        JOIN Map ON Lineup.map_id = Map.id
        WHERE Map.shortName = ${map}
        AND Agent.shortName = ${agent}`

    for (const lineup of lineupsRaw) {
        const contentRaw: LineupContent[] = await prisma.$queryRaw`
            SELECT Content.id, Content.title, Content.type, Content.url FROM Content 
            WHERE Content.lineup_id = ${lineup.id}`

        response.push({
            id: lineup.id,
            title: lineup.title,
            picture: lineup.picture,
            content: contentRaw,
        });
    }

    res.status(200).json(response)
}
