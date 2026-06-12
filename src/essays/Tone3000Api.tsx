
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
 *
 *  Text content is dual-licensed under CC BY 4.0 SA, or MIT license, whichever you 
 *  find more convenient. 
 */


import BlogPage from '../BlogPage';
import CopyrightSlug from '../Copyrightslug';


const styles = {
    floatImageRight: { display: "block", float: "right", marginTop: 16, marginLeft: 32, marginBottom: 32, width: 320, maxWidth: "50%" },

    grid2Col: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "16px",
        marginTop: "24px"
    },
    centeredImage: {
        display: "block",
        marginTop: 32,
        marginBottom: 0,
        maxWidth: "100%"
    },
    imageCaption: {
        textAlign: "center" as const
    },
    table: {
        fontSize: "1.0rem",
        marginTop: "24px",
        marginLeft: 24,
        marginBottom: "24px",
        borderCollapse: "collapse" as const,
        borderTop: "1px solid black",
        borderBottom: "1px solid black"
    },
    thead: {
        borderBottom: "1px solid black"
    },
    tableHeader: {
        textAlign: "left" as const,
        paddingRight: "24px",
        paddingLeft: 8,
        paddingBottom: "4px",
    },
    tableCell: {
        paddingRight: "24px",
        paddingTop: "4px",
        paddingLeft: 8,
        paddingBottom: "4px"
    },
    tableCellBorder: {
        borderBottom: "1px #C0C0C0 solid"
    },
    tableCellLastRow: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.58)"
    },
    tableLegend: {
        marginLeft: 64
    },
    imageLink: {
        display: "flex",
        justifyContent: "center"
    },
    codeBlock: {
        padding: 12,
        backgroundColor: "#f5f5f5",
        border: "1px solid #ddd",
        marginTop: 0,
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "0.9em",
        overflowX: "auto"
    },
    codeLabel: {
        fontFamily: "monospace",
        fontSize: "0.9em",
        paddingBottom: 0,
        marginBottom: 0
    }
} as const;



