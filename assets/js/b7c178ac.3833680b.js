"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9222],{2332:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(5893),t=a(1151);const r={title:"Prefabulous Avatar"},o="Prefabulous Avatar",i={id:"products/prefabulous-avatar/index",title:"Prefabulous Avatar",description:"Prefabulous Avatar contains non-destructive components to automate invasive tasks in your personal avatar.",source:"@site/docs/products/prefabulous-avatar/index.md",sourceDirName:"products/prefabulous-avatar",slug:"/products/prefabulous-avatar/",permalink:"/docs/products/prefabulous-avatar/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Prefabulous Avatar"},sidebar:"tutorialSidebar",previous:{title:"Lightbox Viewer",permalink:"/docs/products/lightbox-viewer"},next:{title:"Component reference",permalink:"/docs/products/prefabulous-avatar/component-reference"}},l={},c=[{value:"Download",id:"download",level:2},{value:"VCC",id:"vcc",level:3},{value:"How to use",id:"how-to-use",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"prefabulous-avatar",children:"Prefabulous Avatar"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Prefabulous Avatar"})," contains ",(0,s.jsx)(n.strong,{children:"non-destructive"})," components to automate invasive tasks in your personal avatar."]}),"\n",(0,s.jsxs)(n.p,{children:["Meant to be used primarily by users of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})})," components,\nour components can be reused across multiple avatars when you turn them into a prefab."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Improve the ",(0,s.jsx)(n.a,{href:"./prefabulous-avatar/hai-components/recalculate-normals",children:"shading of blendshape normals"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Edit all ",(0,s.jsx)(n.a,{href:"./prefabulous-avatar/component-reference/edit-all-mesh-bounds",children:"mesh bounds"}),"\nand all ",(0,s.jsx)(n.a,{href:"./prefabulous-avatar/component-reference/edit-all-mesh-anchor-override",children:"mesh anchor override"})," for consistent visibility and lighting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./prefabulous-avatar/component-reference/change-avatar-scale",children:"Change the avatar scale"})," and viewpoint without rescaling the avatar in the scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./prefabulous-avatar/component-reference/import-expression-parameters",children:"Import an existing VRC Expression Parameters"})," asset, such as face tracking parameters."]}),"\n",(0,s.jsx)(n.li,{children:"Reset parts of the VRC Avatar Descriptor component without modifying it."}),"\n",(0,s.jsxs)(n.li,{children:["Add a ",(0,s.jsx)(n.a,{href:"./prefabulous-avatar/hai-components/lock-locomotion-menu-item",children:"menu item to lock locomotion"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Although ",(0,s.jsx)(n.em,{children:"Prefabulous Avatar"})," is meant to be used alongside ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})}),", our components are not\nreally destined to be used inside distributed assets:"]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike ",(0,s.jsx)(n.em,{children:"Modular Avatar"})," components, most of our components are ",(0,s.jsx)(n.strong,{children:"invasive"}),". They will affect many components across the entire avatar,\nor may not be able to coexist with other components."]}),"\n",(0,s.jsx)(n.p,{children:"Therefore you are encouraged to use these components only within personal avatars, and not as part of assets distributed to other users."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Prefabulous Avatar"})," is still in an early stage of development."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(5852).Z+"",width:"401",height:"521"})}),"\n",(0,s.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(n.p,{children:"The tool is free for download using VCC."}),"\n",(0,s.jsx)(n.h3,{id:"vcc",children:"VCC"}),"\n",(0,s.jsxs)(n.p,{children:["You need to add ",(0,s.jsx)(n.strong,{children:"two"})," listings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar listing"})})," by clicking on ",(0,s.jsx)(n.em,{children:"Download (using VCC)"}),", and"]}),"\n",(0,s.jsxs)(n.li,{children:["also ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install Ha\xef~'s listing to VCC"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Then, add ",(0,s.jsx)(n.em,{children:"Ha\xef ~ Prefabulous Avatar (Alpha)"})," to your project using VCC."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(n.p,{children:"Add any of those components to any location inside your avatar. It is recommended that you put them in one or several child objects\nso that you can reuse them on other avatars as a prefab:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"./prefabulous-avatar/component-reference",children:"Component reference"})})," lists components that accomplish general tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"./prefabulous-avatar/hai-components",children:"Ha\xef~ Components"})})," lists components that are either entire systems or integrations with other systems."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5852:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/pvsUzAgoIb-7bb3958fff15173984aabc45f9e177e3.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>o});var s=a(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);