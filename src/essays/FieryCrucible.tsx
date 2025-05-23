
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
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';


import { getArticleInfo } from "../data/BlogData";

function M(props: { children: React.ReactNode }) {
    return (<span className="mono">{props.children}</span>);
}

export default function WhatPiPedalIs() {

    const route = "/FieryCrucible";

    const articleInfo = getArticleInfo(route);

    return (
        <div>
            <Container
                maxWidth="md"
                component="main"

            >

                <p style={{fontFamily: '"Crimson Text", sans-serif', fontWeight: 400, fontSize: "30px", 
                    color: "rgb(85,85,85)"}}>Robin E. R. Davies</p>
                <p style={{fontFamily: '"Crimson Text", sans-serif', fontWeight: 400, fontSize: "30px", 
                    color: "rgb(85,85,85)"}}>{articleInfo.title}</p>

                <p style={{
                    marginLeft: 32, marginRight: 32, fontStyle: "italic",
                    background: "#E0E0E0", padding: "8px 16px"
                }}>
                    Using the process of writing documentation as a Quality Control procedure for Application Programming Interfaces.</p>


                    <div style={{
                    width: 200, display: "flex", flexDirection: "column", float: "right",
                    marginBottom: 0, marginRight: 32, marginTop: 16

                }}>
                    <div><img style={{ width: 200 }} alt="thumbnail" src={articleInfo.thumbnail} /></div>
                    <p className="image_attribution">{articleInfo.thumbnailAttribution}</p>

                </div>

                <Typography variant="caption">February 5, 2025</Typography>

                <p>I had an opportunity to write a from-scratch utility library, and from-scratch documentation for that library recently.
                    One of the particularly things I learned about while writing the project and its associated documentation is that
                    the process of writing documentation can be used as a powerful quality control procedure for the design and implementation
                    of Application Programming Interfaces.
                </p>
                <p>While writing the documentation, I found that I was able to identify and correct a number of design flaws in the
                    library that I had not noticed while writing the code. And, crucially, I was able to identify and correct those defects
                    before the code was released to the public. Once an API is released, it is very difficult to change it without breaking
                    existing code that depends on it. So it is important to get it right the first time.
                </p>
                <h3>Setting the Stage</h3>

                <p>
                    I had to write some <a href="https://rerdavies.github.io/nwindows/documentation">documentation</a> recently, for
                    a <a href="https://rerdavies.github.io/nwindows">small pretty thing</a> which I had decided to set free in the world.
                    One of the nice thing about writing small pretty things is that you get to experiment, and do things that you might not
                    necessarily do in a larger project. I have always considered these sorts of hobby
                    projects to to be a form of professional development. They are a chance to try out
                    new technologies, new frameworks, new languages  and new ideas before you deploy them in
                    larger projects where the consequences of failure are more substantial.
                </p>
                <p>The project in question was a small utility library that I had written in C++ to provide a text-mode user interface for Linux terminals
                    (and eventually) Windows consoles. I wrote it for use in a large projects; but once finished, I thought it 
                    was pretty enough that it needed to be published as an open-source project for wider use.</p>
                <p>The motivation for writing the NWindows library is outside the scope of this particular blog post; but very quickly, NWindows is 
                    a C++ Text User Interface Library, written in modern C++ dialog, that's actually easy to use, and is provided under 
                    a non-viral MIT open-source license.
                </p>
                <h3>Reflections on What Constitutes Good Documentation</h3>
                <p>
                    I am not a technical writer.  So I would like to tread lightly on the subject of how to
                    write good technical documentation. I am sure there are more books written on the subject of how to write 
                    good documentation than there are actual good documentation sets. And that there are entire undergraduate 
                    and post graduate degrees that concern themselves with the subject of how to write good manuals. I, 
                    however, a software developer. And, as a regular consumer of manuals and documentation, I do have 
                    opinions on what constitutes good documentation.
                </p>
                <p>A good documentation set, it seems to me, must provide multiple layers of documentation, with each layer serving a different purpose.
                    The same exact same material may be covered multiple times in multiple layers, sometimes with almost the same verbatim text, sometimes
                    with radically rewritten text.
                </p>
                <p>A good documentation set needs to provide at least the following layers of documentation. The following list is by no means exhaustive
                    or even canonical. But it is a good starting point. For most library projections, you will need at least the following
                    layers of documentation:
                </p>
                <ul>
                    <li>An Elevator Pitch. What the package does; what problems does it address; and why you want to use it instead of other alternatives, all
                        stated in a a chunk that can be consumed in 20 seconds or less.</li>
                    <li>A Brochure Pitch. A more detailed restatement of the elevator pitch, which expands the elevator pitch into two to four
                        pages of information.
                    </li>
                    <li>System Requirements. What do you need to use the package.</li>
                    <li>How to Install The Package. </li>
                    <li>How to Install Build the package from source. </li>
                    <li>How to reference the package from another project.</li>
                    <li>General Principles (if any). If you are one of those people who have no intention of reading the entire documentation
                        set, what is the absolute minimum set of things you need to do before doing so.</li>
                    <li>A <i>Hello World</i> program (if appropriate). A simple example of how to use the package. Examples are worth a thousand words.</li>
                    <li>How to use the package. A description of how the package is supposed to be used in normal use, omitting advanced details
                        that are not necessary for ordinary use of the package.</li>
                    <li>Sections that cover advance use and customization of the package, as appropriate.</li>
                    <li>API Documentation. Well-indexed documentation on every public declared type, constant, class, method, enumeration, structure, &c in the entire package,
                        as well as the same for all protected declarations that are intended for use by consumers of the package.
                    </li>
                    <li>
                        Example projects, and generous use of sample code throughout the documentation.
                    </li>
                </ul>

                <p>For the most part, text needs to be written in journalistic form, not essay form. Essay form assumes that a reader will start at the 
                    beginning and read through to the end; journalistic form, on the other hand, is written assuming that readers will not read to the end. 
                    The most important ideas come first, with less important ideas following in descending order of importance, with the expectation that 
                    some if not most readers will stop reading somewhere before they get to the end. Writing this way allows readers to read only
                    what they need to read. And the form for good technical documentation is even more diabolical than that. A good technical documentation 
                    set has to make allowances for the fact that readers will not read the documentation, and may not even read the documentation at 
                    all until something goes wrong.  This often means that the same information may need to be repeated in multiple
                    locations in the documentation, and may need to be presented in ways that fit the purpose of the section in which 
                    the material is being re-presented. This is not a bug; it is a feature.
                </p>

                <p>Common practice these days is to use automated tools to generate documentation. Doxygen is an example of such a tool. But, in my
                    direct experience, Doxygen does not seem to produce good documentation sets. The idea of writing documentation inline in source
                    code seems like a good idea. But in practice, it seems to me that the vast majority of Doxygen documentation
                    spends all of its time restating the obvious. The parameter named "x" is the x value. The method named "open" opens things.
                    And so forth. And the bits that you really do need in a good documentation set don't  seem to have a good place within
                    the documentation toolset. Where does class overviews go? Where do module overviews go? Where does the
                    "Hello World" example program go? Where do the general principles go? Where do the deep dives go? Doxygen might help with documentation
                    of individual methods and classes. But it seems to impede the writing of the broader pieces of documentation that are a necessary
                    part of a good documentation set. In my experience as a consumer of documentation, Doxygen does not 
                    seem to produce good documentation sets. 
                    documentation.</p>
                <p> So on this project, I consciously chose not to use Doxygen.  However, I don't want to write about that in this post. I did 
                    in fact write quite a bit of custom code to generate the documentation for the NWindows project &mdash; most of which was 
                    involved with generating index data. That was an interesting experience that I might write about in a future post. But, to be perfectly 
                    honest, I'm not happy enough with the result to write about it at present. 
                </p>


                <h3>Enter the Fiery Crucible</h3>
                <p>Having firmly established what I do not want to write about, that finally brings me to what I actually do want to write about. 
                </p>
                <p>What I quickly discovered as I was writing the documentation set for the NWindows project was that I was forced to
                    review decisions I had made when writing the code in the first place.
                </p>
                <p>I like to think that I'm reasonably good at what I do. That I generally follow best practices, and that I am careful about what I write
                    when I'm coding. And this was code that was originally written with the idea in mind that it might be promoted to 
                    a public standalone library at some point in its lifecycle. So it wasn't written carelessly. So I was very surprised by 
                    how much the code did change as I was writing the documentation. It changed a lot.
                </p>
                <h3>Proofing the APIs</h3>
                <p>Most obviously, and expectedly, I found cases where there were spelling errors, or incorrect casing in method and parameter names.
                    But I also found many cases where the names of methods and classes were not as clear as they could have been. Spelling errors were pretty rare; I use spelling checker when I write code. More frequent were
                    cases where better names for parameters could have been chosen. Dozens of corrections to the C++ source code were made as  a result.
                </p>
                <p>Another interesting example of API errors occurred when I found myself writing :</p>
                <p className="quote">
                    If the the right mouse button is pressed, the value of <span className="mono">button</span> is zero; if the middle button has been pressed, the value is 1; if the
                    right button has been pressed, the value is 2.
                </p>
                <p>That's an easy mistake to make since the source of the button parameter comes from an X11 event buried deep within the non-public
                    implementation of NWindows. But, clearly, modern C++ best practice requires use of an <M>enum class</M> for
                    the <M>button</M> parameter. So the code was changed to use an <M>enum class</M> for the <M>button</M> parameter.
                    And the example programs, and associated documentation were revised accordingly.
                </p>
                <p>That's probably not terribly interesting by itself. This seems like a natural consequence of having to do one more
                    proofing pass on names in the code as part of the process of documenting them. More interesting, I think, were problems that were uncovered while writing documentation
                    for layers of the documentation other than the API documentation.
                </p>
                <h3>Proofing at Multiple Levels of Abstraction</h3>
                <p>Because documentation describes the library at multiple levels of abstraction, I found myself reviewing the design of the library
                    while writing documentation that described the design</p>
                <p>The <a href="https://rerdavies.github.io/nwindows/using/elements">NWindows Elements</a> section of the documentation describes
                    how to use Elements provided by the NWindows library to construct visual trees for an NWindows application.
                    While writing this section of the documentation, general descriptions of element classes ended up adjacent to each other. While doing this,
                    a noticed several cases where classes were using property names that weren't consistent across classes. For example the
                    <a href="https://rerdavies.github.io/nwindows/apis/classes/NRadioGroupElement"><M>NWindows::NRadioGroupElement</M></a> classes were
                    using different names for the property that indicates which item was selected. The were revised so that both classes use the a property
                    named <M>selection</M>, and events and argument names were revised accordingly. A small change, but one that improves the consistency
                    usability of the overall library. Similar changes were made to event names, and event argument names to provide consistent naming
                    conventions across classes in the library.
                </p>
                <p>By stepping back to take a larger perspective while writing overview sections of the documentation, I was able to identify and
                    correct inconsistencies in naming and implementation across classes that would not have occurred while writing strictly
                    API-driven documentation.</p>
                <p>While writing the <a href="https://rerdavies.github.io/nwindows/using/fundamentals">General Principles</a> section of the
                    documentation, I wrote about the use of <M>std::shard_ptr</M>s in the NWindows APIs, which forced me to consider the question of
                    if and when I was using naked pointers in the NWindows APIs. This resulted in a complete review of all naked C++ pointers in
                    the APIs, and a decision to replace them all with <M>std::shared_ptr</M>s. This was a fairly significant change, but I think
                    it made the API better.
                </p>
                <p>I also had a section in the <a href="https://rerdavies.github.io/nwindows/using/fundamentals">General Principles</a> section
                    if the documentation cautioning users of the library to be careful about accidentally creating circular shared pointer references,
                    which can cause memory leaks. (It actually occurs in three places within the documentation set). One of the infuriating problems
                    with that section of the documentation was that I was unable to come up with an actual concrete example of a circular shared pointer
                    reference that would occur in normal use of the NWindows APIs. It's a fairly technical problem, and in practice, a simple problem
                    to avoid. Generally, the solution is to convert shared pointers to weak pointers if they are going to have any significant lifetime
                    (for example, as lambda capture variables). Or to obtain a reference to the object you're interested in for one of <M>source</M> argument
                    of the event handler. So, in search of an un-contrived example, I spent some time reviewing the design of event handlers in NWindows.
                    And while doing so, I noticed that even in cases where users of the library are doing things they should not, I could cut
                    off most circular references, even deliberately inflicted circular references by having windows release references to their visual
                    tree when they are closed. A trivial code change that ends up significantly reduces the risk of leaking memory that arose out
                    of analysis done while writing documentation! So I made the change. The warnings in the documentation remain. But curiously, I
                    am fairly certain that, with the change implemented, circular references never occur in NWindows applications unless the
                    user goes to extraordinary lengths to create them! However, I am only fairly certain, not absolutely certain, so the warning in
                    the documentation remains. And the sample code which illustrates the problem continues to create a circular reference gratuitously
                    for no other reason than to illustrate the potential problem. A number of even APIs were also modified to pass a <M>source</M> argument
                    of the correct type, to reduce the temptation for users to capture a shared pointer, incurring a theoretical (but not actual) risk
                    of creating a circular reference chain.</p>
                <p>In short, writing about the general principles of using the library brought about a review of the general principles that are
                    actually used by the library, and resulted in a number of substantial changes to the code to ensure that general principles
                    were in fact being applied.</p>

                <h3>The Curious Case of the Coding Assistant</h3>
                <p>I used a Coding AI while generating the documentation for NWindows. It would not have been possible to do so without one.
                </p>
                <p>One of the big challenge with the NWindow documentation was indexing of C++ classes and methods. Doing so requires at least 
                    partial parsing of C++ declarations, and requires doing it in typescript. 

                    </p>

                <h3>Indexing</h3>
                <p>Documentation sets also require a good indexing system. Indexing is a hard problem. In the old book world, there were professionals
                    who specialized in generating indexes for books. In large documentation sets, there are often people on the documentation team
                    who specialize in indexing as well. But that is a luxury that's not available to most developers. Many projects rely on Google
                    to index their documentation. That's better than nothing, I suppose.
                </p>
                <p>NWindows uses a custom indexing solution, that I'm not entirely satisfied with, so I'm not going to discuss it here. Suffice it to
                    say that it was an interesting learning experience, and lessons learned while indexing NWindows documentation might form the
                    foundation of a future project.</p>
                <p>The hard problem in indexing is generating the index data set. Once you have it, it's relatively easy to implement index and search pages.
                    In the NWindows documentation set, indexing manifests itself in several ways:
                </p>
                <ul>
                    <li>
                        Users can search within a page, using the browser's built-in search functionality.
                    </li>
                    <li>Users can search within the documentation set using a search box at the top of the page.</li>
                    <li>Key terms are generously hyperlinked throughout the document set (usually, the  API documentation for a method or
                        class or property, but also to other places within the documentation as well). Users can click to quickly navigate to
                        the documentation for the item in question.
                    </li>
                </ul>
                <p>The NWindows documentation set includes an additional feature: an <a href="https://rerdavies.github.io/nwindows/index">Index page</a>.
                    This is an experiment, and I'm not sure I wholeheartedly endorse
                    the idea; but it is an interesting idea, nonetheless. The NWindows Index page is modelled on the index page of a book. The
                    principle difference between the Index page and search box results is that entries are sorted differently. In the Index page search
                    results are grouped by index keyword. Sorting of search results, is pretty similar. Although search entries are grouped by keyword in the
                    index page, search box results actually end up being sorted in a very similar way, because search results get a substantial sorting bonus if a search term
                    matches the associated keyword of a potential search result candidate. A significant difference, however is how search results that
                    appear in different sections of the documentation are sorted. When sorting search results, NWindows chooses to give a significant sort order bonus
                    to search results that appear in the API documentation. This is because the API documentation is the most likely
                    place that a user will want to go to. Because the Index sorting algorithm groups search results by keyword, search results for declared
                    items  in different sections of the documentation are all grouped together.
                </p>
                <p>Implementing the index page wasn't difficult. It was a simple matter of grouping the query results, and displaying them slightly differently.
                    I'm not entirely sure whether the results justify the effort. It's not necessarily wrong to provide users more than one way to achieve
                    the same result, particularly if the end results are subtly different. The downside is that it places a burden on end users to figure
                    out why they might want to use one feature over another. In the end, the feature remains enabled because, not because it's brilliant and
                    irreplaceable, but because even if it isn't right, it isn't terribly wrong either. Not a glowing recommendation, I know. But
                    that's where I sit on the issue at present.</p>
                <h3>The Passing of the Age of the Book</h3>
                <p>
                    I was born in an age when books were sacred things. Libraries were cathedrals of knowledge.
                    And books were the vessels that carried that knowledge. Books were things that you read, and
                    re-read, and read again. And the more you read them, the more you understood them. And the more
                    you understood them, the more you understood the world. And the more you understood the world, the
                    more you understood yourself. And the more you understood yourself, the more you understood the
                    world.
                </p><p>
                    In the early days of computing, documentation for software was a book. A big, thick, heavy book.
                </p><p>
                    Documentation has changed as well. </p>
                <p>
                    Mostly for the better.
                </p>
                <p>
                    At least it has, if it ever gets written, which seems to be the most significant change about documentation &mdash; that it never gets written.
                </p>
                <h3>The Problem</h3>
                <p>
                    There are several traditional approaches to writing documentation for software, most of which are unsatisfactory.
                </p>
                <p>The traditional approach to writing documentation for software was to provide dense, and
                    unhelpful online help files, sometimes Linux man files, sometimes crudely hyperlinked documentation that
                    you had to use a specific program to view; and then authors would write a printed book,
                    which would sell for something north of $100.00 (for the good ones), or $40.00 or $50.00 for the
                    truly awful ones. And these books would be out of date by the time it was printed anyway.
                    But you really had no choice, because without the overviews and general principles, and the
                    examples, and sample programs, and the section on how to install and configure the software, and
                    build it, and all the various bits that don't fit  in Doxygen documentation, you could not use the
                    library, or  operating system or the program in question. Often, authors of important software
                    packages or programs or libraries or languages made far more money off people who had to buy
                    the manuals than they did off the software itself.
                </p>
                <p>This worked. Sort of. But it is a system that based on paper, and printed books. And we can do so much better these days
                    now that temple of the sum of all human knowledge lives in a web browser.
                </p>
                <p>I have used Doxygen on previous projects of mine; but, to be honest, I find Doxygen
                    documentation to be less than wonderful. It's not that it's bad; it's just that it's not good.
                    Mostly because it's hard to find space for general overviews and principles, and discussions in
                    depth in a source file. So the vast majority of Doxygen documentation seems to
                    concerned with restating the obvious: the parameter named "x" is the x value; and the method
                    named "open" opens things. And so forth. In my experience with other peoples' projects
                    that do use Doxygen, I &mdash; frankly and honestly &mdash; never RTFM. And the FM that I never read didn't
                    have the bits in that you really needed anyway.
                </p>
                <p>I am a professional developer. I have standards. I eat all my vegetables. I change my
                    underwear three times a week. And I write good code that is self-documenting. And I
                    follow an elaborate and ever changing list of best practices and aesthetics and guidelines
                    that are supposed to make sure that my code ages gracefully. And I write test
                    cases. And I  take pride in doing The Right Thing.
                </p>
                <p>The project in question was a relatively small and tidy library. So it seemed
                    like a good opportunity to explore the idea of writing Really Good Documentation.
                    You could write entire books about How to Write Really Good Documentation, and people certainly
                    have. There are probably entire course on How to Write Really Good Documentation, and there are probably
                    entire undergraduate and post-graduate degrees which concern themselves with the theory and
                    practice of writing Really Good Documentation. So I think it's probably not productive
                    to go to far into the details of how to write really good documentation. I'm not sure if
                    I'm even remotely qualified to talk about what constitutes good documentation. You can look
                    at the results <a href="https://rerdavies.github.io/nwindows/documentation">here</a>, and judge
                    for yourself whether or not I was successful.
                </p>
                <p>That being said, I would like to think that I have some expertise with regard to
                    writing good code. So I'd like to talk a bit about the effect that writing good
                    documentation  had on the code itself.
                </p>
                <h3>The Fiery Crucible</h3>
                <p>
                    I have a theory that writing good documentation is a bit like
                    putting your code through a fiery crucible. The process of writing
                    good documentation is a process of refining your code.
                </p>



            </Container >
            <Footer />
        </div >
    );
}


