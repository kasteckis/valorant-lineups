import {Agent} from "../../pages/api/agents";
import Image from "next/image";
import {Box} from "@mui/material";

interface Props {
    agent: Agent,
}

const MapSelection = ({agent}: Props) => {
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
            <h3>{agent.name} is selected!</h3>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Image style={{borderStyle: 'solid'}} src={agent.picture} alt={agent.name + ' logo'} width={150} height={150} />
        </Box>
    </>)
}

export default MapSelection;
