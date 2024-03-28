"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5327],{42872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(85893),s=n(11151);const r={},o="\u2728 Vixen V1.1.0",a={permalink:"/updates/2024/03/28/p1",source:"@site/updates/2024-03-28-p1.md",title:"\u2728 Vixen V1.1.0",description:"Custom opposite values in Properties",date:"2024-03-28T00:00:00.000Z",formattedDate:"March 28, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u2699\ufe0f Prefabulous Avatar V1.10.2-beta.2",permalink:"/updates/2024/03/28/p0"},nextItem:{title:"\u2699\ufe0f Prefabulous Avatar V1.10.2-beta.1",permalink:"/updates/2024/03/27/p1"}},l={authorsImageUrls:[]},h=[{value:"Custom opposite values in Properties",id:"custom-opposite-values-in-properties",level:2},{value:"Other",id:"other",level:2},{value:"Fixes",id:"fixes",level:2}];function c(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"custom-opposite-values-in-properties",children:"Custom opposite values in Properties"}),"\n",(0,i.jsx)(t.p,{children:'Until this update, properties were using the value in the Scene as the "opposite" value.\nThis means you only need to specify the new value of the property, and Vixen would animate between your value and the scene value.'}),"\n",(0,i.jsx)(t.p,{children:'Properties can now use a Custom value of your choice as the "opposite" value.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In this new mode called ",(0,i.jsx)(t.strong,{children:'"C" for "Custom"'}),", the value in the scene objects are ignored.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The scene objects remain unchanged, the opposite value is not baked."}),"\n",(0,i.jsx)(t.li,{children:"This means that if the user has safety settings set to keep animations OFF, Vixen Control has no effect on the appearance of your avatar: the scene remains the source of truth."}),"\n",(0,i.jsxs)(t.li,{children:["When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"They will effectively be overriden by the opposite value."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["The previous mode called ",(0,i.jsx)(t.strong,{children:'"S" for "Scene"'})," remains the default:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Contrary to ",(0,i.jsx)(t.strong,{children:'"C"'})," mode, Vixen will animate all of these values independently from the value of each respective object to the scene value."]}),"\n",(0,i.jsx)(t.li,{children:"This is already the default behaviour in past versions."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When baking, all Vixen Control components are now deleted so that further bakes will not repeat those operations."}),"\n",(0,i.jsx)(t.li,{children:"Vixen now provides the synced parameters to NDMF, which is shown in the Modular Avatar Information panel."}),"\n",(0,i.jsx)(t.li,{children:"Now requires Modular Avatar 1.9.9 minimum."}),"\n",(0,i.jsx)(t.li,{children:"Now requires NDMF 1.4.0 minimum."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Attempt to fix incorrect behaviour of Item slot, Flags, and Ejects in some complex scenarios:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When an item slot exits, delay everything by 1 frame so that the animator has time to acknowledge a change in its parameters caused by switching OFF other controls."}),"\n",(0,i.jsx)(t.li,{children:"Remove the default state transition-to-entering shortcut because that transition incorrectly conflates Switch ON and Active."}),"\n",(0,i.jsx)(t.li,{children:"Remove the unconditional transition to the default state because that transition incorrectly conflates Switch ON and Active."}),"\n",(0,i.jsx)(t.li,{children:"All item slots now generate a None state, even slots with default, as slots with default may need to remain inactive."}),"\n",(0,i.jsx)(t.li,{children:"The None slot is now responsible for switching on the default slot, which may or may not result in the default slot becoming active."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Controls of type OSC should now be created properly. They were previously created with an generated parameter name instead of the specified one."}),"\n",(0,i.jsx)(t.li,{children:'The "Fix invalid references" buttons now use the correct path, instead of incorrectly interpreting the path as being a parameter name.'}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);