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

import { useWindowSize } from '@uidotdev/usehooks';

export default function FloatImage(
    props: {
        floatPosition: "left" | "right",
        src: string,
        alt: string,
        attribution: React.ReactNode
    }) {
    const { width } = useWindowSize();

    if (width && width < 750) {
        return (
            <div style={{
                position: "relative", display: "flex", flexDirection: "column",
                marginBottom: 16, marginRight: 32, marginTop: 16, justifyContent: "center", alignItems: "center" 
            }}>
                <div><img style={{ width: "100%" }} alt={props.alt} src={props.src} /></div>
                <p className="image_attribution">{props.attribution}</p>

            </div>
        );


    } else if (props.floatPosition === "left") {   
        return (
            <div style={{
                width: 200, display: "flex", flexDirection: "column", float: "left",
                marginBottom: 16, marginRight: 32, marginTop: 16
            }}>
                <div><img style={{ width: 200 }} alt={props.alt} src={props.src} /></div>
                <p className="image_attribution">{props.attribution}</p>

            </div>
        );
    } else if (props.floatPosition === "right") {   
        return (
            <div style={{
                width: 200, display: "flex", flexDirection: "column", float: "right",
                marginLeft: 32, marginBottom: 0, marginRight: 16, marginTop: 16

            }}>
                <div><img style={{ width: 200 }} alt={props.alt}  src={props.src} /></div>
                <p className="image_attribution">{props.attribution}</p>
            </div>
        );
    } else {
        return (<div>INVALID FLOAT POSITION</div>);
    }

}
