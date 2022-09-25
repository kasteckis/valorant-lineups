import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import LineupSelection from "../../../components/LineupSelection/LineupSelection";

const MapPage: NextPage = () => {
    const router = useRouter()
    let { agent, map } = router.query
    agent = agent ? agent.toString() : ''
    map = map ? map.toString() : ''

    const agentTitle = agent.charAt(0).toUpperCase() + agent.slice(1);
    const mapTitle = map.charAt(0).toUpperCase() + map.slice(1);

    return (
        <>
            <Head>
                <title>Valorant Lineups | {agentTitle} | {mapTitle}</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LineupSelection agent={agent} map={map} />
        </>
    )
}

export default MapPage
