"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3548],{93240:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(74848),l=i(28453);const a={title:"Animator As Code"},s=void 0,r={id:"changelogs/animator-as-code",title:"Animator As Code",description:"1.1.0 (Planned)",source:"@site/docs/changelogs/animator-as-code.md",sourceDirName:"changelogs",slug:"/changelogs/animator-as-code",permalink:"/docs/changelogs/animator-as-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Animator As Code"},sidebar:"changelogsSidebar",previous:{title:"Animator As Code - VRChat",permalink:"/docs/changelogs/animator-as-code-vrchat"},next:{title:"Auto-reset OSC config",permalink:"/docs/changelogs/auto-reset-osc-config"}},o={},c=[{value:"1.1.0 (Planned)",id:"110-planned",level:2},{value:"1.1.0-beta.8 (Planned)",id:"110-beta8-planned",level:2},{value:"1.1.0-beta.7",id:"110-beta7",level:2},{value:"1.1.0-beta.6",id:"110-beta6",level:2},{value:"1.1.0-beta.5",id:"110-beta5",level:2},{value:"1.1.0-beta.4",id:"110-beta4",level:2},{value:"1.1.0-beta.3",id:"110-beta3",level:2},{value:"1.1.0-beta.2",id:"110-beta2",level:2},{value:"1.1.0-beta.1",id:"110-beta1",level:2}];function d(e){const n={admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"110-planned",children:"1.1.0 (Planned)"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"This change has not been released yet."})}),"\n",(0,t.jsx)(n.p,{children:"Leave Alpha version, by committing some of the last breaking API changes."}),"\n",(0,t.jsx)(n.p,{children:"Compared to 1.0.99xx:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Commit breaking changes to fix inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(BREAKING) AacFlController.AnimatorController is no longer settable."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Replace public readonly fields with get-only properties."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference."}),"\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Make constructors non-public.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WARNING: The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0."}),"\n",(0,t.jsx)(n.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Fix inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename AacFlState.WithMotionTime to AacFlState.MotionTime."}),"\n",(0,t.jsx)(n.li,{children:"Rename *Percent to *Normalized."}),"\n",(0,t.jsx)(n.li,{children:"Add additional single-valued and array overloads."}),"\n",(0,t.jsx)(n.li,{children:"Make Component[] methods null-element safe."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Inline documentation pass."}),"\n",(0,t.jsx)(n.li,{children:"Update LICENSE: Add galister for major contributions."}),"\n",(0,t.jsx)(n.li,{children:"Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter."}),"\n",(0,t.jsxs)(n.li,{children:["Accomodate new VRCAnimatorPlayAudio requirements:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource)."}),"\n",(0,t.jsx)(n.li,{children:"Nodes need to have the ability to create a New Behaviour, even if one already exists."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta8-planned",children:"1.1.0-beta.8 (Planned)"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"This change has not been released yet."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fix Any state transitions will be created from SSMs:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due to an implementation error, creating Any state transitions previously did not have any effect in the graph."}),"\n",(0,t.jsx)(n.li,{children:"This now creates Any state from the root machine."}),"\n",(0,t.jsx)(n.li,{children:'Sub-state machines "cannot" have Any state transitions created directly from them.'}),"\n",(0,t.jsx)(n.li,{children:"Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta7",children:"1.1.0-beta.7"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Keep AacFlSettingKeyframes public until V1.2.0:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keep AacFlSettingKeyframes public until V1.2.0, where it will be made internal."}),"\n",(0,t.jsx)(n.li,{children:"AacFlSettingKeyframes is still used in CGE, but CGE already accepts AAC V1.1.x."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta6",children:"1.1.0-beta.6"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix Animator Removal constructor actually needs to be public."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta5",children:"1.1.0-beta.5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Replace public readonly fields with properties:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix inconsistency by replacing public readonly fields with getter-only properties."}),"\n",(0,t.jsx)(n.li,{children:"Add PublicAPI annotation where it was missing."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Make constructors non-public:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix inconsistency where constructors were public."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta4",children:"1.1.0-beta.4"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This makes it more in line with AacFlSettingKeyframesColor."}),"\n",(0,t.jsx)(n.li,{children:"AacFlSettingObjectReferenceKeyframes was introduced specifically for Vixen, and it is meant to be used as a lambda expression, so the breaking damage should be limited."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta3",children:"1.1.0-beta.3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add AacFlState.WithMotionTime to replace AacFlState.MotionTime:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add AacFlState.WithMotionTime(...) to replace AacFlState.MotionTime()"}),"\n",(0,t.jsx)(n.li,{children:"This is more in line with the function naming convention"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The previous naming is also preserved not to break existing uses."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Work towards correcting inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename *Percent to *Normalized."}),"\n",(0,t.jsx)(n.li,{children:"Update inline documentation."}),"\n",(0,t.jsx)(n.li,{children:"Add additional single-valued and array overloads."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The previous naming is also preserved not to break existing uses."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make Component[] null-element safe and add missing multi-component:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make Component[] null-element safe."}),"\n",(0,t.jsx)(n.li,{children:"Add missing multi-component variations of existing APIs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Inline documentation pass."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta2",children:"1.1.0-beta.2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Make AacFlController.AnimatorController read-only"}),"\n",(0,t.jsx)(n.li,{children:"Update LICENSE: Add galister for major contributions."}),"\n",(0,t.jsxs)(n.li,{children:["Do a pass on the documentation:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add and update inline documentation."}),"\n",(0,t.jsx)(n.li,{children:"Mark some inconsistencies."}),"\n",(0,t.jsx)(n.li,{children:"Not everything is reviewed yet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta1",children:"1.1.0-beta.1"}),"\n",(0,t.jsx)(n.p,{children:"Accomodate new VRCAnimatorPlayAudio requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource)."}),"\n",(0,t.jsx)(n.li,{children:"Nodes need to have the ability to create a New Behaviour, even if one already exists."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);