"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3891],{455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(74848),n=a(28453),s=a(89618),r=a(85041);const o={},h="Paint New Bone",l={id:"products/starmesh/operators/paint-new-bone",title:"Paint New Bone",description:"The Starmesh Op. Paint New Bone component creates a new bone, and repaints as many meshes of your choosing to that bone.",source:"@site/docs/products/starmesh/operators/paint-new-bone.md",sourceDirName:"products/starmesh/operators",slug:"/products/starmesh/operators/paint-new-bone",permalink:"/docs/products/starmesh/operators/paint-new-bone",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compressive Deform",permalink:"/docs/products/starmesh/operators/compressive-deform"},next:{title:"Ripple Wave",permalink:"/docs/products/starmesh/operators/ripple-wave"}},c={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Create the operator and selectors",id:"create-the-operator-and-selectors",level:3},{value:"Configure the operator",id:"configure-the-operator",level:3},{value:"Set the bone",id:"set-the-bone",level:4},{value:"Test the operator",id:"test-the-operator",level:3},{value:"VRChat",id:"vrchat",level:4},{value:"Other apps",id:"other-apps",level:4},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"Don&#39;t unpaint existing",id:"dont-unpaint-existing",level:4}];function p(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"paint-new-bone",children:"Paint New Bone"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Starmesh Op. Paint New Bone"})," component creates a new bone, and repaints as many meshes of your choosing to that bone."]}),"\n",(0,i.jsx)(t.p,{children:"By default, the component will unpaint the vertices from other bones based on the weight of each vertex in that selection."}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:a(86144).A})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(t.h3,{id:"create-the-operator-and-selectors",children:"Create the operator and selectors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add a ",(0,i.jsx)(t.em,{children:"Starmesh Op. Translate Rotate Scale (TRS)"})," component on a new GameObject in your avatar."]}),"\n",(0,i.jsxs)(t.li,{children:["In the selectors of this component, add a ",(0,i.jsx)(t.em,{children:"Starmesh Select Meshes"}),", or choose one that you already have.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Configure the ",(0,i.jsx)(t.em,{children:"Select Meshes"})," selector so that it affects the relevant meshes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["In the selectors of this component, add other selectors, for instance, a ",(0,i.jsx)(t.em,{children:"Starmesh Select Point Radius"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"You can add selectors as children of this GameObject."})}),"\n",(0,i.jsx)(t.h3,{id:"configure-the-operator",children:"Configure the operator"}),"\n",(0,i.jsx)(t.h4,{id:"set-the-bone",children:"Set the bone"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Choose the transform of the new bone in the ",(0,i.jsx)(t.em,{children:"Bone"})," field."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.p,{children:"Please note that many Unity applications (such as VRChat) cannot have more than 4 bones per vertex."}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Try not to paint in highly contentious areas."}),"\n",(0,i.jsx)(t.li,{children:"If there are more than 4 bones on a vertex, that vertex may unpaint itself from the weaker bones."}),"\n"]})]}),"\n",(0,i.jsx)(t.h3,{id:"test-the-operator",children:"Test the operator"}),"\n",(0,i.jsx)(t.p,{children:"To test the new bone, you need to process the avatar."}),"\n",(0,i.jsx)(t.h4,{id:"vrchat",children:"VRChat"}),"\n",(0,i.jsx)(s.w,{children:(0,i.jsx)(r.F,{requiresVRChat:!0})}),"\n",(0,i.jsx)(t.p,{children:"Make sure your avatar has a valid VRCAvatarDescriptor component."}),"\n",(0,i.jsxs)(t.p,{children:["If you use ",(0,i.jsx)(t.em,{children:"Avatar 3.0 Emulator"}),", initialize it in your scene, either now, or during Play mode."]}),"\n",(0,i.jsx)(t.p,{children:"Then, enter Play mode. This should create the bone."}),"\n",(0,i.jsx)(t.h4,{id:"other-apps",children:"Other apps"}),"\n",(0,i.jsx)(s.w,{children:(0,i.jsx)(r.F,{notVRChat:!0})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If your app supports NDMF with Play mode, then set up your avatar so that it is a valid avatar for your app, and enter Play mode."}),"\n",(0,i.jsx)(t.li,{children:"If your app supports NDMF without Play mode, build your avatar in Edit mode."}),"\n",(0,i.jsxs)(t.li,{children:["If your app does not support NDMF at all, select your avatar in the scene, and go to ",(0,i.jsx)(t.em,{children:"Tools > NDM Framework > Manual bake avatar"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,i.jsx)(t.h4,{id:"dont-unpaint-existing",children:"Don't unpaint existing"}),"\n",(0,i.jsx)(t.p,{children:"By default, the new bone will be painted by proportionally stealing the weight from any existing bone that was previously painted to it.\nThis is so that the new bone has full control over the affected vertices."}),"\n",(0,i.jsxs)(t.p,{children:["If you want to keep the influences of the existing bones, check ",(0,i.jsx)(t.em,{children:"Do Not Unpaint Existing"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},85041:(e,t,a)=>{a.d(t,{F:()=>r});a(96540);var i=a(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK"};var s=a(74848);function r(e){let{requiresVRChat:t,isUniversal:a,notVRChat:r,requiresResonite:o,requiresSteamVR:h,requiresVRM:l,compatibleWithVSFAvatar:c,compatibleWithVSeeFace:d,compatibleWithWarudo:p,requiresWarudo:u,compatibleWithVNyan:m,short:_}=e,v=_?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Compatible with "});return(0,s.jsxs)("span",{children:[t?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:"\ud83d\udcac Requires VRChat"}):"",o?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_resonite),children:"\u26a1 Requires Resonite"}):"",l?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_vrm),children:"\ud83d\udcf9 Requires VRM"}):"",h?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:"Requires SteamVR"}):"",c?(0,s.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[v,"VSFAvatar"]}):"",d?(0,s.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[v,"VSeeFace"]}):"",m?(0,s.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[v,"VNyan"]}):"",p?(0,s.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[v,"Warudo"]}):"",u?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",r?(0,s.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,t,a)=>{a.d(t,{w:()=>n});a(96540);var i=a(74848);function n(e){let{children:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}},86144:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/medias/TGeXxK1Tnr-7e14f56442a786aa8cde6209176bdb7c.mp4"}}]);