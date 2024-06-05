"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7052],{62073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var i=a(74848),r=a(28453),s=(a(89618),a(85041));const n={sidebar_position:1},o="Introduction",h={id:"products/starmesh/introduction",title:"Introduction",description:"This documentation is currently being written.",source:"@site/docs/products/starmesh/introduction.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/introduction",permalink:"/docs/products/starmesh/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/products/starmesh/install"},next:{title:"Reference manual",permalink:"/docs/products/starmesh/reference"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"This documentation is currently being written."})}),"\n",(0,i.jsx)(t.p,{children:"These components only work on a properly set up avatar for the app of your choice."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.strong,{children:"Platform-specific considerations"})}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(s.F,{requiresVRChat:!0,short:!0})," If you're creating an avatar for VRChat,\nmake sure your avatar already has a properly configured ",(0,i.jsx)(t.a,{href:"https://creators.vrchat.com/avatars/creating-your-first-avatar#step-5---adding-an-avatar-descriptor",children:"VRC Avatar Descriptor"}),". If you don't do this, you may not be able to test\nthe results of the Starmesh operators in Play mode."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Starmesh has components called ",(0,i.jsx)(t.strong,{children:"Operators"}),", which perform the mesh deformations. For now, we will add the simplest operator:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a new GameObject on your avatar, and give it the name of your choice.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If you're not sure where to put that new GameObject, create the GameObject at the root of the avatar."}),"\n",(0,i.jsx)(t.li,{children:"If you decide to create a GameObject somewhere else in the avatar, the scale must be uniform (the same on all axes)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Add a ",(0,i.jsx)(t.strong,{children:"Starmesh Op. Translate Rotate Scale (TRS)"})," component. This is an ",(0,i.jsx)(t.strong,{children:"operator"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"The following section will select the meshes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Create Mesh Selector"})," button."]}),"\n",(0,i.jsx)(t.li,{children:"Look in the object hierarchy: A new Mesh Selector object has been added as a child of your GameObject. Select it."}),"\n",(0,i.jsx)(t.li,{children:"In that Mesh Selector, add the meshes of your avatar that you want to deform, such as your hair, or your lower body."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"The following section will select a radius:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create a new GameObject under the hierarchy of the operator."}),"\n",(0,i.jsxs)(t.li,{children:["Add a ",(0,i.jsx)(t.strong,{children:"Starmesh Select Radius"})," component."]}),"\n",(0,i.jsx)(t.li,{children:"Move that object around the area of the avatar that you want to affect."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"The following section will configure your operator:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Select the object that contains the operator."}),"\n",(0,i.jsx)(t.li,{children:"Change the origin."}),"\n",(0,i.jsx)(t.li,{children:"Change the destination."}),"\n",(0,i.jsx)(t.li,{children:"Edit the blendshape name field."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"This documentation page is incomplete."})})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85041:(e,t,a)=>{a.d(t,{F:()=>n});a(96540);var i=a(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK"};var s=a(74848);function n(e){let{requiresVRChat:t,isUniversal:a,notVRChat:n,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:l,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:_,compatibleWithWarudo:u,requiresWarudo:m,compatibleWithVNyan:p,short:g}=e,j=g?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Compatible with "}),x=g?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Requires "});return(0,s.jsxs)("span",{children:[t?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:["\ud83d\udcac ",x,"VRChat"]}):"",o?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_resonite),children:["\u26a1 ",x,"Resonite"]}):"",c?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",x,"VRM"]}):"",h?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:[x,"SteamVR"]}):"",l?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",x,"ChilloutVR"]}):"",d?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[j,"VSFAvatar"]}):"",_?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[j,"VSeeFace"]}):"",p?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vnyan),children:[j,"VNyan"]}):"",u?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:[j,"Warudo"]}):"",m?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,t,a)=>{a.d(t,{w:()=>r});a(96540);var i=a(74848);function r(e){let{children:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}}}]);