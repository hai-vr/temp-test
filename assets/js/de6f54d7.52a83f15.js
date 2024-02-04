"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5215],{68923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151);const i={unlisted:!0},a="Multiplexer (Experimental)",o={id:"products/prefabulous-avatar/hai-components/multiplexer",title:"Multiplexer (Experimental)",description:"Allows an avatar to have more than 256 bits of synced parameters during the build process, by allowing some parameters of your choice",source:"@site/docs/products/prefabulous-avatar/hai-components/multiplexer.md",sourceDirName:"products/prefabulous-avatar/hai-components",slug:"/products/prefabulous-avatar/hai-components/multiplexer",permalink:"/docs/products/prefabulous-avatar/hai-components/multiplexer",draft:!1,unlisted:!0,tags:[],version:"current",frontMatter:{unlisted:!0},sidebar:"tutorialSidebar"},l={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Option: Execute even when under limit",id:"option-execute-even-when-under-limit",level:3},{value:"Versions",id:"versions",level:2}];function h(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"multiplexer-experimental",children:"Multiplexer (Experimental)"}),"\n",(0,s.jsx)(n.p,{children:"Allows an avatar to have more than 256 bits of synced parameters during the build process, by allowing some parameters of your choice\nto be synced at a slower rate than others."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"This component is in an experimental phase, and may be subject to significant changes in the future."})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(n.p,{children:"This component will sync the parameters of your choice using a multiplexer if you are over 256 bits of synced parameters."}),"\n",(0,s.jsx)(n.p,{children:"This benefit comes with a time trade-off: Those parameters will take longer to sync."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use this on parameters that you change rarely, where you can afford to have a delay."}),"\n",(0,s.jsx)(n.li,{children:"Do not use this on parameters that you change rarely, where the effect must be instantaneously seen by others."}),"\n",(0,s.jsx)(n.li,{children:"Do not use this on parameters that you need to update in real-time, such as face tracking and eye tracking."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The sync delay will depend on the overall amount of bits of parameters that you want to sync."}),"\n",(0,s.jsx)(n.h3,{id:"option-execute-even-when-under-limit",children:"Option: Execute even when under limit"}),"\n",(0,s.jsx)(n.p,{children:"By default, this component will not create the multiplexer if you are not exceeding 256 bits of synced parameters in the first place."}),"\n",(0,s.jsx)(n.p,{children:"If you find any reason to create the multiplexer regardless, you can choose to do so."}),"\n",(0,s.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1.10.0"}),": Added."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Classification: ",(0,s.jsxs)(n.em,{children:["This component is ",(0,s.jsx)(n.strong,{children:"VRChat only"}),"."]})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);