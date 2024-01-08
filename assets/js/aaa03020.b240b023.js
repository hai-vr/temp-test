"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1166],{44935:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(85893),r=n(11151);const i={date:"2024-01-05T04:00"},a="\u2728 FaceTra Shape Creator V0.4",o={permalink:"/updates/2024/01/05/p1",source:"@site/updates/2024-01-05-p1.md",title:"\u2728 FaceTra Shape Creator V0.4",description:"- Change mesh calibration to support meshes that have a non-zero origin (offset).",date:"2024-01-05T04:00:00.000Z",formattedDate:"January 5, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-01-05T04:00"},unlisted:!1,prevItem:{title:"\u2728 FaceTra Shape Creator V0.5",permalink:"/updates/2024/01/08/p0"},nextItem:{title:"\u2699\ufe0f ComboGestureExpressions 3.1.5102",permalink:"/updates/2024/01/05/p0"}},h={authorsImageUrls:[]},c=[];function l(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Change mesh calibration to support meshes that have a non-zero origin (offset)."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Mesh calibration is now done by converting vertices to avatar space through the 0th bindpose, which is generally the hip bone."}),"\n",(0,t.jsxs)(s.li,{children:["\u26a0\ufe0f\u26a1 This means ",(0,t.jsx)(s.strong,{children:"if the user shifts the hip up or down"}),", this could cause existing FaceTra rigs to cease functioning as expected.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact me on ",(0,t.jsx)(s.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:'For this reason there is now a "Override Bone Zero" option in mesh calibration to recalibrate the existing FaceTra data if necessary.'}),"\n",(0,t.jsx)(s.li,{children:"Existing mesh calibration options have been grayed out."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Make vertex selection more aggressive."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Vertex selection will now add neighbours of vertices that have the exact same position."}),"\n",(0,t.jsx)(s.li,{children:"This is intended to correct for teeth/tongue selection issues some users were having."}),"\n",(0,t.jsxs)(s.li,{children:["\u26a0\ufe0f\u26a1 Since the selection is more aggressive, ",(0,t.jsx)(s.strong,{children:"this might expand the existing selections"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact me on ",(0,t.jsx)(s.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add FTWireMeshDebugger component for support requests."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\ud83d\udd0d ",(0,t.jsx)(s.a,{href:"/docs/changelogs/facetra-shape-creator#040-2024-01-05-0349",children:"View changelog"})]}),"\n",(0,t.jsxs)(s.p,{children:["\ud83d\uddd2\ufe0f ",(0,t.jsx)(s.a,{href:"/docs/products/facetra-shape-creator",children:"Open documentation"})]})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);