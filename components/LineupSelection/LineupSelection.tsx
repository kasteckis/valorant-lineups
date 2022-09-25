import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box, Dialog} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {selectedAgent, selectedMap} from "../../utils/atoms";
import {apiClient} from "../../utils/apiClient";
import {ValorantMap} from "../../pages/api/maps";
import {Lineup} from "../../pages/api/lineups";
import styles from "./LineupSelection.module.css";
import LineupContent from "./LineupContent/LineupContent";

interface Props {
    agent: string,
    map: string,
}

const LineupSelection = ({agent, map}: Props) => {
    const [agentEntity, setAgentEntity] = useRecoilState(selectedAgent);
    const [mapEntity, setMapEntity] = useRecoilState(selectedMap);
    const [lineups, setLineups] = useState<Lineup[]>([]);
    const [selectedLineup, setSelectedLineup] = useState<Lineup | null>(null);

    const chooseLineup = useCallback((lineup: Lineup) => () => {
        setSelectedLineup(lineup)
    }, [])

    const deselectLineup = useCallback( () => {
        setSelectedLineup(null)
    }, [])

    const getAgent = useCallback(async () => {
        if (agent && !agentEntity) {
            const response = await apiClient.get<Agent>(`agent/${agent}`)
            setAgentEntity(response.data)
        }
    }, [agent, agentEntity, setAgentEntity]);

    const getMap = useCallback(async () => {
        if (map && !mapEntity) {
            const response = await apiClient.get<ValorantMap>(`map/${map}`)
            setMapEntity(response.data)
        }
    }, [map, mapEntity, setMapEntity]);

    const getLineups = useCallback(async () => {
        if (map && agent) {
            const params = {
                agent: agent,
                map: map,
            }

            const response = await apiClient.get<Lineup[]>(`lineups`, {params})
            setLineups(response.data)
        }
    }, [map, agent, setLineups]);

    useEffect(() => {
        if (!agentEntity) {
            getAgent();
        }
        if (!mapEntity) {
            getMap();
        }
        getLineups();
    }, [agentEntity, mapEntity, getAgent, getMap, getLineups]);


    return (<>
        {agentEntity && mapEntity && <>
            <Box sx={{
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <h1>Choose the lineup</h1>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                {agentEntity.picture &&
                    <Image src={agentEntity.picture} alt={agentEntity.name + ' logo'}
                           width={100} height={100}/>}
                {mapEntity.picture &&
                    <Image src={mapEntity.picture} alt={mapEntity.name + ' logo'}
                           width={190} height={100}/>}
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <h3>{agentEntity.name} in {mapEntity.name} is selected!</h3>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {lineups.map(lineup =>
                    <div key={lineup.title}>
                        <Image onClick={chooseLineup(lineup)} className={styles.lineupSelectionImage} src={lineup.picture} width={384} height={216}/>
                    </div>
                )}
            </Box>
            {selectedLineup && <Dialog open={!!selectedLineup} onClose={deselectLineup}>
                <LineupContent lineup={selectedLineup} />
            </Dialog>}
        </>}
    </>)
}

export default LineupSelection;
