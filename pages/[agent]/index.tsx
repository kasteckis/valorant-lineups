import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import MapSelection from "../../components/MapSelection/MapSelection";

const AgentPage: NextPage = () => {
    const router = useRouter()
    let { agent } = router.query
    agent = agent ? agent.toString() : ''

    const agentTitle = agent.charAt(0).toUpperCase() + agent.slice(1);

    return (
        <>
            <Head>
                <title>Valorant Lineups | {agentTitle}</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MapSelection agent={agent} />
        </>
    )
}

export default AgentPage
