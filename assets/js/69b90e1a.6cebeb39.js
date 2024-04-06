"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6052],{749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=n(74848),i=n(28453);const r={sidebar_position:2},s="Bone structure",a={id:"products/toetra-rig-creator/bone-structure",title:"Bone structure",description:"This tool is currently not available, and this documentation is currently being written.",source:"@site/docs/products/toetra-rig-creator/bone-structure.md",sourceDirName:"products/toetra-rig-creator",slug:"/products/toetra-rig-creator/bone-structure",permalink:"/docs/products/toetra-rig-creator/bone-structure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mesh binding",permalink:"/docs/products/toetra-rig-creator/mesh-binding"},next:{title:"Foot Gestures",permalink:"/docs/products/toetra-rig-creator/integrations/foot-gestures"}},l={},h=[{value:"Foot structure",id:"foot-structure",level:2},{value:"Humanoid by default",id:"humanoid-by-default",level:3},{value:"Non-humanoid",id:"non-humanoid",level:3},{value:"Metatarsal bones",id:"metatarsal-bones",level:3},{value:"Rigging basics",id:"rigging-basics",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"bone-structure",children:"Bone structure"}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsx)(t.p,{children:"This tool is currently not available, and this documentation is currently being written."})}),"\n",(0,o.jsx)(t.h2,{id:"foot-structure",children:"Foot structure"}),"\n",(0,o.jsx)(t.p,{children:"A human foot is made of a lot of bones. ToeTra only exposes a few of them that it finds relevant for animation interaction purposes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the metatarsal bones (OFF by default),"}),"\n",(0,o.jsx)(t.li,{children:"the proximal bones,"}),"\n",(0,o.jsx)(t.li,{children:"the intermediate bones,"}),"\n",(0,o.jsx)(t.li,{children:"and the distal bones."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Some intermediate phalanx bones exist in the human skeleton, but they are omitted by default because these bones cannot move independently from the distal bones\non the 4th and 5th toe, so they are irrelevant for character animation and weight painting."}),"\n",(0,o.jsx)(t.h3,{id:"humanoid-by-default",children:"Humanoid by default"}),"\n",(0,o.jsx)(t.p,{children:"The tool suggests bones for humanoid characters by default, which are the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The foot has five toes."}),"\n",(0,o.jsx)(t.li,{children:"The 1st toe (Big toe) does not have an intermediate bone on humans."}),"\n",(0,o.jsx)(t.li,{children:"The 4st toe and 5th toe (little toe) have an intermediate bone that is so small on humans, they are OFF by default."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"non-humanoid",children:"Non-humanoid"}),"\n",(0,o.jsx)(t.p,{children:"If you want to rig non-humanoid characters, such as models that have three claws instead of five toes, you can adjust the generation of each toe."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'To remove a bone, uncheck "Exists".'}),"\n",(0,o.jsx)(t.li,{children:'To add or remove the intermediate bone, check "Has Intermediate".'}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"metatarsal-bones",children:"Metatarsal bones"}),"\n",(0,o.jsx)(t.p,{children:'You can generate and configure the metatarsal bones by checking "Include Metatarsal Bones".'}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"On humans, the 2nd and 3rd metatarsal bones seem to move with the foot as one, while the 1st, 4th and 5th can move, although the movement is very limited."})}),"\n",(0,o.jsx)(t.h2,{id:"rigging-basics",children:"Rigging basics"}),"\n",(0,o.jsxs)(t.p,{children:["Switch your scene view to an Isometric projection from the top, and focus on your ",(0,o.jsx)(t.strong,{children:"right"})," foot."]}),"\n",(0,o.jsx)(t.p,{children:"Open the 1st toe (Big toe) tab:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Move the tip of the toe first. The tip of the blue line should be roughly located on the ",(0,o.jsx)(t.strong,{children:"surface of the mesh"}),".","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Do not bother with the toe elevation for now."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Then move its parent to the location of a toe joint."}),"\n",(0,o.jsx)(t.li,{children:"Do the same for all of its parents."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Continue doing this with the 2nd, 3rd, 4th, and 5th toe."}),"\n",(0,o.jsx)(t.p,{children:"Now, switch your scene view to an Isometric projection from the side."}),"\n",(0,o.jsx)(t.p,{children:"Open the 1st toe (Big toe) tab:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You will see a yellow arrow pointing down on each gizmo. This yellow arrow always points to the down direction, so you should generally drag this arrow."}),"\n",(0,o.jsx)(t.li,{children:"Use that yellow arrow to move the tip of the toe to a better elevation."}),"\n",(0,o.jsx)(t.li,{children:"Use that yellow arrow again to move the other joints to a better elevation."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);