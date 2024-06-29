"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9940],{4297:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=i(74848),s=i(28453);const t={sidebar_position:2},l="Execution order",a={id:"resilience/internal/execution-order",title:"Execution order",description:"In Metabus",source:"@site/docs/resilience/internal/execution-order.md",sourceDirName:"resilience/internal",slug:"/resilience/internal/execution-order",permalink:"/docs/resilience/internal/execution-order",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"resilienceSidebar",previous:{title:"Coordinate spaces",permalink:"/docs/resilience/internal/coordinate-spaces"},next:{title:"DataViz Lifecycle",permalink:"/docs/resilience/internal/base/data-viz-lifecycle"}},o={},d=[{value:"In Metabus",id:"in-metabus",level:2},{value:"In Update",id:"in-update",level:2},{value:"In Late Update",id:"in-late-update",level:2}];function c(e){const n={h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"execution-order",children:"Execution order"}),"\n",(0,r.jsx)(n.h2,{id:"in-metabus",children:"In Metabus"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Execute Metabus. (",(0,r.jsx)(n.strong,{children:"+9000"})," : Metabus module :: )"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"in-update",children:"In Update"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Acquire all hardware tracker placements. (",(0,r.jsx)(n.strong,{children:"+800"})," : PartialVR module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Convert hardware trackers to humanoid standins. (",(0,r.jsx)(n.strong,{children:"+900"})," : Interaction module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Copy humanoid standins from Camera Space to Avatar Space. (",(0,r.jsx)(n.strong,{children:"+1000"})," : Interaction module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Place the IK End Effectors. (",(0,r.jsx)(n.strong,{children:"+2000"})," : Kinematics module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Solve local IK without external influences. (",(0,r.jsx)(n.strong,{children:"+3000"})," : Kinematics module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Pose the fingers. (",(0,r.jsx)(n.strong,{children:"+3001"})," : Kinematics module :: )"]}),"\n",(0,r.jsxs)(n.li,{children:["Store the solved IK pose. (",(0,r.jsx)(n.strong,{children:"+3010"})," : Snapshot module :: )"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"in-late-update",children:"In Late Update"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Commit renderer pool (",(0,r.jsx)(n.strong,{children:"+30000"})," : Base module :: )"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);