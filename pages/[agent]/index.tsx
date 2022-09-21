import type {NextPage} from 'next'
import Head from 'next/head'

interface AgentPageProps {

}

const AgentPage: NextPage<AgentPageProps> = (props: AgentPageProps) => {
    return (
        <>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>todo map selection</h1>
        </>
    )
}

export default AgentPage
