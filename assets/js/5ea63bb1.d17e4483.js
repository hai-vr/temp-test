"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2789],{26243:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(85893),i=a(11151);const r={sidebar_position:3},s="Examples",o={id:"products/animator-as-code/examples",title:"Examples",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/examples.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/examples",permalink:"/docs/products/animator-as-code/examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/products/animator-as-code/getting-started"},next:{title:"Reference manual",permalink:"/docs/products/animator-as-code/reference"}},l={},c=[{value:"#0 Toggle a GameObject",id:"0-toggle-a-gameobject",level:2},{value:"#1 Toggle a SkinnedMeshRenderer with two conditions",id:"1-toggle-a-skinnedmeshrenderer-with-two-conditions",level:2},{value:"#2 Animate a SkinnedMesh with Motion time",id:"2-animate-a-skinnedmesh-with-motion-time",level:2},{value:"#3 Using Parameter Drivers",id:"3-using-parameter-drivers",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,t.jsx)(n.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["These examples below are using a ",(0,t.jsx)(n.strong,{children:"destructive workflow"}),"."]}),(0,t.jsxs)(n.p,{children:["If you are familiar with non-destructive workflow tools such as ",(0,t.jsx)(n.strong,{children:"Modular Avatar"})," or ",(0,t.jsx)(n.strong,{children:"VRCFury"}),", you should probably see the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./examples-maac",children:"non-destructive workflow examples"})}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"0-toggle-a-gameobject",children:"#0 Toggle a GameObject"}),"\n",(0,t.jsx)(n.p,{children:"This example shows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating a FX layer"}),"\n",(0,t.jsx)(n.li,{children:"Creating states"}),"\n",(0,t.jsx)(n.li,{children:"Creating animations"}),"\n",(0,t.jsx)(n.li,{children:"Declaring a Bool parameter"}),"\n",(0,t.jsx)(n.li,{children:"Creating transitions with conditions"}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60819407/155912947-7e5ac988-71f7-44cd-b526-2e245faffcd9.png",alt:"sx_2022-02-25_00-47-15_dDwKV4bsE2"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public class GenExample0_ToggleGo : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public GameObject item;\n}\n\nprivate void Create()\n{\n    var my = (GenExample0_ToggleGo) target;\n    // The avatar is used here:\n    // - to find the FX playable layer animator, where a new layer will be created.\n    // - to resolve the relative animation path to the item.\n    // The generated animation files are stored in the asset container.\n    var aac = AacExample.AnimatorAsCode("Example 0", my.avatar, my.assetContainer, my.assetKey, AacExample.Options().WriteDefaultsOff());\n\n    // Create a layer in the FX animator.\n    // Additional layers can be created in the FX animator (see later in the manual).\n    var fx = aac.CreateMainFxLayer();\n\n    // The first created state is the default one connected to the "Entry" node.\n    // States are automatically placed on the grid (see later in the manual).\n    var hidden = fx.NewState("Hidden")\n        // Animation assets are generated as sub-assets of the asset container.\n        // The animation path to my.skinnedMesh is relative to my.avatar\n        .WithAnimation(aac.NewClip().Toggling(my.item, false));\n    var shown = fx.NewState("Shown")\n        .WithAnimation(aac.NewClip().Toggling(my.item, true));\n\n    // Creates a Bool parameter in the FX layer.\n    // Parameters are added to the Animator if a parameter with the same name\n    // does not exist yet.\n    var itemParam = fx.BoolParameter("EnableItem");\n\n    // Transitions are created with a set of default values\n    // That can be changed in the Generator settings (see later in the manual).\n    hidden.TransitionsTo(shown).When(itemParam.IsTrue());\n    shown.TransitionsTo(hidden).When(itemParam.IsFalse());\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"1-toggle-a-skinnedmeshrenderer-with-two-conditions",children:"#1 Toggle a SkinnedMeshRenderer with two conditions"}),"\n",(0,t.jsx)(n.p,{children:"This example shows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Simple toggle animations"}),"\n",(0,t.jsx)(n.li,{children:"Groups of Bool parameters"}),"\n",(0,t.jsx)(n.li,{children:"Simple transitions"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60819407/155912964-ffdfe363-6c1f-41d4-b474-9f18e1749c4d.png",alt:"sx_2022-02-25_00-39-05_DbvwrouqFc"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public class GenExample1_ToggleSmr : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer skinnedMesh;\n}\n\nprivate void Create()\n{\n    var my = (GenExample1_ToggleSmr) target;\n    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    var fx = aac.CreateMainFxLayer();\n    var hidden = fx.NewState("Hidden")\n        // The runtime type of my.skinnedMesh is used within the animation.\n        // In this case, the "SkinnedMeshRenderer" component is disabled.\n        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, false));\n    var shown = fx.NewState("Shown")\n        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, true));\n    \n    // This creates two Bool parameters in the animator.\n    // The resulting value can be used in conditions.\n    var accessoriesParams = fx.BoolParameters("EnableAccessories", "AccessoryThing");\n    \n    // The following line creates one transition.\n    // The conditions are "EnableAccessories is true" and "AccessoryThing is true"\n    hidden.TransitionsTo(shown).When(accessoriesParams.AreTrue());\n    \n    // The following line creates two transitions:\n    // - The first transition is "EnableAccessories is false"\n    // - The second transition is "AccessoryThing is false"\n    shown.TransitionsTo(hidden).When(accessoriesParams.IsAnyFalse());\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-animate-a-skinnedmesh-with-motion-time",children:"#2 Animate a SkinnedMesh with Motion time"}),"\n",(0,t.jsx)(n.p,{children:"This example shows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Describing animations with simplified keyframes"}),"\n",(0,t.jsx)(n.li,{children:"Animating a state with Motion Time (formerly known as Normalized Time)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60819407/155912980-53ba1528-0872-4b65-a491-2e9442f48bae.png",alt:"sx_2022-02-25_01-25-53_2KNRPmra4o"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public class GenExample2_Animate : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer wedgeMesh;\n}\n\nprivate void Create()\n{\n    var my = (GenExample2_Animate) target;\n    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    var fx = aac.CreateMainFxLayer();\n    \n    fx.NewState("Motion")\n        .WithAnimation(aac.NewClip().Animating(clip =>\n        {\n            clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>\n                keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)\n            );\n            clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>\n                keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)\n            );\n        }))\n        .MotionTime(fx.FloatParameter("WedgeAmount"));\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"3-using-parameter-drivers",children:"#3 Using Parameter Drivers"}),"\n",(0,t.jsx)(n.p,{children:"This example shows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Driving parameters using VRC Parameter Driver behavior"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"VRChat Parameters"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating systems with multiple FX layers"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Complex transitions"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Show code..."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public class GenExample3_Gesturing : MonoBehaviour\n{\n    public VRCAvatarDescriptor avatar;\n    public AnimatorController assetContainer;\n    public string assetKey;\n    public SkinnedMeshRenderer iconMesh;\n}\n\nprivate GenExample3_Gesturing my;\nprivate AacFlBase aac;\n\nprivate void Create()\n{\n    my = (GenExample3_Gesturing) target;\n    aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);\n    \n    CreateMainLayer();\n    CreateSupportingLayer();\n}\n\nprivate void CreateMainLayer()\n{\n    var layer = aac.CreateMainFxLayer();\n    \n    var dirtyCheckParameter = layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck");\n    \n    // ### Create states\n    var lackOfChangeDetected = layer.NewState("Animate To NoChange")\n        .WithAnimation(IconAppears());\n    \n    // By default, states have an animation that animates a dummy object for 1 frame.\n    var noChange = layer.NewState("NoChange", 1, 0).RightOf();\n    \n    var changeDetected = layer.NewState("Animate To Changing").Under()\n        .WithAnimation(IconDisappears());\n    \n    // This creates a clip that animates a dummy object for 1.5f seconds.\n    var changing = layer.NewState("Changing", 0, 1).LeftOf()\n        .WithAnimation(aac.DummyClipLasting(1.5f, AacFlUnit.Seconds));\n    \n    // When this state is entered, the parameter is driven to the value of false.\n    var stillChanging = layer.NewState("Still Changing", 0, 2).Under()\n        .Drives(dirtyCheckParameter, false);\n    \n    // ------\n    \n    // ### Create transitions\n    lackOfChangeDetected.TransitionsTo(changeDetected).AfterAnimationIsAtLeastAtPercent(0.7f).When(dirtyCheckParameter.IsTrue());\n    \n    // The transition duration is 30% of the animation duration.\n    lackOfChangeDetected.TransitionsTo(noChange).AfterAnimationFinishes().WithTransitionDurationPercent(0.3f);\n    \n    noChange.TransitionsTo(changeDetected).When(dirtyCheckParameter.IsTrue());\n    \n    // By using AfterAnimationFinishes, the transition will trigger after the animation\n    // for the icon appearing finishes.\n    changeDetected.TransitionsTo(changing).AfterAnimationFinishes();\n    \n    changing.TransitionsTo(stillChanging).When(dirtyCheckParameter.IsTrue());\n    // By using AfterAnimationFinishes, the transition will trigger after 1.5 seconds,\n    // which is the length of the animation in Changing.\n    changing.TransitionsTo(lackOfChangeDetected).AfterAnimationFinishes();\n    \n    // The transition will immediately happen upon entering, by using Exit time set to 0.\n    stillChanging.AutomaticallyMovesTo(changing);\n}\n\nprivate void CreateSupportingLayer()\n{\n    // Create an additional FX layer.\n    var layer = aac.CreateSupportingFxLayer("Detection");\n    var reevaluating = layer.NewState("Reevaluating", -1, 0);\n    \n    foreach (var left in Enumerable.Range(0, 8))\n    {\n        foreach (var right in Enumerable.Range(0, 8))\n        {\n            var state = layer.NewState($"Gesture {left} {right}", left, right)\n                // When this state is entered, the parameter is driven to the value of true.\n                .Drives(layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck"), true);\n    \n            reevaluating.TransitionsTo(state)\n                // Use ".Av3" to access VRChat standard parameters.\n                // Accessing these parameters will create the corresponding parameter in the animator.\n                .When(layer.Av3().GestureLeft.IsEqualTo(left))\n                .And(layer.Av3().GestureRight.IsEqualTo(right));\n            state.TransitionsTo(reevaluating)\n                .When(layer.Av3().GestureLeft.IsNotEqualTo(left))\n                .Or()\n                .When(layer.Av3().GestureRight.IsNotEqualTo(right));\n        }\n    }\n}\n\nprivate AacFlClip IconAppears()\n{\n    return aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.iconMesh, "blendShape.Wedge")\n            .WithFrameCountUnit(keyframes => keyframes.Easing(0, 0f).Easing(10, 100f));\n    });\n}\n\nprivate AacFlClip IconDisappears()\n{\n    return aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.iconMesh, "blendShape.Wedge")\n            .WithFrameCountUnit(keyframes => keyframes.Easing(0f, 100f).Easing(10, 0f));\n    });\n}\n'})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);