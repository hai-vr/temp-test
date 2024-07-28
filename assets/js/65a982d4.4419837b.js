"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[100],{15436:(e,t,i)=>{i.d(t,{Ay:()=>o,RM:()=>a});var s=i(74848),n=i(28453);const a=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(t.admonition,{title:"Your support makes this free tool possible",type:"info",children:[(0,s.jsx)(t.p,{children:"Thanks to my Patreon supporters for making tool creation sustainable \u2b50"}),(0,s.jsxs)(t.p,{children:["If you find success in using my free tools, ",(0,s.jsx)(t.a,{href:"https://www.patreon.com/vr_hai",children:"visit my Patreon"})," to support the creation of these tools.",(0,s.jsx)("br",{}),"\nYou'll also get ",(0,s.jsx)(t.a,{href:"/docs/other/patreon",children:"additional tools as Pateon rewards"}),"."]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},95816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>u,frontMatter:()=>h,metadata:()=>c,toc:()=>d});var s=i(74848),n=i(28453),a=i(89618),r=i(85041),o=i(15436);const h={},l="LetMeSee",c={id:"products/let-me-see/index",title:"LetMeSee",description:"LetMeSee (LMS) is a Unity Editor tool that lets you see your content in VR within the Unity Editor, even if you're not a VR game dev.",source:"@site/docs/products/let-me-see/index.md",sourceDirName:"products/let-me-see",slug:"/products/let-me-see/",permalink:"/docs/products/let-me-see/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2b50 IconGen",permalink:"/docs/products/icon-gen"},next:{title:"Lightbox Viewer",permalink:"/docs/products/lightbox-viewer"}},A={},d=[{value:"Download",id:"download",level:2},{value:"VCC",id:"vcc",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"First time setup",id:"first-time-setup",level:3},{value:"Start VR",id:"start-vr",level:3},...o.RM,{value:"Options",id:"options",level:2},{value:"IPD and Scale",id:"ipd-and-scale",level:3},{value:"Alignment",id:"alignment",level:3},{value:"Advanced",id:"advanced",level:3}];function g(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"letmesee",children:"LetMeSee"}),"\n",(0,s.jsx)(a.w,{children:(0,s.jsx)(r.F,{isUniversal:!0})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"LetMeSee"})," (LMS) is a Unity Editor tool that lets you see your content in VR within the Unity Editor, even if you're not a VR game dev."]}),"\n",(0,s.jsx)(t.p,{children:"You can see your content in Edit mode. There is no need to enter Play mode."}),"\n",(0,s.jsx)(t.p,{children:"The Scene tab is used as the camera viewpoint. You can use this to fly through avatars and worlds."}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This tool has been tested using ",(0,s.jsx)(t.strong,{children:"Unity 2022"}),". It does not work in Unity 2019."]})}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",children:(0,s.jsx)("source",{src:i(52529).A})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Using LMS for worlds and level design."})}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",children:(0,s.jsx)("source",{src:i(48192).A})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Using LMS for avatars."})}),"\n",(0,s.jsx)(t.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(t.p,{children:"The tool is free for download using ALCOM or VCC."}),"\n",(0,s.jsx)(t.h3,{id:"vcc",children:"VCC"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use this link to ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install our listing to VCC"})}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Add ",(0,s.jsx)(t.em,{children:"Ha\xef ~ LetMeSee"})," to your project using VCC."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you use the ",(0,s.jsx)(t.a,{href:"/docs/products/listing",children:"ALCOM"})," package manager, you can add the ",(0,s.jsx)(t.em,{children:"Ha\xef ~ LetMeSee"})," package from ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/docs/products/listing",children:"our listing"})}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:"There is a higher risk than usual for issues being caused by the installation of this tool:\nThe XR Plugin Management and the OpenXR Plugin will be installed into the project, which may modify the behaviour of your project."}),(0,s.jsx)(t.p,{children:"Consider making a backup of your project before installing this tool, or try this on a small project first."}),(0,s.jsxs)(t.p,{children:["Please seek for support on the ",(0,s.jsx)(t.a,{href:"/docs/other/discord",children:"Discord server"})," if you encounter any issues with the tool."]})]}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",children:(0,s.jsx)("source",{src:i(18178).A})}),"\n",(0,s.jsx)(t.h3,{id:"first-time-setup",children:"First time setup"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Open ",(0,s.jsx)(t.em,{children:"Tools > LetMeSee > Edit Settings"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"mspaint_LU6EmSiAEe.png",src:i(66827).A+"",width:"384",height:"164"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['If the warning "OpenXR is missing from the project" shows up, press the "',(0,s.jsx)(t.strong,{children:"Install OpenXR"}),'" button.',"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Wait a few seconds for the OpenXR plugin to install."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Unity_aHGC9nsgmW.png",src:i(7218).A+"",width:"464",height:"539"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In your scene, make sure that you have a Camera object, and that Camera object has the ",(0,s.jsx)(t.em,{children:"MainCamera"})," tag."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Unity_LRfUJL5Y4S.png",src:i(53646).A+"",width:"594",height:"298"})}),"\n",(0,s.jsx)(t.h3,{id:"start-vr",children:"Start VR"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure the Game tab is open ",(0,s.jsx)(t.strong,{children:"and visible"})," in the Unity Editor. It cannot be merely open and hidden as a secondary tab."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Unity_BJy2gyCSBa.png",src:i(10184).A+"",width:"341",height:"262"})," ",(0,s.jsx)(t.img,{alt:"Unity_K1zPuSCzOl.png",src:i(56216).A+"",width:"649",height:"260"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Make sure your VR headset is turned on, and SteamVR (or your OpenXR runtime) is running."}),"\n",(0,s.jsxs)(t.li,{children:['Press the "',(0,s.jsx)(t.strong,{children:"Run"}),'" button.']}),"\n",(0,s.jsxs)(t.li,{children:['Put your headset on, look forward, and press the "',(0,s.jsx)(t.strong,{children:"Recenter view"}),'" button.']}),"\n",(0,s.jsx)(t.li,{children:"Move the camera of the Scene view to move around."}),"\n"]}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Freeze camera"}),": Keep the camera in-place. The camera still moves when you move your head around."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Recenter view"}),": Recenter the HMD to be at the same location and rotation as the scene view."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ipd-and-scale",children:"IPD and Scale"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Edit your height"}),": Define your real-life height."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Rescaled height and slider"}),": Scale yourself taller or smaller than your real-world height."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Reset scale"}),": Reset your scale back to match your real-world height."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can use these settings to make yourself shorter or taller than your real-life height."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Change your scale smaller to see small objects as gigantic."}),"\n",(0,s.jsx)(t.li,{children:"Change your scale taller to see worlds and avatars as miniatures."}),"\n"]}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",children:(0,s.jsx)("source",{src:i(42576).A})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This is one of these things that a flat screen completely fails to describe. Give it a try."})}),"\n",(0,s.jsx)(t.h3,{id:"alignment",children:"Alignment"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Camera mode"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When set to ",(0,s.jsx)(t.strong,{children:"Scene View"}),", the camera will move to match the Scene tab."]}),"\n",(0,s.jsxs)(t.li,{children:["When set to ",(0,s.jsx)(t.strong,{children:"Local Space"}),", the camera will match its position and rotation with the parent GameObject of the main camera in the scene."]}),"\n",(0,s.jsxs)(t.li,{children:["When set to ",(0,s.jsx)(t.strong,{children:"Local Position"}),", the camera will match its position with the parent GameObject of the main camera in the scene, but the rotation of the camera remains unaffected."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Move camera up"}),": When using the ",(0,s.jsx)(t.em,{children:"Local Space"})," or ",(0,s.jsx)(t.em,{children:"Local Position"})," camera modes, this moves the camera upwards to match your height and scale, as a multiplier."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Do not switch Scene tabs"}),": If you have multiple Scene tabs open, the camera will not switch between the Scene tabs if this button is pressed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show cursor"}),": Show a cursor while in VR."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cursor color"}),": Change the transparency and color of the cursor."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Force use OpenXR"}),": Force the XR Management to always use OpenXR Loader when running.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Some plugins and SDKs may try to override the XR Loader with another incompatible loader. Checking this option attempts to prevent this from happening."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"(DEBUG) Initialize XR at startup"}),": This mirrors a checkbox in the XR Project settings: Changes the XR Management setting of the same name.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When checked, the XR Loader will automatically start when entering Play mode, regardless of whether ",(0,s.jsx)(t.em,{children:"LetMeSee"})," is running."]}),"\n",(0,s.jsx)(t.li,{children:"This can be a problem in most projects as it may be undesirable for the user to enter VR mode when entering Play mode."}),"\n",(0,s.jsxs)(t.li,{children:["By default, XR Project settings sets this checkbox. ",(0,s.jsx)(t.em,{children:"LetMeSee"})," unchecks this box the first time it is run in the project in order to accomodate the main use case of the users of this tool."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"About OpenXR: You are not obligated to use the OpenXR Loader, it just so happens to be the most sane option for most users."}),"\n",(0,s.jsxs)(t.p,{children:["If you really want to, you could use the OpenVR Loader (i.e. if you need to also support testing overlays in your project). In this case, uncheck the ",(0,s.jsx)(t.em,{children:"Force use OpenXR"})," setting."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},85041:(e,t,i)=>{i.d(t,{F:()=>r});i(96540);var s=i(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var a=i(74848);function r(e){let{requiresVRChat:t,isUniversal:i,notVRChat:r,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:l,requiresVRM:c,compatibleWithVSFAvatar:A,compatibleWithVSeeFace:d,compatibleWithWarudo:g,compatibleWithBeatSaber:u,requiresWarudo:p,notCompatibleWithGltf:m,compatibleWithVNyan:x,short:j,supporter:v}=e,f=j?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Compatible with "}),w=j?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Requires "});return(0,a.jsxs)("span",{children:[t?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",o?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",c?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",h?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",l?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",A?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",d?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",x?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",g?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",u?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",m?(0,a.jsx)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,a.jsx)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",i?(0,a.jsx)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",r?(0,a.jsx)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",v?(0,a.jsxs)("div",{className:(0,s.A)(n.hai_tag,n.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,a.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,t,i)=>{i.d(t,{w:()=>n});i(96540);var s=i(74848);function n(e){let{children:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:t})})}},18178:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/medias/Unity_iniKDmMzca-8a583acca4449fce3ba8428b9685a54a.mp4"},48192:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/medias/lms0-f-42eadf88abce9ab9fb5750643d35e006.mp4"},52529:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/medias/lms1-f-33821c9f4bbd52122d0247b889020336.mp4"},42576:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/medias/miniature-f-5f2923306ec34d9cd9902572815dca37.mp4"},10184:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Unity_BJy2gyCSBa-526fc90994524c8975fa0f9bd32283be.png"},56216:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Unity_K1zPuSCzOl-5756be003a5aceca5f5420b3396b088b.png"},53646:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Unity_LRfUJL5Y4S-d9ac69f2a175098eb9fca0d189a433ef.png"},7218:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Unity_aHGC9nsgmW-8f8d3909ac839f6479566c721df83abe.png"},66827:(e,t,i)=>{i.d(t,{A:()=>s});const s="data:image/png;base64,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"}}]);