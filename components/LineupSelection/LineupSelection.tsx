import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";
import {useCallback, useEffect} from "react";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {selectedAgent, selectedMap} from "../../utils/atoms";
import {apiClient} from "../../utils/apiClient";
import {ValorantMap} from "../../pages/api/maps";

interface Props {
    agent: string,
    map: string,
}

const LineupSelection = ({agent, map}: Props) => {
    const router = useRouter()
    const [agentEntity, setAgentEntity] = useRecoilState(selectedAgent);
    const [mapEntity, setMapEntity] = useRecoilState(selectedMap);

    const chooseLineup = useCallback((a: any) => () => {
        console.log(a)
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

    useEffect(() => {
        if (!agentEntity) {
            getAgent();
        }
        if (!mapEntity) {
            getMap();
        }
    }, [agentEntity, mapEntity, getAgent, getMap]);


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
                {/*{maps.map(map =>*/}
                {/*    <div key={map.shortName}>*/}
                {/*        {map.picture && <Image onClick={chooseMap(map)} className={styles.mapSelectionImage} src={map.picture}*/}
                {/*                               alt={map.name + ' logo'} width={384} height={216}/>}*/}
                {/*    </div>*/}
                {/*)}*/}
            </Box>
        </>}
    </>)
}

export default LineupSelection;
