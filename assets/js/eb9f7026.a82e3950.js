"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3418],{32355:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>d});var i=s(74848),r=s(28453),a=s(89618),n=s(85041);const o={},l="Compressive Deform",h={id:"products/starmesh/operators/compressive-deform",title:"Compressive Deform",description:"The Starmesh Op. Compressive Deform component creates a blendshape that emulates the effect of a flat surface being compressed",source:"@site/docs/products/starmesh/operators/compressive-deform.md",sourceDirName:"products/starmesh/operators",slug:"/products/starmesh/operators/compressive-deform",permalink:"/docs/products/starmesh/operators/compressive-deform",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/products/starmesh/operators"},next:{title:"Paint New Bone",permalink:"/docs/products/starmesh/operators/paint-new-bone"}},c={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Create the operator and selectors",id:"create-the-operator-and-selectors",level:3},{value:"Configure the operator",id:"configure-the-operator",level:3},{value:"Configure the blendshape",id:"configure-the-blendshape",level:4},{value:"Configure the Inwards deformation",id:"configure-the-inwards-deformation",level:4},{value:"Configure the Lateral deformation",id:"configure-the-lateral-deformation",level:4},{value:"Configure the Lateral deformation to decrease the influence near the center",id:"configure-the-lateral-deformation-to-decrease-the-influence-near-the-center",level:4},{value:"Configure the Lateral deformation for Cylindrical shapes",id:"configure-the-lateral-deformation-for-cylindrical-shapes",level:4},{value:"Test the operator",id:"test-the-operator",level:3},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"Configure the Displacement over %",id:"configure-the-displacement-over-",level:4},{value:"Recalculate Normals",id:"recalculate-normals",level:4}];function m(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"compressive-deform",children:"Compressive Deform"}),"\n",(0,i.jsx)(a.w,{children:(0,i.jsx)(n.F,{notCompatibleWithGltf:!0})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Starmesh Op. Compressive Deform"})," component creates a blendshape that emulates the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Poisson%27s_ratio",children:"effect of a flat surface being compressed"}),"\nagainst that object."]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:s(9321).A})}),"\n",(0,i.jsx)(t.p,{children:"This is different from rescaling. The surface of a non-flat object will be progressively flattened as it's being compressed."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["This blendshape has multiple frames, so it ",(0,i.jsx)(t.em,{children:"emulates"})," a non-linear interpolation."]}),"\n",(0,i.jsx)(t.li,{children:"It will move vertices progressively as the blendshape progresses."}),"\n",(0,i.jsx)(t.li,{children:"It will not flatten vertices far from the compression surface, unless the compression surface becomes closer."}),"\n",(0,i.jsx)(t.li,{children:"It will expand the object laterally to the force."}),"\n",(0,i.jsx)(t.li,{children:"The lateral expansion is limited by the proximity to the compression surface."}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(a.w,{children:(0,i.jsx)(n.F,{notCompatibleWithGltf:!0})}),(0,i.jsx)(t.p,{children:"Since this blendshape has multiple frames, this cannot be used in applications if the format is VRM or GLB (i.e. Resonite)."}),(0,i.jsxs)(t.p,{children:["This can still be used in ",(0,i.jsx)(n.F,{compatibleWithVNyan:!0,short:!0})," and ",(0,i.jsx)(n.F,{compatibleWithWarudo:!0,short:!0}),"\nas long as you use their proprietary avatar formats, instead of the VRM format."]})]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(t.h3,{id:"create-the-operator-and-selectors",children:"Create the operator and selectors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add a ",(0,i.jsx)(t.em,{children:"Starmesh Op. Compressive Deform"})," component on a new GameObject in your avatar."]}),"\n",(0,i.jsxs)(t.li,{children:["In the selectors of this component, add a ",(0,i.jsx)(t.em,{children:"Starmesh Select Meshes"}),", or choose one that you already have.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Configure the ",(0,i.jsx)(t.em,{children:"Select Meshes"})," selector so that it affects the relevant meshes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["In the selectors of this component, add other selectors, for instance, a ",(0,i.jsx)(t.em,{children:"Starmesh Select Bones"})," or a ",(0,i.jsx)(t.em,{children:"Starmesh Select Line Radius"}),".","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you choose to use a ",(0,i.jsx)(t.em,{children:"Select Point Radius"})," or a ",(0,i.jsx)(t.em,{children:"Starmesh Select Line Radius"}),", it may need to be larger than usual (or, modify the curve),\nso that the ",(0,i.jsx)(t.em,{children:"Compressive Deform"})," has full influence over the affected vertices."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"You can add selectors as children of this GameObject."})}),"\n",(0,i.jsx)(t.h3,{id:"configure-the-operator",children:"Configure the operator"}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-blendshape",children:"Configure the blendshape"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Choose a name for the generated blendshape in the ",(0,i.jsx)(t.em,{children:"Shape Name"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Shape Default Weight"})," setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you are going to use that blendshape for scripts or animations, leave the ",(0,i.jsx)(t.em,{children:"Shape Default Weight"})," to 0."]}),"\n",(0,i.jsxs)(t.li,{children:["If you are not going to use that blendshape in any scripts nor animations, set the ",(0,i.jsx)(t.em,{children:"Shape Default Weight"})," to 100."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-inwards-deformation",children:"Configure the Inwards deformation"}),"\n",(0,i.jsx)(t.p,{children:"The Inwards deformation section configures how the vertices moves inwards from the compression surface to the origin."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Make sure you have gizmos enabled in your scene."}),"\n",(0,i.jsxs)(t.li,{children:["You may want to set the ",(0,i.jsx)(t.em,{children:"Preview"})," to 0 while setting up for the first time."]}),"\n",(0,i.jsxs)(t.li,{children:["In your scene, move the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo to the far surface of your object being compressed."]}),"\n",(0,i.jsxs)(t.li,{children:["Move the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness."]}),"\n",(0,i.jsxs)(t.li,{children:["Rotate the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo to orient it towards the surface that will be compressed."]}),"\n",(0,i.jsxs)(t.li,{children:["Increase the ",(0,i.jsx)(t.strong,{children:"Size"})," gizmo so that it is right above the surface that will be compressed."]}),"\n",(0,i.jsxs)(t.li,{children:["Move ",(0,i.jsx)(t.strong,{children:"Maximum"})," gizmo so that it represents the maximum compression that you will allow."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-lateral-deformation",children:"Configure the Lateral deformation"}),"\n",(0,i.jsx)(t.p,{children:"The Lateral deformation section configures how the vertices moves laterally away from the origin."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Make sure you have gizmos enabled in your scene."}),"\n",(0,i.jsxs)(t.li,{children:["You should set the ",(0,i.jsx)(t.em,{children:"Preview"})," to 100."]}),"\n",(0,i.jsxs)(t.li,{children:["For now, increase the ",(0,i.jsx)(t.em,{children:"Lateral Margin"})," to any higher value. You won't see any visible changes until you set the ",(0,i.jsx)(t.em,{children:"Lateral Power"})," next."]}),"\n",(0,i.jsxs)(t.li,{children:["Increase the ",(0,i.jsx)(t.em,{children:"Lateral Power"})," to any higher value."]}),"\n",(0,i.jsxs)(t.li,{children:["Increase or decrease the ",(0,i.jsx)(t.em,{children:"Lateral Margin"}),". This value changes how far away from the compression surface vertices will be affected."]}),"\n",(0,i.jsxs)(t.li,{children:["Increase or decrease the ",(0,i.jsx)(t.em,{children:"Lateral Power"}),". This value changes how much the vertices will move laterally as the compression progresses."]}),"\n",(0,i.jsxs)(t.li,{children:["If you haven't already done it, move the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You will notice as you move the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo laterally that the vertices will expand in a different direction."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:s(46162).A})}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-lateral-deformation-to-decrease-the-influence-near-the-center",children:"Configure the Lateral deformation to decrease the influence near the center"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Increase or decrease the ",(0,i.jsx)(t.em,{children:"Lateral Center Displacement Distance"}),". This value creates an area near the center that will be immune to the effect of the lateral deformation."]}),"\n"]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:s(42458).A})}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-lateral-deformation-for-cylindrical-shapes",children:"Configure the Lateral deformation for Cylindrical shapes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If your compressed object has more of a cylindrical shape than a round shape:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Check the ",(0,i.jsx)(t.em,{children:"Lateral Is Cylindrical"})," checkbox."]}),"\n",(0,i.jsxs)(t.li,{children:["Rotate the ",(0,i.jsx)(t.strong,{children:"Origin"})," gizmo so that the vertical lines line up with the direction of your cylindrical shape."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:s(6634).A})}),"\n",(0,i.jsx)(t.h3,{id:"test-the-operator",children:"Test the operator"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Move the ",(0,i.jsx)(t.em,{children:"Preview"})," slider at the top to test the blendshape."]}),"\n",(0,i.jsxs)(t.li,{children:["Press the ",(0,i.jsx)(t.em,{children:"Recalculate Normals"})," button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,i.jsx)(t.h4,{id:"configure-the-displacement-over-",children:"Configure the Displacement over %"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Displacement over %"})," section lets you configure how the vertices should move over time, depending on how far that vertex is away from the compressive surface."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Surface Curve Response"})," configures how the vertices that are on the surface will move."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Inside Curve Response"})," configures how the vertices that are on the inside surface (closer to Origin) will move."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["As easy tweak you can try is to edit the ",(0,i.jsx)(t.em,{children:"Surface Curve Response"}),", and tilt the angle of the point at (0, 0)."]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:s(57244).A})}),"\n",(0,i.jsx)(t.h4,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,i.jsx)(t.p,{children:"Normals will be automatically recalculated for this blendshape."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},85041:(e,t,s)=>{s.d(t,{F:()=>n});s(96540);var i=s(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo"};var a=s(74848);function n(e){let{requiresVRChat:t,isUniversal:s,notVRChat:n,requiresResonite:o,requiresSteamVR:l,requiresChilloutVR:h,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:m,compatibleWithWarudo:u,compatibleWithBeatSaber:f,requiresWarudo:p,notCompatibleWithGltf:g,compatibleWithVNyan:x,short:j}=e,v=j?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Compatible with "}),_=j?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Requires "});return(0,a.jsxs)("span",{children:[t?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:["\ud83d\udcac ",_,"VRChat"]}):"",o?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_resonite),children:["\u26a1 ",_,"Resonite"]}):"",c?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",_,"VRM"]}):"",l?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:[_,"SteamVR"]}):"",h?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",_,"ChilloutVR"]}):"",d?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[v,"VSFAvatar"]}):"",m?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[v,"VSeeFace"]}):"",x?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vnyan),children:[v,"VNyan"]}):"",u?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:[v,"Warudo"]}):"",f?(0,a.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_beatsaber),children:[v,"Beat Saber"]}):"",g?(0,a.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,a.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",s?(0,a.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,a.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):""]})}},89618:(e,t,s)=>{s.d(t,{w:()=>r});s(96540);var i=s(74848);function r(e){let{children:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}},6634:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/0WoLXFb7oJ-7bcaa9e34afeadd7cdaf478dc347033c.mp4"},9321:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/SBieqfITm9-3c03fb88557640fa5b4da45f69c7e265.mp4"},57244:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/XbNrbYjAKk-cc720b26f3d7e6c236d1522173d2b347.mp4"},46162:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/fcnROnCHkD-b04dd337f725d57046809362365914f0.mp4"},42458:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/medias/sB0r9fu05b-f7ebf36a4e8cf046f37e2e747005de1d.mp4"}}]);