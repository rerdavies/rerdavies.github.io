
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
    }
} as const;



export default function PiPedal20() {

    const route = "/PiPedal20";

    return (
        <BlogPage route={route}>
            <img src="/thumb/PiPedal20Thumb.png" style={styles.floatImageRight} alt="PiPedal 2.0" />
            <p>
                I am pleased to announce the release of PiPedal 2.0, a major update to the PiPedal
                guitar effects platform.
            </p>
            <p>
                
                PiPedal is a Guitar Stompbox that runs on a Raspbery Pi, or on x86_64/AMD64 computers running Unbuntu 24.04 or later.
                It is designed to be used as a live performance tool, with a simple and intuitive user interface. 
                PiPedal is controlled and configured from a remote web browser. This allows you to control PiPedal from 
                a phone or tablet, clipped to your microphone stand when you are performing, or recording in a studio.
            </p>
            <p>
                PiPedal running on a Raspberry Pi 4 or Pi 5 provides stable super-low-latency audio via external USB audio
                devices, or internal Raspberry Pi audio hats. It runs equally well on x86_64/AMD64 NUCs, laptops, and desktops running 
                Ubuntu 24.04 or later.
            </p>
            <p>
                <a href="https://rerdavies.github.io/pipedal/download.html" target="_blank" rel="noreferrer">
                    Download the preview release of PiPedal 2.0 here!
                </a>
            </p>

            <h3>Neural Amp Modeler A2</h3>
            <p>
                By far the most exciting feature in PiPedal 2.0 is support for Neural Amp Modeler A2
                models&mdash;the next generation of the ground-breaking Neural Amp Modeler technology.
                NAM A2 models provide even more accurate and realistic amp emulation than the original
                NAM A1 models, while requiring less CPU. "Slimmable" A2 models allow
                users to select the level of CPU use vs. emulation accuracy that best suits their
                needs: slim down models for lower CPU use, or use full models for the best possible
                emulation quality.
            </p>
            <p>PiPiedal is one of the first platforms anywhere that allows you to experience the dramatic benefits 
                of NAM A2 technology.
            </p>
            <h3>Integration with Tone3000.com services</h3>
            <p>
                NAM A2 models are available as free downloads from{" "}
                <a href="https://tone3000.com" target="_blank" rel="noreferrer">Tone3000.com</a>.
                PiPedal 2.0 now integrates with Tone3000.com services, allowing you to download NAM A2
                models and Cabinet Impulse Response files directly to the PiPedal server from within the PiPedal web app.
                All existing NAM models on Tone3000.com have been retrained using the new A2
                architecture and are available right now. There is also a rich ecosystem of
                professionally developed NAM models available for purchase on the Internet. Whether
                you are looking for free models or premium models, NAM A2 provides the best amp
                modelling available anywhere.
            </p>

            <h3>Channel Routing</h3>
            <p>
                PiPedal 2.0 introduces a new Channel Routing dialog, replacing the Channel Selection
                Dialog from PiPedal 1.x. You can now globally route auxiliary input channels on your
                audio device &mdash; such as backing tracks or microphone inputs &mdash; or route a clean
                unprocessed guitar signal to otherwise-unused output channels for re-amping later in
                a DAW. These routing settings apply across all existing presets.
            </p>

            <h3>Progressive Web Application</h3>
            <p>
                PiPedal 2.0 can now be installed as a Progressive Web Application (PWA). This allows
                you to launch PiPedal from a desktop shortcut as a native-looking application, without
                browser address bars, tabs, or other window decorations. To install PiPedal as a PWA,
                load PiPedal in your web browser and click the "Install" button in the browser toolbar.
                As an added bonus, pressing F11 while running as a PWA toggles full-screen mode for a
                completely immersive experience. PWA mode also works well on Apple devices &mdash; Google
                Chrome is recommended over Safari for hosting the PWA on iOS/macOS.
            </p>

            <h3>Wi-Fi and Remote Control</h3>
            <p>
                PiPedal can be remotely controlled via a web interface over Ethernet or Wi-Fi. If you
                don't have access to a Wi-Fi router, PiPedal can be configured to start a Wi-Fi
                hotspot automatically whenever your Raspberry Pi cannot connect to your home network.
                Install the{" "}
                <a href="https://play.google.com/store/apps/details?id=com.twoplay.pipedal" target="_blank" rel="noreferrer">
                    PiPedal Remote Android app
                </a>{" "}
                to get one-click access to PiPedal whether you are at home or using the auto-hotspot
                feature at a gig.
            </p>

            <h3>LV2 Plugins and MIDI</h3>
            <p>
                PiPedal includes a pre-installed selection of LV2 plugins from the ToobAmp collection, which are 
                specifically designed for use as guitar effects. PiPedal's plugin architecture is not limited to ToobAmp plugins,
                but it works with most LV2 audio plugins. There are hundreds of free high-quality LV2
                audio plugins available &mdash; just install them on your PiPedal server and they will appear
                in the PiPedal web app. If you have a MIDI device connected to your PiPedal server, you can use MIDI devices
                (keyboards, controllers, or MIDI floor boards) to control PiPedal while performing.
                A simple interface lets you bind PiPedal controls to incoming MIDI messages.
            </p>

            <p>
                To download PiPedal 2.0, visit the{" "}
                <a href="https://rerdavies.github.io/pipedal/download.html" target="_blank" rel="noreferrer">
                    download page
                </a>
                . Full documentation is available{" "}
                <a href="https://rerdavies.github.io/pipedal/Documentation.html" target="_blank" rel="noreferrer">
                    here
                </a>
                .
            </p>

            <p style={{ marginTop: 32 }}>
                <a href="https://github.com/rerdavies/rerdavies.github.io/discussions/4">💬 COMMENTS</a>
            </p>

            <CopyrightSlug />
        </BlogPage>
    );
}
