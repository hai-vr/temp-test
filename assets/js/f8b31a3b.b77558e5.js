"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9637],{25485:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>h,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453),r=(t(89618),t(85041));const n={sidebar_position:10},h="FAQ",o={id:"products/starmesh/faq",title:"FAQ",description:"What are multi-frame blendshapes?",source:"@site/docs/products/starmesh/faq.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/faq",permalink:"/docs/products/starmesh/faq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/docs/products/starmesh/examples"},next:{title:"Visual Expressions Editor",permalink:"/docs/products/visual-expressions-editor"}},l={},d=[{value:"What are multi-frame blendshapes?",id:"what-are-multi-frame-blendshapes",level:2},{value:"Compatibility with applications",id:"compatibility-with-applications",level:3},{value:"VRAM cost of multi-frame blendshapes",id:"vram-cost-of-multi-frame-blendshapes",level:3},{value:"Runtime cost of multi-frame blendshapes",id:"runtime-cost-of-multi-frame-blendshapes",level:3},{value:"GPU rendering cost",id:"gpu-rendering-cost",level:4},{value:"Animation and scripting cost",id:"animation-and-scripting-cost",level:4}];function c(e){const a={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(a.h2,{id:"what-are-multi-frame-blendshapes",children:"What are multi-frame blendshapes?"}),"\n",(0,s.jsxs)(a.p,{children:["Traditional blendshapes in Unity have only one ",(0,s.jsx)(a.em,{children:"frame"})," which is in full effect when the property is at the value of 100. However,\n",(0,s.jsxs)(a.strong,{children:["the Unity Engine supports blendshapes that have ",(0,s.jsx)(a.a,{href:"https://docs.unity3d.com/ScriptReference/Mesh.AddBlendShapeFrame.html",children:"multiple frames"})]})," under the same name.\nFrames in-between will morph in and out much like an animation."]}),"\n",(0,s.jsx)(a.p,{children:"Multi-frame blendshapes often come as a surprise to people as they cannot be stored inside most model file formats and are absent from most model editing software,\nso it is a relatively underused capability of the Unity engine."}),"\n",(0,s.jsx)(a.p,{children:"Several of the Starmesh components make use of this by creating blendshapes that have more than one frame.\nThis is needed because those blendshapes do not follow a linear interpolation between the base mesh and the final result."}),"\n",(0,s.jsx)(a.p,{children:"You only need one animated or scripted property for the blendshape of a Starmesh component to have full effect."}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:"https://downscale.srv.hai-vr.dev/assets/docs/Y5ohAIogzL.mp4"})}),"\n",(0,s.jsx)(a.h3,{id:"compatibility-with-applications",children:"Compatibility with applications"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(r.F,{requiresVRChat:!0,short:!0})," If you use a third-party tool called ",(0,s.jsx)(a.em,{children:"DexProtect"}),", ",(0,s.jsx)(a.strong,{children:"then you must update DexProtect to version 2.2.3 or higher"}),".\n",(0,s.jsx)(a.em,{children:"Ripple Wave"})," will not work properly with a lower version of ",(0,s.jsx)(a.em,{children:"DexProtect"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(r.F,{notCompatibleWithGltf:!0})," Multi-frame blendshapes are not supported by most model file formats, such as GLB/GLTF. If you use the VRM file format,\nyou cannot use operators that generate multi-frame blendshapes."]}),"\n",(0,s.jsxs)(a.p,{children:["This can still be used in ",(0,s.jsx)(r.F,{compatibleWithVNyan:!0,short:!0})," and ",(0,s.jsx)(r.F,{compatibleWithWarudo:!0,short:!0}),"\nas long as you use their proprietary avatar formats instead of the VRM format."]}),"\n",(0,s.jsx)(a.h3,{id:"vram-cost-of-multi-frame-blendshapes",children:"VRAM cost of multi-frame blendshapes"}),"\n",(0,s.jsxs)(a.p,{children:["The VRAM cost of each blendshape depends on the number of vertices moved by a blendshape, ",(0,s.jsx)(a.strong,{children:"multiplied by the number of frames for that blendshape"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"If a multi-frame blendshape has 25 frames, then it is 25 times more expensive in VRAM than a traditional blendshape that moves the same amount of vertices."}),"\n",(0,s.jsxs)(a.p,{children:["All blendshape Operators in Starmesh will show the estimated VRAM cost. The calculations of that cost is based on ",(0,s.jsx)(a.a,{href:"https://github.com/Thryrallo/VRC-Avatar-Performance-Tools/blob/e5a3defd825b92944fc67c70cc80aac76c28379b/Editor/VRAM%20Check/TextureVRAM.cs#L1023",children:"Thry's VRAM calculator"})," where each moved vertex costs 40 bytes per frame."]}),"\n",(0,s.jsx)(a.p,{children:"However, my estimate uses a worst case scenario where all moved vertices are also moved by all frames, which isn't true, so the VRAM cost could actually be lower than what's estimated."}),"\n",(0,s.jsx)(a.p,{children:"Starmesh gives you the option to change the number of frames on some operators, however:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["the quality when animated depends entirely on that Operator: ",(0,s.jsx)(a.em,{children:"Ripple Wave"})," generally needs more frames than ",(0,s.jsx)(a.em,{children:"Compressive Deform"})," would,\nbecause the vertices move in opposite directions throughout the animation so the propagation effect is lost with fewer frames."]}),"\n",(0,s.jsx)(a.li,{children:"there are diminishing returns as you add more frames because it takes a lot more frames to make the timestep smaller."}),"\n"]}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:"https://downscale.srv.hai-vr.dev/assets/docs/y38T2mb00P.mp4"})}),"\n",(0,s.jsx)(a.h3,{id:"runtime-cost-of-multi-frame-blendshapes",children:"Runtime cost of multi-frame blendshapes"}),"\n",(0,s.jsx)(a.h4,{id:"gpu-rendering-cost",children:"GPU rendering cost"}),"\n",(0,s.jsxs)(a.p,{children:["Multi-frame blendshapes use a linear interpolation between the 2 frames that surround the current value,\nwhich is ",(0,s.jsx)(a.a,{href:"https://gist.github.com/d4rkc0d3r/f77c1e96d4aeefd0d1eaf13fb096a2de",children:"calculated on the GPU in Unity 2022"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Consider multi-frame blendshape to have the runtime rendering cost of 2 blendshapes, regardless of the total number of frames."}),"\n",(0,s.jsx)(a.p,{children:"In addition, just like any blendshape, this has no cost when the value of the blendshape property is 0."}),"\n",(0,s.jsx)(a.h4,{id:"animation-and-scripting-cost",children:"Animation and scripting cost"}),"\n",(0,s.jsx)(a.p,{children:"Multi-frame blendshapes have only one named blendshape value to animate or to change via script, regardless of the total number of frames."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(r.F,{requiresVRChat:!0,short:!0})," Components that create a blendshape only need 1 animated property in the animation clip, regardless of whether that blendshape is single-frame or multi-frame.\n",(0,s.jsx)("br",{}),"This makes them no different from any traditional blendshape not generated by Starmesh."]})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},85041:(e,a,t)=>{t.d(a,{F:()=>n});t(96540);var s=t(20053);const i={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=t(74848);function n(e){let{requiresVRChat:a,isUniversal:t,notVRChat:n,requiresResonite:h,requiresSteamVR:o,requiresChilloutVR:l,requiresVRM:d,compatibleWithVSFAvatar:c,compatibleWithVSeeFace:m,compatibleWithWarudo:p,compatibleWithBeatSaber:u,requiresWarudo:_,notCompatibleWithGltf:f,compatibleWithVNyan:b,short:v,supporter:g}=e,x=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),j=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_requires_vrchat),children:["\ud83d\udcac ",j,"VRChat"]}):"",h?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_requires_resonite),children:["\u26a1 ",j,"Resonite"]}):"",d?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",j,"VRM"]}):"",o?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_requires_steamvr),children:[j,"SteamVR"]}):"",l?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",j,"ChilloutVR"]}):"",c?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[x,"VSFAvatar"]}):"",m?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[x,"VSeeFace"]}):"",b?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_vnyan),children:[x,"VNyan"]}):"",p?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:[x,"Warudo"]}):"",u?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_beatsaber),children:[x,"Beat Saber"]}):"",f?(0,r.jsx)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",_?(0,r.jsx)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",t?(0,r.jsx)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",g?(0,r.jsxs)("div",{className:(0,s.A)(i.hai_tag,i.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,t)=>{t.d(a,{w:()=>i});t(96540);var s=t(74848);function i(e){let{children:a}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:a})})}}}]);