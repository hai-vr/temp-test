"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Getting started"},i="Getting started (Modular Avatar)",s={unversionedId:"products/animator-as-code/getting-started",id:"products/animator-as-code/getting-started",title:"Getting started",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/getting-started.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/getting-started",permalink:"/docs/products/animator-as-code/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/products/animator-as-code/install"},next:{title:"Examples",permalink:"/docs/products/animator-as-code/examples"}},l={},c=[{value:"Start with our example",id:"start-with-our-example",level:2},{value:"How the example is used",id:"how-the-example-is-used",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-modular-avatar"},"Getting started (Modular Avatar)"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This is the work-in-progress documentation for Animator As Code ",(0,r.kt)("strong",{parentName:"p"},"V1"),", which has not yet been released. The last public version of Animator As Code is V0.")),(0,r.kt)("p",null,"Animator As Code is split into different packages, which you will select depending on your integration needs."),(0,r.kt)("p",null,"The easiest way to use Animator As Code is to use NDMF and Modular Avatar to build your animators in a non-destructive workflow. However, if you do not wish to use NDMF and Modular Avatar, or if you need to create persistent assets on disk to be shared around, or if you don't use VRChat Avatars, ",(0,r.kt)("a",{parentName:"p",href:"reference-barebones"},"you can generate animators the old way"),"."),(0,r.kt)("p",null,"For the purposes of this page, we will use NDMF and Modular Avatar to create animators."),(0,r.kt)("p",null,"Animator As Code V1 can be installed using VRChat Creator Companion."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use this link to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json"},"install our listing to VCC")),"."),(0,r.kt)("li",{parentName:"ul"},"Use this link to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json"},"install NDMF and Modular Avatar listing to VCC")),".")),(0,r.kt)("p",null,"Then, add the following packages to your avatar project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Animator As Code - NDMF Processor"),(0,r.kt)("li",{parentName:"ul"},"Animator As Code - Modular Avatar"),(0,r.kt)("li",{parentName:"ul"},"Animator As Code - VRChat")),(0,r.kt)("h2",{id:"start-with-our-example"},"Start with our example"),(0,r.kt)("p",null,"To begin create a new scripts in your Assets called ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleToggle.cs"),", and paste the following example in that MonoBehaviour."),(0,r.kt)("p",null,"You can read the comments which introduce you to the different parts of Animator As Code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR\nusing ModularAvatarAsCode.V1;\nusing nadena.dev.ndmf;\nusing Example;\nusing UnityEngine;\nusing VRC.SDK3.Avatars.Components;\n\n// The ExportsPlugin attribute registers this plugin to the Non-Destructive Modular Framework (NDMF),\n// so that the script runs when the avatar is being uploaded or is being executed in Play mode.\n[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]\nnamespace Example\n{\n    public class ExampleToggle : MonoBehaviour\n    {\n        // Your MonoBehaviour contains the parameters and scene object references,\n        // which will be used to generate animations.\n        public string parameter;\n        public GameObject item;\n        public Texture2D icon;\n    }\n\n    // AacPlugin is the class that you need to extend to implement your Animator As Code script.\n    // It manages the initialization and run conditions of the script through NDMF. \n    public class ExampleTogglePlugin : AacPlugin<ExampleToggle>\n    {\n        // Decide if you are using Write Defaults ON (true) or OFF (false).\n        protected override bool UseWriteDefaults(Component script, BuildContext ctx) => false;\n        \n        protected override AacPluginOutput Execute()\n        {\n            // # Create an animator controller.\n            // The AacPlugin contains a field called `aac`, which is of type AacFlBase.\n            // It is the Animator As Code instance.\n            var ctrl = aac.NewAnimatorController();\n            \n            // Create a layer.\n            // Additional layers can be created in the FX animator (see later in the manual).\n            var fx = ctrl.NewLayer();\n            \n            // The first created state is the default one connected to the "Entry" node.\n            // States are automatically placed on the grid (see later in the manual).\n            var off = fx.NewState("Hidden")\n                // Animation assets are generated in a temporary location.\n                // The animation path to my.item is relative to the avatar root.\n                .WithAnimation(aac.NewClip().Toggling(my.item, false));\n            var on = fx.NewState("Shown")\n                .WithAnimation(aac.NewClip().Toggling(my.item, true));\n\n            // Creates a Bool parameter in the FX layer.\n            // Parameters are added to the Animator.\n            var param = fx.BoolParameter(my.parameter);\n\n            // Transitions are created with a set of default values.\n            // That can be changed in the Generator settings (see later in the manual).\n            off.TransitionsTo(on).When(param.IsTrue());\n            on.TransitionsTo(off).When(param.IsFalse());\n            \n\n            // # Prepare to create Modular Avatar components.\n            var maAc = MaAc.Create(my.gameObject);\n            \n            // Register the animator controller as an FX layer to be merged.\n            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);\n            // Register the parameter into the VRCExpressionParameters.\n            maAc.NewParameter(param);\n            // Register a menu item into the VRCExpressionsMenu.\n            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.name).WithIcon(my.icon);\n\n\n            // This object is always returned, except if you are dealing with direct blend trees (see later in the manual).\n            return AacPluginOutput.Regular();\n        }\n    }\n}\n#endif\n')),(0,r.kt)("p",null,"Here is the same script as above without any comments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR\nusing ModularAvatarAsCode.V1;\nusing nadena.dev.ndmf;\nusing Example;\nusing UnityEngine;\nusing VRC.SDK3.Avatars.Components;\n\n[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]\nnamespace Example\n{\n    public class ExampleToggle : MonoBehaviour\n    {\n        public string parameter;\n        public GameObject item;\n        public Texture2D icon;\n    }\n\n    public class ExampleTogglePlugin : AacPlugin<ExampleToggle>\n    {\n        protected override bool UseWriteDefaults(ExampleToggle script, BuildContext ctx) => false;\n        \n        protected override AacPluginOutput Execute()\n        {\n            var ctrl = aac.NewAnimatorController();\n            var fx = ctrl.NewLayer();\n            \n            var off = fx.NewState("Hidden")\n                .WithAnimation(aac.NewClip().Toggling(my.item, false));\n            var on = fx.NewState("Shown")\n                .WithAnimation(aac.NewClip().Toggling(my.item, true));\n\n            var param = fx.BoolParameter(my.parameter);\n\n            off.TransitionsTo(on).When(param.IsTrue());\n            on.TransitionsTo(off).When(param.IsFalse());\n\n            var maAc = MaAc.Create(my.gameObject);\n            \n            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);\n            maAc.NewParameter(param);\n            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.name).WithIcon(my.icon);\n\n            return AacPluginOutput.Regular();\n        }\n    }\n}\n#endif\n')),(0,r.kt)("h2",{id:"how-the-example-is-used"},"How the example is used"),(0,r.kt)("p",null,"To use that example in your project, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleToggle")," component into one of the objects of your avatar."),(0,r.kt)("p",null,"The script will execute on its own when the avatar is being uploaded or is being executed in Play mode."),(0,r.kt)("p",null,"TODO: Need a way to temporarily generate Animator As Code controller without generating MA components."))}m.isMDXComponent=!0}}]);