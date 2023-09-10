"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,k=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i="Migrating from V0 to V1",l={unversionedId:"products/animator-as-code/migrating-v0-to-v1",id:"products/animator-as-code/migrating-v0-to-v1",title:"Migrating from V0 to V1",description:"TODO: Fix mixed Linear/Easing curve generator???",source:"@site/docs/products/animator-as-code/migrating-v0-to-v1.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/migrating-v0-to-v1",permalink:"/temp-test/docs/products/animator-as-code/migrating-v0-to-v1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/products/animator-as-code/migrating-v0-to-v1.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Non-destructive workflow examples",permalink:"/temp-test/docs/products/animator-as-code/examples-maac"},next:{title:"Modular Avatar As Code V1",permalink:"/temp-test/docs/products/animator-as-code/modular-avatar-as-code/"}},s={},c=[{value:"Assembly definition",id:"assembly-definition",level:2},{value:"Code changes",id:"code-changes",level:2},{value:"Code",id:"code",level:3},{value:"TODO",id:"todo",level:3},{value:"AacConfiguration",id:"aacconfiguration",level:3},{value:"Non-destructive workflow",id:"non-destructive-workflow",level:2},{value:"Miscellaneous contract changes",id:"miscellaneous-contract-changes",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-v0-to-v1"},"Migrating from V0 to V1"),(0,r.kt)("p",null,"TODO: Fix mixed Linear/Easing curve generator???\nTODO: Fix undo slow operations (ask bd?)"),(0,r.kt)("p",null,"AnimatorAsCode V1 introduces the following main breaking changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VRChat Avatars is now an optional dependency. AnimatorAsCode can now be used in non-VRChat projects.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All VRChat-related functions have been split between two classes of extension methods."))),(0,r.kt)("li",{parentName:"ul"},"You are now encouraged to use a non-destructive workflow by generating an animator controller asset without relying on an existing animator controller asset.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"VRChat methods that use a destructive workflow, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"AacFlBase.CreateMainFxLayer()")," are located on their own class of extension methods.")))),(0,r.kt)("h2",{id:"assembly-definition"},"Assembly definition"),(0,r.kt)("p",null,"If you use assembly definitions, change the assembly reference from ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimatorAsCodeFramework")," to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AnimatorAsCodeFramework.V1")," in all cases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AnimatorAsCodeFramework.V1.VRC")," if you depend on VRChat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AnimatorAsCodeFramework.V1.VRCDestructiveWorkflow")," also if you need to edit the playable layers of the avatar directly.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Consider switching to a non-destructive workflow using VRCFury or Modular Avatar! See below."))))),(0,r.kt)("h2",{id:"code-changes"},"Code changes"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"AacV0")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AacV1")),(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V0;")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1;")),(0,r.kt)("li",{parentName:"ul"},"If your project depends on VRChat, you will need to use extension methods.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1.VRC;")," in your class imports to use the VRChat extension methods.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The extension methods are contained within the class ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRC.AacVRCExtensions"),"."))),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1.VRC;")," in your class imports to use the extension methods.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The extension methods are contained within the class ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimatorAsCode.V1.VRCDestructiveWorkflow.AacVRCDestructiveWorkflowExtensions")))))),(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"TrackingElement")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AacAv3.Av3TrackingElement"))),(0,r.kt)("h3",{id:"todo"},"TODO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TODO: Check TrackingElement being renamed to AacAv3.Av3TrackingElement")),(0,r.kt)("h3",{id:"aacconfiguration"},"AacConfiguration"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"AacConfiguration")," no longer contains the avatar descriptor, you will need to use the extension method ",(0,r.kt)("inlineCode",{parentName:"p"},"AacConfiguration.WithAvatarDescriptor(VRCAvatarDescriptor)")," to define the avatar in the configuration."),(0,r.kt)("p",null,"If you decide to migrate your scripts to a non-destructive workflow, this step is not necessary:\nYou can remove the avatar descriptor from the configuration."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using AnimatorAsCode.V1;\nusing AnimatorAsCode.V1.VRCDestructiveWorkflow;\n// ...\n\nAacV1.Create(new AacConfiguration\n{\n    SystemName = systemName,\n    AnimatorRoot = avatar.transform,\n    DefaultValueRoot = avatar.transform,\n    AssetContainer = assetContainer,\n    AssetKey = assetKey,\n    DefaultsProvider = new AacDefaultsProvider(writeDefaults: options.WriteDefaults)\n}.WithAvatarDescriptor(avatar)); // The avatar descriptor is now defined by invoking an extension method.\n")),(0,r.kt)("h2",{id:"non-destructive-workflow"},"Non-destructive workflow"),(0,r.kt)("p",null,"Animator As Code V1 encourages the use of a non-destructive workflow."),(0,r.kt)("h2",{id:"miscellaneous-contract-changes"},"Miscellaneous contract changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AacFlLayer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AacFlClip"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"AacFlEditClip")," are now classes instead of structs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AacFlFloatParameterGroup.ToList()")," now correctly returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"List<AacFlFloatParameter>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"List<AacFlBoolParameter>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AacFlIntParameterGroup.ToList()")," now correctly return the ",(0,r.kt)("inlineCode",{parentName:"li"},"List<AacFlIntParameter>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"List<AacFlBoolParameter>"),".")))}m.isMDXComponent=!0}}]);