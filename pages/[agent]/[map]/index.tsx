import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import LineupSelection from "../../../components/LineupSelection/LineupSelection";

const MapPage: NextPage = () => {
    const router = useRouter()
    let { agent, map } = router.query
    agent = agent ? agent.toString() : ''
    map = map ? map.toString() : ''

    return (
        <>
            <Head>
                <title>Valorant Lineups | {agent} | {map}</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LineupSelection agent={agent} map={map} />
        </>
    )
}

export default MapPage
