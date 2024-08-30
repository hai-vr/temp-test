"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5762],{10596:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(74848),r=s(28453);const i={date:"2024-08-24T07:00"},o="\u2728 Double Hip Tracker V1.3.0",a={permalink:"/updates/2024/08/30/p0",source:"@site/updates/2024-08-30-p0.md",title:"\u2728 Double Hip Tracker V1.3.0",description:"This update introduces two changes in the behaviour of the double trackers:",date:"2024-08-24T07:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-08-24T07:00"},unlisted:!1,nextItem:{title:"\u2600\ufe0f Convert VRC Constraints to Unity Constraints (Prefabulous for Platform Conversions V2.0)",permalink:"/updates/2024/08/22/p2"}},h={authorsImageUrls:[]},l=[];function c(e){const t={a:"a",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This update introduces two changes in the behaviour of the double trackers:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["They ",(0,n.jsx)(t.em,{children:"should"})," no longer fly away when both trackers are lost."]}),"\n",(0,n.jsxs)(t.li,{children:["We have ",(0,n.jsx)(t.a,{href:"/docs/products/double-hip-tracker/v1.3-new-detection-method",children:"an additional method to detect trackers flying off"}),"."]}),"\n"]}),"\n",(0,n.jsx)("video",{controls:!0,width:"816",children:(0,n.jsx)("source",{src:s(65202).A})}),"\n",(0,n.jsx)(t.p,{children:"Changes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.strong,{children:'"Freeze when both trackers are lost"'})," checkbox: If both trackers of any given double tracker are lost, then the tracker will freeze in place.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This new behaviour may be more in line with VRChat's current handling of single trackers being lost. The previous behaviour used to be that the tracker\nwould fall back to the degraded data of the last known working tracker."}),"\n",(0,n.jsx)(t.li,{children:"On previous versions, this checkbox would be effectively OFF. The default behavior is now for this checkbox to be ON."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.strong,{children:"a new method to detect when trackers are flying off"}),", even when SteamVR hardware trackers are reporting themselves as healthy.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In short, a new option called ",(0,n.jsx)(t.strong,{children:"Detect Separation"})," (default ON), will measure the distance that separates the two trackers. If\nthat distance changes too much, one of the trackers probably flew off. We will now try to detect that, in addition to the usual method."]}),"\n",(0,n.jsxs)(t.li,{children:["There is ",(0,n.jsx)(t.a,{href:"/docs/products/double-hip-tracker/v1.3-new-detection-method",children:"a dedicated page that explains this new option"}),", and when to turn this off."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.strong,{children:"Auto-detect hip trackers"})," checkbox: You can now disable automatic detection of hip trackers.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"When you disable automatic detection, it works identically to the Double Chest Tracker."}),"\n",(0,n.jsx)(t.li,{children:'You can use this if you want to always use the same two hip tracker serial numbers without needing to shake your hips, but beware,\nyou may have to press the "Realign Trackers" button if you happen to wear your double hip tracker belt after starting the application.'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["The UI is now organized across tabs.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Align trackers"})," tab: For normal use. It has the buttons to realign trackers."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Edit trackers"})," tab: Configure which Double Trackers are enabled, and their configuration."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Other"})," tab: Provides rarely used options."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.em,{children:"Send HMD position to VRChat"})," (default OFF).","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This may help some users ",(0,n.jsx)(t.a,{href:"https://docs.vrchat.com/docs/osc-trackers#receiving-head-data",children:"who have mismatching tracking spaces"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"This option will be used during support requests to troubleshoot mismatching tracking space issues."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add vertical offset options: Some users have been having issues with the OSC tracker having some sort of vertical offset.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"No solution had been found for this, so the option to offset the tracker vertically stays."}),"\n",(0,n.jsx)(t.li,{children:"This option will be used during support requests to troubleshoot mismatching tracking space issues."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},65202:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/medias/dhtv130-f-5252c4aff0d618366ec859b832fe0d1a.mp4"}}]);