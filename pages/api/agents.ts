import type { NextApiRequest, NextApiResponse } from 'next'

export interface Agent {
    name: string,
    shortName: string,
    picture: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Agent[]>
) {
    res.status(200).json([
        {
            name: 'Viper',
            shortName: 'viper',
            picture: '/agents/viper.png',
        },
        {
            name: 'Brimstone',
            shortName: 'brimstone',
            picture: '/agents/brimstone.png',
        },
        {
            name: 'Killjoy',
            shortName: 'killjoy',
            picture: '/agents/killjoy.png',
        },
    ])
}
