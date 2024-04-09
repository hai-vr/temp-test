"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7235],{9564:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=n(74848),i=n(28453);const r={date:"2024-01-05T04:00"},o="\u2728 FaceTra Shape Creator V0.4",a={permalink:"/updates/2024/01/05/p1",source:"@site/updates/2024-01-05-p1.md",title:"\u2728 FaceTra Shape Creator V0.4",description:"- Change mesh calibration to support meshes that have a non-zero origin (offset).",date:"2024-01-05T04:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-01-05T04:00"},unlisted:!1,prevItem:{title:"\u2615 VRWare Fonts update",permalink:"/updates/2024/01/07/p0-c"},nextItem:{title:"\u2699\ufe0f ComboGestureExpressions 3.1.5102",permalink:"/updates/2024/01/05/p0"}},c={authorsImageUrls:[]},h=[];function l(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Change mesh calibration to support meshes that have a non-zero origin (offset)."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Mesh calibration is now done by converting vertices to avatar space through the 0th bindpose, which is generally the hip bone."}),"\n",(0,t.jsxs)(s.li,{children:["\u26a0\ufe0f\u26a1 This means ",(0,t.jsx)(s.strong,{children:"if the user shifts the hip up or down"}),", this could cause existing FaceTra rigs to cease functioning as expected.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact me on ",(0,t.jsx)(s.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:'For this reason there is now a "Override Bone Zero" option in mesh calibration to recalibrate the existing FaceTra data if necessary.'}),"\n",(0,t.jsx)(s.li,{children:"Existing mesh calibration options have been grayed out."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Make vertex selection more aggressive."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Vertex selection will now add neighbours of vertices that have the exact same position."}),"\n",(0,t.jsx)(s.li,{children:"This is intended to correct for teeth/tongue selection issues some users were having."}),"\n",(0,t.jsxs)(s.li,{children:["\u26a0\ufe0f\u26a1 Since the selection is more aggressive, ",(0,t.jsx)(s.strong,{children:"this might expand the existing selections"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact me on ",(0,t.jsx)(s.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add FTWireMeshDebugger component for support requests."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\ud83d\udd0d ",(0,t.jsx)(s.a,{href:"/docs/changelogs/facetra-shape-creator#040-2024-01-05-0349",children:"View changelog"})]}),"\n",(0,t.jsxs)(s.p,{children:["\ud83d\uddd2\ufe0f ",(0,t.jsx)(s.a,{href:"/docs/products/facetra-shape-creator",children:"Open documentation"})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);