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
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useWindowSize } from '@uidotdev/usehooks';
import { isVerticalToolbar } from '../Breakpoints';


export default function Home() {
    let { width } = useWindowSize();
    let showBlogColumn = (width ?? 0) > 1050;

    let hMargin = isVerticalToolbar(width) ? 64 : 40;
    if (showBlogColumn) {
        return (
            <div>
                <Container
                    maxWidth="xl"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'row', my: 0, gap: 8 }}
                    style={{ paddingLeft: hMargin, paddingRight: hMargin }}
                >
                    <div style={{ flex: "1 1 1px" }} >
                        <MainContent breakWidth={1400} />
                        <Footer />
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ display: (showBlogColumn ? "flex" : "none") }} />
                    <Box style={{ flex: "0 0 300px" }} sx={{ display: (showBlogColumn ? "flex" : "none") }} >
                        <Latest />
                    </Box>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Container
                    component="main"
                    sx={{
                        display: 'flex', flexDirection: 'column', my: 0, gap: 4
                    }}
                    style={{ paddingLeft: hMargin, paddingRight: hMargin }}
                >
                    <div style={{}} >
                        <MainContent breakWidth={1400} />
                    </div>
                    <Box  >
                        <Latest />
                    </Box>
                    <Footer />
                </Container>
            </div>
        );

    }
}


