"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1502],{39238:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(85893),t=s(11151);const r={sidebar_position:8},i="Barebones way",o={id:"products/animator-as-code/reference-barebones",title:"Barebones way",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/reference-barebones.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/reference-barebones",permalink:"/docs/products/animator-as-code/reference-barebones",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"NDMF Processor",permalink:"/docs/products/animator-as-code/functions/ndmf-processor"},next:{title:"Migrating from V0 to V1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1"}},l={},c=[{value:"Typical animator creation steps",id:"typical-animator-creation-steps",level:2},{value:"Declare an Animator As Code (AAC)",id:"declare-an-animator-as-code-aac",level:2},{value:"Create one or multiple layers",id:"create-one-or-multiple-layers",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"barebones-way",children:"Barebones way"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,a.jsx)(n.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,a.jsx)(n.p,{children:"This section describes how to initialize Animator As Code in an environment where no integration is available."}),"\n",(0,a.jsx)(n.p,{children:"This is good for:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Generating Animator Controller assets on-disk."}),"\n",(0,a.jsx)(n.li,{children:"Using Animator As Code in a non-VRChat Avatars project."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you are using VRChat Avatars, it is highly recommended that you look into the ",(0,a.jsx)(n.a,{href:"getting-started",children:"non-destructive workflow examples"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"typical-animator-creation-steps",children:"Typical animator creation steps"}),"\n",(0,a.jsx)(n.p,{children:"If you use Animator As Code barebones, it is generally used in the following steps:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Declare an Animator As Code"}),"\n",(0,a.jsx)(n.li,{children:"Create one or multiple layers"}),"\n",(0,a.jsxs)(n.li,{children:["Create the states","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create the animations at the same time"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Create the transitions"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"declare-an-animator-as-code-aac",children:"Declare an Animator As Code (AAC)"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"These steps describe how to use Animator As Code without the help of any other dependency."}),(0,a.jsxs)(n.p,{children:["In VRChat Avatars, it may be much easier to use Animator As Code ",(0,a.jsx)(n.a,{href:"getting-started",children:"when it is integrated with Modular Avatar and NDMF"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"In order to use Animator As Code (AAC), first, declare it with a configuration."}),"\n",(0,a.jsx)(n.p,{children:"The AAC configuration requires the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A system name.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Animator As Code describes systems. A system can have multiple layers, not only across playable layer animators, but also within a single playable layer animator. All created layers will be prefixed with this system name."}),"\n",(0,a.jsx)(n.li,{children:"It is up to you to decide where the boundaries of the system lies."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["An animator root, and default value root.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This is used to select the playable layer animators to use."}),"\n",(0,a.jsx)(n.li,{children:"This is also used to select the root transform that animations will use for relative paths."}),"\n",(0,a.jsx)(n.li,{children:"This is used to collect the default values for some animations."}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.em,{children:"In general, they are the same object, but this is not mandatory."})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"In the case of a destructive workflow in VRChat:"})," An avatar descriptor.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This is used to select the playable layer animators to use."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["An asset container.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Animations are generated by Animator As Code, and the large quantity of generated assets can be quite messy. To limit littering your project, such assets will be generated as sub-assets of a container. The container is of type Animator Controller, but it doesn\u2019t need to have any layers within it."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["An asset key.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The asset key a prefix that all generated assets will use. When creating the layers, all generated assets that uses that prefix will be removed upon invocation of ",(0,a.jsx)(n.code,{children:"aac.ClearPreviousAssets()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["A provider of defaults.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Animator As Code is opinionated, and sometimes you want to tweak the default values. The provider of defaults is executed when a state is created, an animation is created, a transition is created. This will let you tweak the generation process."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To declare it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"string systemName;\nVRCAvatarDescriptor avatar;\nAnimatorController assetContainer;\nstring assetKey;\n\nvar aac = AacV0.Create(new AacConfiguration\n{\n    SystemName = systemName,\n    AvatarDescriptor = avatar,\n    AnimatorRoot = avatar.transform,\n    DefaultValueRoot = avatar.transform,\n    AssetContainer = assetContainer,\n    AssetKey = assetKey,\n    DefaultsProvider = new AacDefaultsProvider(writeDefaults: false)\n});\n// Remove all previously generated assets from the asset container\n// that match the asset key.\naac.ClearPreviousAssets();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-one-or-multiple-layers",children:"Create one or multiple layers"}),"\n",(0,a.jsx)(n.p,{children:"Using AAC, create layers in your animators. A system can have multiple layers across animators."}),"\n",(0,a.jsx)(n.p,{children:"There is one main layer, and multiple supporting layers, per animator."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The main layer will be named exactly after your system name."}),"\n",(0,a.jsx)(n.li,{children:"The supporting layers will be prefixed by the system name, and appended with a suffix of your choice."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You are in no obligation to create a main layer. If you think several layers of the same animators are of equal importance, you can declare them as being supporting layers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'var fx = aac.CreateMainFxLayer();\nvar detection = aac.CreateSupportingFxLayer("Detection");\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var a=s(67294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);