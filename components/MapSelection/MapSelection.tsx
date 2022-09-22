import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {ValorantMap} from "../../pages/api/maps";
import {apiClient} from "../../utils/apiClient";
import styles from "./MapSelection.module.css";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {selectedAgent, selectedMap} from "../../utils/atoms";

interface Props {
    agent: string,
}

const MapSelection = ({agent}: Props) => {
    const router = useRouter()
    const [maps, setMaps] = useState<ValorantMap[]>([])
    const [agentEntity, setAgentEntity] = useRecoilState(selectedAgent);
    const [mapEntity, setMapEntity] = useRecoilState(selectedMap);

    const chooseMap = useCallback((map: ValorantMap) => () => {
        setMapEntity(map)
        router.push(agent + '/' + map.shortName)
    }, [router, agent, setMapEntity])

    const getAgent = useCallback(async () => {
        if (agent && !agentEntity) {
            const response = await apiClient.get<Agent>(`agent/${agent}`)
            setAgentEntity(response.data)
        }
    }, [agent, agentEntity, setAgentEntity]);

    const getMaps = useCallback(async () => {
        if (agent) {
            const params = {
                agent: agent,
            }

            const response = await apiClient.get<ValorantMap[]>('/maps', {params})
            setMaps(response.data)
        }
    }, [agent, setMaps]);

    useEffect(() => {
        getAgent();
        getMaps();
    }, [getAgent, getMaps]);


    return (<>
        {agentEntity &&
            <>
                <Box sx={{
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <h1>Choose the map</h1>
                </Box>
                    <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                {agentEntity.picture && <Image src={agentEntity.picture} alt={agentEntity.name + ' logo'}
                    width={100} height={100}/>}
                    </Box>
                    <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <h3>{agentEntity.name} is selected!</h3>
                    </Box>
                    <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                {maps.map(map =>
                    <div key={map.shortName}>
                {map.picture && <Image onClick={chooseMap(map)} className={styles.mapSelectionImage} src={map.picture}
                    alt={map.name + ' logo'} width={384} height={216}/>}
                    </div>
                    )}
                    </Box>
            </>
        }
    </>)
}

export default MapSelection;
