"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5980],{3874:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=n(5893),t=n(1151);const l={title:"Prefabulous Avatar"},r=void 0,i={id:"changelogs/prefabulous-avatar",title:"Prefabulous Avatar",description:"1.4.0",source:"@site/docs/changelogs/prefabulous-avatar.md",sourceDirName:"changelogs",slug:"/changelogs/prefabulous-avatar",permalink:"/docs/changelogs/prefabulous-avatar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Prefabulous Avatar"},sidebar:"changelogsSidebar",previous:{title:"Lightbox Viewer",permalink:"/docs/changelogs/lightbox-viewer"},next:{title:"Property Finder",permalink:"/docs/changelogs/property-finder"}},o={},c=[{value:"1.4.0",id:"140",level:2},{value:"Update Recalculate Normals",id:"update-recalculate-normals",level:3},{value:"Update Change Avatar Scale",id:"update-change-avatar-scale",level:3},{value:"Fixes",id:"fixes",level:3},{value:"1.3.0",id:"130",level:2},{value:"New component: Recalculate Normals",id:"new-component-recalculate-normals",level:3},{value:"Technical notes",id:"technical-notes",level:3},{value:"1.2.1",id:"121",level:2},{value:"1.2.0",id:"120",level:2}];function d(e){const a={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"140",children:"1.4.0"}),"\n",(0,s.jsxs)(a.h3,{id:"update-recalculate-normals",children:["Update ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"})]}),"\n",(0,s.jsxs)(a.p,{children:["Recalculate Normals now has ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals#option-erase-custom-split-normals",children:"Erase Custom Split Normals"})," option:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:'Add "Erase Custom Split Normals" option.'}),"\n",(0,s.jsx)(a.li,{children:'When "Erase Custom Split Normals" is enabled, the recalculation will perform a second pass where all vertices that have a non-zero delta pos or a non-zero recalculated delta normals will have new deltas calculated: instead of calculating the difference from the base recalculated mesh, it will calculate the difference from the original mesh.'}),"\n",(0,s.jsx)(a.li,{children:"In effect, this erases custom split normals data for that blendshape."}),"\n",(0,s.jsx)(a.li,{children:"Since this only affects some vertices (non-zero delta pos or a non-zero recalculated delta normals), this prevents incorrect delta normals from contaminating unrelated vertices in the mesh."}),"\n"]}),"\n",(0,s.jsxs)(a.admonition,{type:"danger",children:[(0,s.jsxs)(a.p,{children:["Enabling Erase Custom Split Normals can result in ",(0,s.jsx)(a.strong,{children:"worse results"})," in meshes that don't have custom split normals."]}),(0,s.jsx)(a.p,{children:"Only give this a try on blendshapes where shading defects are clearly visible only after you've tried Recalculate Normals first without this option."}),(0,s.jsxs)(a.p,{children:["In all other cases, ",(0,s.jsx)(a.strong,{children:"keep this option off!"})]}),(0,s.jsxs)(a.p,{children:["For more details, ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals#option-erase-custom-split-normals",children:"please consult the Erase Custom Split Normals documentation"}),"."]})]}),"\n",(0,s.jsxs)(a.h3,{id:"update-change-avatar-scale",children:["Update ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/component-reference/change-avatar-scale",children:"Change Avatar Scale"})]}),"\n",(0,s.jsx)(a.p,{children:"Change Avatar Scale now uses the Avatar Descriptor view position as the source size:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"ChangeAvatarScale reads the Avatar Descriptor view position Y coordinate and uses it as the source size."}),"\n",(0,s.jsx)(a.li,{children:"This is now the default behaviour."}),"\n",(0,s.jsx)(a.li,{children:'Old behaviour can be restored by checking "Custom Source Size".'}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:'Edit Mesh Anchor Override: Fix NDMF PrefabulousEditAllMeshAnchorOverridePlugin build step is now correctly named "Edit Mesh Anchor Override"'}),"\n",(0,s.jsx)(a.li,{children:'Recalculate Normals: Update conflict prevention filter to include "hidemesh_".'}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"130",children:"1.3.0"}),"\n",(0,s.jsxs)(a.h3,{id:"new-component-recalculate-normals",children:["New component: ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"})]}),"\n",(0,s.jsxs)(a.p,{children:["A new component, ",(0,s.jsx)(a.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"}),", has been added to Prefabulous Avatar."]}),"\n",(0,s.jsx)(a.p,{children:"This component improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents)."}),"\n",(0,s.jsx)("video",{controls:!0,autoplay:!0,muted:!0,children:(0,s.jsx)("source",{src:n(3896).Z})}),"\n",(0,s.jsx)(a.h3,{id:"technical-notes",children:"Technical notes"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Recalculate Normals will recalculate select blendshape normals of SkinnedMeshRenderers (and tangents)."}),"\n",(0,s.jsxs)(a.li,{children:["Blendshape delta normals (and tangents) are usually zero on avatar uploads.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"This may cause the avatar shading to look abnormal, especially on blendshapes that flatten part of the body, or significantly push it out."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["This component attempts to recalculate normals of individual blendshapes by doing the following:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Bake a static mesh of a SMR mesh when 0 blendshapes are running"}),"\n",(0,s.jsx)(a.li,{children:"Build a data structure describing vertices that have same position and normal"}),"\n",(0,s.jsxs)(a.li,{children:["Use ",(0,s.jsx)(a.a,{href:"https://docs.unity3d.com/ScriptReference/Mesh.RecalculateNormals.html",children:"RecalculateNormals"}),". This is done even when 0 blendshapes are active, so that the delta is calculated based on Unity's judgement of what's the normal data at rest."]}),"\n",(0,s.jsxs)(a.li,{children:["Using that previous data structure, rebuild normal data by averaging and renormalizing vertex normals that had the same position and normal","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"This is done to fix an issue where an artist-authored vertex is part of an UV seam, causing the mesh data to split that vertex into multiple, effectively causing the RecalculateNormals output to have different normals for that vertex."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Use ",(0,s.jsx)(a.a,{href:"https://docs.unity3d.com/ScriptReference/Mesh.RecalculateTangents.html",children:"RecalculateTangents"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Do all of the above again for each blendshape to recalculate, and use that to calculate a delta normal and a delta tangent."}),"\n",(0,s.jsx)(a.li,{children:"Once all blendshapes are processed, effectively rewrite all of the mesh blendshapes with these modifications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"121",children:"1.2.1"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Fix a compatibility issue with Unity 2022"}),"\n",(0,s.jsx)(a.li,{children:"Allow installation with VRChat Avatars SDK 3.5.x"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"120",children:"1.2.0"}),"\n",(0,s.jsx)(a.p,{children:"First public experimental release."})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3896:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/medias/mS1cQ7EheE-fb0b7d38447f3316ca47a58381557908.mp4"},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var s=n(7294);const t={},l=s.createContext(t);function r(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);