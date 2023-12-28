"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8834],{86007:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(85893),t=n(11151);const i={sidebar_position:2},r="Avatars and Belongings",o={id:"resilience/early-testers/sdk/avatars-and-belongings",title:"Avatars and Belongings",description:"The ResilienceVR SDK is only available to testers.",source:"@site/docs/resilience/early-testers/sdk/avatars-and-belongings.md",sourceDirName:"resilience/early-testers/sdk",slug:"/resilience/early-testers/sdk/avatars-and-belongings",permalink:"/docs/resilience/early-testers/sdk/avatars-and-belongings",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"resilienceSidebar",previous:{title:"SDK",permalink:"/docs/resilience/early-testers/sdk/"},next:{title:"Mementos",permalink:"/docs/resilience/early-testers/sdk/mementos"}},l={},d=[{value:"Create an avatar",id:"create-an-avatar",level:2},{value:"Build the avatar",id:"build-the-avatar",level:2},{value:"Where are avatars uploaded?",id:"where-are-avatars-uploaded",level:2}];function h(e){const a={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"avatars-and-belongings",children:"Avatars and Belongings"}),"\n",(0,s.jsx)(a.admonition,{type:"warning",children:(0,s.jsx)(a.p,{children:"The ResilienceVR SDK is only available to testers."})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Avatars"})," is a representation of yourself. Your avatar appears when you join a server, and disappears when you leave it."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Belongings"})," are objects that belong to you. Some belongings appear when you join a server, and they all disappear when you leave it."]}),"\n",(0,s.jsxs)(a.p,{children:["You can only wear one avatar at any point in time, but you can have multiple belongings visible simultaneously. Since avatars and belongings are so similar, they are usually thought of as being ",(0,s.jsx)(a.em,{children:"one thing"})," in other social VR apps."]}),"\n",(0,s.jsxs)(a.p,{children:["However, keep in mind that ",(0,s.jsx)(a.strong,{children:"belongings disappear when you leave a server"}),", therefore you should not use belongings for things that need to continue existing after leaving the server. Think of belongings as objects that you do not want to leave behind when leaving a restaurant, like your phone or your car keys."]}),"\n",(0,s.jsx)(a.h2,{id:"create-an-avatar",children:"Create an avatar"}),"\n",(0,s.jsxs)(a.p,{children:["This tutorial assumes that ",(0,s.jsx)(a.strong,{children:"you are already familiar with other social VR applications"}),": You need an avatar!"]}),"\n",(0,s.jsx)(a.p,{children:"Add or select an avatar in your Unity scene."}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsx)(a.p,{children:"The ResilienceVR SDK can be installed inside projects made for other applications and platforms, however it is recommended to use Unity 2021."})}),"\n",(0,s.jsxs)(a.p,{children:["To create a ResilienceVR avatar, click ",(0,s.jsx)(a.em,{children:"Add component > RVR Avatar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"rvr-avatar-send.png",src:n(2581).Z+"",width:"370",height:"519"})}),"\n",(0,s.jsx)(a.p,{children:"There are three name fields that you need to fill:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Avatar Base Name"}),': This is the name of the base of your avatar that you are using. For example, "Merino", "Karin", or "Imeris" are base names.',"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"These base names are used to carry configurations across multiple avatars that share the same base, such as the viewpoint."}),"\n",(0,s.jsx)(a.li,{children:"You can leave this field empty, and the configuration will not carry over."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Personal Avatar Name"}),": This is the name that will be displayed when you select your avatar in the menu.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"If you keep this field empty, the file identifier will be displayed instead."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Asset File Identifier"}),": This is the part of the filename of the avatar on-disk."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:'Leave all the other fields to "Automatic". Your avatar is now ready to be built.'}),"\n",(0,s.jsx)(a.p,{children:"You can configure and customize the avatar after it has been built."}),"\n",(0,s.jsx)(a.h2,{id:"build-the-avatar",children:"Build the avatar"}),"\n",(0,s.jsxs)(a.p,{children:["Select your avatar, and in the ",(0,s.jsx)(a.em,{children:"RVR Avatar"})," component, click the ",(0,s.jsx)(a.em,{children:"Send to ResilienceVR"})," button."]}),"\n",(0,s.jsx)(a.p,{children:"If ResilienceVR is running, this will immediately wear the avatar."}),"\n",(0,s.jsx)(a.h2,{id:"where-are-avatars-uploaded",children:"Where are avatars uploaded?"}),"\n",(0,s.jsxs)(a.p,{children:["ResilienceVR ",(0,s.jsx)(a.strong,{children:"does not have content servers"}),". We do not host your content, and we have no idea of what content you create."]}),"\n",(0,s.jsx)(a.p,{children:"Avatars are stored on your computer, and your current one will be sent to other people when you meet them."}),"\n",(0,s.jsx)(a.p,{children:"If you always join the same users, they will not need to redownload your avatar."})]})}function c(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2581:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/rvr-avatar-send-0e37765a03b19b198844c07d01233450.png"}}]);