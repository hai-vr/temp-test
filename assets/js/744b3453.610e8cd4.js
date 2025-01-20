"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1841],{10972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),o=t(66926);const r={sidebar_position:0},a="Getting started",l={id:"products/vixen/getting-started",title:"Getting started",description:"Method of operation",source:"@site/docs/products/vixen/getting-started.md",sourceDirName:"products/vixen",slug:"/products/vixen/getting-started",permalink:"/docs/products/vixen/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u2b50 Vixen",permalink:"/docs/products/vixen/"},next:{title:"Change Properties",permalink:"/docs/products/vixen/change-properties"}},h={},d=[{value:"Method of operation",id:"method-of-operation",level:2},{value:"Install Vixen",id:"install-vixen",level:2},{value:"Menu items and toggles",id:"menu-items-and-toggles",level:2},{value:"Create a menu item",id:"create-a-menu-item",level:3},{value:"Create toggles",id:"create-toggles",level:3},{value:"Previewing changes",id:"previewing-changes",level:2},{value:"Change properties",id:"change-properties",level:2},{value:"Create the first object group",id:"create-the-first-object-group",level:3},{value:"Search for properties",id:"search-for-properties",level:3},{value:"Edit the property",id:"edit-the-property",level:3},{value:"Change all renderers of the avatar at once",id:"change-all-renderers-of-the-avatar-at-once",level:3},{value:"Multiple object groups",id:"multiple-object-groups",level:3},{value:"Advanced Menu and Non-menus",id:"advanced-menu-and-non-menus",level:2},{value:"Interpolation",id:"interpolation",level:3},{value:"Custom bounds",id:"custom-bounds",level:3}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(o.U,{src:"./img/2023-10-20_17-11-26_ShareX.mp4"}),"\n",(0,i.jsx)(n.h2,{id:"method-of-operation",children:"Method of operation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Vixen"})," is a ",(0,i.jsx)(n.strong,{children:"non-destructive"})," tool. The animators, menus and parameters are generated right before your avatar uploads, leaving your assets on-disk clean."]}),"\n",(0,i.jsx)(n.p,{children:"Compatibility notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Vixen"})," is built on top of ",(0,i.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"}),", but it does not require you to learn how to use Modular Avatar."]}),"\n",(0,i.jsx)(n.li,{children:"It uses the NDM Framework."}),"\n",(0,i.jsxs)(n.li,{children:["It should be compatible with projects that use ",(0,i.jsx)(n.a,{href:"https://vrcfury.com/",children:"VRCFury"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-vixen",children:"Install Vixen"}),"\n",(0,i.jsxs)(n.p,{children:["First, go to Patreon to ",(0,i.jsx)(n.a,{href:"../vixen",children:"download Vixen"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Vixen requires the use of the VRChat Creator Companion."}),"\n",(0,i.jsxs)(n.p,{children:["You need to add ",(0,i.jsx)(n.strong,{children:"two"})," listings:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar listing"})})," by clicking on ",(0,i.jsx)(n.em,{children:"Download (using VCC)"}),", and"]}),"\n",(0,i.jsxs)(n.li,{children:["also ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install Ha\xef~'s listing to VCC"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In VCC, add the ",(0,i.jsx)(n.strong,{children:'"Ha\xef~ - VCC Dependencies for Vixen"'})," package to your project."]}),"\n",(0,i.jsx)(n.p,{children:"Finally, open the downloaded Vixen archive and install the .unitypackage in your project."}),"\n",(0,i.jsx)(n.h2,{id:"menu-items-and-toggles",children:"Menu items and toggles"}),"\n",(0,i.jsx)(o.U,{src:"./img/2023-10-20_17-23-33_ShareX.mp4"}),"\n",(0,i.jsx)(n.h3,{id:"create-a-menu-item",children:"Create a menu item"}),"\n",(0,i.jsxs)(n.p,{children:["To create a menu item, create a new GameObject inside your avatar, and attach a ",(0,i.jsx)(n.strong,{children:"Vixen Control"})," component to it. Give a name to your menu."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to put that menu item inside a sub-folder of your Expressions menu, create a new GameObject inside your avatar, and attach a ",(0,i.jsx)(n.strong,{children:"Vixen Folder"})," component to it. Move your menu items into that GameObject."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"For existing Modular Avatar users:"}),(0,i.jsxs)(n.p,{children:["If you're already familiar with Modular Avatar's menu systems, and you already use Modular Avatar ",(0,i.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/docs/reference/menu-item#submenus",children:"Menu Item of type Submenu"}),",\nthen you can choose to put Vixen Controls directly inside your existing Modular Avatar Menu Item of type Submenu (and Vixen Folders)."]}),(0,i.jsx)(n.p,{children:"If you're not already familiar, then just use Vixen Folders."})]}),"\n",(0,i.jsx)(n.h3,{id:"create-toggles",children:"Create toggles"}),"\n",(0,i.jsx)(n.p,{children:"Drag objects into the Toggle category:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Objects placed in ",(0,i.jsx)(n.em,{children:"Enable these when active"})," will be visible when the menu is turned on."]}),"\n",(0,i.jsxs)(n.li,{children:["Objects placed in ",(0,i.jsx)(n.em,{children:"Disable these when active"})," will be visible when the menu is turned off."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you want to toggle a component instead of the object itself, drag the object into the Toggle category, and then choose the desired component in the dropdown."}),"\n",(0,i.jsx)(n.h2,{id:"previewing-changes",children:"Previewing changes"}),"\n",(0,i.jsx)(o.U,{src:"./img/2023-10-20_17-20-09_ShareX.mp4"}),"\n",(0,i.jsxs)(n.p,{children:["At the top, you can press ",(0,i.jsx)(n.em,{children:"Preview when active"})," to preview the avatar when the menu is active."]}),"\n",(0,i.jsxs)(n.p,{children:["Conversely, press ",(0,i.jsx)(n.em,{children:"Preview when inactive"})," to preview the avatar when the menu is inactive."]}),"\n",(0,i.jsxs)(n.p,{children:["If you're testing for effects over time such as a dissolve, press one of the ",(0,i.jsx)(n.em,{children:"Preview"})," buttons, and scrub the slider."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"You may not be able to test for particle effects or other complex effects in this mode."})}),"\n",(0,i.jsx)(n.h2,{id:"change-properties",children:"Change properties"}),"\n",(0,i.jsx)(o.U,{src:"./img/2023-10-20_17-18-39_ShareX.mp4"}),"\n",(0,i.jsx)(n.h3,{id:"create-the-first-object-group",children:"Create the first object group"}),"\n",(0,i.jsx)(n.p,{children:"In the Properties category, click + to create a group."}),"\n",(0,i.jsx)(n.p,{children:"Drag the objects to change into that group."}),"\n",(0,i.jsx)(n.h3,{id:"search-for-properties",children:"Search for properties"}),"\n",(0,i.jsxs)(n.p,{children:["In the components that will show up below, click one of ",(0,i.jsx)(n.em,{children:"Properties"}),", ",(0,i.jsx)(n.em,{children:"Materials"}),", ",(0,i.jsx)(n.em,{children:"BlendShapes"}),", or ",(0,i.jsx)(n.em,{children:"Other"})," to start looking for properties to animate."]}),"\n",(0,i.jsx)(n.p,{children:"In the search field, type a few letters corresponding to the property you're looking for, and press the Add button to add it."}),"\n",(0,i.jsx)(n.p,{children:"When done, press the _ button at the top right to minimize the search."}),"\n",(0,i.jsx)(n.h3,{id:"edit-the-property",children:"Edit the property"}),"\n",(0,i.jsx)(n.p,{children:"Move the slider of the property to change the value. You can also choose a value out of range of the slider by editing the number above the slider."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'If the button on the right says "When active", it means the value will be changed to that value when the menu is active.'}),"\n",(0,i.jsx)(n.li,{children:'If the button on the right says "When inactive", it means the value will be changed to that value when the menu is inactive.'}),"\n",(0,i.jsx)(n.li,{children:"Press that button to switch between the two."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"change-all-renderers-of-the-avatar-at-once",children:"Change all renderers of the avatar at once"}),"\n",(0,i.jsxs)(n.p,{children:["You can choose to affect all components of the same type across the entirety of the avatar by changing the ",(0,i.jsx)(n.em,{children:"Selection"})," setting to ",(0,i.jsx)(n.strong,{children:"Everything"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It will only change blendshapes on the meshes that have that blendshape when the avatar is being built."}),"\n",(0,i.jsx)(n.li,{children:"It will change materials on the meshes, even if the materials do not currently have that property, so that it works if you swap the material later."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"multiple-object-groups",children:"Multiple object groups"}),"\n",(0,i.jsx)(n.p,{children:"If you need to change the properties of different objects in a different way, press + to create another group."}),"\n",(0,i.jsx)(n.h2,{id:"advanced-menu-and-non-menus",children:"Advanced Menu and Non-menus"}),"\n",(0,i.jsx)(n.p,{children:"In the Menu category, you can choose other modes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simplified Menu"})," shows the essentials of a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advanced Menu"})," shows all options of a menu, including the parameter name, and whether it is synced."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Export Animations"})," disables the menu, and lets your export the animations to files every time the avatar is being built, so that you may be able to use these animations inside other animators."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditional"})," is explained in the next few documentation pages (the Flags section), and lets you combine multiple conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OSC"})," is a like an invisible menu item. You will need to control it using an OSC program. You ",(0,i.jsx)(n.strong,{children:"must not"})," use this for Contacts or PhysBones."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact"})," lets you use a VRC Contact to control the animation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PhysBone"})," lets you use a VRC PhysBone to control the animation."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you leave the parameter name blank on an Advanced Menu, Contact, or PhysBone, we will choose one for you."}),"\n",(0,i.jsx)(n.h3,{id:"interpolation",children:"Interpolation"}),"\n",(0,i.jsx)(n.p,{children:"Most of the modes also have the following properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can set the ",(0,i.jsx)(n.strong,{children:"Interpolation Duration"})," in seconds, which is the time it takes for the element to go from active to inactive, and inversely."]}),"\n",(0,i.jsxs)(n.li,{children:["In most modes, if the Interpolation Duration is set, you can choose the ",(0,i.jsx)(n.strong,{children:"Interpolation Curve"}),". The interpolation controls the easing curve when the element goes from active to inactive."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"custom-bounds",children:"Custom bounds"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature was added in V1.3.0."})}),"\n",(0,i.jsx)(n.p,{children:"In Contact, PhysBone, or OSC Float modes, the control is inactive when the value is 0.0, and active when the value is 1.0."}),"\n",(0,i.jsx)(n.p,{children:"You can choose custom bounds so that the element is inactive when the value is closest to the lower bound,\nand active when the value is closest to the upper bound."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},66926:(e,n,t)=>{t.d(n,{U:()=>r});t(96540);var i=t(74848);const s="https://large.docs.cdn.hai-vr.dev",o=s+"/assets/docs/";function r(e){const n=null!=e.cdn?s+e.cdn:o+e.src.substring(e.src.lastIndexOf("/")+1);return(0,i.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,i.jsx)("source",{src:n})})}}}]);