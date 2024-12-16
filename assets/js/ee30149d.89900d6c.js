"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7444],{69902:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>h,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),r=t(89618),n=t(85041);t(66926);const h={},o="Create a toggle for avatars",l={id:"basis/hvr/toggle",title:"Create a toggle for avatars",description:"The HVR package provides a component to create rudimentary ways to toggle GameObjects and Components.",source:"@site/docs/basis/hvr/toggle.md",sourceDirName:"basis/hvr",slug:"/basis/hvr/toggle",permalink:"/docs/basis/hvr/toggle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"basisSidebar",previous:{title:"Local testing",permalink:"/docs/basis/hvr/local-testing"},next:{title:"HVR Developer",permalink:"/docs/basis/hvr-tech/"}},c={},d=[{value:"When to use toggles in Basis HVR?",id:"when-to-use-toggles-in-basis-hvr",level:2},{value:"Create a toggle",id:"create-a-toggle",level:2},{value:"Activation source",id:"activation-source",level:3},{value:"Networking details",id:"networking-details",level:2}];function _(e){const a={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"create-a-toggle-for-avatars",children:"Create a toggle for avatars"}),"\n",(0,i.jsx)(r.w,{children:(0,i.jsx)(n.F,{requiresBasis:!0})}),"\n",(0,i.jsx)(a.p,{children:"The HVR package provides a component to create rudimentary ways to toggle GameObjects and Components."}),"\n",(0,i.jsxs)(a.admonition,{type:"danger",children:[(0,i.jsx)(a.p,{children:"This component is not ready for use, as it is currently only here to test networking capabilities."}),(0,i.jsx)(a.p,{children:"There is no user interface to control this (neither 2D nor VR)."})]}),"\n",(0,i.jsx)(a.h2,{id:"when-to-use-toggles-in-basis-hvr",children:"When to use toggles in Basis HVR?"}),"\n",(0,i.jsx)(a.p,{children:"Using toggles is recommended for elements of clothing that are inseparable from your body, such as sweaters,\nshoes, or animal ears; and elements of clothing that are strongly associated with your current avatar appearance, such as a hat."}),"\n",(0,i.jsx)(a.p,{children:"It may not be recommended for items that are separable from your body, such a smartphone, a photo camera, or a sword;\nIn the meantime feel free to create toggles for those as well as long as Basis or Basis HVR does not provide a system for items."}),"\n",(0,i.jsx)(a.h2,{id:"create-a-toggle",children:"Create a toggle"}),"\n",(0,i.jsx)(a.p,{children:"We need to create a component on a GameObject that will always be ON. This means you cannot put that component inside\nany object that will be toggled."}),"\n",(0,i.jsxs)(a.p,{children:["Create a new GameObject at any location of your avatar hierarchy that will always be ON,\nand add an ",(0,i.jsx)(a.strong,{children:"Object State Actuation"})," component on it."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Objects in ",(0,i.jsx)(a.strong,{children:"When Active"})," will be:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"ON"})," when the state of the toggle is ",(0,i.jsx)(a.strong,{children:"Active"}),","]}),"\n",(0,i.jsx)(a.li,{children:"OFF when the state of the toggle is Inactive."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["Objects in ",(0,i.jsx)(a.strong,{children:"When Inactive"})," will be:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"ON"})," when the state of the toggle is ",(0,i.jsx)(a.strong,{children:"Inactive"}),","]}),"\n",(0,i.jsx)(a.li,{children:"OFF when the state of the toggle is Active."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"activation-source",children:"Activation source"}),"\n",(0,i.jsxs)(a.p,{children:["Choose an ",(0,i.jsx)(a.em,{children:"Address"})," that this component will listen to."]}),"\n",(0,i.jsxs)(a.p,{children:["When the value of that address is greater or equal to 1, the state of the toggle will be ",(0,i.jsx)(a.strong,{children:"ON"}),",\notherwise it will be ",(0,i.jsx)(a.strong,{children:"OFF"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"networking-details",children:"Networking details"}),"\n",(0,i.jsxs)(a.p,{children:["As an implementation detail, ",(0,i.jsx)(a.em,{children:"Object State Actuation"})," is updated through events, incurring a networking cost\nonly when the state changes."]}),"\n",(0,i.jsxs)(a.p,{children:["A network message will be sent every time the state changes from ",(0,i.jsx)(a.em,{children:"Active"})," to ",(0,i.jsx)(a.em,{children:"Inactive"})," and inversely.\nThe current state is transmitted when the avatar loads on the wearer, and when a new joiner finishes loading the avatar."]}),"\n",(0,i.jsx)(a.p,{children:"Every single state change will result in a packet being sent, even if multiple state changes occur in the same frame."})]})}function g(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}},85041:(e,a,t)=>{t.d(a,{F:()=>n});t(96540);var i=t(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=t(74848);function n(e){let{requiresVRChat:a,isUniversal:t,requiresBasis:n,notVRChat:h,requiresResonite:o,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:_,compatibleWithVSeeFace:g,compatibleWithWarudo:m,compatibleWithBeatSaber:u,requiresWarudo:v,notCompatibleWithGltf:p,compatibleWithVNyan:j,short:b,supporter:w}=e,x=b?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),f=b?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",f,"VRChat"]}):"",o?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",f,"Resonite"]}):"",n?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_basis),children:["\ud83d\udd3a ",f,"Basis"]}):"",d?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",f,"VRM"]}):"",l?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[f,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",f,"ChilloutVR"]}):"",_?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[x,"VSFAvatar"]}):"",g?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[x,"VSeeFace"]}):"",j?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[x,"VNyan"]}):"",m?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[x,"Warudo"]}):"",u?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[x,"Beat Saber"]}):"",p?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",v?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:["\ud83d\udcf9 ",f,"Warudo"]}):"",t?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",h?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",w?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,t)=>{t.d(a,{w:()=>s});t(96540);var i=t(74848);function s(e){let{children:a}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:a})})}},66926:(e,a,t)=>{t.d(a,{U:()=>n});t(96540);var i=t(74848);const s="https://downscale.srv.hai-vr.dev",r=s+"/assets/docs/";function n(e){const a=null!=e.cdn?s+e.cdn:r+e.src.substring(e.src.lastIndexOf("/")+1);return(0,i.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,i.jsx)("source",{src:a})})}}}]);