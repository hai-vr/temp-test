"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,k=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:9},i="Migrating from V0 to V1",l={unversionedId:"products/animator-as-code/migrating-v0-to-v1",id:"products/animator-as-code/migrating-v0-to-v1",title:"Migrating from V0 to V1",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/migrating-v0-to-v1.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/migrating-v0-to-v1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Non-destructive workflow examples",permalink:"/docs/products/animator-as-code/examples-maac"},next:{title:"Blendshape Viewer",permalink:"/docs/products/blendshape-viewer"}},s={},c=[{value:"Assembly definition",id:"assembly-definition",level:2},{value:"Code changes",id:"code-changes",level:2},{value:"Code",id:"code",level:3},{value:"TODO",id:"todo",level:3},{value:"AacConfiguration",id:"aacconfiguration",level:3},{value:"Non-destructive workflow",id:"non-destructive-workflow",level:2},{value:"Miscellaneous contract changes",id:"miscellaneous-contract-changes",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-from-v0-to-v1"},"Migrating from V0 to V1"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This is the work-in-progress documentation for Animator As Code ",(0,o.kt)("strong",{parentName:"p"},"V1"),", which has not yet been released. The last public version of Animator As Code is V0.")),(0,o.kt)("p",null,"AnimatorAsCode V1 introduces the following main breaking changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VRChat Avatars is now an optional dependency. AnimatorAsCode can now be used in non-VRChat projects.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"All VRChat-related functions have been split between two classes of extension methods."))),(0,o.kt)("li",{parentName:"ul"},"You are now encouraged to use a non-destructive workflow by generating an animator controller asset without relying on an existing animator controller asset.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"VRChat methods that use a destructive workflow, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"AacFlBase.CreateMainFxLayer()")," are located on their own class of extension methods.")))),(0,o.kt)("h2",{id:"assembly-definition"},"Assembly definition"),(0,o.kt)("p",null,"If you use assembly definitions, change the assembly reference from ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatorAsCodeFramework")," to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1")," in all cases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRChat")," if you depend on VRChat."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRChatDestructiveWorkflow")," also if you need to edit the playable layers of the avatar directly.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Consider switching to a non-destructive workflow using VRCFury or Modular Avatar! See below."))))),(0,o.kt)("h2",{id:"code-changes"},"Code changes"),(0,o.kt)("h3",{id:"code"},"Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"AacV0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"AacV1")),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V0;")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1;")),(0,o.kt)("li",{parentName:"ul"},"If your project depends on VRChat, you will need to use extension methods.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1.VRC;")," in your class imports to use the VRChat extension methods.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The extension methods are contained within the class ",(0,o.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRC.AacVRCExtensions"),"."))),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1.VRCDestructiveWorkflow;")," in your class imports to use the VRChat destructive workflow extension methods.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The extension methods are contained within the class ",(0,o.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRCDestructiveWorkflow.AacVRCDestructiveWorkflowExtensions")))))),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"TrackingElement")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"AacAv3.Av3TrackingElement"))),(0,o.kt)("h3",{id:"todo"},"TODO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO: Check TrackingElement being renamed to AacAv3.Av3TrackingElement")),(0,o.kt)("h3",{id:"aacconfiguration"},"AacConfiguration"),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"AacConfiguration")," no longer contains the avatar descriptor, you will need to use the extension method ",(0,o.kt)("inlineCode",{parentName:"p"},"AacConfiguration.WithAvatarDescriptor(VRCAvatarDescriptor)")," to define the avatar in the configuration."),(0,o.kt)("p",null,"If you decide to migrate your scripts to a non-destructive workflow, this step is not necessary:\nYou can remove the avatar descriptor from the configuration."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using AnimatorAsCode.V1;\nusing AnimatorAsCode.V1.VRCDestructiveWorkflow;\n// ...\n\nAacV1.Create(new AacConfiguration\n{\n    SystemName = systemName,\n    AnimatorRoot = avatar.transform,\n    DefaultValueRoot = avatar.transform,\n    AssetContainer = assetContainer,\n    AssetKey = assetKey,\n    DefaultsProvider = new AacDefaultsProvider(writeDefaults: options.WriteDefaults)\n}.WithAvatarDescriptor(avatar)); // The avatar descriptor is now defined by invoking an extension method.\n")),(0,o.kt)("h2",{id:"non-destructive-workflow"},"Non-destructive workflow"),(0,o.kt)("p",null,"Animator As Code V1 encourages the use of a non-destructive workflow."),(0,o.kt)("h2",{id:"miscellaneous-contract-changes"},"Miscellaneous contract changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AacFlLayer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"AacFlClip"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"AacFlEditClip")," are now classes instead of structs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AacFlFloatParameterGroup.ToList()")," now correctly returns the ",(0,o.kt)("inlineCode",{parentName:"li"},"List<AacFlFloatParameter>")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"List<AacFlBoolParameter>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AacFlIntParameterGroup.ToList()")," now correctly return the ",(0,o.kt)("inlineCode",{parentName:"li"},"List<AacFlIntParameter>")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"List<AacFlBoolParameter>"),".")))}m.isMDXComponent=!0}}]);