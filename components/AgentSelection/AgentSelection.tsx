import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box, Tooltip} from "@mui/material";
import {useCallback, useState} from "react";
import {useRouter} from "next/router";
import styles from './AgentSelection.module.css';
import {useRecoilState} from "recoil";
import {selectedAgent} from "../../utils/atoms";
import AgentIsDisabledDialog from "./AgentIsDisabledDialog/AgentIsDisabledDialog";

interface Props {
    agents: Agent[],
}

const AgentSelection = ({agents}: Props) => {
    const router = useRouter()
    const [agentEntity, setAgentEntity] = useRecoilState<Agent | undefined>(selectedAgent);
    const [agentDisabledDialogOpen, setAgentDisabledDialogOpen] = useState<boolean>(false);

    const chooseAgent = useCallback((agent: Agent) => () => {
        setAgentEntity(agent)
        router.push(agent.shortName)
    }, [router, setAgentEntity])

    const showAgentIsDisabled = useCallback(() => {
        setAgentDisabledDialogOpen(true);
    }, [setAgentDisabledDialogOpen])

    return (<>
        <AgentIsDisabledDialog open={agentDisabledDialogOpen} setOpen={setAgentDisabledDialogOpen} />
        <Box sx={{
            m: 5,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <h1>Choose the agent</h1>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            {agents.map(agent =>
                <div key={agent.name}>
                    {agent.disabled ?
                        <Tooltip title={agent.name} placement="top">
                            <div>
                                <Image onClick={showAgentIsDisabled} className={[styles.agentSelectionImage, styles.agentSelectionImageDisabled].join(' ')} src={agent.picture} alt={agent.name + ' logo'} width={180} height={180} />
                            </div>
                        </Tooltip>
                        :
                        <Tooltip title={agent.name} placement="top">
                            <div>
                                <Image onClick={chooseAgent(agent)} className={styles.agentSelectionImage} src={agent.picture} alt={agent.name + ' logo'} width={180} height={180} />
                            </div>
                        </Tooltip>
                    }
                </div>
            )}
        </Box>
    </>)
}

export default AgentSelection;
