"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6089],{5347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(5893),o=n(1151);const r={},i="Cloth Transfer",l={id:"products/cloth-transfer",title:"Cloth Transfer",description:"Cloth Transfer is a Unity Editor tool that lets you transfer cloth constraints of a mesh from a Unity 2018 project into a Unity 2019 project.",source:"@site/docs/products/cloth-transfer.md",sourceDirName:"products",slug:"/products/cloth-transfer",permalink:"/docs/products/cloth-transfer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BlendTree Viewer",permalink:"/docs/products/blendtree-viewer"},next:{title:"ComboGestureExpressions",permalink:"/docs/products/combo-gesture-expressions/"}},h={},a=[{value:"Download",id:"download",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Error tolerance: <em>Allow inexact</em>",id:"error-tolerance-allow-inexact",level:2},{value:"Additional notes",id:"additional-notes",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cloth-transfer",children:"Cloth Transfer"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Cloth Transfer"})," is a Unity Editor tool that lets you transfer cloth constraints of a mesh from a Unity 2018 project into a Unity 2019 project."]}),"\n",(0,s.jsx)(t.p,{children:"It was created mainly to assist migration from Unity 2018 to Unity 2019 in the VRChat social platform."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"This does not require VRChat to run. It has been tested to work on Unity 2018, Unity 2019, Unity 2022."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/illustration.gif",alt:""})}),"\n",(0,s.jsx)(t.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(t.p,{children:"The tool is free for download."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["GitHub (",(0,s.jsx)(t.a,{href:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/releases",children:"hai-vr/unity-2018-2019-cloth-transfer/releases"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Booth (",(0,s.jsx)(t.a,{href:"https://booth.pm/en/items/3136328",children:"Cloth Transfer - hai-vr - BOOTH"}),")"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(t.p,{children:["You need to have two projects, the first in ",(0,s.jsx)(t.strong,{children:"Unity 2018"}),", the other in ",(0,s.jsx)(t.strong,{children:"Unity 2019"})," or above."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"Cloth"})," component must be enabled and visible in the scene. Please make sure that the ",(0,s.jsx)(t.em,{children:"GameObject"})," and its parents are enabled in the hierarchy, and that the ",(0,s.jsx)(t.em,{children:"Cloth"})," component is enabled."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["First, in ",(0,s.jsx)(t.strong,{children:"Unity 2018"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["1.1) Install ",(0,s.jsx)(t.em,{children:"Cloth Transfer"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["1.2) Select your ",(0,s.jsx)(t.em,{children:"Cloth"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["1.3) Click on the cog on the top right of the component and select ",(0,s.jsx)(t.em,{children:"Ha\xef Cloth Transfer"}),".\n",(0,s.jsx)(t.img,{src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/ct1.png",alt:""}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Warning:"})," If you do not see this menu item, make sure your project does not have compile errors. If your project does have compile errors, ",(0,s.jsx)(t.strong,{children:"it is very important that you do NOT delete the VRChat SDK"}),"! Use a backup of your project, or create a new Unity 2018 project and copy the minimum necessary over to proceed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["1.4) In the ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," window, click ",(0,s.jsx)(t.em,{children:"Save cloth data"})," button, and choose a location to save the asset."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Then, in ",(0,s.jsx)(t.strong,{children:"Unity 2019"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["2.1) Install ",(0,s.jsx)(t.em,{children:"Cloth Transfer"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["2.2) Copy the asset that you saved earlier from ",(0,s.jsx)(t.strong,{children:"Unity 2018"})," to ",(0,s.jsx)(t.strong,{children:"Unity 2019"})," (in step 1.4)"]}),"\n",(0,s.jsxs)(t.li,{children:["2.3) Select your ",(0,s.jsx)(t.em,{children:"Cloth"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["2.4) Click on the three dots on the top right of the component and select ",(0,s.jsx)(t.em,{children:"Ha\xef Cloth Transfer"}),".\n",(0,s.jsx)(t.img,{src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/ct2.png",alt:""})]}),"\n",(0,s.jsxs)(t.li,{children:["2.5) In the ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," window, select the copied asset in the ",(0,s.jsx)(t.em,{children:"Data"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["2.6) In the ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," window, click on ",(0,s.jsx)(t.em,{children:"Load cloth data"})," button."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"error-tolerance-allow-inexact",children:["Error tolerance: ",(0,s.jsx)(t.em,{children:"Allow inexact"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Cloth Transfer"})," uses the exact vertex positions to transfer weights. You must use the same mesh, with mesh compression setting set to ",(0,s.jsx)(t.em,{children:"Off"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Despite this, if the vertex positions end up being different, you can choose to tick the ",(0,s.jsx)(t.em,{children:"Allow inexact"})," checkbox as a last resort. It will copy the data of the closest vertex whenever it cannot find an exact vertex."]}),"\n",(0,s.jsxs)(t.p,{children:["When using ",(0,s.jsx)(t.em,{children:"Allow inexact"}),", please check that you are copying the data of the correct cloth, and not the data of another cloth by accident!"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-notes",children:"Additional notes"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Cloth Transfer"})," was built specifically to handle cloth constraint migration between Unity 2018 and Unity 2019. ",(0,s.jsx)(t.strong,{children:"It assumes the mesh is identical."})," If you want to update the mesh data itself after migrating, ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," might work using the ",(0,s.jsx)(t.em,{children:"Allow inexact"})," option; otherwise you can use another tool like ",(0,s.jsx)(t.a,{href:"https://github.com/Taremin/CopyComponentsByRegex",children:"CopyComponentsByRegex by Taremin"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"Cloth Transfer"})," only copies the cloth constraints. It does not copy the other data of the cloth component itself."]}),"\n",(0,s.jsxs)(t.li,{children:["Transferring from Unity 2019 back to Unity 2018 is possible by expanding the ",(0,s.jsx)(t.em,{children:"Other"})," section at the bottom of the ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," window.\nBy default, ",(0,s.jsx)(t.em,{children:"Cloth Transfer"})," will suggest saving data in an Unity 2018 project, and loading data in a Unity 2019 project or above."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);