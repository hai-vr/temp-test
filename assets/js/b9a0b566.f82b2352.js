"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5556],{85204:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),t=n(11151);const s={},a="Tundra Tracker Developer Board",o={id:"research/toe-tracking/tundra",title:"Tundra Tracker Developer Board",description:"This page is currently being written.",source:"@site/docs/research/toe-tracking/tundra.md",sourceDirName:"research/toe-tracking",slug:"/research/toe-tracking/tundra",permalink:"/docs/research/toe-tracking/tundra",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"researchSidebar",previous:{title:"Software",permalink:"/docs/research/toe-tracking/software"}},d={},c=[{value:"IDE",id:"ide",level:2},{value:"Pins used",id:"pins-used",level:2},{value:"Repository and code",id:"repository-and-code",level:2}];function l(e){const r={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"tundra-tracker-developer-board",children:"Tundra Tracker Developer Board"}),"\n",(0,i.jsx)(r.admonition,{type:"danger",children:(0,i.jsx)(r.p,{children:"This page is currently being written."})}),"\n",(0,i.jsx)(r.p,{children:"I've had two separate electronics implementations:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/research/toe-tracking/esp32",children:"ESP32 with Wi-Fi and OSC"})}),"\n",(0,i.jsx)(r.li,{children:"Tundra Tracker Developer board with SteamVR Input (this page) and a separate OSC application"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"ide",children:"IDE"}),"\n",(0,i.jsxs)(r.p,{children:["I could not figure out how to make PlatformIO work with this, so I followed ",(0,i.jsx)(r.a,{href:"https://tundra-labs.com/products/tundra-tracker-developer-board",children:"Tundra's store page links"}),",\nwhich at this time of writing suggests:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"use the Arduino IDE,"}),"\n",(0,i.jsxs)(r.li,{children:["in the Arduino IDE, add the RP2040 Arduino Board Library to the Arduino IDE (",(0,i.jsx)(r.a,{href:"https://github.com/earlephilhower/arduino-pico?tab=readme-ov-file#installing-via-arduino-boards-manager",children:"read the README on how to install it"}),"),"]}),"\n",(0,i.jsx)(r.li,{children:"turn the tracker ON,"}),"\n",(0,i.jsx)(r.li,{children:"connect the USB programming port (not the tracker USB port),"}),"\n",(0,i.jsxs)(r.li,{children:["in the Arduino IDE, select the ",(0,i.jsx)(r.em,{children:"Adafruit ItsyBitsy RP2040"})," board on COM port to upload to."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"pins-used",children:"Pins used"}),"\n",(0,i.jsxs)(r.p,{children:["At this time of writing (2024-02-07), the Tundra Tracker Developer Board store page has link to a schematic\n",(0,i.jsx)(r.a,{href:"https://twitter.com/ImmersiveDevice/status/1755296026301235333",children:"which appears to be incorrect"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The ADC pins on the original schematic are swizzled:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["The ADC pins located on the IO_0 are actually ",(0,i.jsx)(r.em,{children:"27, 28, 29"}),", and not ",(0,i.jsx)(r.em,{children:"26, 27, 28"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["The ADC pin located on the IO_1 is actually ",(0,i.jsx)(r.em,{children:"26"}),", and not ",(0,i.jsx)(r.em,{children:"29"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["I have used the correct ADC pins on the IO_0, which are ",(0,i.jsx)(r.em,{children:"27, 28, 29"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"repository-and-code",children:"Repository and code"}),"\n",(0,i.jsxs)(r.p,{children:["I've reused and modified Tundra's own sample code. ",(0,i.jsx)(r.a,{href:"https://github.com/tundra-labs/rp2040_examples",children:"Tundra's README"})," contains sufficient information to be autonomous."]}),"\n",(0,i.jsx)(r.p,{children:"TODO"})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);