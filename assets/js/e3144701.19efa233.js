"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6878],{49920:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(74848),r=i(28453);const t={sidebar_position:4},a="Option 2: ESP32",c={id:"research/toe-tracking/esp32",title:"Option 2: ESP32",description:"This page is currently being written.",source:"@site/docs/research/toe-tracking/esp32.md",sourceDirName:"research/toe-tracking",slug:"/research/toe-tracking/esp32",permalink:"/docs/research/toe-tracking/esp32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"researchSidebar",previous:{title:"Option 1: Tundra Tracker Developer Board",permalink:"/docs/research/toe-tracking/tundra"},next:{title:"Software",permalink:"/docs/research/toe-tracking/software"}},d={},o=[{value:"Pins used",id:"pins-used",level:2},{value:"Libraries",id:"libraries",level:2},{value:"OSC",id:"osc",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"option-2-esp32",children:"Option 2: ESP32"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"This page is currently being written."})}),"\n",(0,s.jsx)(n.p,{children:"I've had two separate electronics implementations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ESP32 with Wi-Fi and OSC (this page)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/research/toe-tracking/tundra",children:"Tundra Tracker Developer board with SteamVR Input"})," and a separate OSC kapplication"]}),"\n"]}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",children:(0,s.jsx)("source",{src:"https://downscale.srv.hai-vr.dev/assets/docs/vr-socks-f.mp4"})}),"\n",(0,s.jsx)(n.h2,{id:"pins-used",children:"Pins used"}),"\n",(0,s.jsx)(n.p,{children:"You need to attach each flex sensor to an ADC pin, by using a voltage divider."}),"\n",(0,s.jsx)(n.p,{children:"Because of Wi-Fi I've had to use the ADC pins 36, 39, and 34:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"adcAttachPin(36);\nadcAttachPin(39);\nadcAttachPin(34);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"libraries",children:"Libraries"}),"\n",(0,s.jsx)(n.p,{children:"This uses the WiFi capabilities of the ESP32."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'const char * ssid = "############MyWiFiNetworkSSID############";\nconst char * password = "############MyWiFiNetworkPassword############";\n\nvoid setup()\n{\n// ...\n    WiFi.mode(WIFI_STA);\n\n    WiFi.begin(ssid, password);\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(10);\n    }\n    if (WiFi.waitForConnectResult() != WL_CONNECTED) {\n        while(1) {\n            delay(1000);\n        }\n    }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"osc",children:"OSC"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"platformio.ini"}),", I've added the ArduinoOSC lib."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"[env]\nlib_deps =\n    hideakitai/ArduinoOSC@^0.3.29\n"})}),"\n",(0,s.jsx)(n.p,{children:"This lets the ESP32 communicate directly with VRChat through the default port 9000."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include "ArduinoOSCWiFi.h"\n#include "WiFi.h"\n\nOscWiFiClient  client;\n// ...\n    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_1st_Down", ioAcomp);\n    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_2nd_Down", ioBcomp);\n    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_5th_Splay", ioCcomp);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);