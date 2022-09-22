import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import {Agent} from "./api/agents";
import {apiClient} from "../utils/apiClient";
import AgentSelection from "../components/AgentSelection/AgentSelection";

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

            <AgentSelection agents={props.agents} />
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
