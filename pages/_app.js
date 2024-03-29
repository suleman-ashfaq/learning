import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';

import AOS from 'aos';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/scss/index.scss';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

if (typeof window === 'undefined') {
    global.window = {}
}

if (typeof document === 'undefined') {
    global.document = {}
}

export default function App({ Component, pageProps }) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }

        AOS.init({
            once: true,
            delay: 50,
            duration: 500,
            easing: 'ease-in-out',
        });
    });

    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="favicon.ico" />
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/favicons/apple-icon-57x57.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/favicons/apple-icon-60x60.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/favicons/apple-icon-72x72.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/favicons/apple-icon-76x76.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/favicons/apple-icon-114x114.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/favicons/apple-icon-120x120.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/favicons/apple-icon-144x144.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/favicons/apple-icon-152x152.png"
                />
                <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-icon-180x180.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/favicons/android-icon-192x192.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-32x32.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicons/favicon-96x96.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                name="msapplication-TileImage"
                content="/favicons/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                name="description"
                content="Helping students worldwide in learning."
                />
                <meta
                name="robots"
                content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta
                property="og:image"
                content="https://www.learnupon.com/wp-content/uploads/Blog-Top-eLearning-PMT-720x300.png"
                />
                <meta
                property="og:title"
                content="Experiential Learning | Engaging Content Creators."
                />
                <meta
                property="og:description"
                content="Helping students worldwide in learning."
                />
                <meta property="og:url" content="https://explearning.io/" />
                <link
                href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
                rel="stylesheet"
                />
                <title>
                Experiential Learning | Engaging Content Creators.
                </title>
                <script
                src="https://kit.fontawesome.com/4c273e6d43.js"
                crossOrigin="anonymous"
                ></script>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
