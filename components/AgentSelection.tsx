import {Agent} from "../pages/api/agents";
import Image from "next/image";

interface Props {
    agents: Agent[],
}

const AgentSelection = ({agents}: Props) => {
    return (<>
        {agents.map(agent =>
            <div key={agent.name}>
                <Image style={{borderStyle: 'solid'}} src={agent.picture} alt={agent.name + ' logo'} width={150} height={150} />
            </div>
        )}
    </>)
}

export default AgentSelection;
