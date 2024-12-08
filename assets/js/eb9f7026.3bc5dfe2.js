"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3418],{32355:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>h,metadata:()=>c,toc:()=>m});var r=t(74848),i=t(28453),a=t(89618),n=t(85041),o=t(66926);const h={},l="Compressive Deform",c={id:"products/starmesh/operators/compressive-deform",title:"Compressive Deform",description:"The Starmesh Op. Compressive Deform component creates a blendshape that emulates the effect of a flat surface being compressed",source:"@site/docs/products/starmesh/operators/compressive-deform.md",sourceDirName:"products/starmesh/operators",slug:"/products/starmesh/operators/compressive-deform",permalink:"/docs/products/starmesh/operators/compressive-deform",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/products/starmesh/operators"},next:{title:"Paint New Bone",permalink:"/docs/products/starmesh/operators/paint-new-bone"}},d={},m=[{value:"How to use",id:"how-to-use",level:2},{value:"Create the operator and selectors",id:"create-the-operator-and-selectors",level:3},{value:"Configure the operator",id:"configure-the-operator",level:3},{value:"Configure the blendshape",id:"configure-the-blendshape",level:4},{value:"Configure the Inwards deformation",id:"configure-the-inwards-deformation",level:4},{value:"Configure the Lateral deformation",id:"configure-the-lateral-deformation",level:4},{value:"Configure the Lateral deformation to decrease the influence near the center",id:"configure-the-lateral-deformation-to-decrease-the-influence-near-the-center",level:4},{value:"Configure the Lateral deformation for Cylindrical shapes",id:"configure-the-lateral-deformation-for-cylindrical-shapes",level:4},{value:"Test the operator",id:"test-the-operator",level:3},{value:"Advanced settings",id:"advanced-settings",level:2},{value:"Configure the Displacement over %",id:"configure-the-displacement-over-",level:3},{value:"Recalculate Normals",id:"recalculate-normals",level:3},{value:"Creating prefabs",id:"creating-prefabs",level:2},{value:"Versions",id:"versions",level:2}];function u(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"compressive-deform",children:"Compressive Deform"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"Starmesh Op. Compressive Deform"})," component creates a blendshape that emulates the ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Poisson%27s_ratio",children:"effect of a flat surface being compressed"}),"\nagainst that object."]}),"\n",(0,r.jsx)(o.U,{src:"../img/SBieqfITm9.mp4"}),"\n",(0,r.jsx)(s.p,{children:"This is different from rescaling. The surface of a non-flat object will be progressively flattened as it's being compressed."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["This blendshape has multiple frames, so it ",(0,r.jsx)(s.em,{children:"emulates"})," a non-linear interpolation."]}),"\n",(0,r.jsx)(s.li,{children:"It will move vertices progressively as the blendshape progresses."}),"\n",(0,r.jsx)(s.li,{children:"It will not flatten vertices far from the compression surface, unless the compression surface becomes closer."}),"\n",(0,r.jsx)(s.li,{children:"It will expand the object laterally to the force."}),"\n",(0,r.jsx)(s.li,{children:"The lateral expansion is limited by the proximity to the compression surface."}),"\n"]}),"\n",(0,r.jsxs)(s.admonition,{type:"danger",children:[(0,r.jsxs)(s.p,{children:["If you use a third-party tool called ",(0,r.jsx)(s.em,{children:"DexProtect"}),", ",(0,r.jsx)(s.strong,{children:"then you must update DexProtect to version 2.2.3 or higher"}),"."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Compressive Deform"})," will not work properly with a lower version of ",(0,r.jsx)(s.em,{children:"DexProtect"}),"."]})]}),"\n",(0,r.jsxs)(s.admonition,{type:"danger",children:[(0,r.jsx)(a.w,{children:(0,r.jsx)(n.F,{notCompatibleWithGltf:!0})}),(0,r.jsx)(s.p,{children:"Since this blendshape has multiple frames, this cannot be used in applications if the format is VRM or GLB (i.e. Resonite)."}),(0,r.jsxs)(s.p,{children:["This can still be used in ",(0,r.jsx)(n.F,{compatibleWithVNyan:!0,short:!0})," and ",(0,r.jsx)(n.F,{compatibleWithWarudo:!0,short:!0}),"\nas long as you use their proprietary avatar formats, instead of the VRM format."]})]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(s.h3,{id:"create-the-operator-and-selectors",children:"Create the operator and selectors"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a ",(0,r.jsx)(s.em,{children:"Starmesh Op. Compressive Deform"})," component on a new GameObject in your avatar."]}),"\n",(0,r.jsxs)(s.li,{children:["In the selectors of this component, add a ",(0,r.jsx)(s.em,{children:"Starmesh Select Meshes"}),", or choose one that you already have.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Configure the ",(0,r.jsx)(s.em,{children:"Select Meshes"})," selector so that it affects the relevant meshes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["In the selectors of this component, add other selectors, for instance, a ",(0,r.jsx)(s.em,{children:"Starmesh Select Bones"})," or a ",(0,r.jsx)(s.em,{children:"Starmesh Select Line Radius"}),".","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If you choose to use a ",(0,r.jsx)(s.em,{children:"Select Point Radius"})," or a ",(0,r.jsx)(s.em,{children:"Starmesh Select Line Radius"}),", it may need to be larger than usual (or, modify the curve),\nso that the ",(0,r.jsx)(s.em,{children:"Compressive Deform"})," has full influence over the affected vertices."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"You can add selectors as children of this GameObject."})}),"\n",(0,r.jsx)(s.h3,{id:"configure-the-operator",children:"Configure the operator"}),"\n",(0,r.jsx)(s.h4,{id:"configure-the-blendshape",children:"Configure the blendshape"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Choose a name for the generated blendshape in the ",(0,r.jsx)(s.em,{children:"Shape Name"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.em,{children:"Shape Default Weight"})," setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If you are going to use that blendshape for scripts or animations, leave the ",(0,r.jsx)(s.em,{children:"Shape Default Weight"})," to 0."]}),"\n",(0,r.jsxs)(s.li,{children:["If you are not going to use that blendshape in any scripts nor animations, set the ",(0,r.jsx)(s.em,{children:"Shape Default Weight"})," to 100."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"configure-the-inwards-deformation",children:"Configure the Inwards deformation"}),"\n",(0,r.jsx)(s.p,{children:"The Inwards deformation section configures how the vertices moves inwards from the compression surface to the origin."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Make sure you have gizmos enabled in your scene."}),"\n",(0,r.jsxs)(s.li,{children:["You may want to set the ",(0,r.jsx)(s.em,{children:"Preview"})," to 0 while setting up for the first time."]}),"\n",(0,r.jsxs)(s.li,{children:["In your scene, move the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo to the far surface of your object being compressed."]}),"\n",(0,r.jsxs)(s.li,{children:["Move the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness."]}),"\n",(0,r.jsxs)(s.li,{children:["Rotate the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo to orient it towards the surface that will be compressed."]}),"\n",(0,r.jsxs)(s.li,{children:["Increase the ",(0,r.jsx)(s.strong,{children:"Size"})," gizmo so that it is right above the surface that will be compressed."]}),"\n",(0,r.jsxs)(s.li,{children:["Move ",(0,r.jsx)(s.strong,{children:"Maximum"})," gizmo so that it represents the maximum compression that you will allow."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"configure-the-lateral-deformation",children:"Configure the Lateral deformation"}),"\n",(0,r.jsx)(s.p,{children:"The Lateral deformation section configures how the vertices moves laterally away from the origin."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Make sure you have gizmos enabled in your scene."}),"\n",(0,r.jsxs)(s.li,{children:["You should set the ",(0,r.jsx)(s.em,{children:"Preview"})," to 100."]}),"\n",(0,r.jsxs)(s.li,{children:["For now, increase the ",(0,r.jsx)(s.em,{children:"Lateral Margin"})," to any higher value. You won't see any visible changes until you set the ",(0,r.jsx)(s.em,{children:"Lateral Power"})," next."]}),"\n",(0,r.jsxs)(s.li,{children:["Increase the ",(0,r.jsx)(s.em,{children:"Lateral Power"})," to any higher value."]}),"\n",(0,r.jsxs)(s.li,{children:["Increase or decrease the ",(0,r.jsx)(s.em,{children:"Lateral Margin"}),". This value changes how far away from the compression surface vertices will be affected."]}),"\n",(0,r.jsxs)(s.li,{children:["Increase or decrease the ",(0,r.jsx)(s.em,{children:"Lateral Power"}),". This value changes how much the vertices will move laterally as the compression progresses."]}),"\n",(0,r.jsxs)(s.li,{children:["If you haven't already done it, move the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["You will notice as you move the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo laterally that the vertices will expand in a different direction."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.U,{src:"../img/fcnROnCHkD.mp4"}),"\n",(0,r.jsx)(s.h4,{id:"configure-the-lateral-deformation-to-decrease-the-influence-near-the-center",children:"Configure the Lateral deformation to decrease the influence near the center"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Increase or decrease the ",(0,r.jsx)(s.em,{children:"Lateral Center Displacement Distance"}),". This value creates an area near the center that will be immune to the effect of the lateral deformation."]}),"\n"]}),"\n",(0,r.jsx)(o.U,{src:"../img/sB0r9fu05b.mp4"}),"\n",(0,r.jsx)(s.h4,{id:"configure-the-lateral-deformation-for-cylindrical-shapes",children:"Configure the Lateral deformation for Cylindrical shapes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If your compressed object has more of a cylindrical shape than a round shape:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Check the ",(0,r.jsx)(s.em,{children:"Lateral Is Cylindrical"})," checkbox."]}),"\n",(0,r.jsxs)(s.li,{children:["Rotate the ",(0,r.jsx)(s.strong,{children:"Origin"})," gizmo so that the vertical lines line up with the direction of your cylindrical shape."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.U,{src:"../img/0WoLXFb7oJ.mp4"}),"\n",(0,r.jsx)(s.h3,{id:"test-the-operator",children:"Test the operator"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Move the ",(0,r.jsx)(s.em,{children:"Preview"})," slider at the top to test the blendshape."]}),"\n",(0,r.jsxs)(s.li,{children:["Press the ",(0,r.jsx)(s.em,{children:"Recalculate Normals"})," button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,r.jsx)(s.h3,{id:"configure-the-displacement-over-",children:"Configure the Displacement over %"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"Displacement over %"})," section lets you configure how the vertices should move over time, depending on how far that vertex is away from the compressive surface."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.em,{children:"Surface Curve Response"})," configures how the vertices that are on the surface will move."]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.em,{children:"Inside Curve Response"})," configures how the vertices that are on the inside surface (closer to Origin) will move."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["As easy tweak you can try is to edit the ",(0,r.jsx)(s.em,{children:"Surface Curve Response"}),", and tilt the angle of the point at (0, 0)."]}),"\n",(0,r.jsx)(o.U,{src:"../img/XbNrbYjAKk.mp4"}),"\n",(0,r.jsx)(s.h3,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,r.jsx)(s.p,{children:"Normals will be automatically recalculated for this blendshape."}),"\n",(0,r.jsx)(s.h2,{id:"creating-prefabs",children:"Creating prefabs"}),"\n",(0,r.jsx)(a.w,{children:(0,r.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,r.jsxs)(s.p,{children:["The field ",(0,r.jsx)(s.em,{children:"Animation Repathing"})," is used for the creation of ",(0,r.jsx)(n.F,{requiresVRChat:!0,short:!0})," prefabs using ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-animator",children:"Modular Avatar Merge Animator"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["When this field is not empty, ",(0,r.jsx)(s.em,{children:"Starmesh"})," will generate ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"https://modular-avatar.nadena.dev/docs/reference/blendshape-sync",children:"Modular Avatar Blendshape Sync"})})," components inside the meshes\nused by ",(0,r.jsx)(s.em,{children:"Starmesh Select Meshes"})," during the build, which will bind the animations targeting the operator's object name with the blendshape defined\nin ",(0,r.jsx)(s.em,{children:"Animation Repathing"})," to the generated blendshapes. For concrete examples, see the ",(0,r.jsx)(s.a,{href:"../prefabs",children:"VRChat prefabs"})," section."]}),"\n",(0,r.jsxs)(s.p,{children:["In addition, if you leave ",(0,r.jsx)(s.em,{children:"Shape Name"})," empty, ",(0,r.jsx)(s.em,{children:"Starmesh"})," will generate a unique blendshape name."]}),"\n",(0,r.jsx)(s.h2,{id:"versions",children:"Versions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"1.3.0"}),": \u26a1 Compressive Deform now generates 15 frames by default instead of 25."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"1.0.0"}),": Added."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85041:(e,s,t)=>{t.d(s,{F:()=>n});t(96540);var r=t(20053);const i={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var a=t(74848);function n(e){let{requiresVRChat:s,isUniversal:t,requiresBasis:n,notVRChat:o,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:m,compatibleWithVSeeFace:u,compatibleWithWarudo:p,compatibleWithBeatSaber:f,requiresWarudo:g,notCompatibleWithGltf:x,compatibleWithVNyan:j,short:v,supporter:_}=e,b=v?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Compatible with "}),w=v?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Requires "});return(0,a.jsxs)("span",{children:[s?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",h?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",n?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_basis),children:["\ud83d\udd3a ",w,"Basis"]}):"",d?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",l?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",c?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",m?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[b,"VSFAvatar"]}):"",u?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[b,"VSeeFace"]}):"",j?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_vnyan),children:[b,"VNyan"]}):"",p?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:[b,"Warudo"]}):"",f?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_beatsaber),children:[b,"Beat Saber"]}):"",x?(0,a.jsx)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,a.jsx)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",t?(0,a.jsx)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",o?(0,a.jsx)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",_?(0,a.jsxs)("div",{className:(0,r.A)(i.hai_tag,i.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,a.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,s,t)=>{t.d(s,{w:()=>i});t(96540);var r=t(74848);function i(e){let{children:s}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:s})})}},66926:(e,s,t)=>{t.d(s,{U:()=>n});t(96540);var r=t(74848);const i="https://downscale.srv.hai-vr.dev",a=i+"/assets/docs/";function n(e){const s=null!=e.cdn?i+e.cdn:a+e.src.substring(e.src.lastIndexOf("/")+1);return(0,r.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,r.jsx)("source",{src:s})})}}}]);