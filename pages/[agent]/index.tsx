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

    const [agentEntity, setAgentEntity] = useState<Agent | undefined>(undefined)

    const getAgent = useCallback(async () => {
        const response = await apiClient.get<Agent>(`agent/${agent}`)
        setAgentEntity(response.data)
    }, [agent, setAgentEntity]);

    useEffect(() => {
        getAgent();
    }, [getAgent])

    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {agentEntity && <MapSelection agent={agent} agentEntity={agentEntity} />}
        </>
    )
}

export default AgentPage
