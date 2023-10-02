"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},o="Reference manual",l={unversionedId:"products/animator-as-code/reference",id:"products/animator-as-code/reference",title:"Reference manual",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/reference.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/reference",permalink:"/docs/products/animator-as-code/reference",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/products/animator-as-code/examples"},next:{title:"Base functions",permalink:"/docs/products/animator-as-code/functions/base"}},s={},p=[{value:"Create states",id:"create-states",level:2},{value:"Creating parameters for use within layers",id:"creating-parameters-for-use-within-layers",level:2},{value:"Forcing the value of parameters",id:"forcing-the-value-of-parameters",level:2},{value:"Visually organize your states",id:"visually-organize-your-states",level:2},{value:"Create an animation",id:"create-an-animation",level:2},{value:"Create transitions and define conditions",id:"create-transitions-and-define-conditions",level:2},{value:"When(), And(), and Or() operators",id:"when-and-and-or-operators",level:2},{value:"Conditions that generate multiple transitions",id:"conditions-that-generate-multiple-transitions",level:2},{value:"Use the WhenConditions() operator to build in a <code>for</code> loop",id:"use-the-whenconditions-operator-to-build-in-a-for-loop",level:2},{value:"Create many-to-one transitions using a <code>foreach</code> loop",id:"create-many-to-one-transitions-using-a-foreach-loop",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reference-manual"},"Reference manual"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This is the work-in-progress documentation for Animator As Code ",(0,r.kt)("strong",{parentName:"p"},"V1"),", which has not yet been released. The last public version of Animator As Code is V0.")),(0,r.kt)("h2",{id:"create-states"},"Create states"),(0,r.kt)("p",null,"Using your layer, you may now create states. Your state will be configured with defaults based on your AAC configuration, most notably, the Write Defaults setting."),(0,r.kt)("p",null,"By default, states have a dummy animation that lasts one frame (1/60th of a second)."),(0,r.kt)("p",null,"It is intended to create the animation clip directly while declaring the state, this will be explained later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var hidden = fx.NewState("Hidden")\n    .WithAnimation(aac.NewClip().Toggling(my.item, false));\n')),(0,r.kt)("h2",{id:"creating-parameters-for-use-within-layers"},"Creating parameters for use within layers"),(0,r.kt)("p",null,"Using your layer, you can create parameters."),(0,r.kt)("p",null,"The parameter will be added to the animator the layer belongs to."),(0,r.kt)("p",null,"If you need to reuse a parameter across multiple layers, you need to invoke it on all relevant layers."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Once done, you are not forced to reuse the resulting parameter instance on the same layer it was created from)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\nfx.NewState("Motion")\n    // This creates a Float parameter on the FX layer.\n    .MotionTime(fx.FloatParameter("WedgeAmount"))\n    // ...\n')),(0,r.kt)("p",null,"If a parameter with the same name already exists in the animator, it will not be created again."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is also true if the animator already has a parameter with the same name but with a different type, and no error will be raised.")),(0,r.kt)("p",null,"There are also dedicated functions to obtain Avatars 3.0 parameters, such as."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var gestureLeftWeight = fx.Av3().GestureLeftWeight\n")),(0,r.kt)("h2",{id:"forcing-the-value-of-parameters"},"Forcing the value of parameters"),(0,r.kt)("p",null,"In some rare cases you may wish to override the default value of animator parameters, for example in use for special conditions, for use in blend trees as a constant value."),(0,r.kt)("p",null,"Using your layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'fx.OverrideValue(fx.FloatParameter("SmoothingAmount"), 0.7f)\n')),(0,r.kt)("h2",{id:"visually-organize-your-states"},"Visually organize your states"),(0,r.kt)("p",null,"By default, a newly created state will be visually placed under the previously created state."),(0,r.kt)("p",null,"For more control, states have ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftOf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RightOf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Over"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Under"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift")," operators, which let you move a state to be visually next to another state."),(0,r.kt)("p",null,"The value is in grid units."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60819407/155912996-89369e2d-435d-4619-b5ee-3ac4b6f8827c.png",alt:"Untitled"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var init = fx.NewState("Init"); // This is the first state. By default it is at (0, 0)\nvar a = fx.NewState("A"); // This will be placed under Init.\nvar b = fx.NewState("B"); // This will be placed under A.\nvar c = fx.NewState("C").RightOf(a); // This will be placed right of A.\nvar d = fx.NewState("D"); // This will be placed under C.\nvar e = fx.NewState("E").RightOf(); // This will be placed right of D.\nvar alternate = fx.NewState("Alternate").Over(c); // This will be placed over C.\n\n// This will be placed relative to Alternate: 2 blocks over, and 1 to the right.\nvar reset = fx.NewState("Reset").Shift(alternate, 1, -2);\n')),(0,r.kt)("h2",{id:"create-an-animation"},"Create an animation"),(0,r.kt)("p",null,"By default, states have a dummy animation that lasts one frame (1/60th of a second). If you want the state to play an animation of your choice, there is usually an invocation to the ",(0,r.kt)("inlineCode",{parentName:"p"},".WithAnimation(...)")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var hidden = fx.NewState("Hidden")\n    .WithAnimation(aac.NewClip().Toggling(my.item, false));\n')),(0,r.kt)("p",null,"The invocation uses AAC to create a new clip inside the asset container. You don\u2019t need to specify a name for this clip, it is irrelevant."),(0,r.kt)("p",null,"Animations use object references instead of paths. They are converted to paths in the animation clip asset by resolving the relative path to the animator root of the AAC configuration."),(0,r.kt)("p",null,"Most of the functions lets you create single-frame constant animations."),(0,r.kt)("p",null,"For more complex animations, use the ",(0,r.kt)("inlineCode",{parentName:"p"},".Animating(...)")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'fx.NewState("Motion")\n    .WithAnimation(aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>\n            keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)\n        );\n        clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>\n            keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)\n        );\n    }))\n')),(0,r.kt)("h2",{id:"create-transitions-and-define-conditions"},"Create transitions and define conditions"),(0,r.kt)("p",null,"Using the states, you can create transitions between states. Your transition will be configured with defaults based on your AAC configuration, defined within the DefaultsProvider."),(0,r.kt)("p",null,"To create a transition from Any, Exit, or Entry, there are some functions in the states like ",(0,r.kt)("inlineCode",{parentName:"p"},".TransitionsFromAny()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".Exits()"),"."),(0,r.kt)("p",null,"Start defining conditions for that transition using the ",(0,r.kt)("inlineCode",{parentName:"p"},".When(...)")," operator."),(0,r.kt)("p",null,"Parameters have functions that generate conditions once invoked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'reevaluating.TransitionsTo(state)\n    // Use ".Av3" to access VRChat standard parameters.\n    // Accessing these parameters will create the corresponding parameter in the animator.\n    .When(layer.Av3().GestureLeft.IsEqualTo(left))\n    .And(layer.Av3().GestureRight.IsEqualTo(right));\nstate.TransitionsTo(reevaluating)\n    .When(layer.Av3().GestureLeft.IsNotEqualTo(left))\n    .Or()\n    .When(layer.Av3().GestureRight.IsNotEqualTo(right));\n')),(0,r.kt)("h2",{id:"when-and-and-or-operators"},"When(), And(), and Or() operators"),(0,r.kt)("p",null,"In animator transitions, all conditions must be verified for the transition to occur; this is effectively a \u201cAND\u201d of all of the conditions (A && B && C)."),(0,r.kt)("p",null,"This is done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},".And(...)")," operator: ",(0,r.kt)("inlineCode",{parentName:"p"},".When(A).And(B).And(C)")),(0,r.kt)("p",null,"To represent \u201cOR\u201d, new transitions need to be created; ((A && B && C) || (D && E)) results in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transition 1: (A && B && C)"),(0,r.kt)("li",{parentName:"ul"},"Transition 2: (D && E)")),(0,r.kt)("p",null,"This is done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},".Or(...)")," operator: ",(0,r.kt)("inlineCode",{parentName:"p"},".When(A).And(B).And(C).Or().When(D).And(E)")),(0,r.kt)("p",null,"From this limitation, conditions with nested OR cannot be expressed easily, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udeab (F && (G || H) && (J || K))")),(0,r.kt)("h2",{id:"conditions-that-generate-multiple-transitions"},"Conditions that generate multiple transitions"),(0,r.kt)("p",null,"Some conditions generate multiple transitions, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"boolParameters.IsAnyFalse()")),(0,r.kt)("p",null,"In order to still let you express these expressions easily, the following applies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These conditions can only be used in a ",(0,r.kt)("inlineCode",{parentName:"li"},".When(...)")," operator, and not within a ",(0,r.kt)("inlineCode",{parentName:"li"},".And(...)")),(0,r.kt)("li",{parentName:"ul"},"If such a condition is used, calling ",(0,r.kt)("inlineCode",{parentName:"li"},".And(...)")," will apply the condition to all transitions generated by the ",(0,r.kt)("inlineCode",{parentName:"li"},".When(...)")," operator up until the next ",(0,r.kt)("inlineCode",{parentName:"li"},"Or(...)")," operator if any exists.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example:\n",(0,r.kt)("inlineCode",{parentName:"li"},".When(fx.BoolParameters(I, J).IsAnyFalse()).And(K.IsTrue())")),(0,r.kt)("li",{parentName:"ul"},"Is equivalent to:\n",(0,r.kt)("inlineCode",{parentName:"li"},".When(I.IsFalse()).And(K.IsTrue()).Or().When(J.IsFalse()).And(K.IsTrue())"))))),(0,r.kt)("h2",{id:"use-the-whenconditions-operator-to-build-in-a-for-loop"},"Use the WhenConditions() operator to build in a ",(0,r.kt)("inlineCode",{parentName:"h2"},"for")," loop"),(0,r.kt)("p",null,"The presence of the ",(0,r.kt)("inlineCode",{parentName:"p"},".When(...)")," operator can make it difficult to build conditions iteratively in a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,r.kt)("p",null,"For this purpose, use the ",(0,r.kt)("inlineCode",{parentName:"p"},".WhenConditions()")," operator. This will let you build conditions using the ",(0,r.kt)("inlineCode",{parentName:"p"},".And(...)")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var conditions = state.TransitionsFromEntry().WhenConditions();\nfor (var i = 0; i < numberOfBits; i++)\n{\n   conditions.And(parameter[i].IsEqualTo(bitMask[i]));\n}\n")),(0,r.kt)("h2",{id:"create-many-to-one-transitions-using-a-foreach-loop"},"Create many-to-one transitions using a ",(0,r.kt)("inlineCode",{parentName:"h2"},"foreach")," loop"),(0,r.kt)("p",null,"There is no facility to create multiple identical transitions from multiple states to another state."),(0,r.kt)("p",null,"Use a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," loop to achieve this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"foreach (var cancelWhenNotAllowed in new[] {auto, reverse, manual, custom, done})\n{\n    cancelWhenNotAllowed.TransitionsTo(idle).When(allowSystemParameter.IsFalse());\n}\n")))}c.isMDXComponent=!0}}]);