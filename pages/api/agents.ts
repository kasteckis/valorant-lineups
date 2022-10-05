import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";

export interface Agent {
    id: number,
    name: string,
    shortName: string,
    picture: string,
    disabled: boolean,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Agent[]>
) {
    const prisma = new PrismaClient()

    const allAgents: Agent[] = await prisma.$queryRaw`
        SELECT Agent.id, Agent.name, Agent.shortName, Agent.picture FROM Agent`

    const availableAgents: Agent[] = await prisma.$queryRaw`
        SELECT DISTINCT Agent.id, Agent.name, Agent.shortName, Agent.picture FROM Agent
        JOIN Lineup ON Lineup.agent_id = Agent.id`

    for (const agent of allAgents) {
        // If agent (from allAgents) exists in availableAgents, then we mark it as NOT disabled.

        agent.disabled = !availableAgents.find(availableAgent => availableAgent.shortName === agent.shortName);
    }

    res.status(200).json(allAgents)
}
