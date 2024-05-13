"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4454],{74412:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(74848),r=t(28453);const o={sidebar_position:2},i="Reference manual",a={id:"products/starmesh/reference",title:"Reference manual",description:"This tool is currently not available, and this documentation is currently being written.",source:"@site/docs/products/starmesh/reference.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/reference",permalink:"/docs/products/starmesh/reference",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2b50 Starmesh",permalink:"/docs/products/starmesh/"},next:{title:"Compressive Deform",permalink:"/docs/products/starmesh/operators/compressive-deform"}},c={},l=[{value:"Quick start",id:"quick-start",level:2},{value:"Operator components",id:"operator-components",level:2},{value:"Blendshape operators",id:"blendshape-operators",level:3},{value:"Bone operators",id:"bone-operators",level:3},{value:"Selector components",id:"selector-components",level:2},{value:"Selectors based on geometry data",id:"selectors-based-on-geometry-data",level:3},{value:"Selectors based on mesh data",id:"selectors-based-on-mesh-data",level:3}];function h(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"reference-manual",children:"Reference manual"}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsx)(s.p,{children:"This tool is currently not available, and this documentation is currently being written."})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Starmesh"})," is a set of non-destructive mesh deformation tools that lets you iterate quickly\non avatar gimmicks."]}),"\n",(0,n.jsxs)(s.p,{children:["The operation of ",(0,n.jsx)(s.em,{children:"Starmesh"})," is dictated by the use of two main categories of components:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Selector"})," components lets you select vertices on meshes to affect, such as bones, blendshapes, radius, etc."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Operator"})," components lets you modify the selected vertices."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,n.jsx)(s.p,{children:"These components only work on a properly set up avatar for the app of your choice.\nIf you're creating an avatar for VRChat, you will need a VRCAvatarDescriptor."}),"\n",(0,n.jsxs)(s.p,{children:["Starmesh has components called ",(0,n.jsx)(s.strong,{children:"Operators"}),", which perform the mesh deformations. For now, we will add the simplest operator:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Create a new GameObject on your avatar, and give it the name of your choice.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If you're not sure where to put that new GameObject, create the GameObject at the root of the avatar."}),"\n",(0,n.jsx)(s.li,{children:"If you decide to create a GameObject somewhere else in the avatar, the scale must be uniform (the same on all axes)."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Add a ",(0,n.jsx)(s.strong,{children:"Starmesh Op. Translate Rotate Scale (TRS)"})," component."]}),"\n",(0,n.jsxs)(s.li,{children:["Click the ",(0,n.jsx)(s.strong,{children:"Create Mesh Selector"})," button."]}),"\n",(0,n.jsx)(s.li,{children:"Look in the object hierarchy: A new Mesh Selector object has been added as a child of your GameObject. Select it."}),"\n",(0,n.jsx)(s.li,{children:"In that Mesh Selector, add the meshes of your avatar that you want to deform, such as your hair, or your lower body."}),"\n",(0,n.jsx)(s.li,{children:"Return to the GameObject that contains your operator."}),"\n",(0,n.jsx)(s.li,{children:"TODO"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"operator-components",children:"Operator components"}),"\n",(0,n.jsx)(s.p,{children:"Operator components lets you modify vertices affected by the specified Selector components."}),"\n",(0,n.jsx)(s.h3,{id:"blendshape-operators",children:"Blendshape operators"}),"\n",(0,n.jsx)(s.p,{children:"These components create a blendshape."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"./operators/compressive-deform",children:"Compressive Deform"})})," emulates the effect of a flat surface being compressed against that object."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"./operators/translate-rotate-scale",children:"Translate Rotate Scale"})})," creates a blendshape that pulls the affected vertices from one point and orientation to another."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bone-operators",children:"Bone operators"}),"\n",(0,n.jsx)(s.p,{children:"These components create or edits bones."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"./operators/paint-new-bone",children:"Paint New Bone"})})," creates a new bone, and repaints as many meshes of your choosing to that bone."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"selector-components",children:"Selector components"}),"\n",(0,n.jsx)(s.p,{children:"Selector components lets you select vertices on meshes to affect."}),"\n",(0,n.jsxs)(s.p,{children:["Vertex selection is not a binary mask, there is a ",(0,n.jsx)(s.strong,{children:"weight"})," attached to each selected vertex. The higher the weight, the more it will be\naffected by operators. ",(0,n.jsx)(s.em,{children:"If you're familiar with Blender, this makes selections very similar to proportional editing and weight painting."})]}),"\n",(0,n.jsxs)(s.p,{children:["You must have a ",(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Meshes"})})," component, which lets you specify which meshes will be affected,\nand which blendshapes should be considered as applied."]}),"\n",(0,n.jsx)(s.p,{children:"Then, you can refine your selection using the following components:"}),"\n",(0,n.jsx)(s.h3,{id:"selectors-based-on-geometry-data",children:"Selectors based on geometry data"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Point Radius"})})," lets you select vertices in proximity to a point, with the weight varying by distance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Line Radius"})})," lets you select vertices in proximity to a line, with the weight varying by distance."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"selectors-based-on-mesh-data",children:"Selectors based on mesh data"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Bones"})})," lets you select vertices of bones, with the weight varying by the painted weight."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Connected Polygons"})})," lets you select all vertices connected to points."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"./selectors",children:(0,n.jsx)(s.strong,{children:"Select Blendshapes"})})," lets you select vertices affected by a blendshape."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);