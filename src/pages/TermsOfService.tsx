/*
 *   Copyright (c) Robin E. R. Davies
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


import Container from '@mui/material/Container';
import { useWindowSize } from '@uidotdev/usehooks';
import { isVerticalToolbar } from '../Breakpoints';

export default function TermsOfService() {
    let { width } = useWindowSize();
    let hMargin = isVerticalToolbar(width) ? 64 : 40;

    return (
        <div>
            <Container className="cclist-container"
                maxWidth="md"
                component="main"
                style={{
                    paddingLeft: hMargin, paddingRight: hMargin, paddingTop: hMargin, fontSize: "0.85em",
                    paddingBottom: hMargin

                }}
            >
                <h1 style={{ fontWeight: 300, marginBottom: 0 }}
                >Terms of Service</h1>
                <p><i>Last updated: November 25, 2026</i></p>

                <ol>
                    <li>These Terms of Service apply to all Android applications ("The Apps"), distributed through the Google Play Store ("Google Play"), by Robin E. R. Davies ("The Developer").</li>
                </ol>

                <h3>Use of The Apps</h3>
                <ol>
                    <li>Please install The Apps only via Google Play. Doing so ensures the safety and integrity of The Apps when they are installed on your device.
                        If you find copies of The Apps elsewhere, you should consider them to be unsafe, and possibly compromised by viruses or trojans.
                    </li>
                    <li>
                        You may use The Apps for any purpose, personal or commercial, in any way you see fit; but you may not copy, modify, sub-license, share or re-publish The Apps
                        without prior written permission from The Developer. Distribution of The Apps via any means other than through Google Play is strictly prohibited.
                    </li>
                </ol>

                <h3>No Warranty</h3>
                <ol>
                    <li>To the maximum extent permitted by applicable law, The Apps are provided "as is" and "as available", without warranty of any kind,
                        express or implied, including but not limited to warranties of merchantability, or fitness for a particular purpose, or  non-infringement.</li>
                </ol>

                <h3>Limitation of Liability</h3>
                <ol><li>To the maximum extent permitted by applicable law, The Developer shall not be liable for any claim, damages, or other liability, whether in an action of contract, tort,
                    or otherwise, arising from, out of, or in connection with The Apps or their use.</li>
                </ol>

                <h3>Privacy</h3>
                <ol>
                    <li>
                        The Developer does not collect, store, or share any personal information or other data from your use of The Apps.</li>
                    <li>The developer does make use of information provided by Google Play services, such as anonymized data on installs, uninstalls, and crashes encountered by The Apps, as well as anonymized transaction data 
                        and aggregated statistics related to payments made through The Apps using Google Play services. All such data is anonymized by Google. The Developer cannot access any personally identifiable information. Please refer to Google Play Privacy Policy for 
                        details on how Google collects and manages this data.
                    </li>
                </ol>
                <h3>Google Play Terms of Service</h3>
                <ol>
                    <li>
                        The Apps are distributed through Google Play. Your use of Google Play, and your download of The Apps from it,
                        remain subject to the Google Play Terms of Service. Nothing in these Terms limits any rights you have under the Google Play Terms of Service.
                    </li>
                </ol>


                <h3>Compliance with Local Law</h3>
                <ol><li>The Developer intends that The Apps comply with local laws that apply ("Local Laws"), including, for users in the European Union and European Economic Area,
                    applicable EU data protection and consumer protection law such as the General Data Protection Regulation (GDPR).
                    These Terms do not limit or exclude any mandatory rights you have under the laws of the country where you live,
                    including mandatory consumer protection rights.</li></ol>
                <h3>Severability</h3>
                <ol><li>
                    If any provision of these Terms is unenforceable under Local Laws, or conflicts with Google Play Terms of Service,  including any mandatory provisions therein, it 
                    applies only to the extent permitted, and the remaining provisions are unaffected. 
                </li></ol>
                <h3>Jurisdiction</h3>
                <ol><li>
                    These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
                    </li>
                    <li>
                    
                    Notwithstanding the foregoing, nothing in these Terms shall limit or override your rights under mandatory data protection laws (including the EU General Data Protection Regulation (GDPR)) or mandatory consumer protection laws of your country of residence, where such laws apply. Subject to any mandatory statutory rights allowing you to bring claims in your local jurisdiction, any disputes arising under these Terms shall be resolved exclusively in the courts of Ontario, Canada.
                    </li>
                </ol>

                <h3>Changes to These Terms</h3>
                <ol><li>The Developer may update these Terms from time to time. Continued use of The Apps after a change means you accept the updated Terms.</li></ol  >

                <h3>Contact</h3>
                <p>Questions about these Terms may be sent to <a href="mailto:rerdavies@gmail.com">rerdavies@gmail.com</a>.</p>

            </Container>
        </div >
    );
}


