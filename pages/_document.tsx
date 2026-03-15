import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
    return (
        <Html lang="en" data-bs-theme="dark">
            <Head>
                <link rel="manifest" href="/backlog-games/manifest.json" />
                <link rel="icon" href="/backlog-games/favicon.ico" />
                <meta name="color-scheme" content="dark light" />
                <meta name="theme-color" content="#3c3e4e" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="apple-touch-icon" href="/backlog-games/icons/icon-192.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document