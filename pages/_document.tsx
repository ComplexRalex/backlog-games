import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="manifest" href="/backlog-games/manifest.json" />
                <link rel="icon" href="/backlog-games/favicon.ico" />
                <meta name="theme-color" content="#3c3e4e" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="apple-touch-icon" href="/backlog-games/icons/icon-192.svg" />
            </Head>
            <body data-bs-theme="dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document