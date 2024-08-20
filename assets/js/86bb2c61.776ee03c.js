"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2875],{51911:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=i(74848),s=i(28453);const t={sidebar_position:9},r="Migrating from V0 to V1",a={id:"products/animator-as-code/migrating-v0-to-v1",title:"Migrating from V0 to V1",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/migrating-v0-to-v1.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/migrating-v0-to-v1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"V1 - What's new in V1",permalink:"/docs/products/animator-as-code/v1.1-whats-new"},next:{title:"Auto-reset OSC config",permalink:"/docs/products/auto-reset-osc-config"}},c={},d=[{value:"Assembly definition",id:"assembly-definition",level:2},{value:"Code changes",id:"code-changes",level:2},{value:"Code",id:"code",level:3},{value:"AacConfiguration",id:"aacconfiguration",level:3},{value:"VRCAvatarDescriptor is only needed for destructive workflows",id:"vrcavatardescriptor-is-only-needed-for-destructive-workflows",level:4},{value:"New configuration field: ContainerMode",id:"new-configuration-field-containermode",level:4},{value:"Miscellaneous contract changes",id:"miscellaneous-contract-changes",level:2}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"migrating-from-v0-to-v1",children:"Migrating from V0 to V1"}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,o.jsx)(n.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,o.jsx)(n.p,{children:"AnimatorAsCode V1 introduces the following main breaking changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["VRChat Avatars is now an optional dependency. AnimatorAsCode can now be used in non-VRChat projects.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All VRChat-related functions have been split between two classes of extension methods."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["You are now encouraged to use a non-destructive workflow by generating an animator controller asset without relying on an existing animator controller asset.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["VRChat methods that use a destructive workflow, such as ",(0,o.jsx)(n.code,{children:"AacFlBase.CreateMainFxLayer()"})," are located on their own class of extension methods."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"There are a few fixes in the inconsistency in the API, such as making fields and constructors private, and turning fields into properties with getters."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"assembly-definition",children:"Assembly definition"}),"\n",(0,o.jsxs)(n.p,{children:["If you use assembly definitions, change the assembly reference from ",(0,o.jsx)(n.code,{children:"AnimatorAsCodeFramework"})," to the following:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AnimatorAsCode.V1"})," in all cases."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AnimatorAsCode.V1.VRChat"})," if you depend on VRChat."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AnimatorAsCode.V1.VRChatDestructiveWorkflow"})," also if you need to edit the playable layers of the avatar directly.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:"Consider switching to a non-destructive workflow using VRCFury or Modular Avatar! See below."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"code-changes",children:"Code changes"}),"\n",(0,o.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"AacV0"})," to ",(0,o.jsx)(n.code,{children:"AacV1"})]}),"\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"using AnimatorAsCode.V0;"})," to ",(0,o.jsx)(n.code,{children:"using AnimatorAsCode.V1;"})]}),"\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"AacFlSettingObjectReferenceKeyframes"})," to ",(0,o.jsx)(n.code,{children:"AacFlSettingKeyframesObjectReference"})]}),"\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"TrackingElement"})," to ",(0,o.jsx)(n.code,{children:"AacAv3.Av3TrackingElement"})]}),"\n",(0,o.jsxs)(n.li,{children:["If your project depends on VRChat, you will need to use extension methods.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"using AnimatorAsCode.V1.VRC;"})," in your class imports to use the VRChat extension methods.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The extension methods are contained within the class ",(0,o.jsx)(n.code,{children:"AnimatorAsCode.V1.VRC.AacVRCExtensions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"using AnimatorAsCode.V1.VRCDestructiveWorkflow;"})," in your class imports to use the VRChat destructive workflow extension methods.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The extension methods are contained within the class ",(0,o.jsx)(n.code,{children:"AnimatorAsCode.V1.VRCDestructiveWorkflow.AacVRCDestructiveWorkflowExtensions"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["(Optional) Change ",(0,o.jsx)(n.code,{children:"MotionTime("})," to ",(0,o.jsx)(n.code,{children:"WithMotionTime("})]}),"\n",(0,o.jsxs)(n.li,{children:["(Optional) Change ",(0,o.jsx)(n.code,{children:"WithKeyframes("})," to ",(0,o.jsx)(n.code,{children:"WithUnit("})]}),"\n",(0,o.jsx)(n.li,{children:"There are other code changes, see AacConfiguration section right below."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"aacconfiguration",children:"AacConfiguration"}),"\n",(0,o.jsx)(n.h4,{id:"vrcavatardescriptor-is-only-needed-for-destructive-workflows",children:"VRCAvatarDescriptor is only needed for destructive workflows"}),"\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.code,{children:"AacConfiguration"})," no longer contains the avatar descriptor, you will need to use the extension method ",(0,o.jsx)(n.code,{children:"AacConfiguration.WithAvatarDescriptor(VRCAvatarDescriptor)"})," to define the avatar in the configuration."]}),"\n",(0,o.jsx)(n.p,{children:"If you decide to migrate your scripts to a non-destructive workflow, this step is not necessary:\nYou can remove the avatar descriptor from the configuration."}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using AnimatorAsCode.V1;\nusing AnimatorAsCode.V1.VRCDestructiveWorkflow;\n// ...\n\nAacV1.Create(new AacConfiguration\n{\n    SystemName = systemName,\n    AnimatorRoot = avatar.transform,\n    DefaultValueRoot = avatar.transform,\n    AssetContainer = assetContainer,\n    AssetKey = assetKey,\n    DefaultsProvider = new AacDefaultsProvider(writeDefaults: options.WriteDefaults)\n}.WithAvatarDescriptor(avatar)); // The avatar descriptor is now defined by invoking an extension method.\n"})}),"\n",(0,o.jsx)(n.h4,{id:"new-configuration-field-containermode",children:"New configuration field: ContainerMode"}),"\n",(0,o.jsx)(n.p,{children:"The configuration has a new field: ContainerMode."}),"\n",(0,o.jsx)(n.p,{children:"ContainerMode dictates how assets should be stored in the asset container."}),"\n",(0,o.jsx)(n.p,{children:"If you use a non-destructive workflow with NDMF, AAC usually does not need to store anything inside the asset container,\nbecause NDMF takes care of it; except for Animator Controllers. It is necessary to persist the Animator Controller as soon\nas it is created so that we may create states containing behaviours inside of them."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you use a non-destructive workflow, use ",(0,o.jsx)(n.code,{children:"ContainerMode = AacConfiguration.Container.OnlyWhenPersistenceRequired"})]}),"\n",(0,o.jsxs)(n.li,{children:["If you use a destructive workflow, use ",(0,o.jsx)(n.code,{children:"ContainerMode = AacConfiguration.Container.Everything"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"miscellaneous-contract-changes",children:"Miscellaneous contract changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AacFlLayer"}),", ",(0,o.jsx)(n.code,{children:"AacFlClip"}),", and ",(0,o.jsx)(n.code,{children:"AacFlEditClip"})," are now classes instead of structs."]}),"\n",(0,o.jsx)(n.li,{children:"Some public fields that used to be settable by accident have been changed into non-settable public properties with a getter (this does not include AacConfiguration)."}),"\n",(0,o.jsx)(n.li,{children:"Some read-only public fields have been changed into public properties with a getter."}),"\n",(0,o.jsx)(n.li,{children:"Many constructors of classes have been made private, as they are meant to be instantiated only through invocations of other functions."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AacFlFloatParameterGroup.ToList()"})," now correctly returns the ",(0,o.jsx)(n.code,{children:"List<AacFlFloatParameter>"})," instead of ",(0,o.jsx)(n.code,{children:"List<AacFlBoolParameter>"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AacFlIntParameterGroup.ToList()"})," now correctly returns the ",(0,o.jsx)(n.code,{children:"List<AacFlIntParameter>"})," instead of ",(0,o.jsx)(n.code,{children:"List<AacFlBoolParameter>"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Some functions that accept ",(0,o.jsx)(n.code,{children:"Component[]"})," used to throw an error if an element in the array was null. They will no longer throw errors."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);