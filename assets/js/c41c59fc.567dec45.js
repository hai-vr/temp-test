"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7276],{75046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(85893),r=s(11151);const t={title:"ComboGestureExpressions"},o=void 0,l={id:"changelogs/combo-gesture-expressions",title:"ComboGestureExpressions",description:"3.1.5102 (Beta)",source:"@site/docs/changelogs/combo-gesture-expressions.md",sourceDirName:"changelogs",slug:"/changelogs/combo-gesture-expressions",permalink:"/docs/changelogs/combo-gesture-expressions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ComboGestureExpressions"},sidebar:"changelogsSidebar",previous:{title:"Convert ComboGesture to FaceEmo",permalink:"/docs/changelogs/cge-to-faceemo"},next:{title:"Double Hip Tracker",permalink:"/docs/changelogs/double-hip-tracker"}},a={},c=[{value:"3.1.5102 (Beta)",id:"315102-beta",level:2},{value:"Fixes",id:"fixes",level:3},{value:"3.1.5101 (Beta)",id:"315101-beta",level:2},{value:"Major changes",id:"major-changes",level:3},{value:"Other changes",id:"other-changes",level:3},{value:"Fixes",id:"fixes-1",level:3}];function d(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"315102-beta",children:"3.1.5102 (Beta)"}),"\n",(0,i.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.p,{children:"Deselect old clip before opening clip in Visual Expressions Editor:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Try to fix an issue where Visual Expressions Editor will focus the wrong clip if the Project view already has another clip selected."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"315101-beta",children:"3.1.5101 (Beta)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"First public VCC beta of ComboGestureExpressions."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"major-changes",children:"Major changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Migrate to VRChat Creator Companion."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ComboGestureExpressions is now located in Packages/"}),"\n",(0,i.jsx)(n.li,{children:"The Assets/Hai/ComboGesture folder is marked to be deleted automatically by VCC."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gesture Playable Layer is no longer used by default."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transforms are now generated in the FX layer to conform with current popular avatar creational patterns."}),"\n",(0,i.jsxs)(n.li,{children:["The previous behaviour can be restored by switching the Gesture Playable Layer section to ",(0,i.jsx)(n.em,{children:"Old style"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"other-changes",children:"Other changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Completely remove ComboGestureIntegrator.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ComboGestureIntegrator is generally made obsolete by non-destructive workflows (and may be migrated to ",(0,i.jsx)(n.a,{href:"/docs/products/prefabulous-avatar",children:"Prefabulous Avatar"})," in the future)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add the possibility to make the eye blinking prevention coexist with eye tracking animators:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CGE can now integrate with existing ",(0,i.jsx)(n.em,{children:"Eye Tracking Enabled"})," parameters from eye tracking animators."]}),"\n",(0,i.jsxs)(n.li,{children:["When the ",(0,i.jsx)(n.em,{children:"Eye Tracking Enabled"})," parameter is toggled on, CGE's blink prevention layer will be suspended."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Migrate embedded ",(0,i.jsx)(n.em,{children:"Animator As Code v0"})," to ",(0,i.jsx)(n.em,{children:"Animator As Code V1"})," on VCC."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fixes-1",children:"Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Synchronization should now be dramatically faster."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fix an issue where asset generation was made slower because code sections with intensive asset creation were not properly marked."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fix synchronization should no longer fail when animations still contain references to Dynamic Bones component toggle while Dynamic Bones is not installed in the project."}),"\n",(0,i.jsx)(n.li,{children:"Fix an issue where ComboGestureDynamics related to a boolean parameter could not be tied to a specific activity."}),"\n",(0,i.jsx)(n.li,{children:"Fix text should no longer be red after entering Play mode."}),"\n",(0,i.jsx)(n.li,{children:"Documentation now leads to docs.hai-vr.dev instead of hai-vr.github.io."}),"\n",(0,i.jsx)(n.li,{children:"Japanese localization file name has changed."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);