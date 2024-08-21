"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3501],{24801:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(74848),i=a(28453);const r={title:"V1 - What's new in V1",sidebar_position:8},o="What's new in V1",s={id:"products/animator-as-code/v1.1-whats-new",title:"V1 - What's new in V1",description:"Update page",source:"@site/docs/products/animator-as-code/v1.1-whats-new.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/v1.1-whats-new",permalink:"/docs/products/animator-as-code/v1.1-whats-new",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"V1 - What's new in V1",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Modular Avatar",permalink:"/docs/products/animator-as-code/functions/modular-avatar"},next:{title:"Migrating from V0 to V1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1"}},l={},d=[{value:"Update page",id:"update-page",level:2},{value:"Example code",id:"example-code",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"whats-new-in-v1",children:"What's new in V1"}),"\n",(0,t.jsx)(n.h2,{id:"update-page",children:"Update page"}),"\n",(0,t.jsxs)(n.p,{children:["Most of the details of this update are available on the ",(0,t.jsx)(n.a,{href:"/updates/2024/08/21/p0",children:"Update page"}),", and the ",(0,t.jsx)(n.a,{href:"/docs/products/animator-as-code/migrating-v0-to-v1",children:"migration page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,t.jsx)(n.p,{children:"Skip to the regions below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"#region What's New? - VRChat - Extension Methods"}),"\n",(0,t.jsx)(n.li,{children:"#region What's New? - VRChat - VRCAnimatorPlayAudio"}),"\n",(0,t.jsx)(n.li,{children:"#region What's New? - VRChat - Pretty Parameter Drivers"}),"\n",(0,t.jsx)(n.li,{children:"#region What's New? - Sub State Machines"}),"\n",(0,t.jsx)(n.li,{children:"#region What's New? - Blend Trees"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'#if UNITY_EDITOR\nusing System;\nusing AnimatorAsCode.V1;\nusing UnityEditor.Animations;\nusing UnityEngine;\n#if VRC_SDK_VRCSDK3\nusing VRC.SDK3.Avatars.Components;\nusing VRC.SDKBase;\nusing AnimatorAsCode.V1.VRC;\n#endif\n\nnamespace DemonstrationAsCode.V1\n{\n    [ExecuteInEditMode]\n    public class DemonstrationAsCode_WhatsNewInV1 : MonoBehaviour\n#if VRC_SDK_VRCSDK3\n        , IEditorOnly\n#endif\n    {\n        public RuntimeAnimatorController controller;\n        \n        private AudioClip[] AudioClips { get; set; }\n        private AudioSource Source { get; set; }\n\n        private void OnEnable()\n        {\n#region Initialize demonstration\n            if (controller == null) return;\n            \n            if (Source == null)\n            {\n                if (transform.GetComponent<AudioSource>() == null) transform.gameObject.AddComponent<AudioSource>();\n                Source = transform.GetComponent<AudioSource>();\n            }\n            if (AudioClips == null) AudioClips = Array.Empty<AudioClip>();\n            \n            // This configuration is only for demonstration purposes. It does not create persistent assets in the project.\n            var aac = AacV1.Create(new AacConfiguration\n            {\n                AnimatorRoot = transform,\n                AssetContainer = null,\n                ContainerMode = AacConfiguration.Container.Never,\n                SystemName = "WhatsNew",\n                DefaultValueRoot = transform,\n                DefaultsProvider = new AacDefaultsProvider(true)\n            });\n\n            // This is only for demonstration purposes: Reuse an existing animator controller, and edit a layer inside of it\n            var layer = aac.CreateMainArbitraryControllerLayer((AnimatorController)controller);\n#endregion\n\n#if VRC_SDK_VRCSDK3\n#region What\'s New? - VRChat - Extension Methods\n{\n    // Animator As Code V1 no longer requires VRChat (compared to V0).\n    // VRChat-specific functions have been moved to extension methods.\n    // If you want to use VRChat Avatars functionality, add the `Animator As Code V1 - VRChat` package, and do the following:\n    //\n    // Add the following import:\n    // using AnimatorAsCode.V1.VRC;\n    // \n    // To access VRChat parameters, use the following extension method:\n    var vrcAv3 = layer.Av3();\n    // To access VRChat assets, use the following extension method:\n    var vrcAssets = aac.VrcAssets();\n    \n    layer.NewState("UsingVRChat")\n        .WithAnimation(vrcAssets.ProxyForGesture(AacAv3.Av3Gesture.HandOpen, false))\n        // VRChat State Behaviours are created through extension methods located in namespace `AnimatorAsCode.V1.VRC`\n        .TrackingAnimates(AacAv3.Av3TrackingElement.RightHand)\n        .Driving(driver => driver.Sets(layer.BoolParameter("A"), true))\n        .TransitionsFromEntry()\n        .When(vrcAv3.GestureRight.IsEqualTo(AacAv3.Av3Gesture.HandOpen));\n}\n#endregion\n\n#region What\'s New? - VRChat - VRCAnimatorPlayAudio\n{\n    // Animator As Code V1.1.0 introduces the Audio lambda expression.\n    // By default, this behaviour is initialized to do nothing. Invoke methods to add more functionality.\n    AudioSource source = Source; // This can be a string instead.\n    AudioClip[] clips = AudioClips;\n    layer.NewState("UsingAudio")\n        .Audio(source, audio =>\n        {\n            // Get the PlayAudio object if there\'s a need to edit it directly.\n            VRCAnimatorPlayAudio vrcAnimatorPlayAudio = audio.PlayAudio;\n\n            // By default, a PlayAudio created through AAC does nothing (unlike a manually created behaviour)\n            // so you need to invoke anything that is relevant.\n            audio\n                .SelectsClip(VRC_AnimatorPlayAudio.Order.Random, clips)\n                .SetsLooping()\n                .RandomizesPitch(0.8f, 1.2f)\n                .RandomizesVolume(0.5f, 1f)\n                // "Replays" means Stop and Play.\n                // "StartsPlaying" means just Play.\n                // "StopsPlaying" means just Stop.\n                // To do neither Stop nor Play, don\'t invoke anything.\n                .StartsPlayingOnEnter()\n                .StopsPlayingOnExit();\n        });\n}\n#endregion\n\n#region What\'s New? - VRChat - Pretty Parameter Drivers\n{\n    // Animator As Code V1.1.0 introduces the Driving lambda expression.\n    // As Parameter Driver has evolved over the years, it has become more complex.\n    // The Driving lambda expression encompasses the Parameter Driver behaviour,\n    // and also lets you create more than one Parameter Driver behaviour on a single state:\n    // One of them could be Local, the other not.\n    layer.NewState("UsingDrivers").Driving(driver => driver\n        .Copies(layer.FloatParameter("CopySource"), layer.FloatParameter("CopyDestination"))\n        .Sets(layer.FloatParameter("Set"), 2.3f)\n        .Increases(layer.FloatParameter("IncreaseBy2"), 2f)\n        .Decreases(layer.FloatParameter("DecreaseBy3"), 3f)\n        .Randomizes(layer.FloatParameter("Randomizes"), 0f, 100f)\n        .Randomizes(layer.BoolParameter("RandomizesBool"), 0.25f) // 25% chance of being true.\n        .Remaps(layer.FloatParameter("RemapsSource"), 0f, 2f, layer.FloatParameter("RemapsDestination"), 2f, 4f)\n    // This creates a second VRCAvatarParameterDriver in the same behaviour.\n    ).Driving(driver => driver\n        .Sets(layer.FloatParameter("SecondDriver"), 100f)\n        .Locally() // Only this second VRCAvatarParameterDriver is local.\n    );\n}\n#endregion\n#endif\n\n#region What\'s New? - Sub State Machines\n{\n    // Animator As Code V1.1.0 introduces Sub-State Machines, a major contribution by [galister](https://github.com/galister).\n    // When using Sub-State Machines, the Sub-State Machine will evaluate all transitions until\n    // it resolves a destination state within one single frame.\n    // This means it can traverse multiple transition conditions at once, no matter how nested\n    // the Sub-State Machine is.\n    //\n    // This is not doable with just states, so Sub-State Machines have a functional value beyond mere organization.\n    var a = layer.IntParameter("IntA");\n    var b = layer.IntParameter("IntB");\n    var rootSsm = layer.NewSubStateMachine("UsingNestedSubStateMachines");\n    for (var i = 0; i < 16; i++)\n    {\n        // A Sub-State Machine can have other Sub-State Machines created inside them.\n        // TransitionsFromEntry creates a transition between `subSsm` and the Entry node of the Sub-State Machine it belongs in.\n        // Exits creates a transition between `subSsm` and the Exit node.\n        \n        var subSsm = rootSsm.NewSubStateMachine($"A = {i}");\n        subSsm.TransitionsFromEntry().When(a.IsEqualTo(i));\n        subSsm.Exits();\n\n        for (var j = 0; j < 16; j++)\n        {\n            var state = subSsm.NewState($"A = {i} and B = {j}");\n            state.TransitionsFromEntry().When(b.IsEqualTo(j));\n            state.Exits()\n                .When(a.IsNotEqualTo(i))\n                .Or()\n                .When(b.IsNotEqualTo(j));\n        }\n    }\n\n    // This creates a transition between the Sub-State Machine and itself.\n    // When that Sub-State Machine exits, it will re-enter itself.\n    rootSsm.Restarts();\n}\n#endregion\n\n#region What\'s New? - Blend Trees\n{\n    layer.NewState("BlendTrees").WithAnimation(aac.NewBlendTree()\n        .FreeformDirectional2D(layer.FloatParameter("X"), layer.FloatParameter("Y"))\n        .WithAnimation(aac.NewClip("Center"), 0, 0)\n        .WithAnimation(aac.NewClip("Up"), Vector2.up)\n        .WithAnimation(aac.NewClip("Right"), 1, 0)\n        .WithAnimation(aac.NewClip("Down"), 0, -1)\n        .WithAnimation(aac.NewClip("Left"), -1, 0)\n    );\n    var one = layer.FloatParameter("One");\n    layer.OverrideValue(one, 1f);\n    layer.NewState("Direct BlendTree").WithAnimation(aac.NewBlendTree()\n        .Direct()\n        .WithAnimation(aac.NewClip("DrivenByA"), layer.FloatParameter("A"))\n        .WithAnimation(aac.NewClip("AlwaysOn"), one)\n        .WithAnimation(aac.NewBlendTree().Simple1D(layer.FloatParameter("B"))\n                // In Animator As Code, it is safe to declare points in a Simple1D blend tree in a different order (i.e. 0, 1, -1).\n                // (In native blend trees, it would not have been safe to do so)\n                .WithAnimation(aac.NewClip("Zero"), 0)\n                .WithAnimation(aac.NewClip("Positive"), 1)\n                .WithAnimation(aac.NewClip("Negative"), -1)\n            , one)\n    );\n}\n#endregion\n        }\n    }\n}\n#endif\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);