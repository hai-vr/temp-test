"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5566],{28949:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>h,metadata:()=>l,toc:()=>m});var i=a(74848),n=a(28453);const r=a.p+"assets/medias/sx_2021-12-21_10-53-42_KryfYW7TqN-ec4015c865f00ccc0fd87021af311725.mp4";var s=a(89618),o=a(85041);const h={},c="Constraint Track Animation Creator",l={id:"products/constraint-track-animation-creator/index",title:"Constraint Track Animation Creator",description:"Constraint Track Animation Creator is a Unity Editor tool which automates the creation of a gimmick that lets you animate an object to slide along a track using constraints.",source:"@site/docs/products/constraint-track-animation-creator/index.md",sourceDirName:"products/constraint-track-animation-creator",slug:"/products/constraint-track-animation-creator/",permalink:"/docs/products/constraint-track-animation-creator/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Convert to FaceEmo",permalink:"/docs/products/combo-gesture-expressions/convert-to-faceemo"},next:{title:"Reference manual",permalink:"/docs/products/constraint-track-animation-creator/reference"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Principles",id:"principles",level:2},{value:"Should you use a Constraint Track?",id:"should-you-use-a-constraint-track",level:2}];function _(t){const e={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"constraint-track-animation-creator",children:"Constraint Track Animation Creator"}),"\n",(0,i.jsx)(s.w,{children:(0,i.jsx)(o.F,{requiresVRChat:!0})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"Constraint Track Animation Creator"})," is a Unity Editor tool which automates the creation of a gimmick that lets you animate an object to slide along a track using constraints."]}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsx)(e.p,{children:"This tool requires VRChat, and is incompatible with other apps and platforms."})}),"\n",(0,i.jsx)(e.p,{children:"This differs from blend shapes / shape keys, because bones moving along the track will lose their influence from the original bone they belonged from."}),"\n",(0,i.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.p,{children:["Creating Constraint Track Animations is ",(0,i.jsx)(e.strong,{children:"very hard"}),". You should be familiar with Unity animations and Unity constraint components."]}),"\n",(0,i.jsx)(e.p,{children:"Being comfortable with modeling tools such as Blender will let you achieve better results, since you\u2019ll be able to split a bone in several parts, or add blend shapes. Avatar models are typically not designed to be used this way, so you will need to use your modeling skills at times to fill the gaps."}),"\n",(0,i.jsx)(e.p,{children:"The experience will not be smooth and the mesh will sometimes clip through the model, so you need to accept those imperfections, or if you wish, further use your modeling skills to hide those imperfections by cleverly animating additional shape keys."}),"\n",(0,i.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,i.jsx)("source",{src:r})}),"\n",(0,i.jsx)(e.h2,{id:"principles",children:"Principles"}),"\n",(0,i.jsx)(e.p,{children:"In a Constraint Track Animation, you have three things."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Constraint."})," This is a Parent Constraint component that moves along the track."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Untitled",src:a(66520).A+"",width:"455",height:"352"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Track."})," These are the transforms through which the Constraint will slide. The track points are parented to various bones of the avatar."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Untitled",src:a(26507).A+"",width:"420",height:"514"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Animation"}),". This animates the Constraint to move along the Track, and also animates the Track to disable them when not in use."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Untitled",src:a(71570).A+"",width:"1272",height:"404"})}),"\n",(0,i.jsx)(e.p,{children:"The Parent Constraint lets an object move as if it had multiple parents. Each \u201cparent\u201d has a weight representing how much that parent will influence the movement. This weight can be controlled by an animation. By animating the weight, the object will move between the \u201cparents\u201d. Here, each parent of the Constraint is a waypoint in the track."}),"\n",(0,i.jsx)(e.p,{children:"Creating the Constraint, the Track, and the Animation is very hard to create by hand, and can result in mistakes."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.em,{children:"Constraint Track Animation Creator"})," will automate most of the painful process to let you focus on the other difficult parts: Modeling, and composing the Track."]}),"\n",(0,i.jsx)(e.p,{children:"It will also create the Animator layers for you if you intend to use it on VRChat."}),"\n",(0,i.jsx)(e.h2,{id:"should-you-use-a-constraint-track",children:"Should you use a Constraint Track?"}),"\n",(0,i.jsx)(e.p,{children:"Before committing to creating a Constraint Track, ask yourself if you really want to use a Constraint Track."}),"\n",(0,i.jsxs)(e.p,{children:["A Constraint Track is useful when it ",(0,i.jsx)(e.strong,{children:"goes through various other bones that can be deformed relative to each other"}),". If it does not, then you can simply use a Transform animation."]}),"\n",(0,i.jsx)(e.p,{children:"Some effects are more easily done without a track. For example, if you\u2019re building an umbrella, then you probably don\u2019t need a track. You can either use a blend shape / shape key, or just use simple Transform animations."})]})}function u(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(_,{...t})}):_(t)}},85041:(t,e,a)=>{a.d(e,{F:()=>s});a(96540);var i=a(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo"};var r=a(74848);function s(t){let{requiresVRChat:e,isUniversal:a,notVRChat:s,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:c,requiresVRM:l,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:m,compatibleWithWarudo:_,compatibleWithBeatSaber:u,requiresWarudo:p,notCompatibleWithGltf:g,compatibleWithVNyan:b,short:v}=t,f=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),x=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[e?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:["\ud83d\udcac ",x,"VRChat"]}):"",o?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_resonite),children:["\u26a1 ",x,"Resonite"]}):"",l?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",x,"VRM"]}):"",h?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:[x,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",x,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",m?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",b?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",_?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",u?(0,r.jsxs)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",g?(0,r.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,r.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,r.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",s?(0,r.jsx)("div",{className:(0,i.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(t,e,a)=>{a.d(e,{w:()=>n});a(96540);var i=a(74848);function n(t){let{children:e}=t;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:e})})}},71570:(t,e,a)=>{a.d(e,{A:()=>i});const i=a.p+"assets/images/Untitled 1-93556d5849653ddd05d1a875bb23120d.png"},66520:(t,e,a)=>{a.d(e,{A:()=>i});const i=a.p+"assets/images/Untitled-c011eda3992f351baa5b0dc4a7b56a17.gif"},26507:(t,e,a)=>{a.d(e,{A:()=>i});const i=a.p+"assets/images/Untitled-33ac2eae1d7666907b2ff4344be2a7c2.png"}}]);