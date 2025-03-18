
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
 *
 *  Text content is dual-licensed under CC BY 4.0 SA, or MIT license, whichever you 
 *  find more convenient. 
 */


import { getArticleInfo } from "../data/BlogData";
import BlogPage from '../BlogPage';


export default function FreeAsInSunlight() {

    const route = "/FreeAsInSunlight";

    const articleInfo = getArticleInfo(route);

    return (
        <BlogPage route={route}>
            <p className="quote">Freedom is the open window through which pours the sunlight of the human spirit and of human dignity.<br />
                &mdash; Herbert Hoover</p>

            <div style={{
                width: 200, display: "flex", flexDirection: "column", float: "right",
                marginLeft: 32, marginBottom: 0, marginRight: 16, marginTop: 16

            }}>
                <div><img style={{ width: 200 }} alt="thumbnail" src={articleInfo.thumbnail} /></div>
                <p className="image_attribution">{articleInfo.thumbnailAttribution}</p>
            </div>

            <p>
                I have been told that I should use the GPL because it is "Free Like Freedom". But it seems to me to
                be a less than noble thing to give my software away using a license that prevents it from being freely used by serious developers 
                who cannot afford to be infected by the GPL.
            </p>
            <p>I want something much simpler. I want to give it away. I want people to use my software. And yet I am given to understand that "Free Like Beer" is 
                not as good as "Free Like Freedom". The choice of the word Beer in all of this seems needlessly pejorative; and the the
                choice of the word Freedom seems suspect as well.</p>
            <p>I think it is therefore time to reclaim the narrative. I want my software to be Free Like Air and Sunlight (FLAS). 
                This happens to be completely compatible with Free Like Beer, but unfortunately withers and dies whenever 
                it comes in contact with Free Like Freedom.
            </p>
            <p>What is a Free Like Air and Sunlight license? It is pretty much any open source license that does not infect other peoples'
                source code with its own license terms, like the GPL Libre licenses do. So MIT, BSD, Apache (with some caveats for those 
                who own large patent libraries), Mozilla and many others are Free Like Air and Sunshine. 
                I generally prefer MIT licenses for open-source software that I write myself, because the MIT license is short 
               and uncomplicated;  and it's a standard license whose terms and consequences and risks are relatively well understood; and it has slightly 
               fewer variants than BSD licenses (which are fine FLAS licenses too). 
            </p>
            <p>The general intent of a Free Like Air and Sunlight license is that it allows anyone to use software for
                any purpose at all, including commercial purposes. 
                It allows anyone to modify my software, and to distribute it in source or binary
                form (subject only to the very modest requirements of an MIT license).  And &mdash;  most importantly of all *&mdash; it does not require people who use my code to redistribute their code if
                they do not want to. There are many licenses that meet this criteria, but I generally use the MIT license because of its directness
                and simplicity.
            </p>
            <p>And so, in the spirit of Free Like Air and Sunlight, I release all of my open-source projects under a Free Like Air and Sunlight MIT license.
                I hope that you find it useful. And I hope that you find it beautiful. And I hope that you find it to be a joy to use.
                And I hope that you find it to be a joy to use, modify and to share in turn.</p>

            <p><b><i>Please refer to license files in each project for the precise and actual terms of the license. Some of these
                projects incorporate third-party libraries which may be licensed under different Free Like Air and Sunlight license.
            </i></b>
            </p>


            <h3>Frequently asked questions:</h3>
            <p style={{ marginBottom: 4 }}>
                Q: You realize that would allow ANYONE to use your software, right?</p>
            <p style={{ marginTop: 0 }}>A: Yes. That's kind of the point.</p>
            <p style={{ marginBottom: 4 }}>
                Q: You realize that somebody could take your name off your software and pretend that they had written it ?</p>
            <p style={{ marginTop: 0 }}>A: No. There is actually a condition in the MIT license that prevents people from doing that. 
                And other Free Like Air and Sunlight licenses usually have similar conditions.
                And like seriously, what sensible grownup would ever do that?
            </p>
            <p style={{ marginBottom: 4 }}>
                Q: But what about Freedom!!??</p>
            <p style={{ marginTop: 0 }}>A: There are about 195 countries in the world. About 160 of them have freedom. So far,
                the GPL has not affected those numbers one way or another. And, quite frankly, the convoluted and horrible ways 
                that FLOSS-licensed software often uses to restrict your actual concrete material freedom to use GPL software seems to me to 
                be far worse than any abstract benefit that Free Like Freedom might theoretically confer.</p>
            <p>The GPL was written by hackers, for the benefit of hackers. It caters to a very specific meaning of Freedom that it is generally 
             only useful to hackers. For the vast overwhelming majority of actual professional software developers, the terms of a the GPL are detrimental, and 
             a signfiicant majority of professional software developers are unable to use GPL-licensed software in their projects. 
</p>
             <p>Even worse, the "Freedom" that GPL is supposed to provide seems to have turned out to not be that useful in practice. Of the 
              11 devices in my immediate vincinity that can or do run Linux, only four of them are actually user-patchable; and one of those four will immediately 
              and irrevocably lose access to Netflix (and a bunch of other security-related functionality) if its bootloader is ever unlocked; 
              one of them (running Ubuntu 22.04) withholds critical security patches to FOSS software if you don't pay for a license; and a third 
              (a Raspberry Pi device) relies on closed-source device drivers to access pretty much every device on its SBC. Plus there are another three Linux-based 
              devices (an Ouya, and two Android TV devices) sitting in a box on my bookshelf that are no longer useful because the cloud services they relied 
              on are no longer accessible.
            </p>
            <p style={{ marginBottom: 4 }}>
                Q: Why? Why would you do that?</p>
            <p style={{ marginTop: 0 }}>A: Why would I want to give my softare away? We are evolved herd animals, and therefore (for 
                evolutionary reasons) are programmed to experience deep satisfaction when we feel like we are making contributions to our community, and when we feel like our
                community appreciates what we do. It makes me happy. And, as a pleasant side-effect FLAS licenses also means that I can 
                easily recycle code that I have written for personal use in professional projects should I ever choose to do so.
            </p>
            <p style={{ marginBottom: 4 }}>
                Q: But the GPL licenses don't really.... </p>
            <p style={{ marginTop: 0 }}>A: Seriously? Only on the barest of technicalities. For all practical purposes, they actually do.</p>

            <p style={{marginTop: 32}}> 
                <a href="https://github.com/rerdavies/rerdavies.github.io/discussions/1">🗨 COMMENTS</a>
            </p>
            <p style={{fontSize: "0.8rem"}}>Copyright © 2025 Robin E.R. Davies</p> 
        </BlogPage>

    );
}


