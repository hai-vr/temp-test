"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2865],{76774:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(74848),t=n(28453);const r={unlisted:!0},a="H-View",l={id:"products/h-view/index",title:"H-View",description:"The application more directed towards other developers who might want to modify it or learn how some parts work.",source:"@site/docs/products/h-view/index.md",sourceDirName:"products/h-view",slug:"/products/h-view/",permalink:"/docs/products/h-view/",draft:!1,unlisted:!0,tags:[],version:"current",frontMatter:{unlisted:!0},sidebar:"tutorialSidebar"},d={},o=[{value:"External Expressions Menu",id:"external-expressions-menu",level:2},{value:"H-View",id:"h-view-1",level:2},{value:"Costumes",id:"costumes",level:3},{value:"OSC Address tabs",id:"osc-address-tabs",level:3},{value:"Red text",id:"red-text",level:4},{value:"Clipboard",id:"clipboard",level:4},{value:"Columns",id:"columns",level:4}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"h-view",children:"H-View"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"The application more directed towards other developers who might want to modify it or learn how some parts work."})}),"\n",(0,i.jsx)(s.p,{children:"This application has two parts:"}),"\n",(0,i.jsx)(s.h2,{id:"external-expressions-menu",children:"External Expressions Menu"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"External Expressions Menu"})," is a Unity Editor tool that relies on the VRChat SDK."]}),"\n",(0,i.jsxs)(s.p,{children:["When the avatar is being built, it will write a large JSON file in the ",(0,i.jsx)(s.code,{children:"AppData/LocalLow/VRChat/vrchat/OSC/<userid>/Hai/"})," folder."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["It does ",(0,i.jsx)(s.strong,{children:"not"})," require NDMF, and it does ",(0,i.jsx)(s.strong,{children:"not"})," require VRCFury either.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you ",(0,i.jsx)(s.em,{children:"do"})," happen to use NDMF or Modular Avatar, it will execute itself as a NDMF plugin instead of an avatar preprocessor."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["If you have Modular Avatar or NDMF, use ",(0,i.jsx)(s.strong,{children:"Tools > NDM Framework > Manual bake avatar"})," to generate the JSON file without\nneeding to build your avatar (it might not work if you have stuff generated by VRCFury, but I'm not sure about this)."]}),"\n",(0,i.jsx)(s.li,{children:"The tool will always execute during a build. To turn that off, uninstall the tool using ALCOM."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This file contains the following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The entire Expressions Menu, including all of its icons,"}),"\n",(0,i.jsx)(s.li,{children:"All Contacts that have parameters,"}),"\n",(0,i.jsx)(s.li,{children:"All PhysBones that have parameters,"}),"\n",(0,i.jsx)(s.li,{children:"The entire Expressions Parameters list."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["This tool can be downloaded through ALCOM using ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/products/listing",children:"my listing"})})," (you must enable pre-release packages to see it),\nand the source code is at ",(0,i.jsx)(s.code,{children:"https://github.com/hai-vr/external-expressions-menu"})," if you want to include this package yourself for modification."]}),"\n",(0,i.jsxs)(s.admonition,{type:"warning",children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"The JSON file contains the icons as PNGs"}),", encoded into base64 strings."]}),(0,i.jsx)(s.p,{children:"For this reason you should not share the JSON file with other users as it contains graphical assets that might have been granted to you\nunder a license that would not permit redistribution."}),(0,i.jsx)(s.p,{children:"Treat this JSON file no differently to an avatar file."})]}),"\n",(0,i.jsx)(s.h2,{id:"h-view-1",children:"H-View"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"H-View"})," is one of my personal OSC Query applications that I use for debugging."]}),"\n",(0,i.jsxs)(s.p,{children:["The source code is available at ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/hai-vr/h-view",children:"https://github.com/hai-vr/h-view"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The application can be downloaded through the ",(0,i.jsx)(s.a,{href:"https://github.com/hai-vr/h-view/releases/latest",children:"Releases tab in GitHub"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Once launched, it will:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Open a window on your desktop."}),"\n",(0,i.jsx)(s.li,{children:"Open an OSC Query service,"}),"\n",(0,i.jsx)(s.li,{children:"Open an OSC service,"}),"\n",(0,i.jsx)(s.li,{children:"Communicate with VRChat using OSC and OSC Query,"}),"\n",(0,i.jsxs)(s.li,{children:["Read any file on-demand located in ",(0,i.jsx)(s.code,{children:"AppData/LocalLow/VRChat/vrchat/OSC/"})," that start with ",(0,i.jsx)(s.code,{children:"ExternalExpressionsMenu_"}),","]}),"\n",(0,i.jsxs)(s.li,{children:["Read the files in ",(0,i.jsx)(s.code,{children:"AppData/Roaming/H-View/"}),", creating the directory if it doesn't exist."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If SteamVR is running, it will also create a dashboard overlay (accessible by pressing the system menu)."}),"\n",(0,i.jsx)(s.h3,{id:"costumes",children:"Costumes"}),"\n",(0,i.jsxs)(s.p,{children:["The Costumes tab will search for ",(0,i.jsx)(s.code,{children:".png"})," files starting with ",(0,i.jsx)(s.code,{children:"avtr_"})," in the ",(0,i.jsx)(s.code,{children:"%APPDATA%/H-View/Costumes/"})," folder. The filename is the avatar ID."]}),"\n",(0,i.jsx)(s.h3,{id:"osc-address-tabs",children:"OSC Address tabs"}),"\n",(0,i.jsx)(s.p,{children:"The following tabs are directly sourced from the OSC addressed received from VRChat's OSC Query service:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The Avatar tab shows all OSC addresses starting with ",(0,i.jsx)(s.code,{children:"/avatar/parameters/"})," and the ",(0,i.jsx)(s.code,{children:"/avatar/change"})," address,\nexcept addresses starting with ",(0,i.jsx)(s.code,{children:"/avatar/parameters/FT/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The Face Tracking tab shows all OSC addresses starting with ",(0,i.jsx)(s.code,{children:"/avatar/parameters/FT/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The Input tab shows all OSC addresses starting with ",(0,i.jsx)(s.code,{children:"/input/"})," and ",(0,i.jsx)(s.code,{children:"/chatbox/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The Tracking tab shows all OSC addresses starting with ",(0,i.jsx)(s.code,{children:"/tracking/"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"red-text",children:"Red text"}),"\n",(0,i.jsx)(s.p,{children:"When a line of text is red, it means the value has only ever changed to a different value less than 2 times.\nYou can find out stale parameters using this."}),"\n",(0,i.jsx)(s.h4,{id:"clipboard",children:"Clipboard"}),"\n",(0,i.jsx)(s.p,{children:"You can right-click an address to copy the OSC address, the parameter name, or the parameter value."}),"\n",(0,i.jsx)(s.h4,{id:"columns",children:"Columns"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"="})," column contains the word ",(0,i.jsx)(s.code,{children:"local"})," if the data contained in the External Expressions Menu JSON file indicates that this parameter is not synced."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"+"})," contains ",(0,i.jsx)(s.code,{children:"r"})," if the address is read-only, ",(0,i.jsx)(s.code,{children:"w"})," if the address is write-only, and ",(0,i.jsx)(s.code,{children:"rw"})," when the address can be both read and written."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"Type"})," column contains ",(0,i.jsx)(s.code,{children:"int"}),", ",(0,i.jsx)(s.code,{children:"float"}),", ",(0,i.jsx)(s.code,{children:"bool"}),", ",(0,i.jsx)(s.code,{children:"string"}),", or a sequence of letters representing the multiple value types of that OSC address,\nwhere ",(0,i.jsx)(s.code,{children:"i"})," is an integer, ",(0,i.jsx)(s.code,{children:"f"})," is a float, ",(0,i.jsx)(s.code,{children:"T"})," is a boolean, and ",(0,i.jsx)(s.code,{children:"s"})," is a string."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"On writable addresses, the rightmost column lets you submit a value for that address."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["On ",(0,i.jsx)(s.code,{children:"float"})," values, you have a slider between -1 and 1, and buttons ",(0,i.jsx)(s.code,{children:"0"})," and ",(0,i.jsx)(s.code,{children:"1"})," to set those values."]}),"\n",(0,i.jsxs)(s.li,{children:["On ",(0,i.jsx)(s.code,{children:"bool"})," values, you have a button to toggle, and a button that inverts the value when it is held down."]}),"\n",(0,i.jsxs)(s.li,{children:["On ",(0,i.jsx)(s.code,{children:"int"})," values, you have:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"a button to change the value between 0 and 255,"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-"})," and ",(0,i.jsx)(s.code,{children:"+"})," buttons to decrement and increment,"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"0"})," and ",(0,i.jsx)(s.code,{children:"1"})," buttons to set those values,"]}),"\n",(0,i.jsxs)(s.li,{children:["and a ",(0,i.jsx)(s.code,{children:"!"})," button to flip the value."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"The chatbox address has a dedicated control."}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);