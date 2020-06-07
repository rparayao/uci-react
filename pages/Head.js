/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */

import NextHead from "next/head";
const defaultDescription = "Remi's site";
const defaultUrl = "http://localhost";

const Head = props =>(
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ""}</title>
        <meta 
            name="description"
            content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={props.url || defaultUrl} />
        <meta property="og:title" content={props.title || ""} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />        
    </NextHead>
);

export default Head;