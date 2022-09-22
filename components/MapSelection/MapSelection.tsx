import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {ValorantMap} from "../../pages/api/maps";
import {apiClient} from "../../utils/apiClient";
import styles from "./MapSelection.module.css";
import {useRouter} from "next/router";

interface Props {
    agent: string,
    agentEntity: Agent,
}

const MapSelection = ({agent, agentEntity}: Props) => {
    const router = useRouter()
    const [maps, setMaps] = useState<ValorantMap[]>([])

    const chooseMap = useCallback((map: ValorantMap) => () => {
        router.push(agent + '/' + map.shortName)
    }, [router, agent])

    const getMaps = useCallback(async () => {
        const params = {
            agent: agent,
        }

        const response = await apiClient.get<ValorantMap[]>('/maps', {params})
        setMaps(response.data)
    }, [agent, setMaps]);

    useEffect(() => {
        getMaps();
    }, [getMaps]);


    return (<>
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
            {agentEntity.picture && <Image style={{borderStyle: 'solid'}} src={agentEntity.picture} alt={agentEntity.name + ' logo'}
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
    </>)
}

export default MapSelection;
