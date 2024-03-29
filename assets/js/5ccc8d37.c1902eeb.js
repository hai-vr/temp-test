"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4491],{13773:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(85893),t=r(11151);const s={},i="\u2728 FaceTra Shape Creator V0.7",o={permalink:"/updates/2024/03/29/p0",source:"@site/updates/2024-03-29-p0.md",title:"\u2728 FaceTra Shape Creator V0.7",description:"Major feature: Add Tailoring",date:"2024-03-29T00:00:00.000Z",formattedDate:"March 29, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"\u2699\ufe0f Prefabulous Avatar V1.10.2",permalink:"/updates/2024/03/28/p4"}},l={authorsImageUrls:[]},d=[{value:"Major feature: Add Tailoring",id:"major-feature-add-tailoring",level:2},{value:"Fix: Add workaround for small meshes",id:"fix-add-workaround-for-small-meshes",level:2},{value:"Other fixes",id:"other-fixes",level:2}];function h(e){const a={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.h2,{id:"major-feature-add-tailoring",children:["Major feature: Add ",(0,n.jsx)(a.a,{href:"/docs/products/facetra-shape-creator/tailoring",children:"Tailoring"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Tailoring allows you to transfer a FaceTra file made for one avatar base, to a completely different avatar base."}),"\n",(0,n.jsx)(a.li,{children:"For example: Transfer from Karin to Lime, or transfer from Kikyo to Moe."}),"\n",(0,n.jsxs)(a.li,{children:["Tailoring works by transferring deformations relative to the Construction Lines of the original avatar base, to the Construction Lines of your new avatar base.","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"The difference in size of the Construction Lines is taken into account. For example, when the width of the mouth differs greatly between the two avatar bases, the deformations will be scaled accordingly."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"When using Tailoring, you only need to specify the Construction Lines of your new avatar base, and the blendshapes of your new avatar base."}),"\n",(0,n.jsx)(a.li,{children:"This feature is experimental."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\ud83d\uddd2\ufe0f ",(0,n.jsx)(a.a,{href:"/docs/products/facetra-shape-creator/tailoring",children:"Open documentation"})]}),"\n",(0,n.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,n.jsx)("source",{src:r(51426).Z})}),"\n",(0,n.jsx)(a.h2,{id:"fix-add-workaround-for-small-meshes",children:"Fix: Add workaround for small meshes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Some meshes exported from Blender have an incorrect scale of 0.01 or similar."}),"\n",(0,n.jsx)(a.li,{children:"This triggers an internal conflict with Unity."}),"\n",(0,n.jsx)(a.li,{children:"Due to the nature of purchased avatars and reimporting models with different scale or coordinate system, it is preferable not ask the user to fix the export themselves."}),"\n",(0,n.jsxs)(a.li,{children:["To fix this, if the Workaround for small meshes is enabled in Data Calibration, then:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"We create a blendshape with a maximum weight of 10000 instead of the usual 100 (a hundred times larger)."}),"\n",(0,n.jsx)(a.li,{children:"The components (vertex, normal, tangent) are a hundred times larger."}),"\n",(0,n.jsx)(a.li,{children:"This hundred times factor prevent the vertices from being discarded."}),"\n",(0,n.jsx)(a.li,{children:"Since the controlling animators only animate blendshapes to the value of 100 (and even then, in the case of VRChat, it clamps to 100), the blendshapes are effectively at the expected weight at 100."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"other-fixes",children:"Other fixes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:'Unassigning the Face Mesh is now done by pressing a "\xd7" button, so that the face tracking mesh is safely removed from the mesh.'}),"\n",(0,n.jsx)(a.li,{children:"The user is warned if the model was imported with no normals or tangents, as this is not supported."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\ud83d\udd0d ",(0,n.jsx)(a.a,{href:"/docs/changelogs/facetra-shape-creator#070-2024-03-29-0903",children:"View changelog"})]})]})}function c(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},51426:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/medias/T5A5uJCB8L-5318f28dc0dc38729a1452a2cf6aa53d.mp4"}}]);