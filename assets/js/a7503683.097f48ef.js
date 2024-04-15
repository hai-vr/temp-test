"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1840],{72463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(74848),r=n(28453),i=n(89618),a=n(85041);const o={},h="Generate Twist Bones (Alpha)",l={id:"products/prefabulous/universal/generate-twist-bones",title:"Generate Twist Bones (Alpha)",description:"This component will generate twist bones, which improves the look of the elbow joint by twisting the part of the lower arm that is closer to the elbow.",source:"@site/docs/products/prefabulous/universal/generate-twist-bones.md",sourceDirName:"products/prefabulous/universal",slug:"/products/prefabulous/universal/generate-twist-bones",permalink:"/docs/products/prefabulous/universal/generate-twist-bones",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Edit All Mesh Bounds",permalink:"/docs/products/prefabulous/universal/edit-all-mesh-bounds"},next:{title:"HaiXT Generate Blendshapes for Face Tracking Extensions",permalink:"/docs/products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions"}},d={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Option: Custom weight distribution",id:"option-custom-weight-distribution",level:2},{value:"Option: Bracelets and Wristwatches",id:"option-bracelets-and-wristwatches",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Experimental compatibility options",id:"experimental-compatibility-options",level:2},{value:"Default mode",id:"default-mode",level:3},{value:"&quot;Execute before Modular Avatar Merge Armature&quot;",id:"execute-before-modular-avatar-merge-armature",level:3},{value:"&quot;Execute in Optimizing phase&quot;",id:"execute-in-optimizing-phase",level:3},{value:"Versions",id:"versions",level:2}];function u(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"generate-twist-bones-alpha",children:"Generate Twist Bones (Alpha)"}),"\n",(0,s.jsx)(i.w,{children:(0,s.jsx)(a.F,{isUniversal:!0})}),"\n",(0,s.jsx)(t.p,{children:"This component will generate twist bones, which improves the look of the elbow joint by twisting the part of the lower arm that is closer to the elbow."}),"\n",(0,s.jsx)(t.p,{children:"It creates new twist bones with constraints, and automatically repaints the bones weights of all meshes of the avatar which use that bone."}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\ud83d\udea7\ud83d\udea7\ud83d\udea7 This component is currently in an alpha phase. \ud83d\udea7\ud83d\udea7\ud83d\udea7"})}),(0,s.jsx)(t.p,{children:"At the moment, it only fully supports meshes that are part of the base mesh armature."}),(0,s.jsxs)(t.p,{children:["The current version ",(0,s.jsx)(t.strong,{children:"will not"})," be able to generate twist bones for additional meshes used by ",(0,s.jsx)(t.a,{href:"https://vrcfury.com/components/armature-link/",children:"VRCFury Armature Link"}),",\nand ",(0,s.jsx)(t.strong,{children:"may not"})," be able to generate twist bones for additional meshes used by ",(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-armature",children:"Modular Avatar Merge Armature"}),"."]}),(0,s.jsx)(t.p,{children:"Both are intended to be supported in the future, but it's significantly harder to do so.\nThe component is still released in this state of development as it is beneficial for the bare skin of your avatar."}),(0,s.jsx)(t.p,{children:"Thank you for your understanding."})]}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:n(15571).A})}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:n(50017).A})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Comparison before, and then, after twist bones are added on the arm. Notice how the outlines bite on the elbow joint."})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(t.p,{children:"To use this component:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Add a "PA Generate Twist Bones" component anywhere in your avatar.'}),"\n",(0,s.jsx)(t.li,{children:"The tool will be setup to handle the elbow joint by twisting the part of the lower arm that is closer to the elbow."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["If you're encountering difficulties with the use of this component, ",(0,s.jsxs)(t.strong,{children:["please report any issues on the ",(0,s.jsx)(t.a,{href:"/docs/other/discord",children:"Discord server"})]}),". Thank you!"]}),(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"/docs/other/discord",children:"Discord\u30b5\u30fc\u30d0\u30fc"}),"\u3067\u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})," \u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01"]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Unity_N37ilQuCVl.png",src:n(75894).A+"",width:"719",height:"279"})}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\ud83d\udea7\ud83d\udea7\ud83d\udea7 This component is currently in an alpha phase. \ud83d\udea7\ud83d\udea7\ud83d\udea7"})}),(0,s.jsx)(t.p,{children:"At the moment, it only fully supports meshes that are part of the base mesh armature."}),(0,s.jsxs)(t.p,{children:["The current version ",(0,s.jsx)(t.strong,{children:"will not"})," be able to generate twist bones for additional meshes used by ",(0,s.jsx)(t.a,{href:"https://vrcfury.com/components/armature-link/",children:"VRCFury Armature Link"}),",\nand ",(0,s.jsx)(t.strong,{children:"may not"})," be able to generate twist bones for additional meshes used by ",(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-armature",children:"Modular Avatar Merge Armature"}),"."]}),(0,s.jsx)(t.p,{children:"Both are intended to be supported in the future, but it's significantly harder to do so.\nThe component is still released in this state of development as it is beneficial for the bare skin of your avatar."}),(0,s.jsx)(t.p,{children:"Thank you for your understanding."})]}),"\n",(0,s.jsx)(t.h2,{id:"option-custom-weight-distribution",children:"Option: Custom weight distribution"}),"\n",(0,s.jsx)(t.p,{children:"Vertices that are located inside the space between the lower arm bone and the hand bone are repainted based on their distance to the lower arm bone."}),"\n",(0,s.jsx)(t.p,{children:"The component will use a linear weight distribution by default, meaning that the weight is directly proportional to that distance."}),"\n",(0,s.jsxs)(t.p,{children:["You can choose a custom ",(0,s.jsx)(t.em,{children:"Weight Distribution"})," curve. The X axis of the curve represents the normalized distance to the lower arm bone."]}),"\n",(0,s.jsx)(t.p,{children:"The curve should look like a slope going uphill. Always keep the (0,0) and (1,1) points where they are."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"tLLlJZ4XEX.png",src:n(40369).A+"",width:"897",height:"536"}),(0,s.jsx)(t.img,{alt:"rR2EJxtTwA.png",src:n(41995).A+"",width:"897",height:"536"})]}),"\n",(0,s.jsx)(t.h2,{id:"option-bracelets-and-wristwatches",children:"Option: Bracelets and Wristwatches"}),"\n",(0,s.jsx)(t.p,{children:"If you're wearing arm bracelets, or a wristwatch, or any rigid object which is part of your arm as a SkinnedMeshRenderer (simple MeshRenderers do not count),\nyou need to specify blendshapes that either show or hide those bracelets. These blendshapes are used to figure out which vertices are part of that bracelet."}),"\n",(0,s.jsx)(t.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,s.jsx)(t.p,{children:"Each twist bone:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adds one bone to the avatar's main Armature that is used by mesh skinning, and"}),"\n",(0,s.jsx)(t.li,{children:"Adds one constraint."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By default, the component adds one twist bone for each arm, making for a total of 2 bones used by mesh skinning, and 2 constraints."}),"\n",(0,s.jsx)(t.p,{children:"If there are multiple components that create the same twist bone on different SkinnedMeshRenderers armatures, but it's effectively the same bone\nwhen the armatures are merged together, then only one constraint is created."}),"\n",(0,s.jsx)(t.h2,{id:"experimental-compatibility-options",children:"Experimental compatibility options"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\ud83d\udea7\ud83d\udea7\ud83d\udea7 These options are experimental and are likely to be removed in future updates. \ud83d\udea7\ud83d\udea7\ud83d\udea7"})})}),"\n",(0,s.jsxs)(t.p,{children:["This component is currently in an alpha stage, as there are technical difficulties to integrate this component so that it works with various armature merging systems\nsuch as ",(0,s.jsx)(t.a,{href:"https://vrcfury.com/components/armature-link/",children:"VRCFury Armature Link"})," and ",(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-armature",children:"Modular Avatar Merge Armature"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For this reason, some experimental options are available during this alpha stage to try some things out."}),"\n",(0,s.jsx)(t.h3,{id:"default-mode",children:"Default mode"}),"\n",(0,s.jsx)(t.p,{children:"By default, this component will execute after Modular Avatar Merge Armature executes."}),"\n",(0,s.jsx)(t.h3,{id:"execute-before-modular-avatar-merge-armature",children:'"Execute before Modular Avatar Merge Armature"'}),"\n",(0,s.jsxs)(t.p,{children:["When enabled, this component will be processed before ",(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-armature",children:"Modular Avatar Merge Armature"})," executes."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be used to create twist bones in other armatures using the ",(0,s.jsx)(t.em,{children:"Use Custom"})," option, before Modular Avatar or VRCFury tries to merge armatures."]}),"\n",(0,s.jsx)(t.h3,{id:"execute-in-optimizing-phase",children:'"Execute in Optimizing phase"'}),"\n",(0,s.jsx)(t.p,{children:"When enabled, this component will be processed during the Optimization phase."}),"\n",(0,s.jsx)(t.p,{children:"This is supposed to be an incorrect use of the Optimization phase as generating twist bones is not an optimization, but it gives a chance to try executing this component in a\nparticular point in the build process."}),"\n",(0,s.jsx)(t.h2,{id:"versions",children:"Versions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"1.11.1"}),": Fix Generate Twist Bones help URL no longer points to localhost."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"1.11.0"}),": Added."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Classification: ",(0,s.jsx)(t.em,{children:"This component is application-agnostic, however, the quality and relevance of the generated twist bones\nheavily depends on the inverse kinematics strategy or animation system used by your target platform or app, as different platforms and apps\nmay orient the arm bones differently for a given arm position. This can make the generated twist bones irrelevant on some platforms or apps."})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85041:(e,t,n)=>{n.d(t,{F:()=>a});n(96540);var s=n(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK"};var i=n(74848);function a(e){let{requiresVRChat:t,isUniversal:n,notVRChat:a,requiresResonite:o,requiresSteamVR:h}=e;return(0,i.jsxs)("span",{children:[t?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:"\ud83d\udcac Requires VRChat"}):"",o?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_resonite),children:"\u26a1 Requires Resonite"}):"",h?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:"Requires SteamVR"}):"",n?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",a?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,t,n)=>{n.d(t,{w:()=>r});n(96540);var s=n(74848);function r(e){let{children:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:t})})}},15571:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/medias/5BVQrRO3s5-cd5387fba1c95888013522af02c588c4.mp4"},50017:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/medias/auto-twist-f-a6842f22991156aa1957ff1331720a8c.mp4"},75894:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Unity_N37ilQuCVl-f052b5c6fc4504f4f48299307113dc1d.png"},41995:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rR2EJxtTwA-c5f40fb1f3506c9922be818bd298cff9.png"},40369:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tLLlJZ4XEX-17e610676be1877a0be42a004bbd0493.png"}}]);