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

//import App from './App.tsx'
import App from "./App";

export default function Component() {
    return (<App >
        <div style={{marginTop: 32, marginLeft: 64, marginRight: 64}}>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check the URL or return to the <a href="/">home page</a>.</p>
            <blockquote style={{
                marginTop: 64,
                marginLeft: 64,
                width: 480,
                height: 320,
                backgroundImage: 'url(./img/CherryBlossom.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                fontStyle: 'italic',
                color: '#666',
                position: "relative"
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    fontSize: '1.2rem',
                    color: 'white',
                    width: '100%',
                    paddingLeft: '1.5em',
                    paddingRight: '1.5em'
                }}>
                You step in the stream,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;but the water has moved on.<br/>
                This page exists now only as<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;a memory of a page that once was.
                </div>
            </blockquote>
        </div>
    </App>);
}