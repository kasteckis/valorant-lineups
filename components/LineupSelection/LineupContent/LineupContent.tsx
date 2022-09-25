import {Lineup} from "../../../pages/api/lineups";

interface Props {
    lineup: Lineup,
}

const LineupContent = ({lineup}: Props) => {
    return <iframe width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameBorder="0"
                   allowFullScreen></iframe>
}

export default LineupContent;
