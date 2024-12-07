"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9200],{54285:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>h,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=t(74848),r=t(28453),i=(t(89618),t(85041),t(66926));const n={},h="Transfer Blendshape",l={id:"products/starmesh/operators/transfer-blendshape",title:"Transfer Blendshape",description:"The Starmesh Op. Transfer Blendshape component attempts to create a blendshape on a costume that mimics the movement",source:"@site/docs/products/starmesh/operators/transfer-blendshape.md",sourceDirName:"products/starmesh/operators",slug:"/products/starmesh/operators/transfer-blendshape",permalink:"/docs/products/starmesh/operators/transfer-blendshape",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ripple Wave",permalink:"/docs/products/starmesh/operators/ripple-wave"},next:{title:"Translate Rotate Scale (TRS)",permalink:"/docs/products/starmesh/operators/translate-rotate-scale"}},o={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Create the operator and selectors",id:"create-the-operator-and-selectors",level:3},{value:"Configure the operator",id:"configure-the-operator",level:3},{value:"More examples",id:"more-examples",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Vertex Search Limit",id:"vertex-search-limit",level:4},{value:"Inverse",id:"inverse",level:4},{value:"Multiplier",id:"multiplier",level:4},{value:"Recalculate Normals",id:"recalculate-normals",level:3},{value:"Versions",id:"versions",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"transfer-blendshape",children:"Transfer Blendshape"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.em,{children:"Starmesh Op. Transfer Blendshape"})," component ",(0,s.jsx)(a.strong,{children:"attempts"})," to create a blendshape on a costume that mimics the movement\nof a blendshape from another mesh."]}),"\n",(0,s.jsxs)(a.p,{children:["Try using this to transfer nail deformations, chest deformations, or hip deformations (i.e. ",(0,s.jsx)(a.code,{children:"Hip_big"}),") from a base mesh to a costume."]}),"\n",(0,s.jsx)(a.p,{children:"Combine it with other Selectors to limit the areas affected by the transferred deformations."}),"\n",(0,s.jsxs)(a.admonition,{type:"warning",children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"This component may not always produce good results."})}),(0,s.jsx)(a.p,{children:"In addition, if you use other tools that attempt to fit a costume on an avatar it was not designed for (i.e. fitting a costume made for Manuka on a Lime base body),\nit will probably not work as this operator expects the mesh data to overlap, regardless of how bones are arranged in the scene."}),(0,s.jsx)(a.p,{children:"Keep in mind that the way fabric deforms is not always analogous to how customization blendshapes deforms the skin. For example, the area between the two breasts\nis under tension, so you may not get good results if you try to transfer breast blendshapes to a costume."})]}),"\n",(0,s.jsx)(i.U,{src:"../img/rhpnXAwgyV.mp4"}),"\n",(0,s.jsx)(a.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(a.p,{children:"The Transfer Blendshape operator is particularly slow to compute. The larger your mesh is, the longer it will take to calculate the blendshape."}),"\n",(0,s.jsx)(a.p,{children:"It may not always produce good results, if at all."}),"\n",(0,s.jsx)(a.h3,{id:"create-the-operator-and-selectors",children:"Create the operator and selectors"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Add a ",(0,s.jsx)(a.em,{children:"Starmesh Op. Transfer Blendshape"})," component on a new GameObject in your avatar."]}),"\n",(0,s.jsxs)(a.li,{children:["In the selectors of this component, add a ",(0,s.jsx)(a.em,{children:"Starmesh Select Meshes"}),", or choose one that you already have.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Configure the ",(0,s.jsx)(a.em,{children:"Select Meshes"})," selector so that it affects the relevant meshes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["You can further restrict the area where the blendshape will be applied. For example, you may want deformations applied to a skirt to only\napply on the hip area.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["If you choose to do so, then, add other selectors, for instance, a ",(0,s.jsx)(a.em,{children:"Starmesh Select Line Radius"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"configure-the-operator",children:"Configure the operator"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["In the Operator, choose the ",(0,s.jsx)(a.em,{children:"Source Mesh"})," to bind from.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"The mesh to bind from is typically the mesh that contains the skin of your torso."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Define the ",(0,s.jsx)(a.em,{children:"Source Blendshape"})," name that will be transferred; it could be the same as the one in your source mesh."]}),"\n",(0,s.jsxs)(a.li,{children:["Choose a name for the generated blendshape in the ",(0,s.jsx)(a.em,{children:"Shape Name"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["The ",(0,s.jsx)(a.em,{children:"Shape Default Weight"})," setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"By default, the default weight is set to 100."}),"\n",(0,s.jsx)(a.li,{children:"You may want to set that weight to the value your blendshape currently is on the Source Mesh."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Unity_2zXUgUI90W.png",src:t(52033).A+"",width:"679",height:"633"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["If you use ",(0,s.jsx)(a.em,{children:"Modular Avatar"})," and your blendshape is animated, consider adding a ",(0,s.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/docs/reference/blendshape-sync",children:"Modular Avatar Blendshape Sync"})," if you deem it necessary.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["The target blendshape will displayed in red, but this is fine as long as you use the same blendshape name,\nand that you make sure the value of ",(0,s.jsx)(a.em,{children:"Shape Default Weight"})," is the same as the one on your base mesh."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Unity_mUgytskC14.png",src:t(63217).A+"",width:"390",height:"326"})}),"\n",(0,s.jsx)(a.h3,{id:"more-examples",children:"More examples"}),"\n",(0,s.jsx)(i.U,{src:"../img/IzlkxFR2pi.mp4"}),"\n",(0,s.jsx)(i.U,{src:"../img/mKKt5JlxK1.mp4"}),"\n",(0,s.jsx)(a.p,{children:"You can refine the affected area by using additional Selectors."}),"\n",(0,s.jsx)(a.h3,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsx)(a.h4,{id:"vertex-search-limit",children:"Vertex Search Limit"}),"\n",(0,s.jsx)(a.p,{children:"By default, the algorithm works by finding the closest face to each vertex, but this search is limited to the triangles associated with the closest 12 vertices."}),"\n",(0,s.jsx)(a.p,{children:"You may choose to increase or decrease the search limit and see how it affects the quality of the transfer."}),"\n",(0,s.jsx)(a.h4,{id:"inverse",children:"Inverse"}),"\n",(0,s.jsxs)(a.p,{children:["If ",(0,s.jsx)(a.em,{children:"Inverse"})," is checked, the selected meshes will bind to the source mesh as if the blendshape was applied in the source mesh, and the generated blendshape\nwill be the inverse."]}),"\n",(0,s.jsx)(a.p,{children:"For example, this might be used to create a flat chest blendshape on a costume that was designed to only support larger chests; but the results may vary."}),"\n",(0,s.jsx)(a.p,{children:"Keep in mind that the way fabric deforms is not always analogous to how customization blendshapes deforms the skin. For example, the area between the two breasts\nis under tension, so you may not get good results if you try to transfer breast blendshapes to a costume."}),"\n",(0,s.jsx)(a.h4,{id:"multiplier",children:"Multiplier"}),"\n",(0,s.jsxs)(a.p,{children:["You can multiply the effect of the transferred blendshape beyond its intended value, by setting the ",(0,s.jsx)(a.em,{children:"Multiply"})," value to any value greater than 1, such as ",(0,s.jsx)(a.code,{children:"1.2"})]}),"\n",(0,s.jsxs)(a.p,{children:["For values between 0.0 and 1.0, you should use ",(0,s.jsx)(a.em,{children:"Shape Default Weight"})," instead."]}),"\n",(0,s.jsx)(a.h3,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,s.jsx)(a.p,{children:"By default, normals will be automatically recalculated for this blendshape."}),"\n",(0,s.jsxs)(a.p,{children:["In general, you should recalculate normals. If you find a reason not to, then check ",(0,s.jsx)(a.em,{children:"Do Not Recalculate Normals"})," to disable it."]}),"\n",(0,s.jsx)(a.h2,{id:"versions",children:"Versions"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"1.7.0"}),": Added."]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},85041:(e,a,t)=>{t.d(a,{F:()=>n});t(96540);var s=t(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var i=t(74848);function n(e){let{requiresVRChat:a,isUniversal:t,notVRChat:n,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:o,requiresVRM:d,compatibleWithVSFAvatar:c,compatibleWithVSeeFace:m,compatibleWithWarudo:u,compatibleWithBeatSaber:p,requiresWarudo:_,notCompatibleWithGltf:g,compatibleWithVNyan:x,short:f,supporter:v}=e,j=f?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Compatible with "}),b=f?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Requires "});return(0,i.jsxs)("span",{children:[a?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:["\ud83d\udcac ",b,"VRChat"]}):"",h?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_resonite),children:["\u26a1 ",b,"Resonite"]}):"",d?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",b,"VRM"]}):"",l?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:[b,"SteamVR"]}):"",o?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",b,"ChilloutVR"]}):"",c?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[j,"VSFAvatar"]}):"",m?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[j,"VSeeFace"]}):"",x?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vnyan),children:[j,"VNyan"]}):"",u?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:[j,"Warudo"]}):"",p?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_beatsaber),children:[j,"Beat Saber"]}):"",g?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",_?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",t?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",v?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,i.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,t)=>{t.d(a,{w:()=>r});t(96540);var s=t(74848);function r(e){let{children:a}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:a})})}},66926:(e,a,t)=>{t.d(a,{U:()=>n});t(96540);var s=t(74848);const r="https://downscale.srv.hai-vr.dev",i=r+"/assets/docs/";function n(e){const a=null!=e.cdn?r+e.cdn:i+e.src.substring(e.src.lastIndexOf("/")+1);return(0,s.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,s.jsx)("source",{src:a})})}},52033:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/Unity_2zXUgUI90W-1f5245feebb3ad5e46e3551259d42ed4.png"},63217:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/Unity_mUgytskC14-e84878bc1606a7bef5a678b711068a5b.png"}}]);