import AgentSelection from "./AgentSelection";
import {useState} from "react";

type StatusType = 'agent-selection' | 'map-selection' | 'lineup-selection'

const MainPage = () => {
    const [status, setStatus] = useState<StatusType>('agent-selection');

    switch (status) {
        case "agent-selection":
            return <AgentSelection />
        case "map-selection":
            return <h1>todo</h1>
        case "lineup-selection":
            return <h1>todo</h1>
        default:
            throw new Error('Unhandled StatusInterface')
    }
}

export default MainPage;
