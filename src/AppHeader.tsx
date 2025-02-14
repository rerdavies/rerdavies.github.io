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

import Button from "@mui/material/Button";
import {useNavigate} from "react-router";


export default function AppHeader() {
    const navigate = useNavigate();
    const handleNavigate = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        navigate(path);
        return true;
    }
    let clefHeight = 64;
    return (
        <div style={{position: "relative", width: "100%" }}>
            <div className="dm-serif-text-semi" style={{ 
                position: "relative", top: 8, fontSize: 18, marginBottom: 0, marginLeft: 120 }}>
                Robin E.R. Davies
            </div>
            <div style={{ display: "flex", flexFlow: "row nowrap", opacity: 0.6 }}
            onClick={(e)=> {
                handleNavigate(e,"/");
            }}
            >
                <img src="/img/ClefHeaderWhiteL.svg" style={{ flex: "0 0 auto", height: clefHeight }} />
                <img src="/img/ClefHeaderWhiteR.svg" style={{
                    flex: "1 1 1ps", height: clefHeight,
                    objectFit: "fill", width: "100%"
                }} />
            </div>
            <div style={{ display: "flex", flexFlow: "row nowrap", columnGap: 16, marginRight: 64,
                position: "relative", top: -24
             }}>
                <div style={{ flex: "1 1 1px" }} />
                <Button className="dm_button" variant="text" color="primary" onClick={(e) => handleNavigate(e,'/projects')}>
                    Projects
                </Button>
                <Button className="dm_button" variant="text" color="primary" onClick={(e) => handleNavigate(e,'/essays')}>
                    Blog
                </Button>
                <Button className="dm_button" variant="text" color="primary" onClick={(e) => handleNavigate(e,'/sponsorship')}>
                    Sponsorship
                </Button>
            </div>
        </div>

    );
}