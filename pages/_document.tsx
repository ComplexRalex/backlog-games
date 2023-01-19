import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
    return (
        <Html lang="en" data-bs-theme="dark">
            <Head />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document