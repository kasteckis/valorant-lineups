import {Agent} from "../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";

interface Props {
    agents: Agent[],
    chooseAgent: (agent: Agent) => () => void,
}

const AgentSelection = ({agents, chooseAgent}: Props) => {
    return (<>
        <Box sx={{
            m: 5,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <h1>Choose an agent</h1>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            {agents.map(agent =>
                <div key={agent.name}>
                    <Image onClick={chooseAgent(agent)} style={{borderStyle: 'solid'}} src={agent.picture} alt={agent.name + ' logo'} width={150} height={150} />
                </div>
            )}
        </Box>
    </>)
}

export default AgentSelection;
