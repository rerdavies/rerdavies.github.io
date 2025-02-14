import{w as i}from"./DefaultPropsProvider-CsmlOTJo.js";import{o as e}from"./chunk-IR6S3I6Y-D5lYOIaz.js";import{B as o}from"./BlogPage-3ssqiYPZ.js";import{g as n}from"./BlogData-D4VoAl-y.js";import"./Breakpoints-CHfN8-zt.js";import"./Footer-BQFFvYkI.js";import"./Container-DPZquPvv.js";import"./Box-DGUQroIt.js";import"./typographyClasses-7wTuvYDW.js";const g=i(function(){const t="/WhatPiPedalIs",a=n(t);return e.jsxs(o,{route:t,children:[e.jsx("div",{}),e.jsxs("div",{style:{width:200,display:"flex",flexDirection:"column",float:"left",marginBottom:16,marginRight:32,marginTop:16},children:[e.jsx("div",{children:e.jsx("img",{style:{width:200},alt:"thumbnail",src:a.thumbnail})}),e.jsx("p",{className:"image_attribution",children:a.thumbnailAttribution})]}),e.jsxs("p",{children:["A friend of mine once told me that most successful products end up not being what they were when they started. At the time, I didn't believe him. I had a very good idea of what our product was going to be. And, to be fair, this took place at a time in the history of software development where Heavy Process was king. As a software developer, you were ",e.jsx("i",{children:"supposed"})," to know exactly what you were building ahead of time. But he ended up being absolutely right."]}),e.jsx("p",{children:"The PiPedal project is like that too. It started off being something that it isn't now, and along the way, the world shifted under its feet. And now it is PiPedal."}),e.jsx("h3",{children:"The Prototypes"}),e.jsx("p",{children:"PiPedal started off as an experimental prototype written in Native Instruments Reaktor, of all things. In my second life, outside of the software development world, I play jazz guitar. And like all guitarists, I am always looking for perfect tone. I have always loved the sound of a Fender Deluxe tube amplifier, but have always hated the inconvenience of a Fender Deluxe tube amplifier — the weight, the fragility, and the fact that they are living breathing things that are not quite predictable, and never quite sound the same way twice. So I have usually played using digital amp simulators, which have all kinds of advantages. But perfect sounds isn't one of them. They never sound quite right. So I, like all guitarists, have always been looking better tone."}),e.jsx("p",{children:"I had some ideas about guitar amp emulations that I wanted to try out, and Reaktor provided a quick (but impractical) way to test those ideas on a live guitar signal. And the results were kind of interesting. So I decided to take it further, and write a native plugin so that I could have a more flexible software platform to work with. I did have experience writing VST plugins for Windows, but the idea of adding a laptop to my guitar rig was not appealing. However, I did happen to have a Raspberry Pi 4 sitting around, waiting to find a purpose. So I decided to see what kind of processing power a Raspberry Pi could bring to the table."}),e.jsx("p",{children:"And from that point, the basic premise behind PiPedal fell into place pretty quickly."}),e.jsxs("ul",{children:[e.jsx("li",{children:"A Pi 4 provides more processing power than all but the highest of the high end of guitar effects pedals. (Probably more than Helix, maybe less than Kemperer)."}),e.jsx("li",{children:"Rasbian (now Raspberry Pi OS) ships with an RT-PREEMPT kernel out of the box, which means that you can get astonishingly low latency and stability even when running with high CPU use."}),e.jsx("li",{children:"A remote phone/tablet user interface was a pretty obvious requirement."}),e.jsx("li",{children:"And running headless means that audio processing doesn't have to contend for bus and memory bandwidth with a GPU, which means that a Pi can run with 80 or 85% CPU load without underrunning! "}),e.jsx("li",{children:"Rather miraculously, Raspberry PI 4 Network I/O runs on a separate bus from the USB buses, so audio doesn't have to contend with network traffic. Running a web server on the host Raspberry Pi is not a problem. (That was not true on on Pi 3s).  "})]}),e.jsx("p",{children:"And a fortuitous event happened. In the Linux 5.15 Kernel, USB audio support was completely re-written. Before that, Linux provided ragged support for a handful of very ancient USB audio devices, almost none of which were still in production. After the changes went in, Linux provided exceptionally good support for pretty much any USB Audio Device. And when those changes went into the Raspberry Pi OS, the Raspberry Pi 4 suddenly had access to widely-available high-quality USB audio adapters, all of which ran exceptionally well. So add to all of that"}),e.jsx("ul",{children:e.jsx("li",{children:"Easy access to pro-audio-quality USB audio adapters"})}),e.jsx("p",{children:"This all happened fairly early on in the Pandemic. PiPedal was definitely a Pandemic project. I was working from home; I had a lot of time on my hands. But the further I got into the hobby project, the more I realized that I was onto something extraordinary! I had pretty much made up my mind that what I had in hand was so good that I had a responsibility (yes, a responsibility!, that's how good it is) to push it out and share it with the world."}),e.jsx("p",{children:"But then, the really big change happened!"}),e.jsx("h3",{children:"Machine Learning Happens"}),e.jsx("p",{children:"Machine Learning has changed everything. I use that term deliberately. What happens is a product of artificial intelligence, but the neural networks  being used are very different from the huge networks that Language Model AIs use."}),e.jsxs("p",{children:["For guitar amp emulators, the revolution started in 2019. Jatin Chowdhury published ",e.jsx("a",{href:"https://arxiv.org/pdf/2106.03037",children:"a paper"})," in ArXiv, describing the results of using machine learning to simulate guitar amplifiers in real-time. To put things in perspective, LLM AIs like ChatGPT have billions of parameters. Jatin was more interested in how well AI techniques worked if you used small Neural Net models with a few thousand parameters—models that are small enough to process audio in real-time on ordinary computers. The answer was surprisingly positive: you can use small models and get impressive results."]}),e.jsx("p",{children:"He then proceeded to publish his source code, both for the real-time simulations and the tools used to train his models, under an open-source MIT license. This has created an avalanche of innovation."}),e.jsx("p",{children:"Jatin Chowdhury's ML library continues to exist and can be freely downloaded and incorporated into guitar effect plugins available in most formats. The ML library and model training tools remain substantially the same as Chowdhury's initial release. There are significant gains in quality if you double the size of the Neural Networks he used in the original versions. Most models for the ML library now use a larger model, and many have gone through significantly more training than Chowdhury's originals."}),e.jsx("p",{children:"The result? The models sound amazing! Amp simulations based on Chowdhury's ML library can run in real-time on an ordinary computer and produce emulations that sound significantly better than previous-generation amp emulations used by commercial stomp boxes costing over $1,000."}),e.jsx("p",{children:"Community developers have incorporated the ML library into free, open-source guitar plugins that run on Windows, Mac, and Linux, available in most plugin formats (VST2, VST3, AU, RTAS, etc.). Recently, they've also been made available as LV2 plugins that run well in real-time with low latency on Raspberry Pi."}),e.jsx("p",{children:"Steven D. Atkinson has since released the Neural Amp Modeler library, which traces its heritage to Chowdhury's ML library while providing support for a wider variety of Machine Learning algorithms. Amazingly, the Neural Amp Modeler library has also been released under an open-source MIT license and incorporated into plugins for most formats and major computing platforms."}),e.jsx("p",{children:"Subsequently, a large open-source-minded community has devoted itself to training new Neural Net models for these libraries. The compute time required is substantial, typically requiring rented time on NVIDIA AI hardware in the cloud. Training models also requires access to the equipment being modeled. While the compute time isn't particularly expensive, it takes time and effort to record good source material and train the models, which is why a community effort is necessary. There are now hundreds of high-quality, free models for both libraries, covering everything from heavy metal amps to sublime Tweed emulations, distortion/overdrive/fuzz pedals, and even famous tube-based mixing board strips."}),e.jsx("p",{children:"The quality is readily apparent and not a subtle improvement. These are amp simulations that not only sound exactly like what they're simulating but also play and feel like the amps they're emulating. We're talking about 5150 emulations that actually chug, Twin emulations with that sparkly chime that makes your ears itch, and 1962 Fender Bassman emulations with the warmth and forgiveness jazz players seek. These qualities are not often found in previous-generation amp emulations."}),e.jsx("p",{children:"So let's just to put all of that in perspective, because the results of all of that have huge implications for the music industry going forward, I think."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Jatin Chowdhury's machine learning experiment escaped from the lab in 2019, and has since taken over the world."}),e.jsx("li",{children:"You can use his code (and derivatives thereof) for free, in guitar plugins that are available on all major audio platforms and on all major hardware platforms, for free,"}),e.jsx("li",{children:"And can even run up to three simultaneous instances on a Raspberry Pi 4! Or even more on a Pi 5."}),e.jsx("li",{children:" and get access to a huge library of community-developed models for those plugins which are also free."}),e.jsx("li",{children:" All of which sound better than $1000+ stomp boxes, even though it's running on $60-worth of hardware. (Plus between $50 and $300 for a USB audio adapters, and, well, you had the phone already, right?)"})]}),e.jsx("h3",{children:"So Where Does PiPedal Fit In?"}),e.jsx("p",{children:"And now you can plug in a USB audio adapter (not free, I'm afraid) into your Raspberry Pi (also not free, but very cheap), and run those incredible amp models in realtime with low latency using PiPedal (which is also free). That isn't entirely what PiPedal started off as. But at this particular moment in time, that's what PiPedal is."}),e.jsx("p",{children:"And yes, all of the easy effects (reverb, delay, chorus, flangers, modulators, phasers, etc. etc. etc) are either included with PiPedal, or are available for free as LV2 plugins that can also be downloaded from the internet. And Machine Learning plugins also provide good emulations of overdrive, fuzz pedals and other distortion effects, so that's covered. And convolution reverb and cab IR effects aren't particularly easy, but once you've coverd that, you pretty much have it all."}),e.jsx("p",{children:"But the living heart and soul of a guitar stomp box is the amp emulations, and how good they are. On Pipedal, thanks to Jatin Chowdhury's escaped monster children, they are very good indeed."}),e.jsx("h3",{children:"What PiPedal Is"}),e.jsx("p",{children:"PiPedal is a guitar stomp box implementation that runs on a Raspberry Pi. It provides a basic set of plugin to get you started, among are which are, notably,  TooB ML (using Jatin Chowdhury's ML library) and TooB Neural Amp Modeler (using Steven Atkinson's Neural Amp Model library). PiPedal also provides a basic set of LV2 plugins to get you started. A delay, a good chorus, an excellent flanger, a convolution reverb effect, the famous Freeverb reverb, cab simulators, a tuner, and a few others. But those are just to get you started."}),e.jsx("p",{children:"PiPedal uses Linux-standard LV2 plugins, allowing you to download and install additional LV2 plugins as needed."}),e.jsx("p",{children:"You access all of those plugins and configure them using PiPedal's web interface, which is important. GPUs and real-time audio effects do not get along well together. So if the user interface you use to control PiPedal is remote, it means that PiPedal can be configured to run with extraordinarily low latency, and use 80% or more of availabe CPU to run what really matters: guitar effects plugins. GPUs, by the way, are why you can't really ever get low latency on a laptop or PC. PiPedal lets you  use your phone, or your tablet  or maybe even your laptop to run the user interface, and let your Raspberry Pi concentrate on processing low-latency realtime audio."}),e.jsx("p",{children:"Unlike most other audio host applications, PiPedal runs as a daemon, whether you're logged on or not. So all you have to do is plug in your Rasberry Pi, and play - no login required."}),e.jsx("p",{children:"When you're playing away from home, PiPedal provides an auto-hotspot feature, which automatically brings up a Wi-Fi hotspot on your Raspberry Pi whenever Pipedal can't see your home router (or an ethernet connection, if that's how you connect to your Pi at home). So all you have to do when you're playing away from home, is power on your Raspberry Pi, pull out your phone or tablet or laptop, and you're all ready to go."}),e.jsx("p",{children:"But most importantly PiPedal sounds great because it leverages the work of Jatin Chodhury, and Steven D. Atkinson. And in the end, whether it sounds great is all that really matters. So please do spend some serious time with the TooB ML and TooB Neural Amp Modeler plugins."}),e.jsx("p",{children:"In a sense, PiPedal has flipped inside out. In its very earliest inception, it was a way to test out some ideas about guitar amp emulations. And now... I don't mind saying it. Now, PiPedal is the practical platform that enables use of the amazing Machine Learning models."}),e.jsx("p",{children:"But I don't mind, because, from the start, PiPedal was about finding better tone. And I most certainly did find better tone!"}),e.jsx("p",{children:"That's what PiPedal is."})]})});export{g as default};
