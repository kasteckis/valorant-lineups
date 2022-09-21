import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Box} from "@mui/material";
import AgentSelection from "../components/AgentSelection";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                borderRadius: 1,
            }}>
                <AgentSelection />
            </Box>

            <a
                style={{position: 'absolute', bottom: 0, right: 0}}
                href="https://github.com/kasteckis/valorant-lineups"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <Image src="/github.svg" alt="Github Logo" width={30} height={30} />
                </span>
            </a>
        </>
    )
}

export default Home
