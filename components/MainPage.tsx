import AgentSelection from "./AgentSelection";
import {useCallback, useState} from "react";
import {HomePageProps} from "../pages";

type StatusType = 'agent-selection' | 'map-selection' | 'lineup-selection'

const MainPage = (props: HomePageProps) => {
    const [status, setStatus] = useState<StatusType>('agent-selection');
    const [selectedAgent, setSelectedAgent] = useState<string>('');

    const chooseAgent = useCallback((agent: string) => () => {
        setSelectedAgent(agent);
        setStatus('map-selection');
    }, [setSelectedAgent, setStatus]);

    switch (status) {
        case "agent-selection":
            return <AgentSelection agents={props.agents} chooseAgent={chooseAgent} />
        case "map-selection":
            return <h1>todo</h1>
        case "lineup-selection":
            return <h1>todo</h1>
        default:
            throw new Error('Unhandled StatusInterface')
    }
}

export default MainPage;
