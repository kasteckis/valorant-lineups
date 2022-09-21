import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Valorant Lineups</title>
                <meta name="description" content="Valorant agent lineups in every map." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Todo</h1>
            </main>

            <footer className={styles.footer}>
                <a
                  href="https://github.com/kasteckis/valorant-lineups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span className={styles.logo}>
                        <Image src="/github.svg" alt="Github Logo" width={30} height={30} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
