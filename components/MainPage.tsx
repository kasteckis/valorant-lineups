import AgentSelection from "./AgentSelection";
import {useCallback, useState} from "react";
import {HomePageProps} from "../pages";
import {Agent} from "../pages/api/agents";
import MapSelection from "./MapSelection";

type StatusType = 'agent-selection' | 'map-selection' | 'lineup-selection'

const MainPage = (props: HomePageProps) => {
    const [status, setStatus] = useState<StatusType>('agent-selection');
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

    const chooseAgent = useCallback((agent: Agent) => () => {
        setSelectedAgent(agent);
        setStatus('map-selection');
    }, [setSelectedAgent, setStatus]);

    switch (status) {
        case "agent-selection":
            return <AgentSelection agents={props.agents} chooseAgent={chooseAgent} />
        case "map-selection":
            if (selectedAgent) {
                return <MapSelection agent={selectedAgent} />
            } else {
                console.error('Error! No agent selected but map selection phase is active!');
                setStatus('agent-selection');
            }
            break;
        case "lineup-selection":
            return <h1>todo</h1>
        default:
            throw new Error('Unhandled StatusInterface')
    }
}

export default MainPage;
