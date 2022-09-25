import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";

export interface Agent {
    id: number,
    name: string,
    shortName: string,
    picture: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Agent[]>
) {
    const prisma = new PrismaClient()

    const agents: Agent[] = await prisma.$queryRaw`
        SELECT DISTINCT Agent.id, Agent.name, Agent.shortName, Agent.picture FROM Agent
        JOIN Lineup ON Lineup.agent_id = Agent.id`

    res.status(200).json(agents)

    // res.status(200).json([
    //     {
    //         name: 'Viper',
    //         shortName: 'viper',
    //         picture: '/agents/viper.png',
    //     },
    //     {
    //         name: 'Brimstone',
    //         shortName: 'brimstone',
    //         picture: '/agents/brimstone.png',
    //     },
    //     {
    //         name: 'Killjoy',
    //         shortName: 'killjoy',
    //         picture: '/agents/killjoy.png',
    //     },
    //     {
    //         name: 'Cypher',
    //         shortName: 'cypher',
    //         picture: '/agents/cypher.png',
    //     },
    //     {
    //         name: 'Astra',
    //         shortName: 'astra',
    //         picture: '/agents/astra.png',
    //     },
    //     {
    //         name: 'Breach',
    //         shortName: 'breach',
    //         picture: '/agents/breach.png',
    //     },
    //     {
    //         name: 'Chamber',
    //         shortName: 'chamber',
    //         picture: '/agents/chamber.png',
    //     },
    //     {
    //         name: 'Fade',
    //         shortName: 'fade',
    //         picture: '/agents/fade.png',
    //     },
    //     {
    //         name: 'Jett',
    //         shortName: 'jett',
    //         picture: '/agents/jett.png',
    //     },
    //     {
    //         name: 'KAY/O',
    //         shortName: 'kayo',
    //         picture: '/agents/kayo.png',
    //     },
    //     {
    //         name: 'Neon',
    //         shortName: 'neon',
    //         picture: '/agents/neon.png',
    //     },
    //     {
    //         name: 'Omen',
    //         shortName: 'omen',
    //         picture: '/agents/omen.png',
    //     },
    //     {
    //         name: 'Phoenix',
    //         shortName: 'phoenix',
    //         picture: '/agents/phoenix.png',
    //     },
    //     {
    //         name: 'Raze',
    //         shortName: 'raze',
    //         picture: '/agents/raze.png',
    //     },
    //     {
    //         name: 'Reyna',
    //         shortName: 'reyna',
    //         picture: '/agents/reyna.png',
    //     },
    //     {
    //         name: 'Sage',
    //         shortName: 'sage',
    //         picture: '/agents/sage.png',
    //     },
    //     {
    //         name: 'Skye',
    //         shortName: 'skye',
    //         picture: '/agents/skye.png',
    //     },
    //     {
    //         name: 'Sova',
    //         shortName: 'sova',
    //         picture: '/agents/sova.png',
    //     },
    //     {
    //         name: 'Yoru',
    //         shortName: 'yoru',
    //         picture: '/agents/yoru.png',
    //     },
    // ])
}
