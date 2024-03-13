"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7826],{25560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(85893),i=t(11151);const r={sidebar_position:2},o="Getting started",s={id:"products/animator-as-code/getting-started",title:"Getting started",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/getting-started.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/getting-started",permalink:"/docs/products/animator-as-code/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/products/animator-as-code/install"},next:{title:"Reference manual",permalink:"/docs/products/animator-as-code/reference"}},l={},d=[{value:"Initialize Animator As Code",id:"initialize-animator-as-code",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Barebones",id:"barebones",level:3},{value:"Animator and Animation examples",id:"animator-and-animation-examples",level:2},{value:"Toggle a GameObject",id:"toggle-a-gameobject",level:3},{value:"Toggle a SkinnedMeshRenderer with two conditions",id:"toggle-a-skinnedmeshrenderer-with-two-conditions",level:3},{value:"Animate a SkinnedMesh with Motion time",id:"animate-a-skinnedmesh-with-motion-time",level:3},{value:"Use Parameter Drivers",id:"use-parameter-drivers",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,a.jsx)(n.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,a.jsx)(n.h2,{id:"initialize-animator-as-code",children:"Initialize Animator As Code"}),"\n",(0,a.jsxs)(n.p,{children:["After ",(0,a.jsx)(n.a,{href:"/docs/products/animator-as-code/install",children:"installing Animator As Code"}),", there are different ways to start depending on your project."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Follow the ",(0,a.jsx)(n.a,{href:"#non-destructive",children:(0,a.jsx)(n.strong,{children:"Non-destructive Avatars"})})," section:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"if you are building a personal VRChat avatar and you want to create animators and animations in a non-destructive workflow (ideal for Modular Avatar, NDMF, and VRCFury users), or"}),"\n",(0,a.jsx)(n.li,{children:"if you are building an Unity Editor tool and you intend to redistribute the non-destructive generator code to other users."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Follow the ",(0,a.jsx)(n.a,{href:"#barebones",children:(0,a.jsx)(n.strong,{children:"Barebones"})})," section:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"if you are building a VRChat avatar and you do not want to use a non-destructive workflow, or"}),"\n",(0,a.jsx)(n.li,{children:"if you are building a VRChat avatar prefab and you intend to distribute the animator controllers to others, or"}),"\n",(0,a.jsx)(n.li,{children:"if you are building a VRChat world, or"}),"\n",(0,a.jsx)(n.li,{children:"if you are building non-VRChat content."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"non-destructive",children:"Non-destructive"}),"\n",(0,a.jsx)(n.p,{children:"When creating personal avatars, you are encouraged to use a non-destructive workflow."}),"\n",(0,a.jsx)(n.p,{children:"We will use the same framework that Modular Avatar uses, which is NDMF. NDMF will execute the Plugin shown\nbelow when the user enters Play Mode, or when the user builds the avatar."}),"\n",(0,a.jsx)(n.p,{children:"This example shows a simple (non-optimized) toggle using state machines."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To use that toggle, the user can add an ExampleToggle component in the avatar, and configure it."}),"\n",(0,a.jsx)(n.li,{children:"When entering Play mode or when building the avatar, the plugin will check if there is at least one ExampleToggle exists in the avatar."}),"\n",(0,a.jsx)(n.li,{children:"If so, it initializes an AnimatorAsCode object which will create assets inside NDMF's asset container."}),"\n",(0,a.jsx)(n.li,{children:"Then, it creates a new Animator Controller."}),"\n",(0,a.jsxs)(n.li,{children:["Then, for each ExampleToggle component:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"it creates a new layer,"}),"\n",(0,a.jsx)(n.li,{children:"it creates two states and their animation files to toggle the items,"}),"\n",(0,a.jsx)(n.li,{children:"it creates a bool parameter,"}),"\n",(0,a.jsx)(n.li,{children:"it creates transitions between those states, with the corresponding conditions."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Finally, it creates a ",(0,a.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-animator",children:"Modular Avatar Merge Animator"})," component\nin order to register that new Animator Controller in the FX Animator. Modular Avatar will take the responsibility to merge the animator."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'#if UNITY_EDITOR\nusing AnimatorAsCode.V1;\nusing AnimatorAsCode.V1.ModularAvatar;\nusing MyNamespace;\nusing nadena.dev.ndmf;\nusing UnityEditor;\nusing UnityEngine;\nusing VRC.SDK3.Avatars.Components;\nusing VRC.SDKBase;\n\n// This example uses NDMF. See https://github.com/bdunderscore/ndmf?tab=readme-ov-file#getting-started\n[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]\nnamespace MyNamespace\n{\n    public class ExampleToggle : MonoBehaviour, IEditorOnly\n    {\n        // Your MonoBehaviour contains the parameters and scene object references,\n        // which will be used to generate animations.\n        public GameObject[] items;\n        public string parameterName;\n    }\n\n    public class ExampleTogglePlugin : Plugin<ExampleTogglePlugin>\n    {\n        public override string QualifiedName => "dev.hai-vr.docs.animator-as-code.exampletoggle";\n        public override string DisplayName => "Example Toggle";\n        \n        private const string SystemName = "ExampleToggle";\n        private const bool UseWriteDefaults = true;\n\n        protected override void Configure()\n        {\n            InPhase(BuildPhase.Generating).Run($"Generate {DisplayName}", Generate);\n        }\n\n        private void Generate(BuildContext ctx)\n        {\n            // Find all components of type ExampleToggle in this avatar.\n            var components = ctx.AvatarRootTransform.GetComponentsInChildren<ExampleToggle>(true);\n            if (components.Length == 0) return; // If there are none in the avatar, skip this entirely.\n\n            // Initialize Animator As Code.\n            var aac = AacV1.Create(new AacConfiguration\n            {\n                SystemName = SystemName,\n                AnimatorRoot = ctx.AvatarRootTransform,\n                DefaultValueRoot = ctx.AvatarRootTransform,\n                AssetKey = GUID.Generate().ToString(),\n                AssetContainer = ctx.AssetContainer,\n                ContainerMode = AacConfiguration.Container.OnlyWhenPersistenceRequired,\n                // States will be created with Write Defaults set to ON or OFF based on whether UseWriteDefaults is true or false.\n                DefaultsProvider = new AacDefaultsProvider(UseWriteDefaults)\n            });\n\n            // Create a new animator controller.\n            // This will be merged with the rest of the playable layer at the end of this function.\n            var ctrl = aac.NewAnimatorController();\n            \n            for (var index = 0; index < components.Length; index++)\n            {\n                // Create a toggle for each found component.\n                var toggle = components[index];\n                \n                // Create a new layer in that animator controller.\n                var layer = ctrl.NewLayer($"Toggle_{index + 1}");\n\n                // The first created state is the default one connected to the "Entry" node.\n                var hidden = layer.NewState("Hidden")\n                    // The animation path to toggle.items is relative to the animator root.\n                    .WithAnimation(aac.NewClip().Toggling(toggle.items, false));\n                var shown = layer.NewState("Shown")\n                    .WithAnimation(aac.NewClip().Toggling(toggle.items, true));\n                \n                // Creates a Bool parameter in the animator.\n                var itemParam = layer.BoolParameter(toggle.parameterName);\n                \n                // Creates transitions. By default, the transitions are already configured with our default values.\n                hidden.TransitionsTo(shown).When(itemParam.IsTrue());\n                shown.TransitionsTo(hidden).When(itemParam.IsFalse());\n            }\n\n            // Create a new object in the scene. We will add Modular Avatar components inside it.\n            var modularAvatar = MaAc.Create(new GameObject(SystemName)\n            {\n                transform = { parent = ctx.AvatarRootTransform }\n            });\n            \n            // By creating a Modular Avatar Merge Animator component,\n            // our animator controller will be added to the avatar\'s FX layer.\n            modularAvatar.NewMergeAnimator(ctrl.AnimatorController, VRCAvatarDescriptor.AnimLayerType.FX);\n        }\n    }\n}\n#endif\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"For the sake of this first example, this uses state machines to create a toggle, but this comes at a performance cost,\nwhich isn't the state of the art for VRChat avatar animators."}),(0,a.jsx)(n.p,{children:"Modern toggles generally use blend trees, this can be done in Animator As Code too."})]}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"TODO: Explain assetContainer and assetKey"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"barebones",children:"Barebones"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})}),"\n",(0,a.jsx)(n.p,{children:"The following shows the minimal code to use Animator As Code, if your project doesn't fall into the non-destructive Avatars category."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"TODO: Explain assetContainer and assetKey"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'GameObject[] items;\n\nstring systemName = "LayerName";\nAnimatorController worldController; // Supply the world animator controller asset\nTransform animatorRoot; // Supply your animator root located in the world\nObject assetContainer; // Supply a project asset where generated assets will be added to\nstring assetKey = GUID.Generate().ToString(); // Supply a stable key that will be used to keep track of previously generated assets\nbool useWriteDefaults = true; // States will be created with Write Defaults set to ON or OFF based on whether UseWriteDefaults is true or false.\nvar aac = AacV1.Create(new AacConfiguration\n{\n    SystemName = systemName,\n    AnimatorRoot = animatorRoot,\n    DefaultValueRoot = animatorRoot,\n    AssetKey = assetKey,\n    AssetContainer = assetContainer,\n    ContainerMode = AacConfiguration.Container.Everything,\n    DefaultsProvider = new AacDefaultsProvider(useWriteDefaults)\n});\n\n// Create a new layer in your animator controller.\nAacFlLayer layer = aac.CreateSupportingArbitraryControllerLayer(worldController, "ExampleSuffix");\n\n// The first created state is the default one connected to the "Entry" node.\nvar hidden = layer.NewState("Hidden")\n    // The animation path to toggle.items is relative to the animator root.\n    .WithAnimation(aac.NewClip().Toggling(toggle.items, false));\nvar shown = layer.NewState("Shown")\n    .WithAnimation(aac.NewClip().Toggling(toggle.items, true));\n\n// Creates a Bool parameter in the animator.\nvar itemParam = layer.BoolParameter(toggle.parameterName);\n\n// Creates transitions. By default, the transitions are already configured with our default values.\nhidden.TransitionsTo(shown).When(itemParam.IsTrue());\nshown.TransitionsTo(hidden).When(itemParam.IsFalse());\n'})}),"\n",(0,a.jsx)(n.h2,{id:"animator-and-animation-examples",children:"Animator and Animation examples"}),"\n",(0,a.jsx)(n.h3,{id:"toggle-a-gameobject",children:"Toggle a GameObject"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class Example : MonoBehaviour, IEditorOnly\n{\n    public GameObject item;\n    public string parameterName;\n}\n\n// # Generator\n\n// The first created state is the default one connected to the "Entry" node.\nvar hidden = layer.NewState("Hidden")\n    // The animation path to toggle.items is relative to the animator root.\n    .WithAnimation(aac.NewClip().Toggling(example.item, false));\nvar shown = layer.NewState("Shown")\n    .WithAnimation(aac.NewClip().Toggling(example.item, true));\n\n// Creates a Bool parameter in the animator.\nvar itemParam = layer.BoolParameter(example.parameterName);\n\n// Creates transitions. By default, the transitions are already configured with our default values.\nhidden.TransitionsTo(shown).When(itemParam.IsTrue());\nshown.TransitionsTo(hidden).When(itemParam.IsFalse());\n'})}),"\n",(0,a.jsx)(n.h3,{id:"toggle-a-skinnedmeshrenderer-with-two-conditions",children:"Toggle a SkinnedMeshRenderer with two conditions"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class Example : MonoBehaviour, IEditorOnly\n{\n    public GameObject skinnedMesh;\n}\n\n// # Generator\n    \nvar hidden = layer.NewState("Hidden")\n    // The runtime type of my.skinnedMesh is used within the animation.\n    // In this case, the "SkinnedMeshRenderer" component is disabled.\n    .WithAnimation(aac.NewClip().TogglingComponent(example.skinnedMesh, false));\nvar shown = layer.NewState("Shown")\n    .WithAnimation(aac.NewClip().TogglingComponent(example.skinnedMesh, true));\n\n// This creates two Bool parameters in the animator.\n// The resulting value can be used in conditions.\nvar accessoriesParams = layer.BoolParameters("EnableAccessories", "AccessoryThing");\n\n// The following line creates one transition.\n// The conditions are "EnableAccessories is true" and "AccessoryThing is true"\nhidden.TransitionsTo(shown).When(accessoriesParams.AreTrue());\n\n// The following line creates two transitions:\n// - The first transition is "EnableAccessories is false"\n// - The second transition is "AccessoryThing is false"\nshown.TransitionsTo(hidden).When(accessoriesParams.IsAnyFalse());\n'})}),"\n",(0,a.jsx)(n.h3,{id:"animate-a-skinnedmesh-with-motion-time",children:"Animate a SkinnedMesh with Motion time"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'layer.NewState("Motion")\n    .WithAnimation(aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>\n            keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)\n        );\n        clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>\n            keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)\n        );\n    }))\n    .MotionTime(layer.FloatParameter("WedgeAmount"));\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-parameter-drivers",children:"Use Parameter Drivers"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"This section is not complete yet."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);