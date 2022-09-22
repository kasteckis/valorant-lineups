import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import {apiClient} from "../../utils/apiClient";
import {Agent} from "../api/agents";
import MapSelection from "../../components/MapSelection/MapSelection";
import {useCallback, useEffect, useState} from "react";

const AgentPage: NextPage = () => {
    const router = useRouter()
    let { agent } = router.query
    agent = agent ? agent.toString() : ''

    return (
        <>
            <Head>
                <title>Valorant Lineups | {agent}</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MapSelection agent={agent} />
        </>
    )
}

export default AgentPage
