import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from "next/image";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function ValorantLineupsApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
            <a
                style={{position: 'absolute', bottom: 0, right: 0}}
                href="https://github.com/kasteckis/valorant-lineups"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <Image src="/github.svg" alt="Github Logo" width={30} height={30} />
                </span>
            </a>
        </ThemeProvider>
    )
}

export default ValorantLineupsApp
