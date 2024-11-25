"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4306],{75481:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var r=a(74848),n=a(28453),i=a(89618),t=a(85041),l=a(66926);const d={title:"\u2600\ufe0f Prefabulous V2.0"},h="\u2600\ufe0f Prefabulous V2.0",o={permalink:"/updates/2024/06/13/p0",source:"@site/updates/2024-06-13-p0.md",title:"\u2600\ufe0f Prefabulous V2.0",description:"I am releasing Prefabulous V2. This update makes it so Prefabulous components can be used in other social VR platforms, apps, and VTubing apps.",date:"2024-06-13T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u2600\ufe0f Prefabulous V2.0"},unlisted:!1,prevItem:{title:"\u2600\ufe0f Chillaxins",permalink:"/updates/2024/06/13/p1"},nextItem:{title:"\u2728 Vixen V1.2.0",permalink:"/updates/2024/06/03/p0"}},c={authorsImageUrls:[]},u=[{value:"Updating from V1 to V2 for users who don&#39;t use VCC",id:"updating-from-v1-to-v2-for-users-who-dont-use-vcc",level:3},{value:"\u2600\ufe0f New component: Add ARKit to BlendShapeAvatar",id:"\ufe0f-new-component-add-arkit-to-blendshapeavatar",level:3},{value:"API Changes",id:"api-changes",level:3},{value:"Prefabulous Universal name changes",id:"prefabulous-universal-name-changes",level:4},{value:"Prefabulous for VRChat name changes",id:"prefabulous-for-vrchat-name-changes",level:4},{value:"Prefabulous for VRM and VTubing name changes",id:"prefabulous-for-vrm-and-vtubing-name-changes",level:4}];function p(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.w,{children:(0,r.jsx)(t.F,{isUniversal:!0})}),"\n",(0,r.jsxs)(s.p,{children:["I am releasing ",(0,r.jsx)(s.strong,{children:"Prefabulous V2"}),". This update makes it so Prefabulous components can be used in other social VR platforms, apps, and VTubing apps.\nVRChat is no longer required."]}),"\n",(0,r.jsxs)(s.p,{children:["Users who use the VCC/ALCOM package manager will not need to take special actions to update to V2.\n",(0,r.jsxs)(s.em,{children:["If you don't use VCC/ALCOM, ",(0,r.jsx)(s.a,{href:"#updating-from-v1-to-v2-for-users-who-dont-use-vcc",children:"see below"}),"."]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Prefabulous"})," has been split into two packages, and I am introducing a new package:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/products/prefabulous/universal",children:"Prefabulous Universal"})})," contains platform-agnostic components."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/products/prefabulous/vrchat",children:"Prefabulous for VRChat"})})," contains components that are specific to VRChat."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/products/prefabulous/vrm",children:"Prefabulous for VRM and VTubing"})})," is a ",(0,r.jsx)(s.strong,{children:"new package"})," that contains VRM-specific components."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"updating-from-v1-to-v2-for-users-who-dont-use-vcc",children:"Updating from V1 to V2 for users who don't use VCC"}),"\n",(0,r.jsx)(s.p,{children:"If you don't use VCC, you will need to follow special upgrade instructions from V1 to V2:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"If you use VCC/ALCOM, do not do this."})}),"\n",(0,r.jsx)(s.li,{children:"Open Unity."}),"\n",(0,r.jsx)(s.li,{children:"Create a new empty scene."}),"\n",(0,r.jsx)(s.li,{children:"Remove the Prefabulous package."}),"\n",(0,r.jsx)(s.li,{children:"Add the new Prefabulous Universal package."}),"\n",(0,r.jsx)(s.li,{children:"Add the new Prefabulous for VRChat package."}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"\ufe0f-new-component-add-arkit-to-blendshapeavatar",children:["\u2600\ufe0f New component: ",(0,r.jsx)(s.a,{href:"/docs/products/prefabulous/vrm/add-arkit-to-blendshapeavatar",children:"Add ARKit to BlendShapeAvatar"})]}),"\n",(0,r.jsxs)(s.p,{children:["A new component, ",(0,r.jsx)(s.a,{href:"/docs/products/prefabulous/vrm/add-arkit-to-blendshapeavatar",children:"Add ARKit to BlendShapeAvatar"}),", has been added to Prefabulous for VRM."]}),"\n",(0,r.jsx)(s.p,{children:"This component automatically links all blendshapes found in your meshes as ARKit-named BlendShapeClips for use by VRM apps."}),"\n",(0,r.jsx)(l.U,{src:"/docs/products/prefabulous/img/vrm/D5H4ofatKD.mp4"}),"\n",(0,r.jsx)(s.h3,{id:"api-changes",children:"API Changes"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Prefabulous is not meant to have any public API,"})," but there has been changes that could affect other plugins."]}),"\n",(0,r.jsx)(s.p,{children:"In essence:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"NDMF plugin qualified names have been changed,"}),"\n",(0,r.jsx)(s.li,{children:"class names have been changed,"}),"\n",(0,r.jsx)(s.li,{children:"namespaces have been changed,"}),"\n",(0,r.jsx)(s.li,{children:"assembly definitions have been changed,"}),"\n",(0,r.jsx)(s.li,{children:"internal classes have been changed."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"prefabulous-universal-name-changes",children:"Prefabulous Universal name changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Component namespace: ",(0,r.jsx)(s.code,{children:"Prefabulous.Universal.Common.Runtime"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component class"}),(0,r.jsx)(s.th,{children:"NDMF Plugin"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousAssignUVTile"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.AssignUVTile"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousConvertBlendshapeConventions"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.ConvertBlendshapeConventions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousDeletePolygons"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.DeletePolygons"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousEditAllMeshAnchorOverride"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.EditAllMeshAnchorOverride"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousEditAllMeshBounds"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.EditAllMeshBounds"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousGenerateBlendshapesFTE"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.GenerateBlendshapesFTE"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousGenerateTwistBones"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.GenerateTwistBones"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousRecalculateNormals"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.RecalculateNormals"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousReplaceTextures"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.universal.ReplaceTextures"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousChangeAvatarScale"}),(0,r.jsx)(s.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"prefabulous-for-vrchat-name-changes",children:"Prefabulous for VRChat name changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Component namespace: ",(0,r.jsx)(s.code,{children:"Prefabulous.VRC.Runtime"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component class"}),(0,r.jsx)(s.th,{children:"NDMF Plugin"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousAccurateEyeTracking"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.AccurateEyeTracking"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousBlankExpressions"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.BlankExpressions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousBlankFXAnimator"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"dev.hai-vr.prefabulous.vrc.ReplaceAnimators"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousBlankGestureAnimator"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"dev.hai-vr.prefabulous.vrc.ReplaceAnimators"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousReplaceActionAnimator"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"dev.hai-vr.prefabulous.vrc.ReplaceAnimators"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousReplaceLocomotionAnimator"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"dev.hai-vr.prefabulous.vrc.ReplaceAnimators"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousFaceTrackingExtensions"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.FaceTrackingExtensions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousImportExpressionParameters"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.ImportExpressionParameters"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousLockLocomotionMenuItem"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.LockLocomotionMenuItem"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousMassBlendshapeSync"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.MassBlendshapeSync"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["(Universal)",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"PrefabulousChangeAvatarScale"})]}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrc.ChangeAvatarScaleForVRChat"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"prefabulous-for-vrm-and-vtubing-name-changes",children:"Prefabulous for VRM and VTubing name changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Component namespace: ",(0,r.jsx)(s.code,{children:"Prefabulous.VRM.Runtime"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component class"}),(0,r.jsx)(s.th,{children:"NDMF Plugin"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PrefabulousAddARKitToBlendShapeAvatar"}),(0,r.jsx)(s.td,{children:"dev.hai-vr.prefabulous.vrm.AddARKitToBlendShapeAvatar"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:["\ud83d\uddd2\ufe0f ",(0,r.jsx)(s.a,{href:"/docs/products/prefabulous",children:"Open documentation"})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85041:(e,s,a)=>{a.d(s,{F:()=>t});a(96540);var r=a(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var i=a(74848);function t(e){let{requiresVRChat:s,isUniversal:a,notVRChat:t,requiresResonite:l,requiresSteamVR:d,requiresChilloutVR:h,requiresVRM:o,compatibleWithVSFAvatar:c,compatibleWithVSeeFace:u,compatibleWithWarudo:p,compatibleWithBeatSaber:x,requiresWarudo:v,notCompatibleWithGltf:j,compatibleWithVNyan:m,short:_,supporter:b}=e,f=_?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Compatible with "}),g=_?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Requires "});return(0,i.jsxs)("span",{children:[s?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:["\ud83d\udcac ",g,"VRChat"]}):"",l?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_requires_resonite),children:["\u26a1 ",g,"Resonite"]}):"",o?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",g,"VRM"]}):"",d?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:[g,"SteamVR"]}):"",h?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",g,"ChilloutVR"]}):"",c?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",u?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",m?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",p?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",x?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",j?(0,i.jsx)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",v?(0,i.jsx)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,i.jsx)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",t?(0,i.jsx)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",b?(0,i.jsxs)("div",{className:(0,r.A)(n.hai_tag,n.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,i.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,s,a)=>{a.d(s,{w:()=>n});a(96540);var r=a(74848);function n(e){let{children:s}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:s})})}},66926:(e,s,a)=>{a.d(s,{U:()=>i});a(96540);var r=a(74848);const n="https://downscale.srv.hai-vr.dev/assets/docs/";function i(e){const s=e.cdn??n+e.src.substring(e.src.lastIndexOf("/")+1);return(0,r.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,r.jsx)("source",{src:s})})}}}]);