"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2660],{8732:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=i(74848),s=i(28453),r=i(89618),n=i(85041),h=i(66926);const l={},o="VRChat prefabs",c={id:"products/starmesh/prefabs/vrc",title:"VRChat prefabs",description:"In order to use these prefabs, you need to install Starmesh V1.5 or higher.",source:"@site/docs/products/starmesh/prefabs/vrc.md",sourceDirName:"products/starmesh/prefabs",slug:"/products/starmesh/prefabs/vrc",permalink:"/docs/products/starmesh/prefabs/vrc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prefabs",permalink:"/docs/products/starmesh/prefabs/"},next:{title:"Reference manual",permalink:"/docs/products/starmesh/reference"}},d={},p=[{value:"<em>Ripple Wave Back Sample</em> prefabs",id:"ripple-wave-back-sample-prefabs",level:2},{value:"Basic setup",id:"basic-setup",level:3},{value:"Add or remove the menu",id:"add-or-remove-the-menu",level:3},{value:"Other",id:"other",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"<em>Squishy Hair</em> prefabs",id:"squishy-hair-prefabs",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"vrchat-prefabs",children:"VRChat prefabs"}),"\n",(0,t.jsx)(r.w,{children:(0,t.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,t.jsxs)(a.p,{children:["In order to use these prefabs, you need to install ",(0,t.jsx)(a.a,{href:"/docs/products/starmesh/install",children:(0,t.jsx)(a.strong,{children:"Starmesh V1.5 or higher"})}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["You will also need ",(0,t.jsx)(a.em,{children:"Modular Avatar"})," installed in your project."]}),"\n",(0,t.jsxs)(a.admonition,{type:"warning",children:[(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.strong,{children:["Starmesh generates ",(0,t.jsx)(a.em,{children:"Modular Avatar Blendshape Sync"})," components during the build"]})," in order to bind the generated blendshapes\nof the ",(0,t.jsx)(a.em,{children:"Starmesh Select Meshes"})," components with existing animations inside the animators, while allowing multiple independent copies of that animator to coexist in the same avatar."]}),(0,t.jsx)(a.p,{children:"The components you see inside the prefab are just the tip of the iceberg."}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"You cannot replace the Modular Avatar components with the equivalent VRCFury components"}),"."]})]}),"\n",(0,t.jsxs)(a.h2,{id:"ripple-wave-back-sample-prefabs",children:[(0,t.jsx)(a.em,{children:"Ripple Wave Back Sample"})," prefabs"]}),"\n",(0,t.jsx)(a.p,{children:"Current version of this prefab: V1.1"}),"\n",(0,t.jsx)(h.U,{src:"../img/qU1Rm3YaXR.mp4"}),"\n",(0,t.jsx)(a.h3,{id:"basic-setup",children:"Basic setup"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"https://github.com/hai-vr/p4s/raw/main/RippleWaveBackSample_VRC_StarmeshV1.5.0_V1.1.unitypackage",children:"Download this prefab"})})," and install it in your project.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["(You need to already have ",(0,t.jsxs)(a.a,{href:"/docs/products/starmesh/install",children:[(0,t.jsx)(a.em,{children:"Starmesh"})," and ",(0,t.jsx)(a.em,{children:"Modular Avatar"})," installed in your project"]}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["The prefabs for this gimmick are located in ",(0,t.jsx)(a.code,{children:"Assets/HaiPrefabsForStarmesh/PrefabsVRC/RippleWaveBackSample/"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Add ",(0,t.jsx)(a.strong,{children:"RippleWaveBackSample.prefab"})," inside your avatar."]}),"\n",(0,t.jsxs)(a.li,{children:["Change the position of the ",(0,t.jsx)(a.em,{children:"Center"})," object to line up with your hip (X and Z)."]}),"\n",(0,t.jsxs)(a.li,{children:["Change the position of the ",(0,t.jsx)(a.em,{children:"RippleWave"})," object to line up with your hip (X and Z)."]}),"\n",(0,t.jsxs)(a.li,{children:["In ",(0,t.jsx)(a.em,{children:"SelectMeshes"}),", select the meshes that will be affected."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"add-or-remove-the-menu",children:"Add or remove the menu"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Add ",(0,t.jsx)(a.strong,{children:"RippleWaveBackToggleMenu.prefab"})," inside your avatar to create a menu item that toggles the contacts on and off. By default, it is ON."]}),"\n",(0,t.jsxs)(a.li,{children:["By default, the prefab adds 1 synced bool (1 bit) for a menu toggle, which is ON by default.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If you want to remove that toggle, on the ",(0,t.jsx)(a.em,{children:"RippleWaveBackSample"})," object, set the RippleWaveBackToggle > Parameter type to be Animator only."]}),"\n",(0,t.jsxs)(a.li,{children:["If you want to make that toggle OFF by default, on the ",(0,t.jsx)(a.em,{children:"RippleWaveBackSample"})," object, set the RippleWaveBackToggle > Default value to 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"other",children:"Other"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["You can change the speed of the animation:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["On the ",(0,t.jsx)(a.em,{children:"RippleWaveBackSample"})," object, set the RippleWaveBackSpeed Default value to another speed value."]}),"\n",(0,t.jsx)(a.li,{children:"A speed value of 1 makes the animation play in 1 second."}),"\n",(0,t.jsx)(a.li,{children:"A speed value of 1.5 makes the animation play in 0.66 second."}),"\n",(0,t.jsx)(a.li,{children:"A speed value of 2 makes the animation play in 0.5 second."}),"\n",(0,t.jsx)(a.li,{children:"A speed value of 3 makes the animation play in 0.33 second."}),"\n",(0,t.jsx)(a.li,{children:"A speed value of 4 makes the animation play in 0.25 second."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"You can have multiple of those prefabs in the same avatar, and they will execute independently."}),"\n",(0,t.jsxs)(a.li,{children:["By default, the ",(0,t.jsx)(a.em,{children:"BoneProxy"})," is configured to attach to your hip when the avatar is being built."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Each instance of this prefab use a Starmesh Ripple Wave operator, which generates a multi-frame blendshape that has a ",(0,t.jsx)(a.a,{href:"/docs/products/starmesh/faq#vram-cost-of-multi-frame-blendshapes",children:"VRAM cost"})," higher than most blendshapes.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Keep an eye on the VRAM estimate located at the bottom of the inspector for the Ripple Wave operator."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Each instance of this prefab costs 1 animator layer, which is not easily convertible to a blend tree because an animation is playing."}),"\n",(0,t.jsx)(a.li,{children:"Each instance of this prefab has 2 contact receivers."}),"\n",(0,t.jsx)(a.li,{children:"By default, all instances of this prefab share the same synced toggle (1 bit)."}),"\n"]}),"\n",(0,t.jsxs)(a.h2,{id:"squishy-hair-prefabs",children:[(0,t.jsx)(a.em,{children:"Squishy Hair"})," prefabs"]}),"\n",(0,t.jsxs)(a.p,{children:["The prefabs for this gimmick is located in ",(0,t.jsx)(a.code,{children:"Assets/HaiPrefabsForStarmesh/PrefabsVRC/SquishyHair/"}),"."]}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsx)(a.p,{children:"This prefab is not currently available, please check again later."})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},85041:(e,a,i)=>{i.d(a,{F:()=>n});i(96540);var t=i(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=i(74848);function n(e){let{requiresVRChat:a,isUniversal:i,notVRChat:n,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:o,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:p,compatibleWithWarudo:m,compatibleWithBeatSaber:u,requiresWarudo:_,notCompatibleWithGltf:v,compatibleWithVNyan:g,short:j,supporter:x}=e,f=j?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),b=j?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",b,"VRChat"]}):"",h?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",b,"Resonite"]}):"",c?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",b,"VRM"]}):"",l?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[b,"SteamVR"]}):"",o?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",b,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",p?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",g?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",m?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",u?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",v?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",_?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",i?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",x?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,i)=>{i.d(a,{w:()=>s});i(96540);var t=i(74848);function s(e){let{children:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:a})})}},66926:(e,a,i)=>{i.d(a,{U:()=>r});i(96540);var t=i(74848);const s="https://downscale.srv.hai-vr.dev/assets/docs/";function r(e){const a=e.cdn??s+e.src.substring(e.src.lastIndexOf("/")+1);return(0,t.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,t.jsx)("source",{src:a})})}}}]);