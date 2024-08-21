"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7964],{74282:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(74848),i=n(28453),r=n(89618),s=n(85041);const o={date:"2024-08-21T03:40"},l="\u2600\ufe0f Animator As Code V1",c={permalink:"/updates/2024/08/21/p0",source:"@site/updates/2024-08-21-p0.md",title:"\u2600\ufe0f Animator As Code V1",description:"I am releasing Animator As Code V1.",date:"2024-08-21T03:40:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-08-21T03:40"},unlisted:!1,nextItem:{title:"\u2699\ufe0f ComboGestureExpressions V3.2.2",permalink:"/updates/2024/08/18/p0"}},h={authorsImageUrls:[]},d=[{value:"Compatibility with projects that contain Animator As Code V0",id:"compatibility-with-projects-that-contain-animator-as-code-v0",level:2},{value:"Features in V1 compared to V0",id:"features-in-v1-compared-to-v0",level:2},{value:"Sub-State Machines",id:"sub-state-machines",level:3},{value:"Packaging, Non-VRChat projects, and non-destructive",id:"packaging-non-vrchat-projects-and-non-destructive",level:3},{value:"BlendTrees",id:"blendtrees",level:3},{value:"Create Animator Controllers",id:"create-animator-controllers",level:3},{value:"VRChat-specific features",id:"vrchat-specific-features",level:2},{value:"AnimatorPlayAudio",id:"animatorplayaudio",level:3},{value:"Prettier Parameter Drivers",id:"prettier-parameter-drivers",level:3},{value:"Integration with Modular Avatar (MaAc)",id:"integration-with-modular-avatar-maac",level:2},{value:"Examples updated with NDMF integration",id:"examples-updated-with-ndmf-integration",level:2},{value:"Changes in V1.1.0 compared to V1.0.99xx",id:"changes-in-v110-compared-to-v1099xx",level:2},{value:"Future breaking changes in V1.2.0",id:"future-breaking-changes-in-v120",level:2}];function u(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.w,{children:(0,t.jsx)(s.F,{isUniversal:!0})}),"\n",(0,t.jsxs)(a.p,{children:["I am releasing ",(0,t.jsx)(a.strong,{children:"Animator As Code V1"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Starting from V1.1.0, all Animator As Code V1 packages are leaving Alpha/Beta."}),"\n",(0,t.jsx)(a.p,{children:"Animator As Code V1 can now be safely used in public projects that wish to do so."}),"\n",(0,t.jsx)(a.h2,{id:"compatibility-with-projects-that-contain-animator-as-code-v0",children:"Compatibility with projects that contain Animator As Code V0"}),"\n",(0,t.jsx)(a.p,{children:"Animator As Code V1 is designed to be installed even in projects that already have Animator As Code V0."}),"\n",(0,t.jsx)(a.p,{children:"Animator As Code V0 will not be overwritten by Animator As Code V1. Both installations will act as separate,\nnon-conflicting installs. Projects like FaceEmo will continue to function properly."}),"\n",(0,t.jsx)(a.p,{children:"In fact Animator As Code V1 has already been extensively used in my own tools (Prefabulous, ComboGestureExpressions, Vixen)."}),"\n",(0,t.jsx)(a.p,{children:"There is no real need to migrate between V0 and V1, if V0 already provides all the functionality you need in your project."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/products/animator-as-code/migrating-v0-to-v1",children:"If you choose to migrate, V0 and V1 are almost identical"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"features-in-v1-compared-to-v0",children:"Features in V1 compared to V0"}),"\n",(0,t.jsx)(a.h3,{id:"sub-state-machines",children:"Sub-State Machines"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Pull major contributions from ",(0,t.jsx)(a.a,{href:"https://github.com/galister",children:(0,t.jsx)(a.strong,{children:"@galister"})})," which:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.strong,{children:["Adds support for ",(0,t.jsx)(a.a,{href:"/docs/products/animator-as-code/functions/base#layer-aacfllayer",children:(0,t.jsx)(a.strong,{children:"sub-state machines"})})]}),", which is important because it enables the creation of states that evaluate multiple transitions within one frame,\nwhich is not possible to do without sub-state machines (with one exception).","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["This trait is already extensively used in ",(0,t.jsx)(a.em,{children:"ComboGestureExpressions V2"})," and above."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Share functionality of state and sub-state machines."}),"\n",(0,t.jsx)(a.li,{children:"Share functionality of Int and Float parameters together."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'// When using Sub-State Machines, the Sub-State Machine will evaluate all transitions until\n// it resolves a destination state within one single frame.\n// This means it can traverse multiple transition conditions at once, no matter how nested\n// the Sub-State Machine is.\n//\n// This is not doable with just states, so Sub-State Machines have a functional value beyond mere organization.\nvar a = layer.IntParameter("IntA");\nvar b = layer.IntParameter("IntB");\nvar rootSsm = layer.NewSubStateMachine("UsingNestedSubStateMachines");\nfor (var i = 0; i < 16; i++)\n{\n    // A Sub-State Machine can have other Sub-State Machines created inside them.\n    // TransitionsFromEntry creates a transition between `subSsm` and the Entry node of the Sub-State Machine it belongs in.\n    // Exits creates a transition between `subSsm` and the Exit node.\n    \n    var subSsm = rootSsm.NewSubStateMachine($"A = {i}");\n    subSsm.TransitionsFromEntry().When(a.IsEqualTo(i));\n    subSsm.Exits();\n\n    for (var j = 0; j < 16; j++)\n    {\n        var state = subSsm.NewState($"A = {i} and B = {j}");\n        state.TransitionsFromEntry().When(b.IsEqualTo(j));\n        state.Exits()\n            .When(a.IsNotEqualTo(i))\n            .Or()\n            .When(b.IsNotEqualTo(j));\n    }\n}\n\n// This creates a transition between the Sub-State Machine and itself.\n// When that Sub-State Machine exits, it will re-enter itself.\nrootSsm.Restarts();\n'})}),"\n",(0,t.jsx)(a.h3,{id:"packaging-non-vrchat-projects-and-non-destructive",children:"Packaging, Non-VRChat projects, and non-destructive"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Make it usable in ",(0,t.jsx)(a.strong,{children:"non-VRChat"})," avatar projects.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"VRChat-related functionality is now exposed as extension functions in a separate package."}),"\n",(0,t.jsx)(a.li,{children:"Also, separate destructive functions and non-destructive functions."}),"\n",(0,t.jsx)(a.li,{children:"Since this no longer requires a VRChat project, this also means it may now be usable in VRChat world projects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'// Animator As Code V1 no longer requires VRChat (compared to V0).\n// VRChat-specific functions have been moved to extension methods.\n// If you want to use VRChat Avatars functionality, add the `Animator As Code V1 - VRChat` package, and do the following:\n//\n// Add the following import:\n// using AnimatorAsCode.V1.VRC;\n// \n// To access VRChat parameters, use the following extension method:\nvar vrcAv3 = layer.Av3();\n// To access VRChat assets, use the following extension method:\nvar vrcAssets = aac.VrcAssets();\n\nlayer.NewState("UsingVRChat")\n    .WithAnimation(vrcAssets.ProxyForGesture(AacAv3.Av3Gesture.HandOpen, false))\n    // VRChat State Behaviours are created through extension methods located in namespace `AnimatorAsCode.V1.VRC`\n    .TrackingAnimates(AacAv3.Av3TrackingElement.RightHand)\n    .Driving(driver => driver.Sets(layer.BoolParameter("A"), true))\n    .TransitionsFromEntry()\n    .When(vrcAv3.GestureRight.IsEqualTo(AacAv3.Av3Gesture.HandOpen));\n'})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Make it more usable in non-destructive components.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["It is already in use in ",(0,t.jsx)(a.em,{children:"Prefabulous"})," and ",(0,t.jsx)(a.em,{children:"Vixen"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Move to packages, for distribution using VCC (and now, ALCOM)."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"blendtrees",children:"BlendTrees"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["It is now possible to build Unity ",(0,t.jsxs)(a.a,{href:"/docs/products/animator-as-code/functions/base#blend-trees-aacflblendtree",children:[(0,t.jsx)(a.strong,{children:"BlendTree"})," assets using a fluent interface"]}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'layer.NewState("BlendTrees").WithAnimation(aac.NewBlendTree()\n    .FreeformDirectional2D(layer.FloatParameter("X"), layer.FloatParameter("Y"))\n    .WithAnimation(aac.NewClip("Center"), 0, 0)\n    .WithAnimation(aac.NewClip("Up"), Vector2.up)\n    .WithAnimation(aac.NewClip("Right"), 1, 0)\n    .WithAnimation(aac.NewClip("Down"), 0, -1)\n    .WithAnimation(aac.NewClip("Left"), -1, 0)\n);\nvar one = layer.FloatParameter("One");\nlayer.OverrideValue(one, 1f);\nlayer.NewState("Direct BlendTree").WithAnimation(aac.NewBlendTree()\n    .Direct()\n    .WithAnimation(aac.NewClip("DrivenByA"), layer.FloatParameter("A"))\n    .WithAnimation(aac.NewClip("AlwaysOn"), one)\n    .WithAnimation(aac.NewBlendTree().Simple1D(layer.FloatParameter("B"))\n            // In Animator As Code, it is safe to declare points in a Simple1D blend tree in a different order (i.e. 0, 1, -1).\n            // (In native blend trees, it would not have been safe to do so)\n            .WithAnimation(aac.NewClip("Zero"), 0)\n            .WithAnimation(aac.NewClip("Positive"), 1)\n            .WithAnimation(aac.NewClip("Negative"), -1)\n        , one)\n);\n'})}),"\n",(0,t.jsx)(a.h3,{id:"create-animator-controllers",children:"Create Animator Controllers"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Create new Animator Controllers. This is made specifically for non-destructive workflows, where additional features are built separately,\nand then merged by a framework (i.e. Modular Avatar Merge Animator, or VRCFury Full Controller)."}),"\n",(0,t.jsx)(a.li,{children:"Animator As Code V1 has a separate package specifically to create Modular Avatar components, see the section later on this page."}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:"    // When creating a new controller, the ContainerMode of the configuration usually needs to be\n    // set to either `Container.OnlyWhenPersistenceRequired` or `Container.Everything`.\n    //\n    // This is because it is not possible to add state behaviours to states unless the Animator Controller\n    // is already persisted in the asset database.\n    var controller = aac.NewAnimatorController();\n    var fx = controller.NewLayer();\n"})}),"\n",(0,t.jsx)(a.h2,{id:"vrchat-specific-features",children:"VRChat-specific features"}),"\n",(0,t.jsx)(a.h3,{id:"animatorplayaudio",children:"AnimatorPlayAudio"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.em,{children:"Animator As Code for VRChat"})," supports for ",(0,t.jsx)(a.strong,{children:"VRCAnimatorPlayAudio"})," through the ",(0,t.jsx)(a.code,{children:"AacFlState.Audio(AudioSource or string, ...)"})," function,\n",(0,t.jsx)(a.a,{href:"/docs/products/animator-as-code/functions/vrchat#audio-editing-aacvrcfleditanimatorplayaudio",children:"which takes a lambda expression as a parameter"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'AudioSource source = MyAudioSource(); // This can be a string instead.\nAudioClip[] clips = MyAudioClips();\nlayer.NewState("UsingAudio")\n    .Audio(source, audio =>\n    {\n        // Get the PlayAudio object if there\'s a need to edit it directly.\n        VRCAnimatorPlayAudio vrcAnimatorPlayAudio = audio.PlayAudio;\n\n        // By default, a PlayAudio created through AAC does nothing (unlike a manually created behaviour)\n        // so you need to invoke anything that is relevant.\n        audio\n            .SelectsClip(VRC_AnimatorPlayAudio.Order.Random, clips)\n            .SetsLooping()\n            .RandomizesPitch(0.8f, 1.2f)\n            .RandomizesVolume(0.5f, 1f)\n            // "Replays" means Stop and Play.\n            // "StartsPlaying" means just Play.\n            // "StopsPlaying" means just Stop.\n            // To do neither Stop nor Play, don\'t invoke anything.\n            .StartsPlayingOnEnter()\n            .StopsPlayingOnExit();\n    });\n'})}),"\n",(0,t.jsx)(a.h3,{id:"prettier-parameter-drivers",children:"Prettier Parameter Drivers"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["As ",(0,t.jsx)(a.em,{children:"VRCAvatarParameterDriver"})," has evolved over the years, you can now build multiple ",(0,t.jsx)(a.strong,{children:"VRCAvatarParameterDriver"})," behaviours on the same state\nthrough the ",(0,t.jsx)(a.code,{children:"AacFlState.Driving(...)"})," function, ",(0,t.jsx)(a.a,{href:"/docs/products/animator-as-code/functions/vrchat#driver-editing-aacvrcfleditavatarparameterdriver",children:"which takes a lambda expression as a parameter"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'layer.NewState("UsingDrivers").Driving(driver => driver\n    .Copies(layer.FloatParameter("CopySource"), layer.FloatParameter("CopyDestination"))\n    .Sets(layer.FloatParameter("Set"), 2.3f)\n    .Increases(layer.FloatParameter("IncreaseBy2"), 2f)\n    .Decreases(layer.FloatParameter("DecreaseBy3"), 3f)\n    .Randomizes(layer.FloatParameter("Randomizes"), 0f, 100f)\n    .Randomizes(layer.BoolParameter("RandomizesBool"), 0.25f) // 25% chance of being true.\n    .Remaps(layer.FloatParameter("RemapsSource"), 0f, 2f, layer.FloatParameter("RemapsDestination"), 2f, 4f)\n// This creates a second VRCAvatarParameterDriver in the same behaviour.\n).Driving(driver => driver\n    .Sets(layer.FloatParameter("SecondDriver"), 100f)\n    .Locally() // Only this second VRCAvatarParameterDriver is local.\n);\n'})}),"\n",(0,t.jsx)(a.h2,{id:"integration-with-modular-avatar-maac",children:"Integration with Modular Avatar (MaAc)"}),"\n",(0,t.jsxs)(a.p,{children:["Using the ",(0,t.jsx)(a.em,{children:"Animator As Code V1 - Modular Avatar functions"}),", it can create Modular Avatar components."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Newly created Animator Controllers can be assigned into a new Modular Avatar Merge Animator."}),"\n",(0,t.jsx)(a.li,{children:"Synced Bool parameters (1 bit) can be created using the same Float parameters objects used in Animator As Code,\nthrough Modular Avatar Parameters."}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'var ctrl = aac.NewAnimatorController();\nvar fx = ctrl.NewLayer();\n\nvar toggleFloatParameter = fx.FloatParameter("MyToggle");\n\nfx.NewState("MotionTime")\n    .WithAnimation(aac.NewBlendTree().Simple1D(toggleFloatParameter)\n        .WithAnimation(aac.NewClip().Toggling(myObject, false), 0)\n        .WithAnimation(aac.NewClip().Toggling(myObject, true), 1)\n    )\n    .WithWriteDefaultsSetTo(true);\n\n// Create a new object in the scene. We will add Modular Avatar components inside it.\nvar modularAvatar = MaAc.Create(holder);\n\n// By creating a Modular Avatar Merge Animator component,\n// our animator controller will be added to the avatar\'s FX layer.\nmodularAvatar.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);\n\n// We use a float in the animator blend tree, but we declare it as a bool\n// so that it takes 1 bit in the expression parameters.\n// By default, it is saved and synced.\nmodularAvatar.NewBoolToFloatParameter(toggleFloatParameter).WithDefaultValue(true);\n'})}),"\n",(0,t.jsx)(a.h2,{id:"examples-updated-with-ndmf-integration",children:"Examples updated with NDMF integration"}),"\n",(0,t.jsx)(a.p,{children:"The documentation includes an example on how to integrate with Non-Destructive Modular Framework using a plugin."}),"\n",(0,t.jsx)(a.h2,{id:"changes-in-v110-compared-to-v1099xx",children:"Changes in V1.1.0 compared to V1.0.99xx"}),"\n",(0,t.jsx)(a.p,{children:"Animator As Code V1.1.0 contains breaking changes compared to Animator As Code (Alpha) V1.0.99xx."}),"\n",(0,t.jsxs)(a.p,{children:["This list does not contain the breaking changes between V0 and V1, please see the ",(0,t.jsx)(a.a,{href:"/docs/products/animator-as-code/migrating-v0-to-v1",children:"migration guide"})," for this."]}),"\n",(0,t.jsx)(a.p,{children:"Compared to 1.0.99xx:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Commit breaking changes to fix inconsistencies in the API:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\u26a1 (BREAKING) AacFlController.AnimatorController is no longer settable."}),"\n",(0,t.jsx)(a.li,{children:"\u26a1 (BREAKING) Replace public readonly fields with get-only properties."}),"\n",(0,t.jsx)(a.li,{children:"\u26a1 (BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference."}),"\n",(0,t.jsxs)(a.li,{children:["\u26a1 (BREAKING) Make constructors non-public.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"WARNING: The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0."}),"\n",(0,t.jsx)(a.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Fix inconsistencies in the API:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Rename AacFlState.WithMotionTime to AacFlState.MotionTime."}),"\n",(0,t.jsx)(a.li,{children:"Rename *Percent to *Normalized."}),"\n",(0,t.jsx)(a.li,{children:"Add additional single-valued and array overloads."}),"\n",(0,t.jsx)(a.li,{children:"Make Component[] methods null-element safe."}),"\n",(0,t.jsx)(a.li,{children:"Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(a.li,{children:"Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Inline documentation pass."}),"\n",(0,t.jsx)(a.li,{children:"Update LICENSE: Add galister for major contributions."}),"\n",(0,t.jsxs)(a.li,{children:["Accomodate new VRCAnimatorPlayAudio requirements:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource)."}),"\n",(0,t.jsx)(a.li,{children:"Nodes need to have the ability to create a New Behaviour, even if one already exists."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Functional fixes:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter."}),"\n",(0,t.jsxs)(a.li,{children:["Fix Any state transitions will be created from SSMs:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Due to an implementation error, creating Any state transitions previously did not have any effect in the graph."}),"\n",(0,t.jsx)(a.li,{children:"This now creates Any state from the root machine."}),"\n",(0,t.jsx)(a.li,{children:'Sub-state machines "cannot" have Any state transitions created directly from them.'}),"\n",(0,t.jsx)(a.li,{children:"Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Make sure State and SSM names don't contain a period '.':","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:'If the name of a state contains a period ".", it can cause the animator to misbehave, so sanitize it.'}),"\n",(0,t.jsx)(a.li,{children:"Transitions would not work properly during the runtime execution of the animator."}),"\n",(0,t.jsx)(a.li,{children:"Apparently this is because sub state machines internally use the dot as a separator."}),"\n",(0,t.jsx)(a.li,{children:'Sanitize the name so that menu state names such as "J. Inner" don\'t mess things up.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Fix calling Or() after TransitionsFromEntry().When(...) no longer fails:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Calling Or() after TransitionsFromEntry().When(...) used to fail due to an unexpected internal state."}),"\n",(0,t.jsx)(a.li,{children:"This was due to the implicit conversion operator, which converted a null AnimationState to a AacTransitionEndpoint containing null in it."}),"\n",(0,t.jsx)(a.li,{children:"Fix this by returning null in the implicit conversion operators."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Add AacAccessorForExtensions:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Add static class AacAccessorForExtensions:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Provides methods for use by extension functions, exposing methods departing from normal fluent interface usage."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:'Prepare to make methods marked "Not for public use" private starting from V1.2.0.'}),"\n",(0,t.jsx)(a.li,{children:"Due to their active use in other packages, it is not immediately private."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Other notes:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:['Generated assets will now be created with the following prefix: "zAutogenerated/", which may group the animations together in some editor views.',"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["This change is a derivative of a suggestion by ",(0,t.jsx)(a.a,{href:"https://github.com/nullstalgia",children:"nullstalgia"})," in the CGE repository."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"future-breaking-changes-in-v120",children:"Future breaking changes in V1.2.0"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n",(0,t.jsx)(a.li,{children:"It is already marked as obsolete in V1.1.x."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["The methods AacFlBase.InternalConfiguration and AacFlBase.InternalDoCreateLayer will be made private/internal in V1.2.0.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n",(0,t.jsx)(a.li,{children:"It is already marked as obsolete in V1.1.x."}),"\n",(0,t.jsx)(a.li,{children:"The class AacAccessorForExtensions replaces it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"These are likely going to be the last breaking change in V1's lifetime."})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85041:(e,a,n)=>{n.d(a,{F:()=>s});n(96540);var t=n(20053);const i={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=n(74848);function s(e){let{requiresVRChat:a,isUniversal:n,notVRChat:s,requiresResonite:o,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:h,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:u,compatibleWithWarudo:m,compatibleWithBeatSaber:p,requiresWarudo:g,notCompatibleWithGltf:x,compatibleWithVNyan:v,short:A,supporter:j}=e,f=A?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),b=A?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_requires_vrchat),children:["\ud83d\udcac ",b,"VRChat"]}):"",o?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_requires_resonite),children:["\u26a1 ",b,"Resonite"]}):"",h?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",b,"VRM"]}):"",l?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_requires_steamvr),children:[b,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",b,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",u?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",v?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",m?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",p?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",x?(0,r.jsx)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,r.jsx)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",n?(0,r.jsx)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",s?(0,r.jsx)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",j?(0,r.jsxs)("div",{className:(0,t.A)(i.hai_tag,i.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,n)=>{n.d(a,{w:()=>i});n(96540);var t=n(74848);function i(e){let{children:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:a})})}}}]);