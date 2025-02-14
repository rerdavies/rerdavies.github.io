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

import Container from '@mui/material/Container';
import { useWindowSize } from '@uidotdev/usehooks';
import { isVerticalToolbar } from '../Breakpoints';

export default function About() {
    let { width } = useWindowSize();
    let hMargin = isVerticalToolbar(width) ? 64 : 40;

    return (
        <div>
            <Container
                maxWidth="md"
                component="main"
                style={{paddingLeft: hMargin, paddingRight: hMargin, paddingTop: hMargin,
                    paddingBottom: hMargin

                }}
            >
                <h1 style={{fontWeight: 300, marginBottom: 0}}
                >Robin E.R. Davies</h1>
                <p style={{marginTop: 0, marginBottom: 16}}>rerdavies@gmail.com</p>
                <img src="/img/headshot-sm.jpg" alt="Robin E.R. Davies" style={{float: "right", marginLeft: "1em", marginRight: "1em", marginTop: "0.5em", marginBottom: "1em"}} />
                <p>I am a professional software developer and semi-professional jazz guitarist.
                </p>
                <p>I have worked as a software developer or software development manager for over 45 years. My first job was writing assembler code for 8080/Z80 microprocessors. 
                    I developed software for the first IBM PC, and for the first MacIntoshes. And since then, have worked on a wide variety of 
                    processors and operating systems and hardware platforms. Much of that work involved writing system software 
                    or device drivers for custom hardware. I briefly managed the advanced graphics driver development teams for 
                    ATI Technologies Inc. (which was subsequently acquired by AMD to form the core of their graphics adapter division). 
                </p>
                <p>The unifying theme throughout my career has been a deep interest in the intersection of software and hardware, 
                    and a passion for creating software that is both useful and beautiful. Generally, I have been drawn to 
                    projects that explore the limits of what high-performance software can achieve on commercial processors and
                    hardware.
                </p>
                <p>I also play jazz guitar, and have played professionally for the last ten years or so.</p>
                <p>Computer music gives me an opportunity to combine both of my passions. Over the years, I have written a number of software synthesizers and effects 
                and and even one computer music language compiler. My interest in computer music has most 
                    recently manifested itself in the PiPedal project &mdash; a guitar effects stomp box that runs on a Raspberry 
                    Pi &mdash; and the TooB Amp project &mdash; a foundation set of LV2 guitar effects plugins for use with PiPedal. The TooB Amp project 
                    includes a wide variety of guitar effects, include Neural Network/Machine Learning guitar amp emulations, convolution reverb and cabinet simulator effects, 
                    and very usable emulations of classic guitar effects like the Boss CS-2 chorus and Boss BF-1 flanger pedals.
                </p>
                <p>I would very much like to work full-time on the PiPedal project, particularly. So I am therefore currently seeking 
                    sponsorships for the PiPedal project. You can sponsor the project by making a donation (either one time, or ongoing) 
                    through my <a href="https://github.com/sponsors/rerdavies">Github Sponsors page</a>. Or you can contact me directly to discuss other sponsorship arrangements.
                    Your support means more than you would think.
                </p>
                
            </Container>
        </div>
    );
}


