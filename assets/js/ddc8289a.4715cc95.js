"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6342],{30103:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>h,toc:()=>d});var i=t(74848),s=t(28453),r=t(89618),o=t(85041);const n={title:"Auto-reset OSC config"},l=void 0,h={id:"products/auto-reset-osc-config",title:"Auto-reset OSC config",description:"This tool will automatically reset the OSC config after every successful VRChat avatar upload.",source:"@site/docs/products/auto-reset-osc-config.md",sourceDirName:"products",slug:"/products/auto-reset-osc-config",permalink:"/docs/products/auto-reset-osc-config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Auto-reset OSC config"},sidebar:"tutorialSidebar",previous:{title:"Migrating from V0 to V1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1"},next:{title:"Blendshape Viewer",permalink:"/docs/products/blendshape-viewer"}},c={},d=[{value:"Download",id:"download",level:2},{value:"VCC",id:"vcc",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"When to use this tool?",id:"when-to-use-this-tool",level:2}];function _(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.w,{children:(0,i.jsx)(o.F,{requiresVRChat:!0})}),"\n",(0,i.jsx)(a.p,{children:"This tool will automatically reset the OSC config after every successful VRChat avatar upload."}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"The use of this tool is supposedly not needed starting from VRChat 2024.3.1 (August 2024) / VRChat SDK 3.7.0."})}),"\n",(0,i.jsx)("video",{controls:!0,width:"816",children:(0,i.jsx)("source",{src:t(4534).A})}),"\n",(0,i.jsx)(a.h2,{id:"download",children:"Download"}),"\n",(0,i.jsx)(a.p,{children:"The tool is free for download using VCC."}),"\n",(0,i.jsx)(a.h3,{id:"vcc",children:"VCC"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Use this link to ",(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install our listing to VCC"})}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Add ",(0,i.jsx)(a.em,{children:"Ha\xef ~ Auto-reset OSC config"})," to your project using VCC."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Once the package is installed"}),", the OSC config file will be removed after every successful VRChat avatar upload."]}),"\n",(0,i.jsx)(a.p,{children:"Note that if you load your avatar in-game too shortly after the upload, the game might still load the previous version of the avatar, which will cause the OSC config file to be out of date again."}),"\n",(0,i.jsx)(a.h2,{id:"when-to-use-this-tool",children:"When to use this tool?"}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"The use of this tool is supposedly not needed starting from VRChat 2024.3.1 (August 2024) / VRChat SDK 3.7.0."})}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Auto-reset OSC config"})," is meant to be used by OSC users (face tracking, connected objects, special overlays, and other tricks)."]}),"\n",(0,i.jsxs)(a.p,{children:["When the avatar is loaded for the first time, VRChat generates a JSON file located in ",(0,i.jsx)(a.code,{children:"/Users/{windowsUser}/AppData/LocalLow/VRChat/VRChat/OSC/{userId}/Avatars/{avatarId}.json"})]}),"\n",(0,i.jsx)(a.p,{children:"This file contains information about the current expression parameters of the avatar."}),"\n",(0,i.jsxs)(a.p,{children:["This file is not generated again when the avatar is updated",(0,i.jsx)("span",{children:(0,i.jsx)(a.strong,{children:"*"})}),". This can cause OSC applications to fail reacting to newly added expressions parameters, such as face tracking parameters for instance."]}),"\n",(0,i.jsx)(a.p,{children:'Typically, the fix is to go in VRChat Expressions menu, and click "Reset OSC config" after every meaningful upload.'}),"\n",(0,i.jsx)(a.p,{children:"This tool assumes that you did not manually update this JSON file (this almost never happens), and deletes it after every avatar upload, so that the avatar parameters should work consistently after every new upload."}),"\n",(0,i.jsxs)(a.admonition,{type:"info",children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"*"})," Until the release of ",(0,i.jsx)(a.a,{href:"https://docs.vrchat.com/docs/vrchat-202431#updates--fixes",children:"VRChat 2024.3.1"})," (August 2024)."]}),(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"VRChat will now automatically add or remove parameters in OSC config files when an avatar is updated."}),"\n"]})]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}},85041:(e,a,t)=>{t.d(a,{F:()=>o});t(96540);var i=t(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=t(74848);function o(e){let{requiresVRChat:a,isUniversal:t,notVRChat:o,requiresResonite:n,requiresSteamVR:l,requiresChilloutVR:h,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:_,compatibleWithWarudo:u,compatibleWithBeatSaber:p,requiresWarudo:g,notCompatibleWithGltf:m,compatibleWithVNyan:v,short:f,supporter:x}=e,j=f?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),w=f?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",n?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",c?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",l?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",h?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[j,"VSFAvatar"]}):"",_?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[j,"VSeeFace"]}):"",v?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[j,"VNyan"]}):"",u?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[j,"Warudo"]}):"",p?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[j,"Beat Saber"]}):"",m?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",t?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",o?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",x?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,t)=>{t.d(a,{w:()=>s});t(96540);var i=t(74848);function s(e){let{children:a}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:a})})}},4534:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/medias/auto-remove-osc-f-5f2d6aa200e8c32517926d678987ca78.mp4"}}]);