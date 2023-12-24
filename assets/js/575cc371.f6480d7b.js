"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5980],{3874:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=a(5893),l=a(1151);const t={title:"Prefabulous Avatar"},i=void 0,r={id:"changelogs/prefabulous-avatar",title:"Prefabulous Avatar",description:"1.5.0",source:"@site/docs/changelogs/prefabulous-avatar.md",sourceDirName:"changelogs",slug:"/changelogs/prefabulous-avatar",permalink:"/docs/changelogs/prefabulous-avatar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Prefabulous Avatar"},sidebar:"changelogsSidebar",previous:{title:"Lightbox Viewer",permalink:"/docs/changelogs/lightbox-viewer"},next:{title:"Property Finder",permalink:"/docs/changelogs/property-finder"}},o={},c=[{value:"1.5.0",id:"150",level:2},{value:"New component: HaiXT Generate Blendshapes for Face Tracking Extensions",id:"new-component-haixt-generate-blendshapes-for-face-tracking-extensions",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Technical notes",id:"technical-notes",level:3},{value:"1.4.0",id:"140",level:2},{value:"Update Recalculate Normals",id:"update-recalculate-normals",level:3},{value:"Update Change Avatar Scale",id:"update-change-avatar-scale",level:3},{value:"Fixes",id:"fixes-1",level:3},{value:"1.3.0",id:"130",level:2},{value:"New component: Recalculate Normals",id:"new-component-recalculate-normals",level:3},{value:"Technical notes",id:"technical-notes-1",level:3},{value:"1.2.1",id:"121",level:2},{value:"1.2.0",id:"120",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"150",children:"1.5.0"}),"\n",(0,s.jsxs)(n.h3,{id:"new-component-haixt-generate-blendshapes-for-face-tracking-extensions",children:["New component: ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions",children:"HaiXT Generate Blendshapes for Face Tracking Extensions"})]}),"\n",(0,s.jsxs)(n.p,{children:["A new component, ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions",children:"HaiXT Generate Blendshapes for Face Tracking Extensions"}),", has been added to Prefabulous Avatar."]}),"\n",(0,s.jsxs)(n.p,{children:["If you have an avatar that already supports face tracking, this will generate additional non-standard blendshapes for use with ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/haixt-face-tracking-extensions",children:"HaiXT Face Tracking Extensions"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When your eyes are closed, the shape of your eyes will change when you're smiling."}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:a(2623).Z})}),"\n",(0,s.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Try to fix compatibility issues with Unity 2019."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"technical-notes",children:"Technical notes"}),"\n",(0,s.jsx)(n.p,{children:"Add Generate Blendshapes for Face Tracking Extensions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate Blendshapes for Face Tracking Extensions can add extension blendshapes to avatar that already support face tracking."}),"\n",(0,s.jsx)(n.li,{children:"Add support for generating the HaiXT_EyeClosedInverse_Smile blendshapes."}),"\n",(0,s.jsxs)(n.li,{children:["The blendshapes will be generated only under these conditions:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the face mesh must be called Body, and"}),"\n",(0,s.jsx)(n.li,{children:"the avatar must already have EyeClosedLeft or EyeClosedRight blendshapes, and"}),"\n",(0,s.jsx)(n.li,{children:"the avatar must NOT already have the HaiXT_EyeClosedInverse_SmileLeft or HaiXT_EyeClosedInverse_SmileRight blendshapes"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["All of these evaluations are done right before this NDMF handler executes:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"These conditions do not need to be true during Edit mode."}),"\n",(0,s.jsx)(n.li,{children:"A non-destructive processor running before this NDMF handler may still be able to cause these conditions to pass, or conversely, invalidate it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recalculate Normals NDMF handler is now constrainted to run after PrefabulousHaiGenerateBlendshapesFTEPlugin."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"140",children:"1.4.0"}),"\n",(0,s.jsxs)(n.h3,{id:"update-recalculate-normals",children:["Update ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"})]}),"\n",(0,s.jsxs)(n.p,{children:["Recalculate Normals now has ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals#option-erase-custom-split-normals",children:"Erase Custom Split Normals"})," option:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Add "Erase Custom Split Normals" option.'}),"\n",(0,s.jsx)(n.li,{children:'When "Erase Custom Split Normals" is enabled, the recalculation will perform a second pass where all vertices that have a non-zero delta pos or a non-zero recalculated delta normals will have new deltas calculated: instead of calculating the difference from the base recalculated mesh, it will calculate the difference from the original mesh.'}),"\n",(0,s.jsx)(n.li,{children:"In effect, this erases custom split normals data for that blendshape."}),"\n",(0,s.jsx)(n.li,{children:"Since this only affects some vertices (non-zero delta pos or a non-zero recalculated delta normals), this prevents incorrect delta normals from contaminating unrelated vertices in the mesh."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsxs)(n.p,{children:["Enabling Erase Custom Split Normals can lead to ",(0,s.jsx)(n.strong,{children:"worse results"})," in meshes that don't have custom split normals."]}),(0,s.jsx)(n.p,{children:"Only give this a try on blendshapes where shading defects are clearly visible only after you've tried Recalculate Normals first without this option."}),(0,s.jsxs)(n.p,{children:["In all other cases, ",(0,s.jsx)(n.strong,{children:"keep this option off!"})]}),(0,s.jsxs)(n.p,{children:["For more details, ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals#option-erase-custom-split-normals",children:"please consult the Erase Custom Split Normals documentation"}),"."]})]}),"\n",(0,s.jsxs)(n.h3,{id:"update-change-avatar-scale",children:["Update ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/component-reference/change-avatar-scale",children:"Change Avatar Scale"})]}),"\n",(0,s.jsx)(n.p,{children:"Change Avatar Scale now uses the Avatar Descriptor view position as the source size:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ChangeAvatarScale reads the Avatar Descriptor view position Y coordinate and uses it as the source size."}),"\n",(0,s.jsx)(n.li,{children:"This is now the default behaviour."}),"\n",(0,s.jsx)(n.li,{children:'Old behaviour can be restored by checking "Custom Source Size".'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fixes-1",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Edit Mesh Anchor Override: Fix NDMF PrefabulousEditAllMeshAnchorOverridePlugin build step is now correctly named "Edit Mesh Anchor Override".'}),"\n",(0,s.jsx)(n.li,{children:'Update Recalculate Normals conflict prevention filter to include "hidemesh_".'}),"\n",(0,s.jsx)(n.li,{children:"Fix Recalculate Normals will no longer process the same blendshapes multiple times when they are specified multiple times."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"130",children:"1.3.0"}),"\n",(0,s.jsxs)(n.h3,{id:"new-component-recalculate-normals",children:["New component: ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"})]}),"\n",(0,s.jsxs)(n.p,{children:["A new component, ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous-avatar/hai-components/recalculate-normals",children:"Recalculate Normals"}),", has been added to Prefabulous Avatar."]}),"\n",(0,s.jsx)(n.p,{children:"This component improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents)."}),"\n",(0,s.jsx)("video",{controls:!0,autoplay:!0,muted:!0,children:(0,s.jsx)("source",{src:a(3896).Z})}),"\n",(0,s.jsx)(n.h3,{id:"technical-notes-1",children:"Technical notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recalculate Normals will recalculate select blendshape normals of SkinnedMeshRenderers (and tangents)."}),"\n",(0,s.jsxs)(n.li,{children:["Blendshape delta normals (and tangents) are usually zero on avatar uploads.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This may cause the avatar shading to look abnormal, especially on blendshapes that flatten part of the body, or significantly push it out."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["This component attempts to recalculate normals of individual blendshapes by doing the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bake a static mesh of a SMR mesh when 0 blendshapes are running"}),"\n",(0,s.jsx)(n.li,{children:"Build a data structure describing vertices that have same position and normal"}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Mesh.RecalculateNormals.html",children:"RecalculateNormals"}),". This is done even when 0 blendshapes are active, so that the delta is calculated based on Unity's judgement of what's the normal data at rest."]}),"\n",(0,s.jsxs)(n.li,{children:["Using that previous data structure, rebuild normal data by averaging and renormalizing vertex normals that had the same position and normal","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is done to fix an issue where an artist-authored vertex is part of an UV seam, causing the mesh data to split that vertex into multiple, effectively causing the RecalculateNormals output to have different normals for that vertex."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Mesh.RecalculateTangents.html",children:"RecalculateTangents"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Do all of the above again for each blendshape to recalculate, and use that to calculate a delta normal and a delta tangent."}),"\n",(0,s.jsx)(n.li,{children:"Once all blendshapes are processed, effectively rewrite all of the mesh blendshapes with these modifications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"121",children:"1.2.1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix a compatibility issue with Unity 2022"}),"\n",(0,s.jsx)(n.li,{children:"Allow installation with VRChat Avatars SDK 3.5.x"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"120",children:"1.2.0"}),"\n",(0,s.jsx)(n.p,{children:"First public experimental release."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3896:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/medias/mS1cQ7EheE-fb0b7d38447f3316ca47a58381557908.mp4"},2623:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/medias/smile-f-9f551c5938309cd2bf003bfb42d8ea80.mp4"},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var s=a(7294);const l={},t=s.createContext(l);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);