
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


import BlogPage from '../BlogPage';
import CopyrightSlug from '../Copyrightslug';


export default function NoKnobs() {

    const route = "/NoKnobs";

    return (
        <BlogPage route={route}>
            <p>
                So I shipped a piece of UI that I am genuinely proud of a couple of days ago.
            </p>
            <img src="/thumb/ToobPhaserSm.png" style={{ display: "block", marginLeft: "64px", maxWidth: "50%" }} />
            <p>That's it. One knob. And only one knob.</p>
            <p>You probably need a little context. The knob is a control on the TooB Phaser LV2 audio effect plugin (part of
                the <a href="https://github.com/rerdavies/ToobAmp">ToobAmp project</a>). It is not a direct 
                clone, but it is definitely inspired by a classic guitar 
                effect&mdash;the MXR Phase 90&mdash;which looks like this:</p>
            <img src="/img/mxr90.webp" style={{ display: "block", maxWidth: "50%", marginLeft: "30%" }} />
            <p>
                The MXR Phase 90 also only has one knob.
            </p>
            <p>It could have had two knobs. The MXR Phase 100 has two knobs. And modern clones of the MXR Phase 90
                pedal sometimes have three or more knobs, plus a few odd switches as well. But the MXR Phase 90 has only one knob.</p>
            <p>Not only that but&mdash;like all great guitar
                effect pedals&mdash;the absolute sweet spot setting for the knob is straight up at 12 o'clock, which produces  
                a delicious phaser effect, with swooshy goodness, that makes your head spin and your eyeballs roll into the back of 
                your head out of sheer bliss. Amazing!
                You could set it at 9 o'clock (a very subtle shimmer) or 3 o'clock (an odd pumping effect that is actually recognizable and useful). 
                Both musically useful settings. But you probably won't. Because the absolute sweet spot setting is at 12 o'clock. Many MXR Phase 90 guitar pedals may have never been
                played in performance with the knob set at anything other than 12 o'clock. If this pedal had no knob at all, it 
                would still be a perfectly excellent guitar pedal!
            </p>
            <p>Which brings me back to the actual topic of this blog post: minimalist design in computer user interfaces.</p>
            <p>
                I have always been inspired by physical guitar pedals when I write digital guitar effects. The
                constraints of the medium enforce an economy of expression that we, as software designers, could learn from.
            </p>
            <p>
                The Rules of Knob
                for great physical guitar effect pedals are straightforward.
            </p>
            <ol>
                <li>Less knobs is better.</li>
                <li>To get the best, most useful setting, set all the knobs to 12 o'clock</li>
                <li>All knobs must be musically useful across most or all of their range.</li>
            </ol>
            <p>Modern Rules of Knob have evolved somewhat from the classic period (1970-1995). A minor
                industry has evolved around modding classic guitar effect pedals; and current-generation
                guitar effect pedals will often have switches that allow users to select between
                famous mods to or manufacturing variants of classic guitar effect pedals. But not counting
                knobs and switches that control variants, surprisingly, the number of knobs remains about the same.
            </p>
            <p>
                Admittedly, the Rules of Knob exist for reasons that relate to how analog effect plugins are 
                designed and built. Physical knobs cost money; and they have to control 
                actual circuitry that costs money;
                and the circuitry they control usually has to be manually trimmed during manufacturing because electronic
                components vary enormously from batch to batch, which costs a lot of money. And designing analog guitar effect 
                pedals is next level bonkers! So the complexity of circuit design also tends to limit how many musically useful
                variations there are to control with knobs in the first place.</p>
            <p>But I do believe that what distinguishes legendary 
                classic guitar effect pedals from all the rest is how well their designers have managed to compress 
                complicated parameter configuration spaces into a minimal number of knobs. And from this perspective, the MXR Phase 90 
                is exemplary. There is only one knob&mdash;a knob whose use is strictly optional, and a knob that produces useful 
                musical choices across almost the entire range of settings. The only way one could improve on that is to have no 
                knobs at all!
            </p>
            <p>Unfortunately, in the digital guitar effect world, the Rules of Knob have not been applied
                consistently.
                When implementing digital guitar effects, knobs are free! And the algorithms that implement
                guitar effects often have lots of parameters that can be tuned in the software; so it's tempting
                to surface tunable parameters in the algorithm as controls in the effect's user interface, even
                though tweaking the values of those parameters does not really produce musically useful effects. 
                For many of these parameters, there is a sweet spot, and providing a knob that allows a designer to find that 
                sweet spot is, while useful to the designer, providing a disservice to users if it's left in.
                Instead of doing the hard design work required to make it easy for users to select great-sounding sets of parameters, it's all 
                too easy to turn sometimes very difficult choices over to users of our digital effects instead.
            </p>
            <p>
                For digital implementations of phaser effect plugins, knobs don't cost extra. So there's no financial cost to providing the extra knobs. However, I would like to 
                make the case that there is a cognitive cost to having extra knobs. A phaser effect that has six knobs is going to be more difficult to 
                use, and therefore much less useful than one that has one knob. 
            </p>
            <p>
                To take a concrete example, what LFO shape should I be using in my phaser implementation? I could offer my users a 
                choice of a bunch of different LFO wave shapes. Or I could just make the choice on behalf of my users, and implement the correct 
                waveform which is actually an inverse sawtooth wave with carefully selected depth and offset!  Are you really doing users a favor by 
                offering them choices that are arbitrary and unmusical? "Well", you might say, "I could give them Depth and Offset knobs". But doing so 
                requires users to work up an intuitive understanding of what Depth and Offset do in order to effectively use those controls. Specifically, they 
                control the minimum and maximum break frequency of the phaser stages as the LFO output varies. And the introduced complexity compounds. 
                You can't just change the LFO waveform. If you change the waveform, you will need to change the minimum and maximum frequency, and probably 
                the frequency of the LFO as well. And arranging things so that the best settings for the Depth and Offset (or MinF, and MaxF knobs) occur 
                at 12 o'clock, after the waveform has been changed? Things get very complicated very quickly. And for what? The vast majority of 
                possible settings are not particularly musical. There are a few useful islands of useful settings. But there just isn't that much difference. 
                Adding three knobs in this case produces little substantial benefit, while making the effect much more difficult to use. The right choice, 
                I think, is to pre-configure those settings to optimal fixed values, and have not have the any of the extra knobs.
            </p>
            <p>
                Personally, I am deeply discouraged when I load up a new digital effect only to be confronted with dozens of knobs, buttons, dropdowns, 
                and tabs. In my mind, it's an indication that the designers of those digital plugins haven't done the hard work
                of determining what the good values for their tunable parameters are. Almost invariably,
                the 12 o'clock knob rule hasn't been respected either. So if you are trying to use that plugin
                you are going to have to spend a lot of time searching through a difficult-to-understand parameter space trying to
                find useful settings. You're going to have to read the manual (the manual, you say?!) to figure out what all of those knobs 
                actually do, maybe search the web to find expert advice on what effect each of those knobs are going to have, and&mdash;if you're lucky&mdash;find
                online guidance on useful ranges and combined settings for all those knobs. 
                 </p>
            <p>Compare that with the MXR Phase 90. If you have been tweaking the knob for a while, and want to get back to sensible value, well you just.... set the one knob to 12 o'clock!
                And lets be frank. At least 2/3 of the settings of the Rate control produce musically useful and
                audibly different results. So it's really difficult to get lost. The knob does what it does. You can
                hear what it does easily. And most values sound pretty darned good.
            </p>
            <p>So lets get back to the implementation of the TooB Phaser. It has one knob. (I think I mentioned that).
                It could have had more. It could have had knobs to control:
            </p>
            <ul><li>
                Wet/Dry mix (there are important reasons why the mix level has to be exactly 50/50)
            </li>
                <li>Feedback level (there's one particular feedback level that sounds amazing, and there's
                    no real reason why you would ever want to select another, and most physical Phaser pedals 
                    don't allow you to control it either)</li>
                <li>Depth (largely unmusical, and the default setting is perfectly good)</li>
                <li>Lfo shape (do you want the "woosh" or don't you? You want the "woosh"!).</li>
                <li>Number of phaser stages (2=Phase 45, 4= Phase 90, 6 = Phase 100); maybe in a future 
                    version, but the differences are subtle, and the musical use-cases are mostly covered off by 
                    the Rate control anyway.
                </li>
                <li>Emulation of <i>Script</i> or <i>Block</i> factory variants of the Phase 90. TooB Phaser does the block variant. 
                An almost invisible difference, and the Block version sounds ever so slightly better. So there will not be an "ever so 
                slightly worse" button.
                </li>
                <li>
                    A volume/drive knob.
                </li>
            </ul>
            <p>So that's up to 7 knobs and/or switches that existing digital phaser effects can and sometimes do 
                have. None of which are that important!</p>
            <p>Of these choices, I struggle most with the Volume knob. A volume knob allows users to match sound levels 
                when the effect is bypassed. In the case of a phaser, the output volume is actually very predictable, so 
                it's possible to hardware the overall gain of the effect so that the volume of the output signal is the
                same to within a couple of dB whether the phaser effect is bypassed or not. So the TooB Phaser plugin does not 
                have a volume knob. In other cases, it's not so clear. For example, 
                I am currently struggling with a feature request to add a Volume knob to the 
                TooB Tone Stack plugin. And the user does have a point. 
                The effect provides emulation of classic Marshall and Fender and Baxandall tone stacks. These are subtractive 
                filter networks that always provide output at a lower volume than the input, sometimes by as much as 10 dB. Providing a volume knob would 
                allow users to configure the Tone Stack 
                so that there is no perception of volume change when the effect is bypassed. It's a good feature request. I've been back and 
                forth on this feature request three times now. The pressing question is: does the cognitive load of adding one more knob really 
                outweigh the utility of being able to bypass a tone stack without changing the output signal level? While writing this essay, 
                I have reluctantly gone forth one more time, and have decided to add the volume knob in the next release.
            </p>
            <p>And there is a potential path forward: follow the path of modern physical guitar effect pedals, and provide a single 
                additional knob that switches between models. i.e. a single knob, switch or dropdown control that allows selection 
                of Univibe, Phase 45, Phase 90/Block, Phase 90/Script, or Phase 100 pedals. A control like this would effectively end up 
                switching the hard-wired values of batches of internal conjuration parameters (minimum and maximum break frequency, 
                number of phaser stages, feedback, etc). Or in extreme cases might switch the entire implementation from 
                start to finish. And these internal preset parameters could be configured 
                so that 12 o'clock positioning of the Rate control still works. But there are new challenges, not the least of which is that 
                the Phase 100 has an Intensity knob in addition to a Rate knob. The virtuous response to that, 
                I think, would be: if you want a Phase 100 guitar effect plugin, then make it a 
                separate plugin, instead of providing a dropdown selection. Extra plugins are also free!</p>
            
            <p>At this point I have written 24 effect pedals for the ToobAmp project. Those 24 effect pedals
                were mostly written for the <a href="https://rerdavies.github.io/pipedal/">PiPedal project</a> because I was unable to recommend a consistent usable 
                set of LV2 guitar effect plugins that were well suited for use with PiPedal. But it has grown to the point that I consider the ToobAmp project 
                to be a separate project in its own right. The plugins run well in other LV2 host applications, and now run on x86/amd hosts as well as 
                on Raspberry Pi OS. And I think that two of the plugins in the ToobAmp project (two neural-network based amp modellers) are important 
                enough that they deserve a life outside of PiPedal. ToobAmp was written partially because the UIs in LV2 plugins in other projects 
                are based on physical rack-mount studio effects, which don't generally follow 
                the Rule of Knob so slavishly, and aren't as suited for use in guitar pedalboards as they could be. 
                And partly, that's because there are truly odd omissions in the Lv2 canon. I couldn't find a 3-knob or 4-knob echo
                that allowed me to easily dial in my standard real-world 340ms echo pedal setting, and none of the thirteen(!) LV2 echo effects that were installable 
                by Raspberry Pi OS seemed to have less than 17 knobs! Nor could I find a one knob Volume plugin. It seems so obvious
                and yet I wasn't able to find one, so the ToobAmp project now includes the TooB Volume plugin. And the two neural-network-based amp 
                modellers were written because nobody was providing debian packages for use on Raspberry Pi OS. And many of the goto LV2 effect libraries 
                were written in an era when UX was based on a completely 
                different aesthetic where it was considered to be a good thing to have an unmanageable number of 
                not-always-useful controls to the detriment of usability in ordinary use cases. That's not to say 
                there aren't all sorts of great LV2 effects; just that 
                I wasn't able to find a bundle of effects that were consistently designed with the kind of minimalist user interface 
                that is appropriate for guitar effects pedals. That's why I wrote ToobAmp. 
            </p>
            <p>
                 I've certainly always been aware of the Rule of Knobs throughout the development of the ToobAmp library. 
                 Toob Chorus has two knobs, which I'm rather proud of as well! (So does the Boss CE-2 Chorus). 
                 Toob Flanger has 3 knobs! (So does the Boss BF-2 Flanger,  
                 although I can't help thinking that three knobs is one too many in the case of the BF-2 flanger). I do have to 
                 admit that if I were to do the entire ToobAmp project from scratch, some of my earlier plugins would have 
                 less knobs. But I have gotten further and further into the project, my appreciation for the Rule of 
                 Knob has grown, as has my appreciation for the incredible genius and inspiration that went into the 
                 design of knobs and controls on classic guitar effect pedals.
            </p>
            <p>While the Rules of Knob have specific applicability to guitar effect pedals, and guitar effect plugins, I'd like to suggest 
                that the Rules of Knob can be applied more broadly. Broadly applied, I think the Rules of Knob mean:
            </p>
            <ul><li>
                More UI is not better. 
            </li>
            <li>
                There is a cognitive cost to complex user interface, which must be weighed 
                against utility. 
            </li>
            <li>
                Designers can and should be making 
                choices on behalf of users in order to simplify user interface, even if it means 
                a slight reduction in functionality.
            </li>
            </ul>
            <p>I have an example. I use Reaper (a widely available Linux DAW) a lot to test my plugins. And the UI irritates me beyond reason. The 
                Reaper UI is baroquely and 
                needlessly and painfully complicated. And the primary reason for that is because the Reaper UI does not respect the Rules of 
                Knob.
            </p>
            <p>
                Consider the way Track Freeze functionality is implemented in the Reaper UI. Freezing tracks is a key part of my workflow
                when I'm using a DAW. It allows me to create tracks that have very compute-intensive instruments or effect chains, and then <i>freeze</i>
                the track (generate a pre-rendered buffer) so that the track continues to play in the DAW without incurring any of the CPU
                cost of it's unfrozen effect chain. If you want to make changes later, you can unfreeze the track and continue editing it.</p>
            <p>
                To freeze a track in Reaper, you have to use the Freeze Tracks menu commands which are on a
                nested submenu. 
            </p>
            <img src="/img/ReaperFreeze.png" className="not-mobile-img" style={{width: "100%"}} />
                <img src="/img/ReaperFreezeSmall.png" className="mobile-only-img" style={{width: "100%"}} />
            <p>There are four menu commands that deliver functionality which could have been provided with only one menu item! I have no 
                idea why anyone would want to freeze a stereo track to mono, or a mono track to stereo. But you can. 
                Yes, there is more functionality; but it's hardly compelling functionality. And all that UI text about saving the 
                contents of the effect chain when you freeze the track&mdash;as if there might be a case where you would want Reaper to 
                discard your frozen effect chain when you unfreeze a track. All four menu commands could have been replaced with 
                one single menu item named <span style={{fontFamily: "Inter",fontStyle: "italic", fontWeight: 700}}>Freeze Track(s)</span> which 
                displays a checkmark when the track has been frozen, and unfreezes the track 
                when you select the menu item a second time. A 75% reduction in UI complexity, at the expense of functionality that nobody 
                would ever want! And if there were one menu command, then the Freeze menu item could have been moved up into the 
                main menu, and could even be displayed as a button in the graphical track user interface. Unfortunately, this is not an isolated 
                case. Reaper is jam-packed with incredibly complicated user interface that delivers dubiously useful 
                functionality. And the cognitive cost of all that additional UI complexity is that Reaper is the most difficult DAW to 
                use that I have ever encountered. More UI is definitely not better!
            </p>

            <p>It's always seemed obvious to me that more knobs are not better. And gradually I have come to fully 
                appreciate that&mdash;especially when it come to guitar effect pedals&mdash;even less is even better.
                I haven't yet implement a guitar effect plugin with no knobs at all; but I'm hoping one day I will get 
                a chance to do so.
            </p>
            <p style={{ marginTop: 32 }}>
                <a href="https://github.com/rerdavies/rerdavies.github.io/discussions/3">🗨 COMMENTS</a>
            </p>
            <CopyrightSlug/>
        </BlogPage>

    );
}


