/*
 *   Copyright (c) 2025 Robin E. R. Davies
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */


import {
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import App from "./App";


export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="light">

            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />


                <link href="//fonts.googleapis.com/css?family=Oxygen:400,700,300|Crimson+Text:400,400italic&amp;subset=latin,latin-ext" media="screen" rel="stylesheet" type="text/css"
                />


                {/*
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..900;1,400..900&display=swap"
                    rel="preload"  as="style"/>

                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..900;1,400..900&display=swap"
                    rel="stylesheet" />
                */}

                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400..900;1,400..900&display=swap"
                    rel="preload" as="style" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=EB+Garamond:ital,wght@0,600&family=Roboto:wght@600&display=swap" 
                 rel="stylesheet"
                />
                
                <link href="/App.css" rel="stylesheet" />


                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Robin E. R. Davies</title>
            </head>
            <body style={{}}>
                <App > {children}</App>
                <ScrollRestoration />
                <Scripts/>
            </body>

        </html>);
}

export default function Root() {
    return <Outlet />;
}


