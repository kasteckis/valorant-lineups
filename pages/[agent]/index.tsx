import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {apiClient} from "../../utils/apiClient";
import {Agent} from "../api/agents";

interface AgentPageProps {

}

const AgentPage: NextPage<AgentPageProps> = (props: AgentPageProps) => {
    const router = useRouter()
    const { agent } = router.query

    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>todo map selection</h1>
            <h2>{agent}</h2>
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

export default AgentPage
