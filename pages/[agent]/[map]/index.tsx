import type {NextPage} from 'next'
import Head from 'next/head'

interface MapPageProps {

}

const MapPage: NextPage<MapPageProps> = (props: MapPageProps) => {
    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>todo lineup selection</h1>
        </>
    )
}

export default MapPage
