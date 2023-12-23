"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5120],{9361:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(5893),a=n(1151);const o={},r="Recalculate Normals",l={id:"products/prefabulous-avatar/hai-components/recalculate-normals",title:"Recalculate Normals",description:"Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).",source:"@site/docs/products/prefabulous-avatar/hai-components/recalculate-normals.md",sourceDirName:"products/prefabulous-avatar/hai-components",slug:"/products/prefabulous-avatar/hai-components/recalculate-normals",permalink:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lock Locomotion Menu Item",permalink:"/docs/products/prefabulous-avatar/hai-components/lock-locomotion-menu-item"},next:{title:"Property Finder",permalink:"/docs/products/property-finder"}},i={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Other notes",id:"other-notes",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Versions",id:"versions",level:2}];function d(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,t.jsx)(s.p,{children:"Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents)."}),"\n",(0,t.jsx)("video",{controls:!0,autoplay:!0,muted:!0,children:(0,t.jsx)("source",{src:n(3896).Z})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Left: Recalculate Normals active. Right: Original avatar.",(0,t.jsx)("br",{}),"Notice how the original avatar rim light shading behaves as if the chest were not flattened."]})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(s.p,{children:"This component will improve the shading of your avatar by recalculating blendshape normals:\nLight, reflections, and rims are affected by the altered mesh surfaces."}),"\n",(0,t.jsx)(s.p,{children:"To use this component:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Add a "PA-H Recalculate Normals" component anywhere in your avatar.'}),"\n",(0,t.jsx)(s.li,{children:"Add blendshapes that you want to recalculate. Any SkinnedMeshRenderer that has that blendshape will be affected."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact."}),"\n",(0,t.jsx)("video",{controls:!0,autoplay:!0,muted:!0,children:(0,t.jsx)("source",{src:n(3533).Z})}),"\n",(0,t.jsx)(s.h2,{id:"other-notes",children:"Other notes"}),"\n",(0,t.jsxs)(s.p,{children:["You should ",(0,t.jsx)(s.strong,{children:"not"})," use Recalculate Normals on the following blendshapes:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In general, do not specify face expression blendshapes in toon-styled avatars.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Face expression blendshapes significantly move the vertices of the face in such a way that it's preferable to keep the normals unchanged (most of the time)."}),"\n",(0,t.jsx)(s.li,{children:"Use your own judgement. It may sometimes be advantageous to recalculate normals on physically-based faces,\nor on avatars modelled after animals where large portions of the face move in unison."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Do not use Recalculate Normals on conflict prevention blendshapes that hide parts of the body, such as hiding hips, legs, feet, or ears."}),"\n",(0,t.jsx)(s.li,{children:"Do not use Recalculate Normals on blendshapes designed to hide clothing parts, such as hiding frills, bandages, socks, or piercings."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You should use Recalculate Normals on the following blendshapes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Body shape customization blendshapes that flatten, emboss, or enlarge areas of the body, whether it is the body flesh or clothing."}),"\n",(0,t.jsx)(s.li,{children:"Body adjustment blendshapes to fit clothing, such as heel adapters, or clothing that pinch the body."}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,autoplay:!0,muted:!0,children:(0,t.jsx)("source",{src:n(9839).Z})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Left: Recalculate Normals active. Right: Original avatar.",(0,t.jsx)("br",{}),"Notice the shadows better match the chest shape when Recalculate Normals is active."]})}),"\n",(0,t.jsx)(s.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://hai-vr.notion.site/Recalculate-Normals-Retrospective-e8b319e25c5a4b779c220a4d8286ded4",children:"Technical retrospective"}),".\nThis is an article I've written that describes the quirks I had to overcome to build this tool,\nand provides some background about how blendshape normals are relevant."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"versions",children:"Versions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"1.3.0"}),": Added."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9839:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/JiHvKYMj8A-8a224deb042d815298a64db001970322.mp4"},3896:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/mS1cQ7EheE-fb0b7d38447f3316ca47a58381557908.mp4"},3533:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/uI4KB1Gj4Y-463d7e56763a2846b4c050d7a23d3289.mp4"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(7294);const a={},o=t.createContext(a);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);