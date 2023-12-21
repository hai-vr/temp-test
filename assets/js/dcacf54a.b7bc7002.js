"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1746],{2318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(5893),s=t(1151);const i={},r="Convert to FaceEmo",a={id:"products/combo-gesture-expressions/convert-to-faceemo",title:"Convert to FaceEmo",description:"This functionality is currently in public Beta.",source:"@site/docs/products/combo-gesture-expressions/convert-to-faceemo.md",sourceDirName:"products/combo-gesture-expressions",slug:"/products/combo-gesture-expressions/convert-to-faceemo",permalink:"/docs/products/combo-gesture-expressions/convert-to-faceemo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Write Defaults",permalink:"/docs/products/combo-gesture-expressions/additional-pages/writedefaults"},next:{title:"Constraint Track Animation Creator",permalink:"/docs/products/constraint-track-animation-creator/"}},c={},l=[{value:"Limitations",id:"limitations",level:2},{value:"How to use",id:"how-to-use",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"convert-to-faceemo",children:"Convert to FaceEmo"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This functionality is currently in public Beta."})}),"\n",(0,o.jsxs)(n.p,{children:["You can convert ComboGestureExpressions to ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://suzuryg.github.io/face-emo/",children:"FaceEmo"})}),"\nif you still have the ComboGesture components in your scene."]}),"\n",(0,o.jsx)("video",{controls:!0,width:"816",children:(0,o.jsx)("source",{src:t(7964).Z})}),"\n",(0,o.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsx)(n.p,{children:"Conversion to FaceEmo has the following limitations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ComboGestureDynamics are not converted at all."}),"\n",(0,o.jsxs)(n.li,{children:["Puppets cannot be converted. We will select only one animation from the puppet.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If a puppet is 2D, the animation at the origin is used, otherwise the first animation is used."}),"\n",(0,o.jsx)(n.li,{children:"If a puppet is 1D, the rightmost animation is used."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Fist animations are converted, but blinking prevention of analog fist animations will not carry over.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:"FaceEmo does not appear to have options to let the user select whether an animation defined within a fist trigger should disable blinking."})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["You have the option to ignore analog fists entirely, which will make the fist animation play even when the trigger is not pressed.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"In this case, the blinking prevention of fist animations will carry over."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(n.p,{children:["In VCC, install the additional package ",(0,o.jsx)(n.em,{children:"Ha\xef ~ Convert ComboGesture to FaceEmo"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the scene that contains the ComboGesture components and your avatar, create a ",(0,o.jsx)(n.a,{href:"https://suzuryg.github.io/face-emo/docs/tutorials/simple-menu/",children:"New Expression Menu in FaceEmo"}),"\nor reuse the one you have."]}),"\n",(0,o.jsxs)(n.li,{children:["Outside the avatar, create a GameObject and add a ",(0,o.jsx)(n.em,{children:"ComboGesture to FaceEmo Converter"}),' component (search for "convert").\n',(0,o.jsx)(n.img,{alt:"img/convert.png",src:t(9088).Z+"",width:"373",height:"268"})]}),"\n",(0,o.jsx)(n.li,{children:"Specify the ComboGestureCompiler component and the FaceEmo component."}),"\n",(0,o.jsx)(n.li,{children:"Choose whether you want to ignore fist triggers (see limitations above)."}),"\n",(0,o.jsx)(n.li,{children:"Press Convert."}),"\n",(0,o.jsxs)(n.li,{children:["When satisfied, you can safely delete the ",(0,o.jsx)(n.em,{children:"ComboGesture to FaceEmo Converter"})," component from your scene."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"Don't use ComboGestureExpressions and FaceEmo simultaneously in the same avatar!"}),(0,o.jsx)(n.p,{children:"If you are going to use FaceEmo, make sure you have removed the CGE layers from your FX and Gesture layers,\nalong with any Expressions Menu and Expression Parameters related to CGE."})]}),"\n",(0,o.jsxs)(n.p,{children:["When done, remove the package ",(0,o.jsx)(n.em,{children:"Ha\xef ~ Convert ComboGesture to FaceEmo"})," so that it doesn't interfere with the installation\nof future FaceEmo updates."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7964:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/medias/NWB6b75D8N-a1a30181d4e91929d47c887077663b4d.mp4"},9088:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/convert-9b251998569d55c42c2e3d4913f558e0.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);