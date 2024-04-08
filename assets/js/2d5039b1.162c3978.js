"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3897],{1615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=t(74848),i=t(28453);const a={},o="\u2728 FaceTra Shape Creator V0.8",r={permalink:"/updates/2024/04/08/p0",source:"@site/updates/2024-04-08-p0.md",title:"\u2728 FaceTra Shape Creator V0.8",description:"New Construction Line: Blush Modifier Selection",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:'\ud83e\uddea Knowledge sharing "Animating locomotion using OSC Trackers"',permalink:"/updates/2024/04/07/p0-ks"}},l={authorsImageUrls:[]},h=[{value:"New Construction Line: Blush Modifier Selection",id:"new-construction-line-blush-modifier-selection",level:2},{value:"Convert from Unified Expressions to ARKit",id:"convert-from-unified-expressions-to-arkit",level:2}];function c(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"new-construction-line-blush-modifier-selection",children:["New Construction Line: ",(0,s.jsx)(n.a,{href:"/docs/products/facetra-shape-creator/construction-lines#optional-blush-modifier-selection",children:"Blush Modifier Selection"})]}),"\n",(0,s.jsx)(n.p,{children:"Many avatars have blendshapes hidden inside the head to make the character blush."}),"\n",(0,s.jsx)(n.p,{children:"However, when you squint, or when you puff your cheeks, these blush blendshapes will visibly clip through your face expressions."}),"\n",(0,s.jsx)(n.p,{children:"To address this, Blush Modifier Selection is a new construction line, which can only be selected using blendshapes (it is not a traditional vertex selection).\nIt can be left empty."}),"\n",(0,s.jsx)(n.p,{children:"When blendshapes are added to the Blush Modifier Selection, the blendshape will be simulated to be active, so that they will be moved by the following shapes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cheek Squint"}),"\n",(0,s.jsx)(n.li,{children:"Cheek Puff"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, this will not work with all avatar bases. The density of the blush mesh needs to be similar (or half as similar) to the face mesh itself. If it's a gigantic polygon, it will not work so well."}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:t(17292).A})}),"\n",(0,s.jsx)(n.h2,{id:"convert-from-unified-expressions-to-arkit",children:"Convert from Unified Expressions to ARKit"}),"\n",(0,s.jsxs)(n.p,{children:["Functionality almost identical to ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous/universal/convert-blendshape-conventions",children:"Prefabulous Convert Blendshape Conventions"})," has been added natively to FaceTra Shape Creator, in the Output section.\nThis only affects blendshapes that FaceTra creates, and will not affect any other non-face tracking related blendshapes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Contrary to Prefabulous, the VRChat SDK is not required."}),"\n",(0,s.jsxs)(n.li,{children:["This allows you to export blendshapes using the ARKit naming convention. It will still be a bit messy as FaceTra creates many more blendshapes than ARKit needs, such as left/right variants for blendshapes that do not have left/right variants in ARKit.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The blendshapes will only be converted when entering Play mode, or baking the avatar using NDMF, or preparing a Resonite bake using FaceTra. Edit mode will still display the blendshapes using the Unified Expressions naming convention."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},17292:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/medias/blush-facetra-f-4708d05b30588cd4debebd542083ccec.mp4"}}]);