"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1948],{19667:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(74848),i=n(28453);const l={sidebar_position:4},o="Selectors",r={id:"products/starmesh/selectors",title:"Selectors",description:"Select Meshes",source:"@site/docs/products/starmesh/selectors.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/selectors",permalink:"/docs/products/starmesh/selectors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Translate Rotate Scale (TRS)",permalink:"/docs/products/starmesh/operators/translate-rotate-scale"},next:{title:"Examples",permalink:"/docs/products/starmesh/examples"}},c={},d=[{value:"Select Meshes",id:"select-meshes",level:2},{value:"Select Bones",id:"select-bones",level:2},{value:"Select Point Radius",id:"select-point-radius",level:2},{value:"Curve",id:"curve",level:3},{value:"Select Line Radius",id:"select-line-radius",level:2},{value:"Select Blendshapes",id:"select-blendshapes",level:2},{value:"Select Connected Polygons",id:"select-connected-polygons",level:2},{value:"Selection order",id:"selection-order",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"selectors",children:"Selectors"}),"\n",(0,t.jsx)(s.h2,{id:"select-meshes",children:"Select Meshes"}),"\n",(0,t.jsx)(s.p,{children:"Specify which meshes will be affected."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Skinned Mesh Renderers"}),": Select SkinnedMeshRenderer components."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Active Blendshapes"}),": During the calculations, these blendshapes will be emulated to be active as part of the operations."]}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:n(20220).A})}),"\n",(0,t.jsx)(s.h2,{id:"select-bones",children:"Select Bones"}),"\n",(0,t.jsx)(s.p,{children:"Reduces the current selection so that only vertices weighted to the specified bones will be affected."}),"\n",(0,t.jsx)(s.p,{children:"The weight is the sum of all bones that match."}),"\n",(0,t.jsx)(s.p,{children:"You can match bones by transform, or by object name. Matching by object name can be useful if you want to affect bones across different hierarchies."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Bones"}),": Select the bone transforms that you want to affect."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Object Names"}),": Choose the name of the bone transforms that you want to affect."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Include Child Bones"}),": Also includes all child bones."]}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:n(83408).A})}),"\n",(0,t.jsx)(s.h2,{id:"select-point-radius",children:"Select Point Radius"}),"\n",(0,t.jsx)(s.p,{children:"Reduces the current selection so that only vertices within a radius around a point will be selected."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Offset"}),": The center of the selection relative to this object, when there is no Transform selected."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Distance"}),": The radius to the center."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Curve"}),": The normalized distance will be remapped to this curve."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Root Transform"}),": ",(0,t.jsx)(s.em,{children:"(Optional)"})," Choose a transform as the point to sample the position from."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The magenta line shows the halfway point. The faint pink line shows the maximum distance."}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:n(90764).A})}),"\n",(0,t.jsx)(s.h3,{id:"curve",children:"Curve"}),"\n",(0,t.jsxs)(s.p,{children:["Selectors like ",(0,t.jsx)(s.em,{children:"Select Point Radius"})," and ",(0,t.jsx)(s.em,{children:"Select Line Radius"})," have a curve setting."]}),"\n",(0,t.jsx)(s.p,{children:"The curve defines how much a vertex is going to be influenced by the operator over the specified distance.\nBy changing the shape of the curve, you can make that influence stronger or weaker."}),"\n",(0,t.jsx)(s.p,{children:"The yellow line shows the threshold where vertices will be influenced by at least 50%]."}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:n(68093).A})}),"\n",(0,t.jsx)(s.h2,{id:"select-line-radius",children:"Select Line Radius"}),"\n",(0,t.jsx)(s.p,{children:"Reduces the current selection so that only vertices in proximity to a line will be selected."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"A Position"}),": Position of the point A, when there is no Transform selected."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"B Position"}),": Position of the point B, when there is no Transform selected."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Is Capsule"}),": Makes the radius and the curve of B identical to A, effectively turning the selection into a capsule shape."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Radius A"}),": The radius to the line at point A."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Radius B"}),": The radius to the line at point B."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Selection Curve A"}),": Vertices on the A side will have their normalized distance remapped to this curve."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Selection Curve B"}),": Vertices on the B side will have their normalized distance remapped to this curve."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"A Root Transform"}),": ",(0,t.jsx)(s.em,{children:"(Optional)"})," Choose a transform as the point A to sample the position from."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"B Root Transform"}),": ",(0,t.jsx)(s.em,{children:"(Optional)"})," Choose a transform as the point B to sample the position from."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Vertices between A and B will use a proportion of Selection Curve A and Selection Curve B,\nbased on the projection of that vertex on that line."}),"\n",(0,t.jsx)(s.p,{children:"The magenta line shows the halfway point. The faint pink line shows the maximum distance."}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.a,{href:"#curve",children:"you redefine the curves"}),", the yellow line shows the threshold where vertices will be influenced by at least 50%."]}),"\n",(0,t.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,t.jsx)("source",{src:n(47626).A})}),"\n",(0,t.jsx)(s.h2,{id:"select-blendshapes",children:"Select Blendshapes"}),"\n",(0,t.jsx)(s.p,{children:"Reduces the current selection so that vertices moved by a blendshape will be selected."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Blendshapes"}),": The names of the blendshapes to affect."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"select-connected-polygons",children:"Select Connected Polygons"}),"\n",(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)(s.p,{children:"This component is selectable, but the UI is not currently ready for prime time. Use at your own risk."}),(0,t.jsx)(s.p,{children:"There is no gizmo for this component at the moment."})]}),"\n",(0,t.jsx)(s.p,{children:"Reduces the current selection so that only vertices connected together via a chain of polygons will be selected."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Points"}),": The points to sample the first vertices from.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Position"}),": The position of the point."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Distance"}),": The radius of influence of that point."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"selection-order",children:"Selection order"}),"\n",(0,t.jsx)(s.p,{children:"The selection will be done in this order:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Union of all Select Meshes"})}),"\n",(0,t.jsxs)(s.li,{children:["multiplied by (",(0,t.jsx)(s.code,{children:"Union of all Select Bones"})," or 1 if none selected)"]}),"\n",(0,t.jsxs)(s.li,{children:["multiplied by ((",(0,t.jsx)(s.code,{children:"Union of all Select Connected Polygons"})," union with ",(0,t.jsx)(s.code,{children:"Union of all Select Blendshapes"}),") or 1 if none of either)"]}),"\n",(0,t.jsxs)(s.li,{children:["multiplied by ((",(0,t.jsx)(s.code,{children:"Sum of all Select Point Radius"})," added to ",(0,t.jsx)(s.code,{children:"Sum of all Select Line Radius"}),") or 1 if none of either)"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},83408:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/medias/SQzLrkRyb2-673193c087f8ae19505c69215bcaf045.mp4"},68093:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/medias/U7FXb8wgEL-74f00facae0faf6be3cc7fcfda769d4c.mp4"},90764:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/medias/oiUmCmWHPk-618891c3e2d50ee951553fa040e95bd9.mp4"},20220:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/medias/v66A6bxugo-8b9c029f95f21a66f0c83380e2c60ccc.mp4"},47626:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/medias/zHCaHEnKu3-ccb5170de9c8dacfb12434b8caef7736.mp4"}}]);