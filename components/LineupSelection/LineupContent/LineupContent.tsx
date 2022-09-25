import {Lineup} from "../../../pages/api/lineups";
import Carousel from 'react-material-ui-carousel'
import Image from "next/image";

interface Props {
    lineup: Lineup,
}

const LineupContent = ({lineup}: Props) => {
    return <div>
        <Carousel autoPlay={false} height={'85vh'} navButtonsAlwaysVisible={true}>
            {
                lineup.content.map(content => {
                    switch (content.type) {
                        case "image":
                            return  <Image key={content.id} src={content.url} layout={"fill"}/>
                        case "video":
                            return <iframe
                                key={content.id}
                                style={{border: 0, width: '100%', minHeight: '85vh'}}
                                src="http://www.youtube.com/embed/oHg5SJYRHA0?mute=1"
                                allowFullScreen
                            />
                        default:
                            throw Error('Unhandled Lineup content type')
                    }
                })
            }
        </Carousel>
    </div>
}

export default LineupContent;
