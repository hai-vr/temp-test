"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5120],{59361:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var t=n(85893),a=n(11151);const l={},o="Recalculate Normals",i={id:"products/prefabulous-avatar/hai-components/recalculate-normals",title:"Recalculate Normals",description:"Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).",source:"@site/docs/products/prefabulous-avatar/hai-components/recalculate-normals.md",sourceDirName:"products/prefabulous-avatar/hai-components",slug:"/products/prefabulous-avatar/hai-components/recalculate-normals",permalink:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lock Locomotion Menu Item",permalink:"/docs/products/prefabulous-avatar/hai-components/lock-locomotion-menu-item"},next:{title:"Property Finder",permalink:"/docs/products/property-finder"}},r={},h=[{value:"How to use",id:"how-to-use",level:2},{value:"Other notes",id:"other-notes",level:2},{value:"Option: Erase Custom Split Normals",id:"option-erase-custom-split-normals",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Versions",id:"versions",level:2}];function c(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,t.jsx)(s.p,{children:"Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents)."}),"\n",(0,t.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,t.jsx)("source",{src:n(13896).Z})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Left: Recalculate Normals active. Right: Original avatar.",(0,t.jsx)("br",{}),"Notice how the original avatar rim light shading behaves as if the chest were not flattened."]})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(s.p,{children:"This component will improve the shading of your avatar by recalculating blendshape normals:\nLight, reflections, rims, matcaps, and many more shader features are affected by the altered mesh surfaces."}),"\n",(0,t.jsx)(s.p,{children:"To use this component:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Add a "PA-H Recalculate Normals" component anywhere in your avatar.'}),"\n",(0,t.jsx)(s.li,{children:"Add blendshapes that you want to recalculate. Any SkinnedMeshRenderer that has that blendshape will be affected."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact."}),"\n",(0,t.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,t.jsx)("source",{src:n(83533).Z})}),"\n",(0,t.jsx)(s.h2,{id:"other-notes",children:"Other notes"}),"\n",(0,t.jsxs)(s.p,{children:["You should ",(0,t.jsx)(s.strong,{children:"not"})," use Recalculate Normals on the following blendshapes:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In general, do not specify face expression blendshapes in toon-styled avatars.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Face expression blendshapes significantly move the vertices of the face in such a way that it's preferable to keep the normals unchanged (most of the time)."}),"\n",(0,t.jsx)(s.li,{children:"Use your own judgement. It may sometimes be advantageous to recalculate normals on physically-based faces,\nor on avatars modelled after animals where large portions of the face move in unison."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Do not use Recalculate Normals on conflict prevention blendshapes that hide parts of the body, such as hiding hips, legs, feet, or ears."}),"\n",(0,t.jsx)(s.li,{children:"Do not use Recalculate Normals on blendshapes designed to hide clothing parts, such as hiding frills, bandages, socks, or piercings."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You should use Recalculate Normals on the following blendshapes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Body shape customization blendshapes that flatten, emboss, or enlarge areas of the body, whether it is the body flesh or clothing."}),"\n",(0,t.jsx)(s.li,{children:"Body adjustment blendshapes to fit clothing, such as heel adapters, or clothing that pinch the body."}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,t.jsx)("source",{src:n(18934).Z})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Left: Recalculate Normals active. Right: Original avatar.",(0,t.jsx)("br",{}),"Notice the shadows better match the chest shape when Recalculate Normals is active."]})}),"\n",(0,t.jsx)(s.h2,{id:"option-erase-custom-split-normals",children:"Option: Erase Custom Split Normals"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"This feature was added in 1.4.0"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The original mesh may have been edited with custom split normals, which means the artist has manually edited the normals to improve the shading on the base pose."}),"\n",(0,t.jsxs)(s.p,{children:["Most of the time, these custom split normals won't cause an issue on blendshapes, but in ",(0,t.jsx)(s.strong,{children:"rare cases"}),", these custom split normals might\nnegatively interfere with blendshapes that cause a significant change in the body shape."]}),"\n",(0,t.jsxs)(s.p,{children:["In particular, ",(0,t.jsx)(s.strong,{children:"if you have a blendshape that flattens part of the body"}),", the default recalculated normals can cause visible tearing due to the presence\nof custom split normals that were optimally designed for that part of the body in the default shape."]}),"\n",(0,t.jsxs)(s.p,{children:["Enabling Erase Custom Split Normals will erase the custom split normals data on the vertices affected by the specified blendshapes, ",(0,t.jsx)(s.strong,{children:"only when that blendshape is active"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The custom split normals data remains intact on the mesh when the specified blendshapes are inactive."}),"\n",(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsxs)(s.p,{children:["Enabling Erase Custom Split Normals can lead to ",(0,t.jsx)(s.strong,{children:"worse results"})," in meshes that don't have custom split normals."]}),(0,t.jsx)(s.p,{children:"Only give this a try on blendshapes where shading defects are clearly visible only after you've tried Recalculate Normals first without this option."}),(0,t.jsxs)(s.p,{children:["In all other cases, ",(0,t.jsx)(s.strong,{children:"keep this option off!"})]})]}),"\n",(0,t.jsx)(s.p,{children:"In such cases, you can try the following to see if it improves it:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Create ",(0,t.jsx)(s.strong,{children:"another"}),' "PA-H Recalculate Normals" component on your avatar.',"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"You are allowed to add that component multiple times on the same object."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"In that new component, enable Erase Custom Split Normals."}),"\n",(0,t.jsx)(s.li,{children:"Add the blendshape that you want to recalculate while removing Custom Split Normals."}),"\n",(0,t.jsxs)(s.li,{children:["If that blendshape is present in multiple SkinnedMeshRenderers, ",(0,t.jsx)(s.strong,{children:"you should limit the selection to only the SkinnedMeshRenderer that has custom split normals"}),":","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Enable "Limit To Specific Meshes".'}),"\n",(0,t.jsx)(s.li,{children:'In the "Renderers" list, only add the SkinnedMeshRenderer that has custom split normals.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.p,{children:'You can have the same blendshape specified on multiple "PA-H Recalculate Normals" components.'}),(0,t.jsx)(s.p,{children:'If a blendshape of SkinnedMeshRenderer is affected by multiple components, the "Erase Custom Split Normals" option will take priority.'})]}),"\n",(0,t.jsx)(s.p,{children:'If you see no improvement, cancel your changes and add your blendshape back to your original "PA-H Recalculate Normals" component.'}),"\n",(0,t.jsx)(s.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://hai-vr.notion.site/Recalculate-Normals-Retrospective-e8b319e25c5a4b779c220a4d8286ded4",children:"Technical retrospective"}),".\nThis is an article I've written that describes the quirks I had to overcome to build this tool,\nand provides some background about how blendshape normals are relevant."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"versions",children:"Versions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"1.4.0"}),': Add "Erase Custom Split Normals" option.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"1.3.0"}),": Added."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},18934:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/JiHvKYMj8A-8a224deb042d815298a64db001970322.mp4"},13896:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/mS1cQ7EheE-fb0b7d38447f3316ca47a58381557908.mp4"},83533:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/medias/uI4KB1Gj4Y-463d7e56763a2846b4c050d7a23d3289.mp4"}}]);