export default function Tone3000Api() {

    const route = "/Tone3000Api";

    return (
        <BlogPage route={route}>
            <img src="/thumb/Tone3000ApiThumb.png" style={styles.floatImageRight} alt="Tone3000" />
            <p>
                <a href="https://rerdavies.github.io/pipedal">PiPedal 2.0</a>&mdash;a Linux-based guitar stomp box/multi-effects pedal&mdash;was released in June of 2026. 
                The primary feature of the 2.0 release was support for <a href="https://www.tone3000.com/guides/nam-a2-the-complete-guide">Neural Amp Modeler A2</a> amp emulations&mdash;the next generation
                of Neural Amp Modeler technology.
                But shortly behind that, the next most exciting feature of the 2.0 release was the ability to easily browse and install Neural Amp Modeler A2 models
                into PiPedal using web APIs provided by <a href="https://www.tone3000.com" target="_blank" >Tone3000.com</a>.
            </p>
            <p>This blog post will provide a brief tour of the Tone3000 web APIs, supplemented with examples of how those APIs are 
                used in PiPedal.</p>
            <h2>What is Neural Amp Modeler A2</h2>
            <p>Neural Amp Modeler A2 is the next generation of amp modeling technology for digital guitar effects pedals. 
                NAM uses small neural networks to create amp models that are more accurate and more efficient than traditional amp modeling techniques.
                Because the neural networks used in NAM are small and efficient, they can be run in real-time on low-power embedded devices like a Raspberry Pi.
            </p>
            <p><a href="https://www.tone3000.com/blog/introducing-neural-amp-modeler-nam-architecture-2-a2" target="_blank" >This page</a>, hosted by
                Tone3000, provides a deep dive into what Neural Amp Modeler A2 technology is, and how it works.
            </p>
            <p>Comprehensive listening tests demonstrate that NAM A2 models are significantly, and measurably better sounding
                than competing commercial amp modeling technologies.
            </p>

            <img style={{ width: "100%" }} src="img/model_comparison.png" />

            <p style={{ marginLeft: 64, marginRight: 64, fontSize: "0.8em" }}>
                <strong>Fig 1:</strong> Unscreened ratings from a large-scale blind MUSHRA listening test evaluating
                NAM A2 amp/effect modeling against other commercial
                modelers. Data provided by <a href="https://www.tone3000.com" target="_blank" rel="noreferrer">TONE3000</a> and <a href="https://www.neuralampmodeler.com/">Steve Atkinson</a>. 105,842 ratings from
                1,184 participants across 37 tones.
                <sup><a id="fnref1" href="#fn1">1</a></sup>
            </p>

            <h2>Who is Tone3000?</h2>
            <p><a href="https://www.tone3000.com" target="_blank" rel="noreferrer">Tone3000.com</a> is a website that provides free downloads of tens of thousands
                of high-quality amp and effect model files for use with Neural Amp Modeler. Models have been created by a huge community of musicians that are
                using NAM. If you have a favorite amp that you would like to use in PiPedal, chances
                are very good that you can find a high-quality model of that amp on Tone3000.com. And if you can't, Tone3000.com also provides an online service
                that allows users to profile and generate models for your own personal amps and effect pedals. Tone3000 provides a central hub for the 
                huge community that has developed around NAM A1 originally, and now for NAM A2 as well, moving forward.
            </p>
            <p>
                Tone3000.com provides a set of web APIs that allow developers to easily access the Tone3000.com database of NAM models.
                Using the <a href="https://www.tone3000.com/api" target="_blank" rel="noreferrer">Tone3000 APIs</a>, developers can integrate NAM model browsing and downloading into their own applications or hardware device.
            </p>
            <p>
                And that is the central topic of this blog post: a brief tour of the <a href="https://www.tone3000.com/api" target="_blank" rel="noreferrer">Tone3000 web APIs</a>, along with illustrations of how they are used in PiPedal.
            </p>


            <h2>The PiPedal Architecture</h2>
            <p>
                The Tone3000 web APIs are designed to accommodate usage in a wide variety of applications, and devices, ranging from tiny stand-alone guitar pedals,
                running single NAM models on shockingly tiny microprocessors, all the way up to large, sophisticated applications running on powerful desktop and laptop
                processors, using either native, web-based, or hybrid web/native user interfaces.
            </p>
            <p>
                PiPedal is a Linux-based guitar pedal, originally designed to run on a Raspberry Pi 4, which falls somewhere in the middle. It is designed to run on devices as
                small as a Raspberry Pi 4, which is actually a surprisingly capable processor as it turns out&mdash;offering more available CPU power 
                than even high-end commercial multi-effects pedals. PiPedal running on a Raspberry Pi 4 can provide up to three NAM instances in a single preset (and up to seven 
                NAM instances if using the TooB Neural Amp Modeler plugin's "Threaded" option), with plenty of CPU power left over to run other effects within the same preset. And PiPedal is, of course, utterly thrilling on a Pi 5, or
                a more capable x86_64 processor, where the number of NAM instances that can be run simultaneously is practically unlimited.
            </p>
            <p>The PiPedal architecture is somewhat unique. It poses some interesting challenges, which will be discussed later on. In the meantime, it
                would be useful to discuss the basic architecture of PiPedal in order to provide context for what follows.
            </p>
            <div style={{ width: "60%", position: "relative", marginLeft: "auto", marginRight: "auto" }}>
                <img style={{ width: "100%" }} src="img/PiPedalArchitecture.svg" alt="PiPedal architecture diagram" />
                <p style={{ marginLeft: 24, fontSize: "0.8em" }}>
                    <strong>Fig 2:</strong> PiPedal Architecture
                </p>
            </div>
            <p>The PiPedal user interface is provided by a web application, that is served by a web server running on the PiPedal server. The PiPedal server hosts the real-time audio thread, and 
                performs everything required to apply audio effects (include NAM models) with adequate latency for use in live performance. Typically the client and
                server run on separate devices. The server typically runs on a dedicated Raspberry Pi (or other small computer or SBC). The client runs either on a phone
                or tablet (if you are performing), or on a browser hosted by a laptop or desktop computer, if you are willing to tolerate the addition
                of a larger computer into your guitar rig. 
            </p>
            <p>Running the client and server on separate devices serves two purposes. When performing, it allows users to mount the Raspberry Pi on a pedal board, or
                on top of the user's amp, and then clip a phone or tablet to a microphone stand, so that PiPedal can be easily controlled by the user without
                having to bend down and interact with the Raspberry Pi directly, and so that users don't have to make a monitor and keyboard for the Raspberry Pi
                part of their live rig. But more importantly, it prevents compute-intensive and cache-unfriendly graphic rendering tasks from interfering with the
                real-time audio thread. GPU operations can cause unpredictable and unacceptable audio dropouts. If all graphical rendering runs on the client device, it allows
                even relatively modest Raspberry Pi 4's to deliver rock-solid low-latency real-time audio rendering, even when plugins are consuming 80% or 90%
                of available CPU. On a more capable laptop or desktop processor, it is possible to run both the client and server on the same
                device; but even then, GPU activity has a significant effect on the performance of the real-time audio thread, so it is still
                advisable to run the client and server on separate devices. The difference is quite surprising. When there is no GPU activity on the server,
                CPU-intensive complex presets on the PiPedal server can run stably at 80% of available CPU with no real jitter or variation in the CPU load. 
                When a GPU is active on the server, overall CPU load has considerable jitter, and can cause audio dropouts even when average CPU 
                load is only 50 or 60%.
            </p>

            <p>The PiPedal server also provides an "Auto-Hotspot" feature. When the PiPedal server is unable to see the users' home network (whether via
                Wi-Fi or direct Ethernet connection), it automatically creates a Wi-Fi hotspot that the user can connect to the PiPedal server even when
                performing live or in the studio, where a Wi-Fi connection may not be available. When running the Wi-Fi hotspot, the server will typically
                not have internet connectivity, even though the phone or tablet or laptop on which the client software is running may have internet connectivity.
                This will have important implications later on, when integrating with Tone3000 web APIs, as we will see. 
            </p>
            <h3>The Tone3000 Web Service APIs</h3>
            <p>Complete documentation for the Tone3000 web APIs can be found <a href="https://www.tone3000.com/guides/nam-a2-the-complete-guide" target="_blank" rel="noreferrer">here</a>. This section provides
                a brief tour of the API.</p>
            <p>The Tone3000 web APIs are a set of RESTful APIs that allow developers to access the Tone3000.com database of NAM models, and cabinet IR files, and to integrate NAM model 
                browsing and downloading into their own applications. The APIs are designed to be simple and easy to use, and they provide a wide range of functionality, including:</p>
            <ul>
                <li>Browsing the Tone3000.com database of NAM models</li>
                <li>Searching for NAM models by name, tag, or other criteria</li>
                <li>Downloading NAM model files, and Cabinet IR files</li>
                <li>And more!</li>
            </ul>
            <p>The API has been carefully designed to accommodate a wide variety of applications and hardware devices. It can be used in desktop applications, mobile apps and even embedded systems without a UI of their own.
                Tone3000 provides sample code for using the API from TypeScript or Python. (The Python examples can be ported to C or C++ fairly easily, if you are working in an embedded environment). 
                The TypeScript example code allows you to use the API directly from a web application. PiPedal uses the TypeScript API directly from its static Vite/React web application.
            </p>
            <p>
                The API provides two main ways to integrate. The first and simplest is the "Select" family of APIs, which allows you to use Tone3000.com's own web UI to browse and select models. The "Full API Access"
                family of APIs provides complete low-level access to Tone3000.com web APIs, and allows you to build your own custom UI for browsing and selecting models. This allows the Tone3000 APIs to be used in
                either elaborate native desktop applications, or perhaps in hardware devices that provide their user interface via a small LED panel. The Full family of APIs gives developers the flexibility to
                build custom user interfaces that are tailored to the specific needs of their applications or hardware devices. The documentation also describe 
                a "Load Tone" family of APIs that allow small embedded devices to download specific models or IRs directly from Tone3000.com on demand. (More on that later).
            </p>
            <p>
                As you work with the API, you will occasionally run into various clues that indicate that there is a formidable amount of technology hidden behind those APIs: secured authentication servers
                that handle the OAuth process; and cloud servers that allow the service to scale up to planetary-scale responsiveness and load. (Mostly HTTP headers returned on some of the requests
                that indicated that an awful lot is going on in the cloud servers that handle the Tone3000 web services). But all of those details of implementation are invisible in the APIs that are provided.
            </p>
            <p>Tone3000 provides source code for a set of sample applications that demonstrate use of the API in a <a href="https://github.com/tone-3000/api">GitHub repository</a>.  The repository provides
                three sample applications: one which uses the Select flow in a Vite/React application; one which uses the Load Tone flow to download individual models on demand; and a third which uses the Full API Integration
                to build a custom UI for browsing and selecting models.
            </p>
            <p>Hidden among the files in the sample application repository is a particularly useful file:</p>
            <ul><li>
                <a href="https://github.com/tone-3000/api/blob/main/src/tone3000-client.ts">https://github.com/tone-3000/api/blob/main/src/tone3000-client.ts</a>
            </li></ul>
            <p>This file provides a TypeScript class that wraps the API calls in convenient, easy-to-use methods and classes. 
                Individual methods are well-documented inline in the source. If you choose to implement a tone-3000 client, and don't directly use one of the sample applications as a starting point, you would be well advised to copy this file into your
                project, and use it to access low-level APIs. It will save you a lot of time and effort, and will help you avoid a lot of common pitfalls. PiPedal actually uses a slightly modified
                version of this file, because, when PiPedal was being developed, prior to the initial GA release of NAM A2 on Tone3000, this file had not yet been updated to include support for downloading NAM A2 models.
                But as of June 2026, this file has been updated to include all of the necessary methods for accessing NAM A2 models.
            </p>
            <p>Also similarly useful:
            </p>
            <ul><li>
                <a href="https://github.com/tone-3000/api/blob/main/src/types.ts">https://github.com/tone-3000/api/blob/main/src/types.ts</a>
            </li></ul>
            <p>which provides TypeScript declarations for all of the types and JSON data structures used by the API.</p>
            <p>
                All communications through the Tone3000 web APIs are encrypted using HTTPS, and require an OAuth authentication token. Users must create a free account on Tone3000 in order to obtain
                access to the API. Again, Tone3000 provides high-level and low-level access to the OAuth procedure. In the Select family of APIs, authentication is largely handled by web pages hosted by Tone3000.com
                as part of the Select flow process. Apart from a little bit of code to provide data for the subsequent OAuth process, client applications just launch the Select Flow within 
                their web application, and pages provided by Tone3000.com servers handle the details of getting users to create accounts, log into existing accounts, and obtaining 
                the necessary OAuth tokens needed to browse for and subsequently download content from Tone3000. Tone3000 provides UI for users to complete the initial sign-up procedure, which 
                involves copying a 6-digit code from an email message into the UI provided by Tone3000. When using the Select family of APIs, all of the details of signing up, verifying accounts, 
                and establishing OAuth credentials are handled by the UI provided by Tone3000.com as part of the Select flow.
            </p>
            <p>
                Things get more complicated when using the Full API access family of APIs. When using the Full API Access family of APIs, developers must handle the various steps of setting up accounts
                using their own custom UI. This is not a terribly difficult process. There is an API that allows you to run just the authentication process in a browser window, if your native app can do that. 
                If not, there are low-level APIs available to convert the six-digit code from a Tone3000 verification email into OAuth credentials. The Full API family then provides a 
                method that converts that 6-digit code into OAuth credentials, that can be used to authorize subsequent API calls. I don't have direct experience with that part of the API, so I won't
                go into further detail. Suffice it to say that the Full API family provides all of the necessary methods for handling authentication in non-Select Flow applications as well.
            </p>
            <p>
                In both APIs, creating and logging into a Tone3000.com user account is a one-time process as far as users are concerned. Once users have created accounts and logged in, the OAuth credentials 
                and tokens obtained during the initial login sequence can be refreshed and/or reused without requiring further action from end users.
            </p>

            <h3>Using the Tone3000 Web APIs in PiPedal</h3>

            <p>PiPedal's architecture imposes a number of specific challenges when integrating with a secure OAuth-based web API. The most important of these is that the PiPedal server's web server
                runs on a local network address, and therefore cannot provide HTTPS access. It is, in fact, possible to provide HTTPS access on a local network address, but it requires expert-level
                network administration skills, and is not something that the average PiPedal user would be able to set up on their own. And it is, furthermore, impractical because the PiPedal server
                may remain disconnected from the internet for long periods of time (for most of its life, as a matter of fact), which would prevent timely refreshing of HTTPS certificates.
            </p>
            <p>
                The most significant consequence is that modern web browsers treat all web pages that are served via an HTTP connection as non-secure applications. Non-secure web applications are denied
                access to JavaScript cryptography APIs. They just aren't there anymore. And the Tone3000 OAuth procedure does require access to the JavaScript cryptography APIs in order to complete the OAuth process.
                When this whole feature was initially conceived, I was hoping that PiPedal would be able to run Tone3000 web pages in an IFRAME; but as it turns out, W3C has declared that any web page that is
                running in an IFRAME hosted by a non-secure application is also non-secure, and therefore is also denied access to the cryptography APIs, even if it is being served from a secure HTTPS connection.
            </p>
            <p>Fortunately, pages that run in a POPUP window are not subject to the same restrictions as pages that run in an IFRAME. And fortunately, modern web browsers do allow web applications to
                launch a popup window as long as the popup window is launched in response to a user interaction (like clicking a button).
            </p>
            <p>And fortunately, the Tone3000 Select APIs support launching the select flow in a popup window! Tone3000 actually provides two different methods for launching the select flow.</p>
            <p>In the
                normal Select Flow sequence, the entire hosting webpage is replaced by the Tone3000.com UI for browsing and selecting models. Once the user has selected a model (or cancelled the operation),
                the Tone3000 web page redirects to the original page, with returned data supplied as query arguments on the reload of the original web application. This ends up being awkward for PiPedal.
                The idea of performing a nested operation in a web page with no visual indication that it is a nested operation isn't a user experience that I like much. But more particularly, PiPedal
                is a large web application that stores a lot of state information in memory. It takes 4 or 5 seconds during initial load for the client to retrieve all that information from the web server.
                All of that information is lost if the entire page is reloaded at the end of the normal select flow. So, when using the normal select flow, PiPedal would spend a couple of seconds at the end of the
                Select flow reloading the entire page (it's not a small web page), and then spend another 3 or 4 seconds showing a wait cursor while synchronizing state with the server again.
            </p>
            <p>
                The Tone3000 Select APIs also provide a method for launching the select flow in a popup window. And that's what PiPedal does.
                When users click the "Download Models from Tone3000" button in the PiPedal interface, PiPedal starts a SelectFlowPopup sequence, in which the entire Tone3000-supplied web UI&mdash;initial account creation,
                initial login, a potentially protracted browsing sequence and final selection of a tone for downloading all occur in a popup window above the main PiPedal web application, and all of that 
                occurs without requiring the main PiPedal web application to reload at any point during the process.
            </p>
            <p>I'm going to walk you through how the SelectFlowPopup sequence works in PiPedal. Normal SelectFlow is pretty much the same, except for how results are returned to the main application.
            </p>
            <p>When running a SelectFlowPopup sequence, Tone3000 web pages return the results of the select flow sequence by redirecting to a URL provided by the caller. This URL loads in the popup window.
                The results of the select flow sequence are provided as query arguments on the URL. When the popup window performs the final redirect to the provided URL, code in that page
                posts results back to the main application by sending a MessageEvent to the main application. (This is the only way that a popup window or an IFRAME can send data back to the host
                web page).
            </p>
            <p>In PiPedal's case, the final redirect page just forwards the entire URL for the redirect page back to the main application. It's a difficult page to debug; so processing of the
                actual query arguments is deferred until the main application receives the URL via a message event.

            </p>
            <p>
                PiPedal initiates the SelectFlowPopup sequence by calling the following method provided in tone3000-client.ts:
            </p>
            <pre style={styles.codeBlock}>
                {`export async function startSelectFlowPopup(
  publishableKey: string,
  redirectUri: string,
  options?: { 
      gears?: string; 
      platform?: string; 
      menubar?: boolean, 
      loginHint?: string, 
      architecture?: number }
):
`}
            </pre>
            <p>This is a slight oversimplification. (A lie, if you must). There is a further complication that PiPedal faces, which will be discussed below. But this is the basic method 
                that applications call to start a SelectFlowPopup sequence.</p>
            <p>The <span style={styles.codeLabel}>startSelectFlowPopup</span> method takes a publishable key, which is used to identify the client application to the Tone3000.com servers. This key
                is obtained from Tone3000. The <span style={styles.codeLabel}>redirectUrl</span> is a URL to PiPedal's page that handles the results of the SelectFlowPopup sequence. The options depend on
                whether PiPedal wants to download NAM A2 models, or IR files (Tone3000 also supplies a large database of cabinet IR files that can be used to emulate speaker cabinets).
            </p>
            <p>For NAM A2 models, the options are as follows:
            </p>
            <pre style={styles.codeBlock}>
                {`
{ 
    platform: Platform.Nam, // Browse NAM models only.
    architecture: 2  // A2 models please. 
}
`}
            </pre>
            <p>For IR files, the options are as follows:
            </p>
            <pre style={styles.codeBlock}>
                {`
{ 
    platform: Platform.Ir, // Browse IR files only.
}
`}
            </pre>
            <p>The <span style={styles.codeLabel}>platform</span> option starts the browser viewing either NAM models or IR files, but also prevents the user from navigating to parts of the Tone3000 website
             that are not relevant to the selected platform. For example, it prevents the user from navigating to downloadable IR files 
            when PiPedal only wants to see NAM models (and vice versa). 
            </p>
            <p>
                This is the code that relays the results of the select flow sequence back to the main application, from the final redirect page:
            </p>

            <code style={styles.codeLabel}>vite/public/html/tone3000_response.html</code>
            <pre style={styles.codeBlock}>
                {`
            window.opener.postMessage(
                {
                    type: "t3k_response",

                    // includes the returned query arguments as part of the URL.
                    uri: window.location.href, 

                    // used by PiPedal as a paranoid check to make sure 
                    // that the main application is still in sync
                    storedState: sessionStorage.getItem('t3k_state') 
                }, '*'
            );
                `}
            </pre>
            <p>Note that it is a raw HTML page served out of the public directory of PiPedal's Vite application. This is not a place where you want to launch a react web application. Just enough code to receive the results 
                of the Select Flow sequence, and post them back to the host application from a popup window.
            </p>

            <h3>Handling the Results of the SelectFlowPopup Sequence</h3>
            <p>The main Pipedal web application installs an event handler for Window MessageEvents. and intercepts any MessageEvent that has a type of "t3k_response". When it receives
                a message of that type, it knows that the message is coming from the SelectFlowPopup sequence, and that the data from the select flow sequence is included in the <span style={styles.codeLabel}>uri</span> property of the message data.
            </p>
            <p>
                The redirect URL returned by the SelectFlowPopup sequence carries two pieces of information: it contains data that can be used to complete the OAuth sequence, 
                and data that can be used to generate an OAuth token for use with low-level API calls that will happen later; and it contains the ID of the selected tone. (A tone being a bundle of either NAM models, 
                or IR files). The actual fetching of the tone, and the models or IR files within it are done using low-level API calls from the Full family of Tone3000 APIs. 
            </p>
            <p>
                First, PiPedal must complete the OAuth sequence. Fortunately, doing so does not require access to cryptographic APIs, so it can be done in the main PiPedal web application. 
                PiPedal calls the 
                <span style={styles.codeLabel}>handleOAuthCallbackFromPopup</span> method, exported from <span style={styles.codeLabel}>tone3000-client.ts</span>, passing in the data from the 
                redirect URL. This method completes the OAuth sequence, and returns an authorization token that can be used for subsequent API calls.
            </p>

            <pre style={styles.codeBlock}>
                {`
export async function handleOAuthCallback(
    publishableKey: string, // The publishable key for your application.
    redirectUri: string, // The original redirect URL provided to startSelectFlowPopup
    responseUri: string // The URL received via the message event from the popup window.
): Promise<OAuthCallbackResult>
`}
            </pre>
            <p>The <span style={styles.codeLabel}>handleOAuthCallback</span> method takes the publishable key for the application, the original redirect URL provided 
            to <span style={styles.codeLabel}>startSelectFlowPopup</span>, and the URL received via the message event from the popup window. 
            It returns an OAuth token that can be used for subsequent API calls, and the <span style={styles.codeLabel}>toneId</span> of the selected tone. 
            </p>
            <pre style={styles.codeBlock}>
                {`
export type OAuthCallbackResult =
    | { ok: true; tokens: T3KTokens; toneId?: string; modelId?: string; canceled?: boolean }
    | { ok: false; error: string, canceled?: boolean };
                `}
            </pre>

            <p>
                Make sure to check the <span style={styles.codeLabel}>ok</span> property of the result to determine 
                if the OAuth callback was successful before proceeding.</p>
            <p>
                Once PiPedal has the OAuth tokens, it can make low-level API calls to fetch the tone data that was selected by the user. The first step is to fetch the metadata for the tone, which includes information about the models or IR files that are included in the tone, and the URLs that can be used to download those files.
            </p>
            <p>PiPedal uses the <span style={styles.codeLabel}>T3KClient</span> class provided in <span style={styles.codeLabel}>tone3000-client.ts</span>. The T3KClient provides useful 
            wrappers for the actual low-level API fetch requests used in the raw APIs.   
            </p>
            <p>If you would like to see PiPedal's actual implementation, you can check out PiPedal's actual source code. It provides a number of features that are beyond the scope 
                of this blog post (such as notification callbacks that display the progress of the download in PiPedal's web application UI). Complete source can be 
                found <a href="https://github.com/rerdavies/pipedal/blob/main/vite/src/pipedal/Tone3000Downloader.tsx" target="_blank" rel="noreferrer">here</a>. Code that 
                follows is a redacted and simplified version of that code. The method in the code that follows that deserves mention is the <span style={styles.codeLabel}>throttleDownloads()</span> method.
                Tone3000 throttles downloads to prevent abuse of the service. If you make too many requests in a short period of time, you will get an error response from the API, 
                and you will have to wait a certain amount of time before you can make more requests. The <span style={styles.codeLabel}>throttleDownloads()</span> method ensures 
                that PiPedal does not make too many requests in a short period of time, and that it waits the necessary amount of time before making more requests to ensure that 
                it does not exceed Tone3000's throttling limit. (The current limit is 25 requests per minute, although that is expected to increase to 50 (or perhaps 100) requests per minute soon). 
                At any rate, if PiPedal exceeds the throttling limit, it will be locked out of Tone3000 for a full minute; so it is important to ensure that requests are throttled properly. 
                You can reference PiPedal's source code to see how PiPedal implemented it, or implement your own scheme as you see fit. You will probably notice that 
                the code also occasionally polls to see whether the download has been cancelled by the user. The PiPedal UI exposes a cancel button in its download progress dialog.
            </p>

            <p>
                With that in mind, here is the relevant code for fetching tone metadata, and then fetching the individual models or IR files included in the tone, from PiPedal's 
                Tone3000Downloader.tsx class redacted for clarity and simplified for readability.
            </p>

            <pre style={styles.codeBlock}>
                {`
// Create an instance of T3KClient for subsequent API calls 
// (done only once in PiPedal code).
this.t3kClient = new T3kClient(PIPEDAL_T3K_PUBLISHABLE_KEY, refreshRequiredCallback());

... 
// the OAuth tokens received from handleOAuthCallbackFromPopup
this.t3kClient.setTokens(tokenResponse); 

// fetch the toneId from the OAuth response.
let toneId = tokenResponse.toneId;

    if (!await this.throttleRequests()) return;

// Fetch the complete tone metadata from Tone3000
let tone: Tone = await this.t3kClient.getTone(tokenResponse.toneId);

if (this.checkForCancel()) {
    return;
}

// Add "architecture=2" query parameters for subsequent operations
// if the current tone has A2 models. 
let architectureFilter: number | undefined = undefined;
// Take A2 models only for NAM downloads, but only if the tone actually has A2 models.
if (downloadType === Tone3000DownloadType.Nam && !!tone.a2_models_count) {
    architectureFilter = 2; // NAM models only
}

// Tone3000 provides paginated lists of model data. 
// Do multiple requests to fetch all the models for the tone if necessary.
let page = 1;
let models: Model[] = [];
while (true) {
    if (!await this.throttleRequests()) return;
    if (this.checkForCancel()) 
    {
        return;
    }

    let modelsThisTime: PaginatedResponse<Model> = await this.t3kClient.listModels(toneId, page, 800, architectureFilter);
    models.push(...modelsThisTime.data);
    if (modelsThisTime.total_pages <= page) {
        break;
    }
    ++page;
}

// Now download each model file from the Tone3000 server and upload it to the PiPedal server.
for (const model of models) {
    this.progress.title = model.name;;
    if (Date.now() - lastUpdateTime > 250) {
        this.onTone3000DownloadProgress(this.progress);
        lastUpdateTime = Date.now();
    }

    if (!await this.throttleRequests()) return;

    if (!model.model_url) {
        throw new Error("Model " + model.name + " does not have a model URL.");
    }

    let accessToken = await this.t3kClient.getAccessToken();
    let modelResult = await fetch(model.model_url,
        {
            headers: {
                Authorization: \`Bearer \$\{accessToken}\`,
            }
        } as RequestInit

    );
    if (!modelResult.ok) {
        throw new Error(\`Model download failed: $\{modelResult.status} $\{modelResult.statusText}\`);
    }
    if (this.checkForCancel()) {
        return;
    }

    // get the content length of modelResult from modelResult headers 
    const strContentLength = modelResult.headers.get('Content-Length');
    let contentLength: number = 0;
    if (strContentLength) {
        contentLength = parseInt(strContentLength);
        if (isNaN(contentLength)) {
            throw new Error("File download from Tone3000 server failed: Content-Length header is invalid.");
        }
    }
    // POST binary modelResult to serverUrl.
    // Prefer streaming request body when available, else fall back to blob().
    const uploadBody: Blob = await modelResult.blob(); // this is the contents of the model file as a Blob.

    // **CODE HERE TO UPLOAD THE BLOB TO THE PIPEDAL SERVER**
    // In PiPedal's implementation, the serverUrl variable contains 
    // query parameters that indicate where the file should be stored on the PiPedal server.

    const uploadResponse = await fetch(serverUrl, {
        method: 'POST',
        body: uploadBody,
        headers: {
            'Content-Type': modelResult.headers.get('Content-Type') ?? 'application/octet-stream',
            "Content-Length": contentLength.toString(),
        },
    });

    if (!uploadResponse.ok) {
        throw new Error(\`Upload failed: $\{uploadResponse.statusText}\`);
    }
    // discard the response body, if any, to free up memory
    let uploadResult: any = await uploadResponse.json();

    if (!uploadResult.ok === true) {
        throw new Error(\`Upload failed: $\{uploadResult.error ?? "Unknown error."}\`);
    }
}

// PiPedal needs a thumbnail image for the tone which is displayed in 
// the readme file for the tone. It uses the first image in the tone metadata for that purpose
// if there is one.

if (tone.images && tone.images.length > 0) {

    await this.throttleRequests();

    let accessToken = await this.t3kClient.getAccessToken();
    let thumbnailUrl = tone.images[0];
    let thumbnailResult = await fetch(thumbnailUrl,   
        {
            headers: {
                Authorization: \`Bearer $\{accessToken}\`,
            },
        } 
    );
    if (!thumbnailResult.ok) {
        throw new Error(\`Thumbnail download failed: $\{thumbnailResult.status} $\{thumbnailResult.statusText}\`);
    }
    if (this.checkForCancel()) {
        return;
    }

    let blob = await thumbnailResult.blob(); // the blob contains the contents of the thumbnail image file.

    // serverUrl contains the URL used to upload thumbnail images to the PiPedal server. 
    // Information such as where the thumbnail should be stored on the PiPedal server is encoded in query parameters in serverUrl.
    const uploadResponse = await fetch(serverUrl, {
        method: 'POST',
        body: blob,
        headers: {
            'Content-Type': mediaType,
            "Content-Length": blob.size.toString(),
            "Transfer-Encoding": "chunked"
        },
    });

    if (!uploadResponse.ok) {
        throw new Error(\`Thumbnail upload failed: \$\{uploadResponse.statusText}\`);
    }
    let uploadResult: any = await uploadResponse.json(); // discard the response to free up memory.

    if (!uploadResult.ok === true) {
        throw new Error(\`Thumbnail upload failed: \$\{uploadResult.error ?? "Unknown error."}\`);
    } 

}

// PiPedal also uses the tone metadata to generate a README file for the tone, which is displayed in the PiPedal UI.
let readmePath = toneUploadPath + "README.md";
this.model.writeTone3000Readme(readmePath, tone, toneThumbnailUrl);
                `}
            </pre>
            <p>
                It should be noted that PiPedal is not entirely using the Tone3000 APIs the way they were designed to be used. The design intent of the 
            Tone3000 APIs is that small embedded devices that have internet connectivity can use the "Load Tone" family of APIs to download specific
            models or IR files directly from Tone3000.com on an on-demand basis. The user selects the model, and the embedded device makes a request to 
            Tone3000.com to download the selected model, if it has not been previously downloaded or found in cache files.
                This avoids problems with throttling limits, as it is more or less impossible for a user to select 100 brand new models in under a minute. 
                However, because the PiPedal server may not have internet connectivity when a user selects a model, PiPedal is unable to do that. When the PiPedal 
                Server is running an auto-HotSpot connection, it will not have direct access to the internet at all. And it is reasonably common that the 
                client device may not have access to the internet either (when performing at a gig, for example where there is no available Wi-Fi network).  
                So PiPedal elects to download the models and IRs immediately, with the complication that it must throttle requests carefully while doing so. 
                And, while not present in the redacted code, PiPedal also provides an intermediate dialog that allows selective downloading of models or IRs 
                in a huge tone bundle, if Tone metadata indicates that the tone bundle has an awkwardly large number of models or IRs. The dialog doesn't 
                usually show up when downloading NAM A2 models, since NAM A2 tones typically have a small number of models; but it does show up when 
                downloading IR bundles, which can sometimes contain hundreds of IR files. This is by no means a perfect solution; but it does give users 
                a way to deal with impossibly large community bundles of IR files if they must.
            </p>
            <p>As indicated in source code comments, PiPedal uses the tone metadata to create a README file for a tone download from Tone3000. Within 
                the PiPedal UI, the generated README file looks like this:
            </p>
            <img src="img/PiPedalReadme.png" alt="PiPedal README dialog" style={{ maxWidth: "100%", height: "auto", marginBottom: 16 }} />
            <p>
                Note the thumbnail image for the tone, in the dialog, which was fetched from the Tone3000 servers as part of the download process.
            </p>

            <h3>And One Final Problem</h3>
            <p>The actual Tone3000 tone3000-client.ts code runs into a problem when running on PiPedal. As part of the OAuth authentication process, 
                the client application generates a random seed value, and a token name "t3k_code_verifier", which is used during completion of the 
                OAuth flow. Calculating the correct value of "t3k_code_verifier" requires access to JavaScript cryptography APIs, so 
                the PiPedal web application cannot calculate the correct value of "t3k_code_verifier" on its own. PiPedal's solution to this problem is to make a request 
                to the PiPedal server for a valid PKCE. PiPedal's C++ code to generate the PKCE can be found in PiPedal's sources in the 
                file <a href="https://github.com/rerdavies/pipedal/blob/main/src/Tone3000Downloader.cpp">src/Tone3000Downloader.cpp</a>. Start at the function 
                <span style={styles.codeLabel}>Tone3000PkceParams::Tone3000PkceParams(const std::string &redirectUrl)</span> on or about line 1270. (The code is, unfortunately, not 
                isolated for re-use or sharing; but the overall code is quite short. It should be relatively easy to extract the necessary code from PiPedal code. 
            </p>
            <p>
                This issue was raised with Tone3000 support shortly before NAM A2 on Tone3000 and PiPedal 2.0 were released. PiPedal was under a pre-release code freeze at the time, and the issue 
                was tagged as non-urgent because PiPedal had a workaround. It is quite possible that this issue has been resolved by the time you read this. I will update this blog post if that happens. 
                It should be noted that there is no issue at all if the control application for a device is being served from a secure HTTPS connection, or if the target server device has access to the Internet, 
                or if the target device's web server is serving anything other than static web pages. In the meantime, I think the issue should be considered to be a quirk in 
                PiPedal's architecture rather than a problem with the Tone3000 APIs in general. Many reasonable integration projects wouldn't run into this issue at all.
            </p>
            <p>Note the Pipedal's current version of <span style={styles.codeLabel}>tone3000-client.ts</span> derives from an earlier pre-A2 version of the file. It contains minor modifications that 
            allow the PiPedal Web Application to pass in a PKCE that has been generated by the PiPedal server, and extensions for A2 features that were missing at the time. Do not use the 
            PiPedal version of this file as a starting point; use the one from the sample application repository instead. 
            </p>
            <h3>Conclusion</h3>
            <p>
                The Tone3000 APIs are a powerful and flexible set of tools that allow developers to integrate Tone3000.com's vast library of NAM models and IR files into their applications and devices. 
                The APIs are designed to be easy to use, while also providing access to the underlying technology that powers the Tone3000.com service. Whether you are building a native desktop
                application, a hardware device, or a web application, the Tone3000 APIs provide the tools you need to access and use the incredible resources available on Tone3000.com. While not completely 
                trivial to integrate, the effort to reward ratio is phenomenal. 
            </p>
            <p>
                And no discussion of the Tone3000 APIs would be complete without mentioning the incredible support provided by the Tone3000 team. The documentation is thorough and well-written. 
                The sample code provided in the GitHub repository is extremely helpful, and the Tone3000 team has been incredibly responsive to questions, occasional minor bug reports, 
                and has provided quick turnaround on occasional feature requests that accommodate PiPedal's somewhat unusual architectural requirements. Thank you!
            </p>
            <h3>Links</h3>
            <ul>
                <li><a href="https://www.tone3000.com/api" target="_blank" rel="noreferrer">The Tone3000 API</a></li>
                <li><a href="https://github.com/tone-3000/api" target="_blank" rel="noreferrer">Tone3000 API Sample Applications</a></li>
                <li><a href="https://github.com/rerdavies/pipedal" target="_blank" rel="noreferrer">PiPedal Github Repository</a></li>
            </ul>


            <hr style={{ marginTop: 32, marginLeft: 32, width: "50%" }} />
            <p id="fn1" style={{ marginLeft: 32, marginRight: 32, fontSize: "1.0em" }}>
                <sup><a href="#fnref1" aria-label="Back to figure note reference">1</a></sup> TONE3000, &amp; Atkinson, S. (2026). <em>A2 MUSHRA Listening
                    Test Raw Data</em> [Data set].
                Tone3000.<br/><a href="https://www.tone3000.com/guides/nam-a2-the-complete-guide" target="_blank" rel="noreferrer">
                    https://www.tone3000.com/guides/nam-a2-the-complete-guide
                </a>
                <br/>
                Repository:
                <a href="https://github.com/tone-3000/a2-mushra-data" target="_blank" rel="noreferrer">
                    https://github.com/tone-3000/a2-mushra-data
                </a>
                . License: CC BY 4.0. <a href="#fnref1" aria-label="Back to figure note reference">↩</a>
            </p>

            <p style={{ marginTop: 32 }}>
                <a href="https://github.com/rerdavies/rerdavies.github.io/discussions/4">💬 COMMENTS</a>
            </p>

            <CopyrightSlug />
        </BlogPage>
    );
}
