"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[416],{91064:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(74848),l=s(28453);const r={},a="\u26a0\ufe0f Advance notice for Prefabulous 2.0",o={permalink:"/updates/2024/04/05/p0",source:"@site/updates/2024-04-05-p0.md",title:"\u26a0\ufe0f Advance notice for Prefabulous 2.0",description:"Hello,",date:"2024-04-05T00:00:00.000Z",formattedDate:"April 5, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:'\ud83e\uddea Knowledge sharing "Animating locomotion using OSC Trackers"',permalink:"/updates/2024/04/07/p0-ks"},nextItem:{title:"\u2699\ufe0f Prefabulous Avatar V1.10.3",permalink:"/updates/2024/04/02/p0"}},t={authorsImageUrls:[]},c=[{value:"Anticipated changes",id:"anticipated-changes",level:2},{value:"For VRChat users",id:"for-vrchat-users",level:3},{value:"For developers who might be referencing Prefabulous entities",id:"for-developers-who-might-be-referencing-prefabulous-entities",level:3}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Hello,"}),"\n",(0,i.jsx)(n.p,{children:"This is an advance notice regarding a future change for Prefabulous Avatar."}),"\n",(0,i.jsx)(n.p,{children:"In a future update, Prefabulous will be split into two packages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prefabulous Universal"})," will be a package that does not require VRChat, and will contain the following components:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Change Avatar Scale"}),"\n",(0,i.jsx)(n.li,{children:"Edit All Mesh Anchor Override"}),"\n",(0,i.jsx)(n.li,{children:"Edit All Mesh Bounds"}),"\n",(0,i.jsx)(n.li,{children:"Assign UV Tile"}),"\n",(0,i.jsx)(n.li,{children:"Convert Blendshape Conventions"}),"\n",(0,i.jsx)(n.li,{children:"Delete Polygons"}),"\n",(0,i.jsx)(n.li,{children:"HaiXT Generate Blendshapes for Face Tracking Extensions"}),"\n",(0,i.jsx)(n.li,{children:"Recalculate Normals"}),"\n",(0,i.jsx)(n.li,{children:"Replace Textures"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prefabulous for VRChat"})," will be a package that requires VRChat, and will contain the following components:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HaiXT Face Tracking Extensions"}),"\n",(0,i.jsx)(n.li,{children:"Lock Locomotion Menu Item"}),"\n",(0,i.jsx)(n.li,{children:"Mass Blendshape Sync"}),"\n",(0,i.jsx)(n.li,{children:"Import Expression Parameters"}),"\n",(0,i.jsx)(n.li,{children:"Blank Expressions Menu and Parameters"}),"\n",(0,i.jsx)(n.li,{children:"Blank FX Animator"}),"\n",(0,i.jsx)(n.li,{children:"Blank Gesture Animator"}),"\n",(0,i.jsx)(n.li,{children:"Replace Action Animator"}),"\n",(0,i.jsx)(n.li,{children:"Replace Locomotion Animator"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The aim of this split is to allow the development of ",(0,i.jsx)(n.em,{children:"Prefabulous Universal"})," components in a way that benefits avatar frameworks\nof other social VR platforms, apps, and non-social VR apps (for instance, any VRM-compatible app)."]}),"\n",(0,i.jsxs)(n.p,{children:["Most ",(0,i.jsx)(n.em,{children:"Prefabulous for VRChat"})," components will depend on VRChat-specific animators and animation quirks,\nor component structures pertaining specifically to VRChat that would be uncommon in other social VR apps."]}),"\n",(0,i.jsx)(n.p,{children:"For most VRChat users, this change should be invisible if you use VCC.\nIf you are a developer who internally references classes or entities within Prefabulous, some changes are expected as described below."}),"\n",(0,i.jsxs)(n.p,{children:["If you have any questions, please ask me about it on the ",(0,i.jsx)(n.a,{href:"/docs/other/discord",children:"Discord server"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Thank you for your understanding."}),"\n",(0,i.jsx)(n.h2,{id:"anticipated-changes",children:"Anticipated changes"}),"\n",(0,i.jsx)(n.h3,{id:"for-vrchat-users",children:"For VRChat users"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This describes a future update, this has not yet been released at this time of writing."})}),"\n",(0,i.jsx)(n.p,{children:"For most VRChat users, this change should be invisible."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Installing Prefabulous for VRChat will automatically install Prefabulous Universal as a VCC dependency."}),"\n",(0,i.jsx)(n.li,{children:"The existing components in your scenes will continue working as if nothing has changed."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, if you're installing Prefabulous without VCC, you will need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open a blank scene in Unity Editor."}),"\n",(0,i.jsx)(n.li,{children:"Remove the Packages/dev.hai-vr.resilience.prefabulous folder"}),"\n",(0,i.jsx)(n.li,{children:"Install the Prefabulous Universal package on GitHub."}),"\n",(0,i.jsx)(n.li,{children:"Install the Prefabulous for VRChat package on GitHub."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"for-developers-who-might-be-referencing-prefabulous-entities",children:"For developers who might be referencing Prefabulous entities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The GUIDs for these components will not change."}),"\n",(0,i.jsxs)(n.li,{children:["The assemblies for most of these components ",(0,i.jsx)(n.strong,{children:"will"})," change."]}),"\n",(0,i.jsxs)(n.li,{children:["The namespace for most of these components ",(0,i.jsx)(n.strong,{children:"will"})," change."]}),"\n",(0,i.jsxs)(n.li,{children:["Some component names ",(0,i.jsx)(n.strong,{children:"will"})," change.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The prefix "PrefabulousHai" is likely to be changed to just "Prefabulous".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The NDMF plugin names ",(0,i.jsx)(n.strong,{children:"will"})," change."]}),"\n",(0,i.jsx)(n.li,{children:"Classes will be moved across packages."}),"\n",(0,i.jsx)(n.li,{children:"Many classes used internally by Prefabulous will change name or will be moved around."}),"\n",(0,i.jsx)(n.li,{children:"The technical package name of Prefabulous for VRChat will be the same as the one currently used for Prefabulous Avatar."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're a developer who might be concerned by such changes, you're invited to let me know about it on the ",(0,i.jsx)(n.a,{href:"/docs/other/discord",children:"Discord server"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);