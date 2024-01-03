"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9222],{52332:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=n(85893),r=n(11151);const t={title:"Prefabulous Avatar"},o="Prefabulous Avatar",i={id:"products/prefabulous-avatar/index",title:"Prefabulous Avatar",description:"Prefabulous Avatar contains non-destructive components to automate invasive tasks in your personal avatar.",source:"@site/docs/products/prefabulous-avatar/index.md",sourceDirName:"products/prefabulous-avatar",slug:"/products/prefabulous-avatar/",permalink:"/docs/products/prefabulous-avatar/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Prefabulous Avatar"},sidebar:"tutorialSidebar",previous:{title:"Lightbox Viewer",permalink:"/docs/products/lightbox-viewer"},next:{title:"Reference manual",permalink:"/docs/products/prefabulous-avatar/reference"}},l={},c=[{value:"Download",id:"download",level:2},{value:"VCC",id:"vcc",level:3},{value:"How to use",id:"how-to-use",level:2}];function d(e){const a={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"prefabulous-avatar",children:"Prefabulous Avatar"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"Prefabulous Avatar"})," contains ",(0,s.jsx)(a.strong,{children:"non-destructive"})," components to automate invasive tasks in your personal avatar."]}),"\n",(0,s.jsxs)(a.p,{children:["Meant to be used primarily by users of ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})})," components,\nour components can be reused across multiple avatars when you turn them into a prefab."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Improve the ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components/recalculate-normals",children:"shading of blendshape normals"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components/delete-polygons",children:"Delete polygons"})," hidden by conflict prevention blendshapes."]}),"\n",(0,s.jsxs)(a.li,{children:["Edit all ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/component-reference/edit-all-mesh-bounds",children:"mesh bounds"}),"\nand all ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/component-reference/edit-all-mesh-anchor-override",children:"mesh anchor override"})," for consistent visibility and lighting."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"./prefabulous-avatar/component-reference/change-avatar-scale",children:"Change the avatar scale"})," and viewpoint without rescaling the avatar in the scene."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"./prefabulous-avatar/component-reference/import-expression-parameters",children:"Import an existing VRC Expression Parameters"})," asset, such as face tracking parameters."]}),"\n",(0,s.jsx)(a.li,{children:"Reset parts of the VRC Avatar Descriptor component without modifying it."}),"\n",(0,s.jsxs)(a.li,{children:["Add a ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components/lock-locomotion-menu-item",children:"menu item to lock locomotion"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Although ",(0,s.jsx)(a.em,{children:"Prefabulous Avatar"})," is meant to be used alongside ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})}),", our components are not\nreally destined to be used inside distributed assets:"]}),"\n",(0,s.jsxs)(a.p,{children:["Unlike ",(0,s.jsx)(a.em,{children:"Modular Avatar"})," components, most of our components are ",(0,s.jsx)(a.strong,{children:"invasive"}),". They will affect many components across the entire avatar,\nor may not be able to coexist with other components."]}),"\n",(0,s.jsx)(a.p,{children:"Therefore you are encouraged to use these components only within personal avatars, and not as part of assets distributed to other users."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:n(5852).Z+"",width:"401",height:"521"})}),"\n",(0,s.jsx)(a.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(a.p,{children:"The tool is free for download using VCC."}),"\n",(0,s.jsx)(a.h3,{id:"vcc",children:"VCC"}),"\n",(0,s.jsxs)(a.p,{children:["You need to add ",(0,s.jsx)(a.strong,{children:"two"})," listings:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Add ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar listing"})})," by clicking on ",(0,s.jsx)(a.em,{children:"Download (using VCC)"}),", and"]}),"\n",(0,s.jsxs)(a.li,{children:["also ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install Ha\xef~'s listing to VCC"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Then, add ",(0,s.jsx)(a.em,{children:"Ha\xef ~ Prefabulous Avatar"})," to your project using VCC."]}),"\n",(0,s.jsx)(a.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(a.p,{children:["Unless stated otherwise, ",(0,s.jsx)(a.strong,{children:"you can place the components anywhere inside your avatar"}),", and ",(0,s.jsx)(a.em,{children:"Prefabulous Avatar"})," will try its best to affect all\neligible components on your avatar without needing you to manually target individual components."]}),"\n",(0,s.jsxs)(a.p,{children:["For example, most of our blendshape manipulation components such as ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"}),"\nor ",(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components/delete-polygons",children:"Delete polygons"})," will target all SkinnedMeshRenderers of your avatar by default as long as that\nSkinnedMeshRenderer has one of the blendshapes in question, in order to keep manual labor to a minimum."]}),"\n",(0,s.jsxs)(a.p,{children:["Check out the ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"./prefabulous-avatar/reference",children:"Reference manual"})})," for more details."]}),"\n",(0,s.jsx)(a.p,{children:"Add any of those components to any location inside your avatar. It is recommended that you put them in one or several child objects\nso that you can reuse them on other avatars as a prefab:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"./prefabulous-avatar/component-reference",children:"Component reference"})})," lists components that accomplish general tasks."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"./prefabulous-avatar/hai-components",children:"Ha\xef~ Components"})})," lists components that are either entire systems or integrations with other systems."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5852:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/pvsUzAgoIb-7bb3958fff15173984aabc45f9e177e3.png"}}]);