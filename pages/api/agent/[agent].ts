import type { NextApiRequest, NextApiResponse } from 'next'
import {Agent} from "../agents";
import {ErrorResponse} from "../../../utils/errorResponse";

export default function handler(
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

    res.status(200).json(
        {
            name: agent, // Viper
            shortName: agent, // viper
            picture: `/agents/${agent}.png`,
        }
    )
}
