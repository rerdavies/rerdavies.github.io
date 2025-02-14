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
import { useNavigate } from "react-router";
import { styled, useTheme } from '@mui/material/styles';
import { useWindowSize } from "@uidotdev/usehooks";

const BButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: (theme).palette.action.hover,
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        zIndex: 10,
        outlineOffset: '2px',
        background: "transparent"
    },
    whiteSpace: "nowrap",
}));




export default function AppHeader2(props: { vertical: boolean }) {
    let { width } = useWindowSize();
    let theme = useTheme();
    const navigate = useNavigate();
    const handleNavigate = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        navigate(path);
        return true;
    }
    let buttonStyle = { flex: "0 1 auto", color: "rgb(85,85,85)", 
         fontSize: 18};
    let buttonStyle2 = buttonStyle;
    if (props.vertical ?? true) {
        return (
            <div style={{
                background: theme.palette.background.default,
                position: "relative", width: "100%", display: "flex", 
                flexFlow: "column nowrap", paddingLeft: 24, paddingRight: 24,
                alignItems: "start",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                zIndex: 3,
                gap: 0
            }}>
                <BButton disableFocusRipple={true} style={{
                    fontWeight: 500,
                    marginTop: 16, fontSize: 30,
                    
                }}
                    onClick={(e) => handleNavigate(e, '/')}
                >◼ rerdavies</BButton>

                <div style={{ flex: "0 1 32px" }} />
                <BButton disableFocusRipple={true} style={buttonStyle}
                    onClick={(e) => handleNavigate(e, '/projects')}
                >
                    projects
                </BButton>
                <BButton disableFocusRipple={true} style={buttonStyle}
                    onClick={(e) => handleNavigate(e, '/essays')}
                >
                    blog
                </BButton>
                <BButton disableFocusRipple={true} style={buttonStyle}
                    onClick={(e) => handleNavigate(e, '/sponsorship')}
                >
                    about me
                </BButton>
            </div>

        );

    }
    if ((width ?? 0) < 600) {
        // ultra compact horizontal layout.
        return (
            <div style={{ 
                background: theme.palette.background.default,
                position: "relative", width: "100%",  paddingLeft: 24, paddingRight: 24, borderBottom: "1px solid rgb(85,85,85)"
            }}>

                <BButton disableFocusRipple={true} style={{
                    fontWeight: 400,
                    marginTop: 16, fontSize: 18,
                    color: "rgb(85,85,85)"
                }}
                onClick={(e) => handleNavigate(e, '/')}
                >◼ rerdavies</BButton>
                <div style={{
                    position: "relative", width: "100%", display: "flex", flexFlow: "row nowrap",
                    alignItems: "baseline",
                    gap: 8
                }}>
                    <BButton disableFocusRipple={true} style={{ flex: "0 0 auto", color: "rgb(85,85,85)", fontSize: 18 }}
                        onClick={(e) => handleNavigate(e, '/projects')} >
                        projects
                    </BButton>
                    <BButton disableFocusRipple={true} style={{ flex: "0 0 auto", color: "rgb(85,85,85)", fontSize: 18 }}
                    onClick={(e) => handleNavigate(e, '/essays')}
                     >
                        blog
                    </BButton>
                    <BButton disableFocusRipple={true} style={{ flex: "0 0 auto", color: "rgb(85,85,85)", fontSize: 18 }} 
                        onClick={(e) => handleNavigate(e, '/sponsorship')}
                    >
                        about me
                    </BButton>

                </div>
            </div>

        );
    }
    return (
        <div style={{
            position: "relative", width: "100%", display: "flex", flexFlow: "row wrap", paddingLeft: 24, paddingRight: 24,
            alignItems: "baseline",
            borderBottom: "1px solid rgb(85,85,85)",
            gap: 16
        }}>
            <BButton disableFocusRipple={true} style={{
                fontWeight: 300,
                marginTop: 16, fontSize: 24,
                color: "rgb(85,85,85)"
            }}
            onClick={(e) => handleNavigate(e, '/')}
            >◼ rerdavies</BButton>

            <div style={{ flex: "1 1 1px" }} />
            <BButton disableFocusRipple={true} style={buttonStyle2} 
                                onClick={(e) => handleNavigate(e, '/projects')}

            >
                projects
            </BButton>
            <BButton disableFocusRipple={true} style={buttonStyle} 
                                onClick={(e) => handleNavigate(e, '/essays')}
            >
                blog
            </BButton>
            <BButton disableFocusRipple={true} style={buttonStyle} 
                                onClick={(e) => handleNavigate(e, '/sponsorship')}
            >
                about me
            </BButton>
        </div>

    );
}