"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2974],{13461:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),n=s(28453);const r={},o="Multi-Toe Tracking",a={id:"research/toe-tracking/index",title:"Multi-Toe Tracking",description:"This page records my attempts to build a toe tracking device that supports multiple toes.",source:"@site/docs/research/toe-tracking/index.md",sourceDirName:"research/toe-tracking",slug:"/research/toe-tracking/",permalink:"/docs/research/toe-tracking/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"researchSidebar",next:{title:"Build your own",permalink:"/docs/research/toe-tracking/build-your-own"}},l={},d=[{value:"Design goals",id:"design-goals",level:2},{value:"Prior art",id:"prior-art",level:3},{value:"Materials in use",id:"materials-in-use",level:3},{value:"Other materials considered",id:"other-materials-considered",level:4},{value:"Inspiration",id:"inspiration",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Simplification",id:"simplification",level:3},{value:"Attachment side",id:"attachment-side",level:2},{value:"Detecting splay",id:"detecting-splay",level:3},{value:"Electronics side",id:"electronics-side",level:2},{value:"Software side",id:"software-side",level:2},{value:"Interpretation of signals",id:"interpretation-of-signals",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"multi-toe-tracking",children:"Multi-Toe Tracking"}),"\n",(0,i.jsx)(t.p,{children:"This page records my attempts to build a toe tracking device that supports multiple toes."}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"This page is currently being written, and is a living document."})}),"\n",(0,i.jsx)("video",{controls:!0,width:"816",children:(0,i.jsx)("source",{src:s(76105).A})}),"\n",(0,i.jsx)(t.h2,{id:"design-goals",children:"Design goals"}),"\n",(0,i.jsx)(t.p,{children:"Create and integrate some form of hardware-driven toe tracking on my avatar, with an emphasis on individual toe down-curls and toe splay,\nand optionally big toe overlap (negative splay)."}),"\n",(0,i.jsx)(t.p,{children:"The toe tracking must allow for greater amount of toe poses rather than just the up-down curl of the group of toes."}),"\n",(0,i.jsxs)(t.p,{children:["The project is built out of pure personal amusement and curiosity; there are no community, personal self-expression, or business goals,\nalthough it is a good match with ",(0,i.jsx)(t.a,{href:"/docs/products/toetra-rig-creator",children:"one of my ongoing software projects"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This project was started mid-January 2024."})}),"\n",(0,i.jsx)(t.h3,{id:"prior-art",children:"Prior art"}),"\n",(0,i.jsx)(t.p,{children:"Hardware-driven toe tracking has already been done before to various degrees."}),"\n",(0,i.jsx)(t.p,{children:"Public displays of toe tracking include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["down-curls where the sensor is attached to a sock (such as ",(0,i.jsx)(t.a,{href:"https://twitter.com/logi9_/status/1550774401926598656",children:"https://twitter.com/logi9_/status/1550774401926598656"}),"),"]}),"\n",(0,i.jsxs)(t.li,{children:["and up-curls where the sensor is attached to a shoe (such as ",(0,i.jsx)(t.a,{href:"https://twitter.com/captaincatvr/status/1551303339601690626",children:"https://twitter.com/captaincatvr/status/1551303339601690626"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"I am not aware of public displays of multi-toe tracking, but I'm sure considering the vast landscape of DIY hardware creators that it must have been done before."}),"\n",(0,i.jsx)(t.h3,{id:"materials-in-use",children:"Materials in use"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:['Are you looking to make your own toe tracker? You may want to read the "',(0,i.jsx)(t.a,{href:"./toe-tracking/build-your-own",children:"build your own"}),'" page.']})}),"\n",(0,i.jsx)(t.p,{children:"For this project, I've only used Flex sensors so far, and I'm using 3D printing with flexible filament (TPU 95A):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Flex sensor (2.2 inch = 5.6 cm) ",(0,i.jsx)(t.a,{href:"https://www.aliexpress.com/item/33006987477.html",children:"https://www.aliexpress.com/item/33006987477.html"})]}),"\n",(0,i.jsxs)(t.li,{children:["Sunlu TPU 95A ",(0,i.jsx)(t.a,{href:"https://www.amazon.fr/dp/B07R7SCM5G",children:"https://www.amazon.fr/dp/B07R7SCM5G"})]}),"\n",(0,i.jsxs)(t.li,{children:["Mini Micro JST 2.0 PH Male Female Connector (2 pins = 2P) ",(0,i.jsx)(t.a,{href:"https://www.aliexpress.com/item/4000091077742.html",children:"https://www.aliexpress.com/item/4000091077742.html"})]}),"\n",(0,i.jsx)(t.li,{children:"Several 10K ohm resistor (not by conscious choice, it's the only ones I had in hand when I started)"}),"\n",(0,i.jsx)(t.li,{children:"Electrical tape"}),"\n",(0,i.jsx)(t.li,{children:"(Some PLA was needed for prototyping and printing clean bridges, but it is not part of the wearable prototype)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For the board, I had used an AZ-Delivery ESP-32 Dev Kit C because that was the only thing I had in hand while I was waiting for\nsome Tundra Tracker Developer Boards to arrive."}),"\n",(0,i.jsx)(t.h4,{id:"other-materials-considered",children:"Other materials considered"}),"\n",(0,i.jsx)(t.p,{children:"Other materials have been suggested, and could be used in the future, such as:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Magnets with Hall effect sensors (i.e. 49E linear hall effect sensor, ",(0,i.jsx)(t.a,{href:"https://twitter.com/Ybalrid/status/1751409384431686041",children:"https://twitter.com/Ybalrid/status/1751409384431686041"})," & ",(0,i.jsx)(t.a,{href:"https://twitter.com/Ybalrid/status/1751409954248864097",children:"https://twitter.com/Ybalrid/status/1751409954248864097"}),"),"]}),"\n",(0,i.jsx)(t.li,{children:"Pressure/Touch sensors."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"inspiration",children:"Inspiration"}),"\n",(0,i.jsx)(t.p,{children:"The project partially draws inspiration from existing implementations of toe tracking, but it is original."}),"\n",(0,i.jsx)(t.p,{children:"My design process is iterative:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Print fake sensors using PLA,"}),"\n",(0,i.jsx)(t.li,{children:"place them on the foot,"}),"\n",(0,i.jsx)(t.li,{children:"print various attachments to hold these sensors using TPU,"}),"\n",(0,i.jsx)(t.li,{children:"identify the issues with those attachments,"}),"\n",(0,i.jsx)(t.li,{children:"try to improve on one aspect,"}),"\n",(0,i.jsx)(t.li,{children:"and repeat."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"constraints",children:"Constraints"}),"\n",(0,i.jsx)(t.p,{children:"I've bought pairs of socks specifically for this project since I need to track the movement on some individual toes."}),"\n",(0,i.jsx)(t.p,{children:"Also, I really want to wash my socks, so as much as possible, the design should be detachable from the sock.\nIf some sewing could be involved, it must be reversible and washable in the washing machine."}),"\n",(0,i.jsx)(t.p,{children:"In addition, I am not good at hardware, so I will limit my design to a reasonable minimum achievable by someone with a software background.\nAs in: I'm not going to make my own circuit boards, but I can solder a voltage divider."}),"\n",(0,i.jsx)(t.h3,{id:"simplification",children:"Simplification"}),"\n",(0,i.jsx)(t.p,{children:"Contrary to fingers, I don't have the dexterity to move each of my toes independently."}),"\n",(0,i.jsx)(t.p,{children:"I can make use of this and only track some characteristics of the toes rather than all of them, as the movement of one toe can imply the movement of other toes."}),"\n",(0,i.jsx)(t.h2,{id:"attachment-side",children:"Attachment side"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"result.jpg",src:s(82104).A+"",width:"750",height:"750"})}),"\n",(0,i.jsx)(t.h3,{id:"detecting-splay",children:"Detecting splay"}),"\n",(0,i.jsx)(t.p,{children:"Flex sensors only bend in one direction, and it can only sense bends in one side (the striped side can results in a change in resistance when bending outwards, not inwards)."}),"\n",(0,i.jsx)(t.p,{children:"In order to detect little splay, I had several options:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Bend the sensor by default in a rest pose, and make it un-bend when the toe is playing, or"}),"\n",(0,i.jsx)(t.li,{children:"put the sensor on the side of the foot, or"}),"\n",(0,i.jsx)(t.li,{children:"make the toe splay cause a mechanical part to move, amplifying it in a way that the flex sensor could be placed elsewhere on the toe to detect it, or"}),"\n",(0,i.jsx)(t.li,{children:"bend the sensor by default in a rest pose, and couple the lateral movement of the big toe and the little toe splay together."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"During one of the prototypes, I've put the sensor on the side of the foot, and it proved to be a sufficiently effective and simple position."}),"\n",(0,i.jsx)(t.p,{children:"The shape of the flex sensor was extended using the TPU printing so that the toe could activate the splay sensor even when the little toe is pointing higher up, or lower down."}),"\n",(0,i.jsx)(t.h2,{id:"electronics-side",children:"Electronics side"}),"\n",(0,i.jsx)(t.p,{children:"I've had two separate electronics implementations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/research/toe-tracking/esp32",children:"ESP32 with Wi-Fi and OSC"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/research/toe-tracking/tundra",children:"Tundra Tracker Developer board with SteamVR Input"})," and a separate OSC application to process those inputs"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"software-side",children:"Software side"}),"\n",(0,i.jsx)(t.h2,{id:"interpretation-of-signals",children:"Interpretation of signals"}),"\n",(0,i.jsx)(t.p,{children:"Instead of directly mapping individual toes, I want to interpret the few sensor data together as indicators of various foot gestures that I'll mix together."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"1st Down"}),(0,i.jsx)(t.th,{children:"2nd Down"}),(0,i.jsx)(t.th,{children:"5th Splay"}),(0,i.jsx)(t.th,{children:"Toe estimate"}),(0,i.jsx)(t.th,{children:"What happens?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd6f\ufe0f"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\u2b55\u2b55\u2b55\u2b55\u2b55"}),(0,i.jsx)(t.td,{children:"The pose of the foot at rest on a flat surface has a residual signal on the Big toe, because the sensor is slightly curled at rest."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\u2744\ufe0f"}),(0,i.jsx)(t.td,{children:"\u2754"}),(0,i.jsx)(t.td,{children:"\u2754"}),(0,i.jsx)(t.td,{children:"\ud83d\udd3c\ud83d\udd3c\ud83d\udd3c\ud83d\udd3c\ud83d\udd3c"}),(0,i.jsxs)(t.td,{children:["If the residual signal on the Big toe becomes 0, this ",(0,i.jsx)(t.em,{children:"could"})," indicate an up-curl of the foot."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\u2b55\u2b55\u2b55\u2b55\u25b6\ufe0f"}),(0,i.jsx)(t.td,{children:"The 5th toe is splayed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\u2b55\ud83d\udd3d\ud83d\udd3d\ud83d\udd3d\ud83d\udd3d"}),(0,i.jsx)(t.td,{children:"When the 2nd toe is down, the 5th splay signal becomes irrelevant as the sensor becomes squished by the down-curl forces. Personally, I cannot splay my little toe when my 2nd toe is down, so there's no need to consider splaying and down-curling simultaneously anyways."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\ufe0f\u2b07\ufe0f\u2b55\u2b55\u2b55\u2b55"}),(0,i.jsx)(t.td,{children:"Big toe is straight: Only the proximal joint is curled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\u25c0\ufe0f\u2b55\u2b55\u2b55\u25b6\ufe0f"}),(0,i.jsx)(t.td,{children:"Big toe is straight, and the 5th toe is splayed. This can almost be considered a Big toe splay, as lateral control of the Big toe is difficult when the 5th toe is splayed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\ud83d\udd3d\ud83d\udd3d\ud83d\udd3d\ud83d\udd3d\ud83d\udd3d"}),(0,i.jsx)(t.td,{children:"If the 2nd curls while the Big toe is curled, then the Big toe distal is curled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"\ud83d\udd25\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\ud83d\udd3c\u23ec\u23ec\u23ec\u23ec"}),(0,i.jsx)(t.td,{children:"If the 2nd toe has a large down-curl force, all of the toes proximal joints are curled except for the Big toe. It's also very difficult to down-curl the 2nd toe without up-curling the Big toe."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd25\ud83d\udd25\u2757"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\u23ec\u23ec\u23ec\u23ec\u23ec"}),(0,i.jsx)(t.td,{children:"All of the toes proximal joints are curled. (\u26a0\ufe0f Stateful pose)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25\u2757"}),(0,i.jsx)(t.td,{children:"\ud83d\udd25\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\u25b6\ufe0f\u23ec\u23ec\u23ec\u23ec"}),(0,i.jsx)(t.td,{children:"If the 2nd toe has a large down-curl force but the Big toe went from having no down-curl to having a normal down-curl, this could be interpreted as the Big toe being positioned over the 2nd toe (negative splay of the Big toe). In addition, all of the toes proximal joints are curled. (\u26a0\ufe0f Stateful pose)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\ud83d\udd25\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd25\ud83d\udd25"}),(0,i.jsx)(t.td,{children:"\ud83d\udd07"}),(0,i.jsx)(t.td,{children:"\ud83d\udd3b\ud83d\udd3b\u23ec\u23ec\u23ec"}),(0,i.jsx)(t.td,{children:"If the Big toe and the 2nd toe have large down-curl forces, all of the toes proximal joints are curled, but the Big toe and 2nd toe can curl much more together than alone."})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},76105:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/vr-socks-f-e61fa03f4cc234bfa78b30c84e41447a.mp4"},82104:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/result-f9601f79d58094be8c8dec6dc7222020.jpg"}}]);