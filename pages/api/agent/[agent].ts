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
        res.status(200).json(agentEntity)
    } else {
        res.status(404).json(
            {
                error: 'Agent not found',
            }
        )
    }
}
