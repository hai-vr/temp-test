"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8961],{13781:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(85893),n=r(11151);const s={sidebar_position:7,title:"Modular Avatar"},o="Functions: Modular Avatar",l={id:"products/animator-as-code/functions/modular-avatar",title:"Modular Avatar",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/functions/modular-avatar.md",sourceDirName:"products/animator-as-code/functions",slug:"/products/animator-as-code/functions/modular-avatar",permalink:"/docs/products/animator-as-code/functions/modular-avatar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Modular Avatar"},sidebar:"tutorialSidebar",previous:{title:"VRChat (Destructive workflow)",permalink:"/docs/products/animator-as-code/functions/vrchat-destructive-workflow"},next:{title:"Migrating from V0 to V1",permalink:"/docs/products/animator-as-code/migrating-v0-to-v1"}},i={},c=[{value:"Component creation overview",id:"component-creation-overview",level:4},{value:"Modular Avatar As Code (MaAc)",id:"modular-avatar-as-code-maac",level:2},{value:"Base (MaAc)",id:"base-maac",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Parameter groups",id:"parameter-groups",level:4},{value:"Merge Animator",id:"merge-animator",level:4},{value:"Menu items",id:"menu-items",level:4},{value:"Merge Animator (MaacMergeAnimator)",id:"merge-animator-maacmergeanimator",level:2},{value:"Parameter (MaacParameter&lt;T&gt;)",id:"parameter-maacparametert",level:2},{value:"Menu item (MaacMenuItem)",id:"menu-item-maacmenuitem",level:2},{value:"Toggle",id:"toggle",level:4},{value:"Button",id:"button",level:4},{value:"Radial",id:"radial",level:4}];function d(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"functions-modular-avatar",children:"Functions: Modular Avatar"}),"\n",(0,t.jsx)(a.admonition,{type:"danger",children:(0,t.jsxs)(a.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,t.jsx)(a.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsx)(a.p,{children:"The API contract for Modular Avatar As Code V1 is highly unstable. Use at your own risk."})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"Modular Avatar As Code"})," contains facilities to automate the creation of ",(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})," components."]}),"\n",(0,t.jsx)(a.p,{children:"The functionality of this library is strictly limited to the handling of animators and parameters, therefore only the following components are covered:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-animator",children:"MA Merge Animator"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/docs/reference/parameters",children:"MA Parameters"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/docs/reference/menu-item",children:"MA Menu Item"})}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"For other components, you need to create them by hand."}),"\n",(0,t.jsxs)(a.p,{children:["To use the Modular Avatar As Code functions, add ",(0,t.jsx)(a.code,{children:"using ModularAvatarAsCode.V1;"})," to your class imports."]}),"\n",(0,t.jsx)(a.h4,{id:"component-creation-overview",children:"Component creation overview"}),"\n",(0,t.jsx)(a.mermaid,{value:"graph TD;\n    MaAcStatic[static MaAc]:::roots--\x3e|Create|MaAc:::roots;\n    MaAc--\x3e|On|MaAc;\n    MaAc--\x3e|NewMergeAnimator<br>/UsingMergeAnimator|MaacMergeAnimator;\n    MaAc--\x3e|NewParameter|MaacParameter;\n    MaAc--\x3e|EditMenuItemOnSelf<br>/EditMenuItem|MaacMenuItem;\n    \n    classDef disabled fill:#CCC\n    classDef roots fill:#FCC\n    classDef focus fill:#CFF"}),"\n",(0,t.jsx)(a.h2,{id:"modular-avatar-as-code-maac",children:"Modular Avatar As Code (MaAc)"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"static MaAc Create(GameObject root, bool setDirty = true)"})," ",(0,t.jsx)("br",{}),"\nCreate a Modular Avatar As Code base, targeting the root object. The root object is the object that you will attach the Merge Armature component to."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"base-maac",children:"Base (MaAc)"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"MaAc On(GameObject otherRoot)"})," ",(0,t.jsx)("br",{}),'\nCreate a new instance of MaAc targeting another object. Beware that this new instance of MaAc forgets all previous method invocations, so invoking some stateful functions like "NewMergeAnimator" may cause different results.']}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaAc ImportParameters(VRCExpressionParameters parameters)"})," ",(0,t.jsx)("br",{}),"\nImport parameters from an existing VRCExpressionParameters asset. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<float> NewParameter(MaacParameterType parameterType, string parameter)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new parameter of the given type. If you use Animator As Code, you can reuse the parameters using the other ",(0,t.jsx)(a.code,{children:"NewParameter"})," method overloads or the ",(0,t.jsx)(a.code,{children:"NewBoolToFloatParameter"})," method. Function calls on the resulting objects will affect all parameters of that group. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<float> NewParameter(AacFlFloatParameter aacParameter)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new Float parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<int> NewParameter(AacFlIntParameter aacParameter)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new Int parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<bool> NewParameter(AacFlBoolParameter aacParameter)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new Bool parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<bool> NewBoolToFloatParameter(AacFlFloatParameter aacParameter)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new Bool parameter, acknowledging that the animator has exposed it as a Float. By default it is saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"parameter-groups",children:"Parameter groups"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<float> NewParameter(MaacParameterType parameterType, params string[] parametersWithNulls)"})," ",(0,t.jsx)("br",{}),"\nDeclare new parameters of the given type. If you use Animator As Code, you can reuse the parameters using the other ",(0,t.jsx)(a.code,{children:"NewParameter"})," method overloads or the ",(0,t.jsx)(a.code,{children:"NewBoolToFloatParameter"})," method. The array can safely contain null values. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<float> NewParameter(AacFlFloatParameterGroup aacParameterGroup)"})," ",(0,t.jsx)("br",{}),"\nDeclare new Float parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<int> NewParameter(AacFlIntParameterGroup aacParameterGroup)"})," ",(0,t.jsx)("br",{}),"\nDeclare new Int parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<bool> NewParameter(AacFlBoolParameterGroup aacParameterGroup)"})," ",(0,t.jsx)("br",{}),"\nDeclare new Bool parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<bool> NewBoolToFloatParameter(AacFlFloatParameterGroup aacParameterGroup)"})," ",(0,t.jsx)("br",{}),"\nDeclare new Bool parameters, acknowledging that the animator has exposed them as Floats. By default it is saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"merge-animator",children:"Merge Animator"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMergeAnimator NewMergeAnimator(AacFlController controller, VRCAvatarDescriptor.AnimLayerType layerType)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new animator to be merged. Every call to NewMergeAnimator will create an additional ModularAvatarMergeAnimator component. The path mode is set to Absolute."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMergeAnimator NewMergeAnimator(AnimatorController animator, VRCAvatarDescriptor.AnimLayerType layerType)"})," ",(0,t.jsx)("br",{}),"\nDeclare a new raw animator to be merged. Every call to NewMergeAnimator will create an additional ModularAvatarMergeAnimator component. The path mode is set to Absolute."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMergeAnimator UsingMergeAnimator(ModularAvatarMergeAnimator mergeAnimator, AacFlController controller, VRCAvatarDescriptor.AnimLayerType layerType)"})," ",(0,t.jsx)("br",{}),"\nWrites over an existing MergeAnimator component, setting the controller and layer type to be merged. The path mode is set to Absolute."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMergeAnimator UsingMergeAnimator(ModularAvatarMergeAnimator mergeAnimator, AnimatorController animator, VRCAvatarDescriptor.AnimLayerType layerType)"})," ",(0,t.jsx)("br",{}),"\nWrites over an existing MergeAnimator component, setting the raw controller and layer type to be merged. The path mode is set to Absolute."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"menu-items",children:"Menu items"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem EditMenuItemOnSelf()"})," ",(0,t.jsx)("br",{}),"\nEdit one menu item on this object. It is not possible to declare multiple menu items on the same object."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem EditMenuItem(GameObject receiver)"})," ",(0,t.jsx)("br",{}),"\nEdit one menu item on the receiver object. It is not possible to declare multiple menu items on that same object."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem EditMenuItem(params GameObject[] receiversWithNulls)"})," ",(0,t.jsx)("br",{}),"\nEdit one menu item on all of the receiver objects. It is not possible to declare multiple menu items on those same objects. Function calls on the resulting object will affect all of those menu items. Use this in case you have multiple identical menu items scattered across different menus. The array can safely contain null values."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"merge-animator-maacmergeanimator",children:"Merge Animator (MaacMergeAnimator)"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"MaacMergeAnimator Relative()"})," ",(0,t.jsx)("br",{}),"\nMark the path mode as relative. By default, merge animators are made absolute."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"parameter-maacparametert",children:"Parameter (MaacParameter<T>)"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<T> NotSynced()"})," ",(0,t.jsx)("br",{}),"\nMark this parameter as not synced. By default, newly created parameters are synced."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<T> NotSaved()"})," ",(0,t.jsx)("br",{}),"\nMark this parameter as not saved. By default, newly created parameters are saved."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacParameter<T> WithDefaultValue(T value)"})," ",(0,t.jsx)("br",{}),"\nSet the default value of this parameter. No errors are raised if you try to set values outside legal range."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"menu-item-maacmenuitem",children:"Menu item (MaacMenuItem)"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem Name(string menuItemName)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item name to be displayed on the menu."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem WithIcon(Texture2D icon)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item icon."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"toggle",children:"Toggle"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem Toggle(AacFlBoolParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Toggle for a Bool parameter."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ToggleBoolToFloat(AacFlFloatParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Toggle for a Bool parameter, which is exposed as a Float in the animator."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ToggleSets(AacFlIntParameter parameter, int value)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Toggle for a Int parameter, setting the value when toggled."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ToggleSets(AacFlFloatParameter parameter, float value)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Toggle for a Float parameter, setting the value when toggled."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ToggleForcesBoolToFalse(AacFlBoolParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Toggle for a Bool parameter. However, when toggled, the value of the bool will be forced to false. Toggling will never set the value to true."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"button",children:"Button"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem Button(AacFlBoolParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Button for a Bool parameter."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ButtonBoolToFloat(AacFlFloatParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Button for a Bool parameter, which is exposed as a Float in the animator."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ButtonSets(AacFlIntParameter parameter, int value)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Button for a Int parameter, setting the value when pressed."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ButtonSets(AacFlFloatParameter parameter, float value)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Button for a Float parameter, setting the value when pressed."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem ButtonForcesBoolToFalse(AacFlBoolParameter parameter)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Button for a Bool parameter. However, when pressed, the value of the bool will be forced to false. Pressing will never set the value to true."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"radial",children:"Radial"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"MaacMenuItem Radial(AacFlFloatParameter floatParam)"})," ",(0,t.jsx)("br",{}),"\nSet the menu item type as Radial for a Float parameter."]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);