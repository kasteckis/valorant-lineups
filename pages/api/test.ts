import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'Smith',
            // posts: [],
            // profile: null,
        },
    })

    res.status(200).json('test');
}
