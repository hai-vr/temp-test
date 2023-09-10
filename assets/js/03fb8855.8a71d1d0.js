"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5699],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),m=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,d=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return a?t.createElement(d,s(s({ref:n},c),{},{components:a})):t.createElement(d,s({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2634:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7},s="Non-destructive workflow examples",o={unversionedId:"products/animator-as-code/examples-maac",id:"products/animator-as-code/examples-maac",title:"Non-destructive workflow examples",description:"0 Toggle a GameObject",source:"@site/docs/products/animator-as-code/examples-maac.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/examples-maac",permalink:"/temp-test/docs/products/animator-as-code/examples-maac",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/products/animator-as-code/examples-maac.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Functions: VRChat (Destructive workflow)",permalink:"/temp-test/docs/products/animator-as-code/functions-vrchat-destructive"},next:{title:"Migrating from V0 to V1",permalink:"/temp-test/docs/products/animator-as-code/migrating-v0-to-v1"}},l={},m=[{value:"#0 Toggle a GameObject",id:"0-toggle-a-gameobject",level:2},{value:"#1 Toggle a SkinnedMeshRenderer with two conditions",id:"1-toggle-a-skinnedmeshrenderer-with-two-conditions",level:2},{value:"#2 Animate a SkinnedMesh with Motion time",id:"2-animate-a-skinnedmesh-with-motion-time",level:2},{value:"#3 Using Parameter Drivers",id:"3-using-parameter-drivers",level:2}],c={toc:m},p="wrapper";function h(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-destructive-workflow-examples"},"Non-destructive workflow examples"),(0,r.kt)("h2",{id:"0-toggle-a-gameobject"},"#0 Toggle a GameObject"),(0,r.kt)("p",null,"This example shows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating a FX layer"),(0,r.kt)("li",{parentName:"ul"},"Creating states"),(0,r.kt)("li",{parentName:"ul"},"Creating animations"),(0,r.kt)("li",{parentName:"ul"},"Declaring a Bool parameter"),(0,r.kt)("li",{parentName:"ul"},"Creating transitions with conditions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/60819407/155912947-7e5ac988-71f7-44cd-b526-2e245faffcd9.png",alt:"sx_2022-02-25_00-47-15_dDwKV4bsE2"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class GenExample0_ToggleGo : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public GameObject item;\n    public ModularAvatarMergeAnimator mergeAnimator;\n}\n\nprivate void Create()\n{\n    var my = (GenExample0_ToggleGo) target;\n    // The avatar is used here:\n    // - to find the FX playable layer animator, where a new layer will be created.\n    // - to resolve the relative animation path to the item.\n    // The generated animation files are stored in the asset container.\n    var aac = AacExample.AnimatorAsCode("Example 0", my.avatar, my.assetContainer, my.assetKey, AacExample.Options().WriteDefaultsOff());\n\n    // Create a layer in the FX animator.\n    // Additional layers can be created in the FX animator (see later in the manual).\n    var fxCtrl = aac.NewAnimatorController();\n    var fx = fxCtrl.CreateLayer();\n\n    // The first created state is the default one connected to the "Entry" node.\n    // States are automatically placed on the grid (see later in the manual).\n    var hidden = fx.NewState("Hidden")\n        // Animation assets are generated as sub-assets of the asset container.\n        // The animation path to my.skinnedMesh is relative to my.avatar\n        .WithAnimation(aac.NewClip().Toggling(my.item, false));\n    var shown = fx.NewState("Shown")\n        .WithAnimation(aac.NewClip().Toggling(my.item, true));\n\n    // Creates a Bool parameter in the FX layer.\n    // Parameters are added to the Animator if a parameter with the same name\n    // does not exist yet.\n    var itemParam = fx.BoolParameter("EnableItem");\n\n    // Transitions are created with a set of default values\n    // That can be changed in the Generator settings (see later in the manual).\n    hidden.TransitionsTo(shown).When(itemParam.IsTrue());\n    shown.TransitionsTo(hidden).When(itemParam.IsFalse());\n    \n    // Modular Avatar: Define our newly-generated animator in Modular Avatar\n    mergeAnimator.???\n}\n')),(0,r.kt)("h2",{id:"1-toggle-a-skinnedmeshrenderer-with-two-conditions"},"#1 Toggle a SkinnedMeshRenderer with two conditions"),(0,r.kt)("p",null,"This example shows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simple toggle animations"),(0,r.kt)("li",{parentName:"ul"},"Groups of Bool parameters"),(0,r.kt)("li",{parentName:"ul"},"Simple transitions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60819407/155912964-ffdfe363-6c1f-41d4-b474-9f18e1749c4d.png",alt:"sx_2022-02-25_00-39-05_DbvwrouqFc"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class GenExample1_ToggleSmr : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer skinnedMesh;\n}\n\nprivate void Create()\n{\n    var my = (GenExample1_ToggleSmr) target;\n    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    var fxCtrl = aac.NewAnimatorController();\n    var fx = fxCtrl.CreateLayer();\n    var hidden = fx.NewState("Hidden")\n        // The runtime type of my.skinnedMesh is used within the animation.\n        // In this case, the "SkinnedMeshRenderer" component is disabled.\n        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, false));\n    var shown = fx.NewState("Shown")\n        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, true));\n    \n    // This creates two Bool parameters in the animator.\n    // The resulting value can be used in conditions.\n    var accessoriesParams = fx.BoolParameters("EnableAccessories", "AccessoryThing");\n    \n    // The following line creates one transition.\n    // The conditions are "EnableAccessories is true" and "AccessoryThing is true"\n    hidden.TransitionsTo(shown).When(accessoriesParams.AreTrue());\n    \n    // The following line creates two transitions:\n    // - The first transition is "EnableAccessories is false"\n    // - The second transition is "AccessoryThing is false"\n    shown.TransitionsTo(hidden).When(accessoriesParams.IsAnyFalse());\n}\n')),(0,r.kt)("h2",{id:"2-animate-a-skinnedmesh-with-motion-time"},"#2 Animate a SkinnedMesh with Motion time"),(0,r.kt)("p",null,"This example shows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describing animations with simplified keyframes"),(0,r.kt)("li",{parentName:"ul"},"Animating a state with Motion Time (formerly known as Normalized Time)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60819407/155912980-53ba1528-0872-4b65-a491-2e9442f48bae.png",alt:"sx_2022-02-25_01-25-53_2KNRPmra4o"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class GenExample2_Animate : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer wedgeMesh;\n}\n\nprivate void Create()\n{\n    var my = (GenExample2_Animate) target;\n    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    var fxCtrl = aac.NewAnimatorController();\n    var fx = fxCtrl.CreateLayer();\n    \n    fx.NewState("Motion")\n        .WithAnimation(aac.NewClip().Animating(clip =>\n        {\n            clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>\n                keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)\n            );\n            clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>\n                keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)\n            );\n        }))\n        .MotionTime(fx.FloatParameter("WedgeAmount"));\n}\n')),(0,r.kt)("h2",{id:"3-using-parameter-drivers"},"#3 Using Parameter Drivers"),(0,r.kt)("p",null,"This example shows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Driving parameters using VRC Parameter Driver behavior")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VRChat Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating systems with multiple FX layers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Complex transitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Show code...")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class GenExample3_Gesturing : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer iconMesh;\n}\n\nprivate GenExample3_Gesturing my;\nprivate AacFlBase aac;\n\nprivate void Create()\n{\n    my = (GenExample3_Gesturing) target;\n    aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    CreateMainLayer();\n    CreateSupportingLayer();\n}\n\nprivate void CreateMainLayer()\n{\n    var layer = fxCtrl.CreateLayer();\n    \n    var dirtyCheckParameter = layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck");\n    \n    // ### Create states\n    var lackOfChangeDetected = layer.NewState("Animate To NoChange")\n        .WithAnimation(IconAppears());\n    \n    // By default, states have an animation that animates a dummy object for 1 frame.\n    var noChange = layer.NewState("NoChange", 1, 0).RightOf();\n    \n    var changeDetected = layer.NewState("Animate To Changing").Under()\n        .WithAnimation(IconDisappears());\n    \n    // This creates a clip that animates a dummy object for 1.5f seconds.\n    var changing = layer.NewState("Changing", 0, 1).LeftOf()\n        .WithAnimation(aac.DummyClipLasting(1.5f, AacFlUnit.Seconds));\n    \n    // When this state is entered, the parameter is driven to the value of false.\n    var stillChanging = layer.NewState("Still Changing", 0, 2).Under()\n        .Drives(dirtyCheckParameter, false);\n    \n    // ------\n    \n    // ### Create transitions\n    lackOfChangeDetected.TransitionsTo(changeDetected).AfterAnimationIsAtLeastAtPercent(0.7f).When(dirtyCheckParameter.IsTrue());\n    \n    // The transition duration is 30% of the animation duration.\n    lackOfChangeDetected.TransitionsTo(noChange).AfterAnimationFinishes().WithTransitionDurationPercent(0.3f);\n    \n    noChange.TransitionsTo(changeDetected).When(dirtyCheckParameter.IsTrue());\n    \n    // By using AfterAnimationFinishes, the transition will trigger after the animation\n    // for the icon appearing finishes.\n    changeDetected.TransitionsTo(changing).AfterAnimationFinishes();\n    \n    changing.TransitionsTo(stillChanging).When(dirtyCheckParameter.IsTrue());\n    // By using AfterAnimationFinishes, the transition will trigger after 1.5 seconds,\n    // which is the length of the animation in Changing.\n    changing.TransitionsTo(lackOfChangeDetected).AfterAnimationFinishes();\n    \n    // The transition will immediately happen upon entering, by using Exit time set to 0.\n    stillChanging.AutomaticallyMovesTo(changing);\n}\n\nprivate void CreateSupportingLayer()\n{\n    // Create an additional FX layer.\n    var layer = aac.CreateSupportingFxLayer("Detection");\n    var reevaluating = layer.NewState("Reevaluating", -1, 0);\n    \n    foreach (var left in Enumerable.Range(0, 8))\n    {\n        foreach (var right in Enumerable.Range(0, 8))\n        {\n            var state = layer.NewState($"Gesture {left} {right}", left, right)\n                // When this state is entered, the parameter is driven to the value of true.\n                .Drives(layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck"), true);\n    \n            reevaluating.TransitionsTo(state)\n                // Use ".Av3" to access VRChat standard parameters.\n                // Accessing these parameters will create the corresponding parameter in the animator.\n                .When(layer.Av3().GestureLeft.IsEqualTo(left))\n                .And(layer.Av3().GestureRight.IsEqualTo(right));\n            state.TransitionsTo(reevaluating)\n                .When(layer.Av3().GestureLeft.IsNotEqualTo(left))\n                .Or()\n                .When(layer.Av3().GestureRight.IsNotEqualTo(right));\n        }\n    }\n}\n\nprivate AacFlClip IconAppears()\n{\n    return aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.iconMesh, "blendShape.Wedge")\n            .WithFrameCountUnit(keyframes => keyframes.Easing(0, 0f).Easing(10, 100f));\n    });\n}\n\nprivate AacFlClip IconDisappears()\n{\n    return aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.iconMesh, "blendShape.Wedge")\n            .WithFrameCountUnit(keyframes => keyframes.Easing(0f, 100f).Easing(10, 0f));\n    });\n}\n')))))}h.isMDXComponent=!0}}]);