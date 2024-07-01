"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1566],{82092:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=n(74848),i=n(28453);const t={sidebar_position:5,title:"VRChat"},s="Functions: VRChat",l={id:"products/animator-as-code/functions/vrchat",title:"VRChat",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/functions/vrchat.md",sourceDirName:"products/animator-as-code/functions",slug:"/products/animator-as-code/functions/vrchat",permalink:"/docs/products/animator-as-code/functions/vrchat",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"VRChat"},sidebar:"tutorialSidebar",previous:{title:"Base functions",permalink:"/docs/products/animator-as-code/functions/base"},next:{title:"VRChat (Destructive workflow)",permalink:"/docs/products/animator-as-code/functions/vrchat-destructive-workflow"}},o={},d=[{value:"Animator creation overview",id:"animator-creation-overview",level:4},{value:"Base (AacFlBase)",id:"base-aacflbase",level:2},{value:"Reference VRChat assets (AacVRCExtensions)",id:"reference-vrchat-assets-aacvrcextensions",level:4},{value:"Layer (AacFlLayer)",id:"layer-aacfllayer",level:2},{value:"Create VRChat parameters",id:"create-vrchat-parameters",level:4},{value:"Avatars 3.0 (AacAv3)",id:"avatars-30-aacav3",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Supporting conditions",id:"supporting-conditions",level:3},{value:"Asset Library (AacVrcAssetLibrary)",id:"asset-library-aacvrcassetlibrary",level:2},{value:"State (AacFlState)",id:"state-aacflstate",level:2},{value:"Driver state behaviour",id:"driver-state-behaviour",level:3},{value:"Local",id:"local",level:4},{value:"Set",id:"set",level:4},{value:"Add",id:"add",level:4},{value:"Random",id:"random",level:4},{value:"Tracking state behaviours",id:"tracking-state-behaviours",level:3},{value:"Locomotion state behaviour",id:"locomotion-state-behaviour",level:3},{value:"Driver state behaviour as a lambda expression\ud83d\udca1",id:"driver-state-behaviour-as-a-lambda-expression",level:3},{value:"Audio state behaviour as a lambda expression\ud83d\udca1",id:"audio-state-behaviour-as-a-lambda-expression",level:3},{value:"Driver editing (AacVRCFlEditDriver)\ud83d\udca1",id:"driver-editing-aacvrcfleditdriver",level:2},{value:"Local",id:"local-1",level:4},{value:"Set",id:"set-1",level:4},{value:"Add",id:"add-1",level:4},{value:"Random",id:"random-1",level:4},{value:"Audio editing (AacVRCFlEditPlayAudio)\ud83d\udca1",id:"audio-editing-aacvrcfleditplayaudio",level:2},{value:"Play and Stop OnEnter",id:"play-and-stop-onenter",level:4},{value:"Play and Stop OnExit",id:"play-and-stop-onexit",level:4},{value:"Clips",id:"clips",level:4},{value:"Loop",id:"loop",level:4},{value:"Volume",id:"volume",level:4},{value:"Pitch",id:"pitch",level:4}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"functions-vrchat",children:"Functions: VRChat"}),"\n",(0,r.jsx)(a.admonition,{type:"danger",children:(0,r.jsxs)(a.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,r.jsx)(a.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:"New additions in V1 are indicated with a light bulb \ud83d\udca1 icon."})}),"\n",(0,r.jsxs)(a.p,{children:["These functions are specific to the VRChat Avatars SDK. For more functions, see ",(0,r.jsx)(a.a,{href:"./vrchat-destructive-workflow",children:"Destructive workflow"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["To use these functions, use the extensions functions in ",(0,r.jsx)(a.code,{children:"AacVRCExtensions"}),":"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Add ",(0,r.jsx)(a.code,{children:"using AnimatorAsCode.V1.VRC;"})," in your class imports."]}),"\n",(0,r.jsxs)(a.li,{children:["If you use assembly definitions, add the ",(0,r.jsx)(a.code,{children:"AnimatorAsCodeFramework.V1.VRC"})," assembly reference."]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"animator-creation-overview",children:"Animator creation overview"}),"\n",(0,r.jsx)(a.mermaid,{value:"graph TD;\n    AacV1[static AacV1]:::roots--\x3e|Create|Base:::roots;\n    Base--\x3e|VrcAssets|VrcAssetLibrary\n    \n    Base--\x3e|NewAnimatorController|Controller:::focus;\n    Controller--\x3e|NewLayer|Layer:::focus;\n    Layer--\x3e|Av3|Av3;\n    Av3--\x3e|*|Parameter;\n    Av3--\x3e|ItIsRemote<br>/ItIsLocal|Condition;\n    \n    Layer--\x3e|NewState|State:::focus;\n    Layer--\x3e|NewSubStateMachine|StateMachine:::focus;\n    StateMachine--\x3e|NewSubStateMachine|StateMachine;\n    StateMachine--\x3e|NewState|State;\n    \n    State--\x3e|Drives<br>/Driving*<br>/Tracking*<br>/Locomotion*<br>/PrintsToLogUsingTrackingBehaviour|State;\n    \n    State--\x3e|Audio|EditAudio;\n    State--\x3e|Driving|EditDriver;\n    \n    classDef disabled fill:#CCC\n    classDef roots fill:#FCC\n    classDef focus fill:#CFF"}),"\n",(0,r.jsx)(a.h2,{id:"base-aacflbase",children:"Base (AacFlBase)"}),"\n",(0,r.jsx)(a.h4,{id:"reference-vrchat-assets-aacvrcextensions",children:"Reference VRChat assets (AacVRCExtensions)"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacVrcAssetLibrary VrcAssets()"}),(0,r.jsx)("br",{}),"\nReturn an AacVrcAssetLibrary, which lets you select various assets from VRChat."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"layer-aacfllayer",children:"Layer (AacFlLayer)"}),"\n",(0,r.jsx)(a.h4,{id:"create-vrchat-parameters",children:"Create VRChat parameters"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacAv3 Av3()"}),(0,r.jsx)("br",{}),"\nReturn an AacAv3 object, letting you select various standard Avatars 3.0 Animator Parameters. Subsequently invoking its functions will create invoked parameters in that layer."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"avatars-30-aacav3",children:"Avatars 3.0 (AacAv3)"}),"\n",(0,r.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter IsLocal"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named IsLocal."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlEnumIntParameter<Av3Viseme> Viseme"}),(0,r.jsx)("br",{}),"\nCreate an Int parameter in the animator named Viseme."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlEnumIntParameter<Av3Gesture> GestureLeft"}),(0,r.jsx)("br",{}),"\nCreate an Int parameter in the animator named GestureLeft."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlEnumIntParameter<Av3Gesture> GestureRight"}),(0,r.jsx)("br",{}),"\nCreate an Int parameter in the animator named GestureRight."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter GestureLeftWeight"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named GestureLeftWeight."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter GestureRightWeight"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named GestureRightWeight."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter AngularY"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named AngularY."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter VelocityX"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named VelocityX."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter VelocityY"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named VelocityY."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter VelocityZ"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named VelocityZ."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter VelocityMagnitude"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named VelocityMagnitude."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter Upright"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named Upright."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter Grounded"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named Grounded."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter Seated"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named Seated."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter AFK"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named AFK."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlIntParameter TrackingType"}),(0,r.jsx)("br",{}),"\nCreate an Int parameter in the animator named TrackingType."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlIntParameter VRMode"}),(0,r.jsx)("br",{}),"\nCreate an Int parameter in the animator named VRMode."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter MuteSelf"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named MuteSelf."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter InStation"}),(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named InStation."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter Voice"}),(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named Voice."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter Earmuffs"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named Earmuffs."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter IsOnFriendsList"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named IsOnFriendsList."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlBoolParameter ScaleModified"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Bool parameter in the animator named ScaleModified."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter ScaleFactor"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named ScaleFactor."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter ScaleFactorInverse"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named ScaleFactorInverse."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter EyeHeightAsMeters"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named EyeHeightAsMeters."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlFloatParameter EyeHeightAsPercent"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreate a Float parameter in the animator named EyeHeightAsPercent."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"supporting-conditions",children:"Supporting conditions"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"IAacFlCondition ItIsRemote()"}),(0,r.jsx)("br",{}),"\nVerify that IsLocal is false. Create a Bool parameter in the animator named IsLocal."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"IAacFlCondition ItIsLocal()"}),(0,r.jsx)("br",{}),"\nVerify that IsLocal is true. Create a Bool parameter in the animator named IsLocal."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"asset-library-aacvrcassetlibrary",children:"Asset Library (AacVrcAssetLibrary)"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AvatarMask LeftHandAvatarMask()"}),(0,r.jsx)("br",{}),"\nLeft Hand avatar mask asset."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AvatarMask RightHandAvatarMask()"}),(0,r.jsx)("br",{}),"\nRight Hand avatar mask asset."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AnimationClip ProxyForGesture(AacAv3.Av3Gesture gesture, bool masculine)"}),(0,r.jsx)("br",{}),"\nGesture proxy animation asset. There are two idle animations for the neutral hand, the bool selects one or the other."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"state-aacflstate",children:"State (AacFlState)"}),"\n",(0,r.jsx)(a.h3,{id:"driver-state-behaviour",children:"Driver state behaviour"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["Due to how VRCAvatarParameterDriver has evolved over the years,\nconsider using the ",(0,r.jsx)(a.a,{href:"#driver-state-behaviour-as-a-lambda-expression",children:(0,r.jsx)(a.strong,{children:"Driving lambda expression"})})," instead."]})}),"\n",(0,r.jsx)(a.h4,{id:"local",children:"Local"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingLocally()"}),(0,r.jsx)("br",{}),"\nSet the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"set",children:"Set"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState Drives(AacFlIntParameter parameter, int value)"}),(0,r.jsx)("br",{}),"\nDrive the Int parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState Drives(AacFlFloatParameter parameter, float value)"}),(0,r.jsx)("br",{}),"\nDrive the Float parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState Drives(AacFlBoolParameter parameter, bool value)"}),(0,r.jsx)("br",{}),"\nDrive the Bool parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState Drives(AacFlBoolParameterGroup parameters, bool value)"}),(0,r.jsx)("br",{}),"\nDrive the Bool parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"add",children:"Add"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingIncreases(AacFlFloatParameter parameter, float additiveValue)"}),(0,r.jsx)("br",{}),"\nDrive the Float parameter, incrementing it by ",(0,r.jsx)(a.code,{children:"additiveValue"}),". Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingDecreases(AacFlFloatParameter parameter, float positiveValueToDecreaseBy)"}),(0,r.jsx)("br",{}),"\nDrive the Float parameter, decreasing it by the amount of ",(0,r.jsx)(a.code,{children:"positiveValueToDecreaseBy"}),". Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingIncreases(AacFlIntParameter parameter, int additiveValue)"}),(0,r.jsx)("br",{}),"\nDrive the Int parameter, incrementing it by ",(0,r.jsx)(a.code,{children:"additiveValue"}),". Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingDecreases(AacFlIntParameter parameter, int positiveValueToDecreaseBy)"}),(0,r.jsx)("br",{}),"\nDrive the Int parameter, decreasing it by the amount of ",(0,r.jsx)(a.code,{children:"positiveValueToDecreaseBy"}),". Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"random",children:"Random"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingRandomizesLocally(AacFlFloatParameter parameter, float min, float max)"}),(0,r.jsx)("br",{}),"\nDrive the Float parameter value to be random between min and max. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingRandomizesLocally(AacFlIntParameter parameter, int min, int max)"}),(0,r.jsx)("br",{}),"\nDrive the Int parameter value to be random between min and max. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState DrivingRandomizesLocally(AacFlBoolParameter parameter, float chance)"}),(0,r.jsx)("br",{}),"\nDrive the Bool parameter value to be random with the specified chance of being true. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"tracking-state-behaviours",children:"Tracking state behaviours"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState PrintsToLogUsingTrackingBehaviour(string value)"}),(0,r.jsx)("br",{}),"\nUse an Animator Tracking Control to print logs to the avatar wearer. Create an Animator Tracking Control state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState TrackingTracks(TrackingElement element)"}),(0,r.jsx)("br",{}),"\nUse an Animator Tracking Control to set the element to be tracking. Create an Animator Tracking Control state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState TrackingAnimates(TrackingElement element)"}),(0,r.jsx)("br",{}),"\nUse an Animator Tracking Control to set the element to be animating. Create an Animator Tracking Control state behaviour if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState TrackingSets(TrackingElement element, VRC_AnimatorTrackingControl.TrackingType trackingType)"}),(0,r.jsx)("br",{}),"\nUse an Animator Tracking Control to set the element to be the value of ",(0,r.jsx)(a.code,{children:"trackingType"}),". Create an Animator Tracking Control state behaviour if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"locomotion-state-behaviour",children:"Locomotion state behaviour"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState LocomotionEnabled()"}),(0,r.jsx)("br",{}),"\nEnable locomotion. Create an Animator Locomotion Control if it does not exist."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacFlState LocomotionDisabled()"}),(0,r.jsx)("br",{}),"\nDisable locomotion. Create an Animator Locomotion Control if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"driver-state-behaviour-as-a-lambda-expression",children:"Driver state behaviour as a lambda expression\ud83d\udca1"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Driving(Action<AacVRCFlEditDriver> action)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreates a new VRCAvatarParameterDriver behaviour, and edits it. By default, it is non-local, so it drives even if it's not on the avatar wearer.\nThis always creates a new behaviour even if there are already other VRCAvatarParameterDriver behaviours."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"audio-state-behaviour-as-a-lambda-expression",children:"Audio state behaviour as a lambda expression\ud83d\udca1"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio Audio(AudioSource source, Action<AacVRCFlEditAudio> action)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreates a new VRCAnimatorPlayAudio behaviour, and edits it.\nIf you don't have the AudioSource, use the overload that accepts a string.\nBy default, this behaviour does nothing (everything is set to NeverApply, and does neither stop nor plays anything), unlike a VRCAnimatorPlayAudio that would be created by hand.\nThis always creates a new behaviour even if there are already VRCAnimatorPlayAudio behaviours."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio Audio(string audioSourcePath, Action<AacVRCFlEditAudio> action)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nCreates a new VRCAnimatorPlayAudio behaviour, and edits it.\nThis overload accepts a path, but if you do have the AudioSource, use the overload that accepts an AudioSource.\nBy default, this behaviour does nothing (everything is set to NeverApply, and does neither stop nor plays anything), unlike a VRCAnimatorPlayAudio that would be created by hand.\nThis always creates a new behaviour even if there are already VRCAnimatorPlayAudio behaviours."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"driver-editing-aacvrcfleditdriver",children:"Driver editing (AacVRCFlEditDriver)\ud83d\udca1"}),"\n",(0,r.jsx)(a.h4,{id:"local-1",children:"Local"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Locally()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSet the driver to be Local only."]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"set-1",children:"Set"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Sets(AacFlIntParameter parameter, int value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Int parameter to value."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Sets(AacFlFloatParameter parameter, float value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Float parameter to value."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Sets(AacFlBoolParameter parameter, bool value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Bool parameter to value."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Sets(AacFlBoolParameterGroup parameters, bool value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Bool parameter to value."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"add-1",children:"Add"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Increases(AacFlFloatParameter parameter, float additiveValue)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Float parameter, incrementing it by ",(0,r.jsx)(a.code,{children:"additiveValue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Decreases(AacFlFloatParameter parameter, float positiveValueToDecreaseBy)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Float parameter, decreasing it by the amount of ",(0,r.jsx)(a.code,{children:"positiveValueToDecreaseBy"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Increases(AacFlIntParameter parameter, int additiveValue)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Int parameter, incrementing it by ",(0,r.jsx)(a.code,{children:"additiveValue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Decreases(AacFlIntParameter parameter, int positiveValueToDecreaseBy)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Int parameter, decreasing it by the amount of ",(0,r.jsx)(a.code,{children:"positiveValueToDecreaseBy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"random-1",children:"Random"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditDriver Randomizes(AacFlFloatParameter parameter, float min, float max)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDrive the Float parameter value to be random between min and max."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"audio-editing-aacvrcfleditplayaudio",children:"Audio editing (AacVRCFlEditPlayAudio)\ud83d\udca1"}),"\n",(0,r.jsx)(a.h4,{id:"play-and-stop-onenter",children:"Play and Stop OnEnter"}),"\n",(0,r.jsx)(a.p,{children:"All of these functions affect both the Stop and Play checkboxes when the state is entered. To do neither Stop nor Play, don't call any of those functions."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio ReplaysOnEnter()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nStop, and Play when the state is entered."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio StartsPlayingOnEnter()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDoes not stop, and Play when the state is entered."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio ReplaysOnEnterAfterSeconds(float delaySeconds)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nStop, and Play when the state is entered after a delay in seconds."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio StartsPlayingOnEnterAfterSeconds(float delaySeconds)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDoes not stop, and Play when the state is entered after a delay in seconds."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio StopsPlayingOnEnter()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nStop, and do not Play when the state is entered."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"play-and-stop-onexit",children:"Play and Stop OnExit"}),"\n",(0,r.jsx)(a.p,{children:"All of these functions affect both the Stop and Play checkboxes when leaving the state. To do neither Stop nor Play, don't call any of those functions."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio ReplaysOnExit()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nStop, and Play when leaving the state."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio StartsPlayingOnExit()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDoes not stop, and Play when leaving the state."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio StopsPlayingOnExit()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nStop, and do not Play when leaving the state."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"clips",children:"Clips"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SelectsClipIfStopped(VRC_AnimatorPlayAudio.Order order, AudioClip[] clipsWithNulls)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDefines the list of clips and the order they are going to play in, if stopped.",(0,r.jsx)("br",{}),"\nThe list can safely contain null values.",(0,r.jsx)("br",{}),"\nIf you want to use the VRC_AnimatorPlayAudio.Order.Parameter enum value, use the overload that accepts an AacFlIntParameter instead."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SelectsClip(VRC_AnimatorPlayAudio.Order order, AudioClip[] clipsWithNulls)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDefines the list of clips and the order they are going to play in.",(0,r.jsx)("br",{}),"\nThe list can safely contain null values.",(0,r.jsx)("br",{}),"\nIf you want to use the VRC_AnimatorPlayAudio.Order.Parameter enum value, use the overload that accepts an AacFlIntParameter instead."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SelectsClipIfStopped(AacFlIntParameter indexParameter, AudioClip[] clipsWithNulls)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDefines the list of clips, which will play using the parameter as an index, if stopped.",(0,r.jsx)("br",{}),"\nThe list can safely contain null values, however, null values will be removed, causing the indices of elements of that list to change, which may or may not be an issue."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SelectsClip(AacFlIntParameter indexParameter, AudioClip[] clipsWithNulls)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nDefines the list of clips, which will play using the parameter as an index.",(0,r.jsx)("br",{}),"\nThe list can safely contain null values, however, null values will be removed, causing the indices of elements of that list to change, which may or may not be an issue."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"loop",children:"Loop"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsLoopingIfStopped()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSet the audio source as looping if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsNonLoopingIfStopped()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSet the audio source as non-looping if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsLooping()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSet the audio source as looping."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsNonLooping()"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSet the audio source as non-looping."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"volume",children:"Volume"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio RandomizesVolumeIfStopped(float min, float max)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nRandomizes the volume if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio RandomizesVolume(float min, float max)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nRandomizes the volume."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsVolumeIfStopped(float value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSets the volume if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsVolume(float value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSets the volume."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"pitch",children:"Pitch"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio RandomizesPitchIfStopped(float min, float max)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nRandomizes the pitch if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio RandomizesPitch(float min, float max)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nRandomizes the pitch."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsPitchIfStopped(float value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSets the pitch if stopped."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"AacVRCFlEditPlayAudio SetsPitch(float value)"}),"\ud83d\udca1",(0,r.jsx)("br",{}),"\nSets the pitch."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);