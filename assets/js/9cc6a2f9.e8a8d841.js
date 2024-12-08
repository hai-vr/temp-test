"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{55511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(74848),a=n(28453),s=n(89618),r=n(85041);const o={},h="Convert Blendshape Conventions",l={id:"products/prefabulous/universal/convert-blendshape-conventions",title:"Convert Blendshape Conventions",description:"Copies blendshapes from one naming convention to another naming convention.",source:"@site/docs/products/prefabulous/universal/convert-blendshape-conventions.md",sourceDirName:"products/prefabulous/universal",slug:"/products/prefabulous/universal/convert-blendshape-conventions",permalink:"/docs/products/prefabulous/universal/convert-blendshape-conventions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Avatar Scale",permalink:"/docs/products/prefabulous/universal/change-avatar-scale"},next:{title:"Delete Polygons",permalink:"/docs/products/prefabulous/universal/delete-polygons"}},c={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"Example: Convert Unified Expressions to ARKit",id:"example-convert-unified-expressions-to-arkit",level:2},{value:"Versions",id:"versions",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"convert-blendshape-conventions",children:"Convert Blendshape Conventions"}),"\n",(0,i.jsx)(s.w,{children:(0,i.jsx)(r.F,{isUniversal:!0})}),"\n",(0,i.jsx)(t.p,{children:"Copies blendshapes from one naming convention to another naming convention."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Unity_Kwht5QWD83.png",src:n(52650).A+"",width:"459",height:"328"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(t.p,{children:"This component will copy existing blendshapes and gives them new names."}),"\n",(0,i.jsx)(t.p,{children:"You can use this if you need to convert a lot of blendshapes from one naming convention to another naming convention."}),"\n",(0,i.jsxs)(t.p,{children:["For instance, you can convert ",(0,i.jsx)(t.a,{href:"https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes",children:"Unified Expressions"})," blendshapes into ",(0,i.jsx)(t.a,{href:"https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/arkit",children:"ARKit"})," blendshapes."]}),"\n",(0,i.jsx)(t.p,{children:"This process does not overwrite blendshapes that already exist."}),"\n",(0,i.jsx)(t.p,{children:"To use this component:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Add a "PA Convert Blendshape Conventions" component anywhere in your avatar.'}),"\n",(0,i.jsx)(t.li,{children:'In the "Key Value Mapping" field, in each line, provide two blendshape names separated with the character of your choice.'}),"\n",(0,i.jsxs)(t.li,{children:['In the "Key Value Separator", specify the character of your choice.',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Press the "Use TAB as separator" if you are using TAB-separated values.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["By default, the left side will be the name to copy, and the right-hand side will be the name to write to.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'You can reverse this using the "Reverse" checkbox.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example-convert-unified-expressions-to-arkit",children:"Example: Convert Unified Expressions to ARKit"}),"\n",(0,i.jsxs)(t.p,{children:["The following list is a copy of the blendshape table located in ",(0,i.jsx)(t.a,{href:"https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/arkit",children:"VRCFaceTracking's ARKit documentation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'This allows you to convert Unified Expressions blendshapes to ARKit blendshapes, or inversely if you use the "Reverse" checkbox.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Key Value Separator: ",(0,i.jsx)(t.code,{children:"="})]}),"\n",(0,i.jsx)(t.li,{children:"Key Value Mapping:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ini",children:"EyeLookUpRight=eyeLookUpRight\nEyeLookDownRight=eyeLookDownRight\nEyeLookInRight=eyeLookInRight\nEyeLookOutRight=eyeLookOutRight\nEyeLookUpLeft=eyeLookUpLeft\nEyeLookDownLeft=eyeLookDownLeft\nEyeLookInLeft=eyeLookInLeft\nEyeLookOutLeft=eyeLookOutLeft\nEyeClosedRight=eyeBlinkRight\nEyeClosedLeft=eyeBlinkLeft\nEyeSquintRight=eyeSquintRight\nEyeSquintLeft=eyeSquintLeft\nEyeWideRight=eyeWideRight\nEyeWideLeft=eyeWideLeft\nBrowDownRight=browDownRight\nBrowDownLeft=browDownLeft\nBrowInnerUp=browInnerUp\nBrowOuterUpRight=browOuterUpRight\nBrowOuterUpLeft=browOuterUpLeft\nNoseSneerRight=noseSneerRight\nNoseSneerLeft=noseSneerLeft\nCheekSquintRight=cheekSquintRight\nCheekSquintLeft=cheekSquintLeft\nCheekPuff=cheekPuff\nJawOpen=jawOpen\nMouthClosed=mouthClose\nJawRight=jawRight\nJawLeft=jawLeft\nJawForward=jawForward\nLipSuckUpper=mouthRollUpper\nLipSuckLower=mouthRollLower\nLipFunnel=mouthFunnel\nLipPucker=mouthPucker\nMouthUpperUpRight=mouthUpperUpRight\nMouthUpperUpLeft=mouthUpperUpLeft\nMouthLowerDownRight=mouthLowerDownRight\nMouthLowerDownLeft=mouthLowerDownLeft\nMouthSmileRight=mouthSmileRight\nMouthSmileLeft=mouthSmileLeft\nMouthFrownRight=mouthFrownRight\nMouthFrownLeft=mouthFrownLeft\nMouthStretchRight=mouthStretchRight\nMouthStretchLeft=mouthStretchLeft\nMouthDimpleRight=mouthDimpleRight\nMouthDimpleLeft=mouthDimpleLeft\nMouthRaiserUpper=mouthShrugUpper\nMouthRaiserLower=mouthShrugLower\nMouthPressRight=mouthPressRight\nMouthPressLeft=mouthPressLeft\nTongueOut=tongueOut\n"})}),"\n",(0,i.jsx)(t.h2,{id:"versions",children:"Versions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"1.10.0"}),": Added."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Classification: ",(0,i.jsx)(t.em,{children:"This component is application-agnostic."})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},85041:(e,t,n)=>{n.d(t,{F:()=>r});n(96540);var i=n(20053);const a={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var s=n(74848);function r(e){let{requiresVRChat:t,isUniversal:n,requiresBasis:r,notVRChat:o,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:u,compatibleWithVSFAvatar:p,compatibleWithVSeeFace:d,compatibleWithWarudo:m,compatibleWithBeatSaber:v,requiresWarudo:g,notCompatibleWithGltf:L,compatibleWithVNyan:f,short:x,supporter:b}=e,A=x?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Compatible with "}),y=x?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Requires "});return(0,s.jsxs)("span",{children:[t?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_vrchat),children:["\ud83d\udcac ",y,"VRChat"]}):"",h?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_resonite),children:["\u26a1 ",y,"Resonite"]}):"",r?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_basis),children:["\ud83d\udd3a ",y,"Basis"]}):"",u?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",y,"VRM"]}):"",l?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_steamvr),children:[y,"SteamVR"]}):"",c?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",y,"ChilloutVR"]}):"",p?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_vsfavatar),children:[A,"VSFAvatar"]}):"",d?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_vsfavatar),children:[A,"VSeeFace"]}):"",f?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_vnyan),children:[A,"VNyan"]}):"",m?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_warudo),children:[A,"Warudo"]}):"",v?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_beatsaber),children:[A,"Beat Saber"]}):"",L?(0,s.jsx)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,s.jsx)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",n?(0,s.jsx)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",o?(0,s.jsx)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",b?(0,s.jsxs)("div",{className:(0,i.A)(a.hai_tag,a.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,s.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,t,n)=>{n.d(t,{w:()=>a});n(96540);var i=n(74848);function a(e){let{children:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}},52650:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"}}]);