import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";
import {useCallback} from "react";
import {useRouter} from "next/router";
import styles from './AgentSelection.module.css';

interface Props {
    agents: Agent[],
}

const AgentSelection = ({agents}: Props) => {
    const router = useRouter()

    const chooseAgent = useCallback((agent: Agent) => () => {
        router.push(agent.shortName)
    }, [router])

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
                    <Image onClick={chooseAgent(agent)} className={styles.agentSelectionImage} src={agent.picture} alt={agent.name + ' logo'} width={150} height={150} />
                </div>
            )}
        </Box>
    </>)
}

export default AgentSelection;