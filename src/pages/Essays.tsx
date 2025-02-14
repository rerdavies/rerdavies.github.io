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
import Latest from '../components/Latest';

import { isVerticalToolbar } from '../Breakpoints';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Essays() {
    let { width } = useWindowSize();

    let hMargin = isVerticalToolbar(width) ? 64 : 40;

    return (
        <div>
            <Container
                maxWidth="xl"
                component="main"
                sx={{ display: 'flex', flexDirection: 'row', my: 0, gap: 8 }}
                style={{ paddingLeft: hMargin, paddingRight: hMargin }}
            >
                    <Latest />
            </Container>
        </div>
    );
}


