import type { NextApiRequest, NextApiResponse } from 'next'
import {Agent} from "../agents";
import {ErrorResponse} from "../../../utils/errorResponse";
import {PrismaClient} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Agent | ErrorResponse>
) {
    let { agent } = req.query;
    agent = agent ? agent.toString() : undefined;

    if (!agent) {
        res.status(404).json(
            {
                error: 'Agent not found',
            }
        )
        return
    }

    const prisma = new PrismaClient()

    const agentEntity = await prisma.agent.findFirst({
        where: {
            shortName: agent
        }
    });

    if (agentEntity) {
        const availableAgents: Agent[] = await prisma.$queryRaw`
            SELECT DISTINCT Agent.id, Agent.name, Agent.shortName, Agent.picture FROM Agent
            JOIN Lineup ON Lineup.agent_id = Agent.id
            WHERE Agent.shortName = ${agentEntity.shortName}`

        res.status(200).json({
            id: agentEntity.id,
            name: agentEntity.name,
            shortName: agentEntity.shortName,
            picture: agentEntity.picture,
            disabled: availableAgents.length <= 0,
        })
    } else {
        res.status(404).json(
            {
                error: 'Agent not found',
            }
        )
    }
}
