"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6456],{23543:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var t=i(74848),s=i(28453),r=(i(89618),i(85041));const n={sidebar_position:5},o="Animation",h={id:"products/starmesh/animation",title:"Animation",description:"This page only applies to platforms and apps which rely on Animator systems,",source:"@site/docs/products/starmesh/animation.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/animation",permalink:"/docs/products/starmesh/animation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Selectors",permalink:"/docs/products/starmesh/selectors"},next:{title:"Integration",permalink:"/docs/products/starmesh/examples"}},l={},c=[];function _(e){const a={admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"animation",children:"Animation"}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsxs)(a.p,{children:["This page only applies to platforms and apps which rely on Animator systems,\nsuch as ",(0,t.jsx)(r.F,{requiresVRChat:!0,short:!0})," and possibly ",(0,t.jsx)(r.F,{requiresChilloutVR:!0,short:!0}),"."]}),(0,t.jsx)(a.p,{children:"If you are targeting a platform that does not use animations (i.e. scripting or node systems), this page does not apply to you."})]}),"\n",(0,t.jsx)(a.p,{children:"Blendshapes are only created when entering Play mode or when the avatar is being exported."}),"\n",(0,t.jsx)(a.p,{children:"If you are targeting a platform that uses a Unity animations, you can generate animation clips directly inside the Operator component:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Make sure you have the Unity Animation editor tab open,"}),"\n",(0,t.jsxs)(a.li,{children:["In the Operator component, click one of the buttons on ",(0,t.jsx)(a.em,{children:"Create temporary animation"}),". This will change the view in the Animation editor.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The button labelled ",(0,t.jsx)(a.em,{children:"0"})," will create animated properties with a constant value of 0."]}),"\n",(0,t.jsxs)(a.li,{children:["The button labelled ",(0,t.jsx)(a.em,{children:"100"})," will create animated properties with a constant value of 100."]}),"\n",(0,t.jsxs)(a.li,{children:["The button labelled ",(0,t.jsx)(a.em,{children:"Linear 0-100"})," will create animated properties with a value that changes from 0 to 100 linearly."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"In the Animation editor tab, select the properties in that temporary animation clip, and press CTRL-C to copy them."}),"\n",(0,t.jsx)(a.li,{children:"Create a new Animation clip, or choose one in your project. Then, in the Animation editor tab press CTRL-V to paste those properties."}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:i(21867).A})})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},85041:(e,a,i)=>{i.d(a,{F:()=>n});i(96540);var t=i(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK"};var r=i(74848);function n(e){let{requiresVRChat:a,isUniversal:i,notVRChat:n,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:l,requiresVRM:c,compatibleWithVSFAvatar:_,compatibleWithVSeeFace:d,compatibleWithWarudo:m,requiresWarudo:p,compatibleWithVNyan:u,short:g}=e,v=g?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),x=g?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",x,"VRChat"]}):"",o?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",x,"Resonite"]}):"",c?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",x,"VRM"]}):"",h?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[x,"SteamVR"]}):"",l?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",x,"ChilloutVR"]}):"",_?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[v,"VSFAvatar"]}):"",d?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[v,"VSeeFace"]}):"",u?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[v,"VNyan"]}):"",m?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[v,"Warudo"]}):"",p?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",i?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,a,i)=>{i.d(a,{w:()=>s});i(96540);var t=i(74848);function s(e){let{children:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:a})})}},21867:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/medias/B1If1P3Kv6-51973d6e3a448c83b868ca03207c96a7.mp4"}}]);