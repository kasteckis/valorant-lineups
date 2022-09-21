import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Agent} from "./api/agents";
import MainPage from "../components/MainPage";
import {apiClient} from "../utils/apiClient";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export interface HomePageProps {
    agents: Agent[],
}

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <MainPage {...props} />

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

            </ThemeProvider>
        </>
    )
}

export async function getServerSideProps(context: GetServerSideProps) {
    const response = await apiClient.get<Agent[]>('agents');

    return {
        props: {
            agents: response.data,
        },
    }
}

export default Home
