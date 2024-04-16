"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7708],{2887:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(74848),s=r(28453),a=r(89618),n=r(85041);const l={},o="Replace Textures",c={id:"products/prefabulous/universal/replace-textures",title:"Replace Textures",description:"Replaces textures inside materials with other ones.",source:"@site/docs/products/prefabulous/universal/replace-textures.md",sourceDirName:"products/prefabulous/universal",slug:"/products/prefabulous/universal/replace-textures",permalink:"/docs/products/prefabulous/universal/replace-textures",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recalculate Normals",permalink:"/docs/products/prefabulous/universal/recalculate-normals"},next:{title:"\ud83d\udcac VRChat Platform",permalink:"/docs/products/prefabulous/vrchat"}},d={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"Danger: Execute in Play Mode",id:"danger-execute-in-play-mode",level:2},{value:"Versions",id:"versions",level:2}];function h(e){const i={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"replace-textures",children:"Replace Textures"}),"\n",(0,t.jsx)(a.w,{children:(0,t.jsx)(n.F,{isUniversal:!0})}),"\n",(0,t.jsx)(i.p,{children:"Replaces textures inside materials with other ones."}),"\n",(0,t.jsx)(i.p,{children:"This can be used to quickly create a version of your avatar with lower resolution textures, while still letting you upload an avatar with its original textures."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Unity_lJ03XfMYPW.png",src:r(49882).A+"",width:"397",height:"432"})}),"\n",(0,t.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(i.p,{children:"This component will find materials that are configured to use a texture, and replaces those textures with other ones."}),"\n",(0,t.jsx)(i.p,{children:"This is non-destructive: the materials in your project are not modified."}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Materials located inside animations are not currently supported:\nThe textures contained inside those animations will not be replaced."})}),"\n",(0,t.jsx)(i.p,{children:"To use this component:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Add a "PA-H Replace Textures" component anywhere in your avatar.'}),"\n",(0,t.jsx)(i.li,{children:'The component will list all textures found inside renderers your avatar, as long as the renderer or any of its parents is not inside an "Editor Only"-tagged object.'}),"\n",(0,t.jsx)(i.li,{children:'Press "+ Add" on any texture that you would like to replace.'}),"\n",(0,t.jsx)(i.li,{children:'Provide a new texture in the field located below "Replace with".'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"danger-execute-in-play-mode",children:"Danger: Execute in Play Mode"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"By default, this component will not be executed in Play Mode."})}),"\n",(0,t.jsx)(i.p,{children:"In order to use this component, we must create copies of all materials on your avatar.\nSince they are copies, any edits made to the materials Play Mode would not be saved."}),"\n",(0,t.jsx)(i.p,{children:"If you are normally used to editing your avatar materials in Play Mode, this could be very disruptive for your workflow.\nFor this reason, this component will NOT be executed in Play Mode by default."}),"\n",(0,t.jsxs)(i.p,{children:["Check the ",(0,t.jsx)(i.em,{children:'"(DANGER) Execute in Play Mode"'})," checkbox to execute it anyways."]}),"\n",(0,t.jsx)(i.h2,{id:"versions",children:"Versions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"1.10.3"}),": Fix Replace Textures should no longer ignore disabled objects."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"1.10.0"}),": Added."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Classification: ",(0,t.jsx)(i.em,{children:"This component is application-agnostic."})]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85041:(e,i,r)=>{r.d(i,{F:()=>n});r(96540);var t=r(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK"};var a=r(74848);function n(e){let{requiresVRChat:i,isUniversal:r,notVRChat:n,requiresResonite:l,requiresSteamVR:o,requiresVRM:c}=e;return(0,a.jsxs)("span",{children:[i?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:"\ud83d\udcac Requires VRChat"}):"",l?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_resonite),children:"\u26a1 Requires Resonite"}):"",c?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrm),children:"\ud83d\udcf9 Requires VRM"}):"",o?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:"Requires SteamVR"}):"",r?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,a.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,i,r)=>{r.d(i,{w:()=>s});r(96540);var t=r(74848);function s(e){let{children:i}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:i})})}},49882:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/Unity_lJ03XfMYPW-b73799405be8566b388657c346162d89.png"}}]);