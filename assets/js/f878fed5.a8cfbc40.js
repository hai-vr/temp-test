"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),f=n,y=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return a?r.createElement(y,i(i({ref:t},p),{},{components:a})):r.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:6,title:"VRChat (Destructive workflow)"},i="Functions: VRChat (Destructive workflow)",s={unversionedId:"products/animator-as-code/functions/vrchat-destructive",id:"products/animator-as-code/functions/vrchat-destructive",title:"VRChat (Destructive workflow)",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/functions/vrchat-destructive.md",sourceDirName:"products/animator-as-code/functions",slug:"/products/animator-as-code/functions/vrchat-destructive",permalink:"/docs/products/animator-as-code/functions/vrchat-destructive",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"VRChat (Destructive workflow)"},sidebar:"tutorialSidebar",previous:{title:"VRChat",permalink:"/docs/products/animator-as-code/functions/vrchat"},next:{title:"Modular Avatar",permalink:"/docs/products/animator-as-code/functions/modular-avatar"}},l={},u=[{value:"Animator creation overview",id:"animator-creation-overview",level:4},{value:"Extensions for Base (AacFlBase)",id:"extensions-for-base-aacflbase",level:2},{value:"Destructive workflow: Create layers (AacVRCDestructiveWorkflowExtensions)",id:"destructive-workflow-create-layers-aacvrcdestructiveworkflowextensions",level:4},{value:"Destructive workflow: Remove layers (AacVRCDestructiveWorkflowExtensions)",id:"destructive-workflow-remove-layers-aacvrcdestructiveworkflowextensions",level:4}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"functions-vrchat-destructive-workflow"},"Functions: VRChat (Destructive workflow)"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This is the work-in-progress documentation for Animator As Code ",(0,n.kt)("strong",{parentName:"p"},"V1"),", which has not yet been released. The last public version of Animator As Code is V0.")),(0,n.kt)("p",null,"These functions will create and delete layers within the animator controllers inside the VRCAvatarDescriptor, hence destructive workflow."),(0,n.kt)("p",null,"As times are changing, it is recommended that you switch to a non-destructive workflow using tools such as ",(0,n.kt)("em",{parentName:"p"},"Modular Avatar")," or ",(0,n.kt)("em",{parentName:"p"},"VRCFury"),", by creating an animator controller using ",(0,n.kt)("inlineCode",{parentName:"p"},"AacFlBase.NewAnimatorController()"),". Alternatively, you can use functions contained in ",(0,n.kt)("inlineCode",{parentName:"p"},"AacFlBase")," to destructively edit an arbitrary animator controller asset."),(0,n.kt)("p",null,"To use these functions, use the extensions functions in ",(0,n.kt)("inlineCode",{parentName:"p"},"AacVRCDestructiveWorkflowExtensions"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"using AnimatorAsCode.V1.VRCDestructiveWorkflow;")," in your class imports."),(0,n.kt)("li",{parentName:"ul"},"If you use assembly definitions, add the ",(0,n.kt)("inlineCode",{parentName:"li"},"AnimatorAsCodeFramework.V1.VRCDestructiveWorkflow")," assembly reference.")),(0,n.kt)("h4",{id:"animator-creation-overview"},"Animator creation overview"),(0,n.kt)("mermaid",{value:"graph TD;\n    AacV1[static AacV1]:::roots--\x3e|Create|Base:::roots;\n    Base--\x3e|CreateMainArbitraryControllerLayer<br>/CreateSupportingArbitraryControllerLayer<br>/CreateFirstArbitraryControllerLayer|Layer;\n    Base--\x3e|CreateMainFxLayer<br>/CreateMainGestureLayer<br>/CreateMainActionLayer<br>/CreateMainIdleLayer<br>/CreateMainLocomotionLayer<br>/CreateMainAv3Layer<br>/CreateSupportingFxLayer<br>/CreateSupportingGestureLayer<br>/CreateSupportingActionLayer<br>/CreateSupportingIdleLayer<br>/CreateSupportingLocomotionLayer<br>/CreateSupportingAv3Layer|Layer;\n    Base--\x3e|RemoveAllMainLayers<br>/RemoveAllSupportingLayers|Base;\n    \n    Base--\x3e|NewAnimatorController|Controller;\n    Controller--\x3e|NewLayer|Layer;\n    \n    classDef disabled fill:#CCC\n    classDef roots fill:#FCC\n    classDef focus fill:#CFF"}),(0,n.kt)("h2",{id:"extensions-for-base-aacflbase"},"Extensions for Base (AacFlBase)"),(0,n.kt)("h4",{id:"destructive-workflow-create-layers-aacvrcdestructiveworkflowextensions"},"Destructive workflow: Create layers (AacVRCDestructiveWorkflowExtensions)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainFxLayer()")," ",(0,n.kt)("br",null),"\nCreate the main Fx layer of that system, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainGestureLayer()")," ",(0,n.kt)("br",null),"\nCreate the main Gesture layer of that system, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainActionLayer()")," ",(0,n.kt)("br",null),"\nCreate the main Action layer of that system, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainIdleLayer()")," ",(0,n.kt)("br",null),"\nCreate the main Idle layer of that system, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainLocomotionLayer()")," ",(0,n.kt)("br",null),"\nCreate the main Locomotion layer of that system, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateMainAv3Layer(VRCAvatarDescriptor.AnimLayerType animLayerType)")," ",(0,n.kt)("br",null),"\nCreate the main layer of that system for a specific type of layer, clearing the previous one of the same system. You are not obligated to have a main layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingFxLayer(string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting Fx layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingGestureLayer(string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting Gesture layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingActionLayer(string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting Action layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingIdleLayer(string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting Idle layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingLocomotionLayer(string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting Locomotion layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AacFlLayer CreateSupportingAv3Layer(VRCAvatarDescriptor.AnimLayerType animLayerType, string suffix)")," ",(0,n.kt)("br",null),"\nCreate a supporting layer for that system and suffix, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer."))),(0,n.kt)("h4",{id:"destructive-workflow-remove-layers-aacvrcdestructiveworkflowextensions"},"Destructive workflow: Remove layers (AacVRCDestructiveWorkflowExtensions)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"void RemoveAllMainLayers()")," ",(0,n.kt)("br",null),"\nRemove all main layers matching that system from all animators of the Avatar descriptor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"void RemoveAllSupportingLayers(string suffix)")," ",(0,n.kt)("br",null),"\nRemove all supporting layers matching that system and suffix from all animators of the Avatar descriptor."))))}m.isMDXComponent=!0}}]);