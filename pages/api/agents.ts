import type { NextApiRequest, NextApiResponse } from 'next'

export interface Agent {
    name: string,
    picture: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Agent[]>
) {
    res.status(200).json([
        {
            name: 'Viper',
            picture: '/agents/viper.png',
        },
        {
            name: 'Brimstone',
            picture: '/agents/brimstone.png',
        },
        {
            name: 'Killjoy',
            picture: '/agents/killjoy.png',
        },
    ])
}
