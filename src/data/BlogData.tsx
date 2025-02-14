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

import React from 'react';

export interface Author {
  name: string;
  avatar: string;
};
export interface ArticleInfo {
  tag: string;
  thumbnail: string;
  thumbnailAttribution: React.ReactNode;
  date: string;
  title: string;
  description: string;
  authors: Author[];
  route: string;
};


export const getArticleInfo = (route: string): ArticleInfo => {
  let result = articleInfo.find((article) => article.route === route);
  if (result === undefined) {
      throw new Error("Article not found");
  }
  return result;
}

 const articleInfo: ArticleInfo[] = [
    /*
    {
      tag: 'Development',
      thumbnail: '/thumb/inferno.jpg',
      thumbnailAttribution: (
        <span>
        <a href="https://commons.wikimedia.org/wiki/File:Ottimo_commento_alla_commedia,_1457,_inferno_I_(bncf_II.I.34)_01.jpg">
        Francesco Bini via Wikimedia Commons</a>, 
        <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, 
        </span>
      ),
      date: "2024-2-5",
      title: 'The Fiery Crucible of Documentation',
      description:
        'Refine your code by writing real documentation.',
      authors: [
        { name: 'Robin Davies', avatar: '/static/images/avatar/1.jpg' },
      ],
      route: '/FieryCrucible',

    },
    */
    {
      tag: 'Product',
      thumbnail: '/thumb/playbot.jpg',
      thumbnailAttribution: (<span>Image by Dall-E from OpenAI</span>),
      date: "2024-2-5",
      title: 'What PiPedal Is',
      description:
        'Successful projects often end up becoming something they were not. This is a feature, not a bug.',
      authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
      route: '/WhatPiPedalIs',
    },
    {
      tag: 'Development',
      thumbnail: '/thumb/brasserie.jpg',
      thumbnailAttribution: (<span>Albert-Emile Artigue, Public domain, via Wikimedia Commons</span>),
      
      date: "2024-2-5",
      title: "Free Like Air and Sunlight",
      description:
        "Why my projects do not use GPL.",
      route: "/FreeAsInSunlight",
      authors: [{ name: 'Robin E.R. Davies', avatar: '/static/images/avatar/6.jpg' }],
            
    },
  ];
  

  export default articleInfo;
