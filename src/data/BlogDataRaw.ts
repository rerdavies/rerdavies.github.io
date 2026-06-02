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

export interface Author {
  name: string;
  avatar: string;
}

export interface ArticleDataRaw {
  tag: string;
  thumbnail: string;
  thumbnailAttributionText: string;
  date: string;
  title: string;
  description: string;
  authors: Author[];
  route: string;
}

export const articleDataRaw: ArticleDataRaw[] = [
    {
        tag: 'Development',
        thumbnail: '/thumb/PiPedal20Thumb.png',
        thumbnailAttributionText: '',
        date: "2026-6-2",
        title: "Announcing PiPedal 2.0!",
        description:
          "A major update to PiPedal!",
        route: "/PiPedal20",
        authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        tag: 'Development',
        thumbnail: '/thumb/DynaCompThumb.jpg',
        thumbnailAttributionText: '',
        date: "2025-12-5",
        title: "MXR Dyna Comp Circuit Analysis",
        description:
          "A circuit analysis of the MXR Dyna Comp.",
        route: "/MxrDynaComp",
        authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        tag: 'Development',
        thumbnail: '/thumb/DialThumb.png',
        thumbnailAttributionText: 'Demeter. Albert-Emile Artigue, Public domain, via Wikimedia Commons',
        date: "2025-5-21",
        title: "What If There Were No Knobs at All?",
        description:
          "Minimalist user interfaces.",
        route: "/NoKnobs",
        authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
      tag: 'Development',
      thumbnail: '/thumb/brasserie.jpg',
      thumbnailAttributionText: 'Demeter. Albert-Emile Artigue, Public domain, via Wikimedia Commons',
      date: "2025-2-5",
      title: "Free Like Air and Sunlight",
      description:
        "Why my projects do not use GPL.",
      route: "/FreeAsInSunlight",
      authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
      tag: 'Product',
      thumbnail: '/thumb/playbot.jpg',
      thumbnailAttributionText: 'Image by Dall-E from OpenAI',
      date: "2024-10-14",
      title: 'What PiPedal Is',
      description:
        'Successful projects often end up becoming something other than what they started as. This is a feature, not a bug.',
      authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
      route: '/WhatPiPedalIs',
    },
];

export default articleDataRaw;
