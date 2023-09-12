"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8961],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),s=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(m.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,k=p["".concat(m,".").concat(d)]||p[d]||c[d]||l;return t?r.createElement(k,o(o({ref:a},u),{},{components:t})):r.createElement(k,o({ref:a},u))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1218:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const l={sidebar_position:7,title:"Modular Avatar"},o="Functions: Modular Avatar",i={unversionedId:"products/animator-as-code/functions/modular-avatar",id:"products/animator-as-code/functions/modular-avatar",title:"Modular Avatar",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/functions/modular-avatar.md",sourceDirName:"products/animator-as-code/functions",slug:"/products/animator-as-code/functions/modular-avatar",permalink:"/documentation/docs/products/animator-as-code/functions/modular-avatar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/products/animator-as-code/functions/modular-avatar.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Modular Avatar"},sidebar:"tutorialSidebar",previous:{title:"VRChat (Destructive workflow)",permalink:"/documentation/docs/products/animator-as-code/functions/vrchat-destructive"},next:{title:"Non-destructive workflow examples",permalink:"/documentation/docs/products/animator-as-code/examples-maac"}},m={},s=[{value:"Component creation overview",id:"component-creation-overview",level:4},{value:"Modular Avatar As Code (MaAc)",id:"modular-avatar-as-code-maac",level:2},{value:"Base (MaAc)",id:"base-maac",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Parameter groups",id:"parameter-groups",level:4},{value:"Merge Animator",id:"merge-animator",level:4},{value:"Menu items",id:"menu-items",level:4},{value:"Parameter (MaacParameter&lt;T&gt;)",id:"parameter-maacparametert",level:2},{value:"Menu item (MaacMenuItem)",id:"menu-item-maacmenuitem",level:2},{value:"Toggle",id:"toggle",level:4},{value:"Button",id:"button",level:4},{value:"Radial",id:"radial",level:4}],u={toc:s},p="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"functions-modular-avatar"},"Functions: Modular Avatar"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This is the work-in-progress documentation for Animator As Code ",(0,n.kt)("strong",{parentName:"p"},"V1"),", which has not yet been released. The last public version of Animator As Code is V0.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The API contract for Modular Avatar As Code V1 is highly unstable. Use at your own risk.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Modular Avatar As Code")," contains facilities to automate the creation of ",(0,n.kt)("a",{parentName:"p",href:"https://modular-avatar.nadena.dev/"},"Modular Avatar")," components."),(0,n.kt)("p",null,"The functionality of this library is strictly limited to the handling of animators and parameters, therefore only the following components are covered:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://modular-avatar.nadena.dev/docs/reference/merge-animator"},"MA Merge Animator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://modular-avatar.nadena.dev/docs/reference/parameters"},"MA Parameters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://modular-avatar.nadena.dev/docs/reference/menu-item"},"MA Menu Item"))),(0,n.kt)("p",null,"For other components, you need to create them by hand."),(0,n.kt)("p",null,"To use the Modular Avatar As Code functions, add ",(0,n.kt)("inlineCode",{parentName:"p"},"using ModularAvatarAsCode.V1;")," to your class imports."),(0,n.kt)("h4",{id:"component-creation-overview"},"Component creation overview"),(0,n.kt)("mermaid",{value:"graph TD;\n    MaAcStatic[static MaAc]:::roots--\x3e|Create|MaAc:::roots;\n    MaAc--\x3e|On|MaAc;\n    MaAc--\x3e|NewParameter|MaacParameter;\n    MaAc--\x3e|EditMenuItemOnSelf<br>/EditMenuItem|MaacMenuItem ;\n    \n    classDef disabled fill:#CCC\n    classDef roots fill:#FCC\n    classDef focus fill:#CFF"}),(0,n.kt)("h2",{id:"modular-avatar-as-code-maac"},"Modular Avatar As Code (MaAc)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"static MaAc Create(GameObject root, bool setDirty = true)")," ",(0,n.kt)("br",null),"\nCreate a Modular Avatar As Code base, targeting the root object. The root object is the object that you will attach the Merge Armature component to.")),(0,n.kt)("h2",{id:"base-maac"},"Base (MaAc)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MaAc On(GameObject otherRoot)")," ",(0,n.kt)("br",null),'\nCreate a new instance of MaAc targeting another object. Beware that this new instance of MaAc forgets all previous method invocations, so invoking some stateful functions like "NewMergeAnimator" may cause different results.')),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaAc ImportParameters(VRCExpressionParameters parameters)")," ",(0,n.kt)("br",null),"\nImport parameters from an existing VRCExpressionParameters asset.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<float> NewParameter(MaacParameterType parameterType, string parameter)")," ",(0,n.kt)("br",null),"\nDeclare a new parameter of the given type. If you use Animator As Code, you can reuse the parameters using the other ",(0,n.kt)("inlineCode",{parentName:"p"},"NewParameter")," method overloads or the ",(0,n.kt)("inlineCode",{parentName:"p"},"NewBoolToFloatParameter")," method. Function calls on the resulting objects will affect all parameters of that group.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<float> NewParameter(AacFlFloatParameter aacParameter)")," ",(0,n.kt)("br",null),"\nDeclare a new Float parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<int> NewParameter(AacFlIntParameter aacParameter)")," ",(0,n.kt)("br",null),"\nDeclare a new Int parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<bool> NewParameter(AacFlBoolParameter aacParameter)")," ",(0,n.kt)("br",null),"\nDeclare a new Bool parameter, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<bool> NewBoolToFloatParameter(AacFlFloatParameter aacParameter)")," ",(0,n.kt)("br",null),"\nDeclare a new Bool parameter, acknowledging that the animator has exposed it as a Float. By default it is saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist."))),(0,n.kt)("h4",{id:"parameter-groups"},"Parameter groups"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<float> NewParameter(MaacParameterType parameterType, params string[] parametersWithNulls)")," ",(0,n.kt)("br",null),"\nDeclare new parameters of the given type. If you use Animator As Code, you can reuse the parameters using the other ",(0,n.kt)("inlineCode",{parentName:"p"},"NewParameter")," method overloads or the ",(0,n.kt)("inlineCode",{parentName:"p"},"NewBoolToFloatParameter")," method. The array can safely contain null values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<float> NewParameter(AacFlFloatParameterGroup aacParameterGroup)")," ",(0,n.kt)("br",null),"\nDeclare new Float parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<int> NewParameter(AacFlIntParameterGroup aacParameterGroup)")," ",(0,n.kt)("br",null),"\nDeclare new Int parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<bool> NewParameter(AacFlBoolParameterGroup aacParameterGroup)")," ",(0,n.kt)("br",null),"\nDeclare new Bool parameters, by default saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<bool> NewBoolToFloatParameter(AacFlFloatParameterGroup aacParameterGroup)")," ",(0,n.kt)("br",null),"\nDeclare new Bool parameters, acknowledging that the animator has exposed them as Floats. By default it is saved and synced. This creates a ModularAvatarParameters on the targeted object if it doesn't already exist. Function calls on the resulting objects will affect all parameters of that group."))),(0,n.kt)("h4",{id:"merge-animator"},"Merge Animator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ModularAvatarMergeAnimator NewMergeAnimator(AacFlController controller, VRCAvatarDescriptor.AnimLayerType layerType)")," ",(0,n.kt)("br",null),"\nDeclare a new animator to be merged. Every call to NewMergeAnimator will create a new ModularAvatarMergeAnimator, as long as this instance of MaAc is reused.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ModularAvatarMergeAnimator NewMergeAnimator(AnimatorController animator, VRCAvatarDescriptor.AnimLayerType layerType)")," ",(0,n.kt)("br",null),"\nDeclare a new raw animator to be merged. Every call to NewMergeAnimator will create a new ModularAvatarMergeAnimator, as long as this instance of MaAc is reused."))),(0,n.kt)("h4",{id:"menu-items"},"Menu items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem EditMenuItemOnSelf()")," ",(0,n.kt)("br",null),"\nEdit one menu item on this object. It is not possible to declare multiple menu items on the same object.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem EditMenuItem(GameObject receiver)")," ",(0,n.kt)("br",null),"\nEdit one menu item on the receiver object. It is not possible to declare multiple menu items on that same object.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem EditMenuItem(params GameObject[] receiversWithNulls)")," ",(0,n.kt)("br",null),"\nEdit one menu item on all of the receiver objects. It is not possible to declare multiple menu items on those same objects. Function calls on the resulting objects will affect all parameters of that group. Use this in case you have multiple identical menu items scattered across different menus. The array can safely contain null values."))),(0,n.kt)("h2",{id:"parameter-maacparametert"},"Parameter (MaacParameter<T",">",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<T> NotSynced()")," ",(0,n.kt)("br",null),"\nMark this parameter as not synced. By default, newly created parameters are synced.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<T> NotSaved()")," ",(0,n.kt)("br",null),"\nMark this parameter as not saved. By default, newly created parameters are saved.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacParameter<T> WithDefaultValue(T value)")," ",(0,n.kt)("br",null),"\nSet the default value of this parameter. No errors are raised if you try to set values outside legal range."))),(0,n.kt)("h2",{id:"menu-item-maacmenuitem"},"Menu item (MaacMenuItem)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem Name(string menuItemName)")," ",(0,n.kt)("br",null),"\nSet the menu item name to be displayed on the menu.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem WithIcon(Texture2D icon)")," ",(0,n.kt)("br",null),"\nSet the menu item icon."))),(0,n.kt)("h4",{id:"toggle"},"Toggle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem Toggle(AacFlBoolParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Toggle for a Bool parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ToggleBoolToFloat(AacFlFloatParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Toggle for a Bool parameter, which is exposed as a Float in the animator.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ToggleSets(AacFlIntParameter parameter, int value)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Toggle for a Int parameter, setting the value when toggled.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ToggleSets(AacFlFloatParameter parameter, float value)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Toggle for a Float parameter, setting the value when toggled.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ToggleForcesBoolToFalse(AacFlBoolParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Toggle for a Bool parameter. However, when toggled, the value of the bool will be forced to false. Toggling will never set the value to true."))),(0,n.kt)("h4",{id:"button"},"Button"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem Button(AacFlBoolParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Button for a Bool parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ButtonBoolToFloat(AacFlFloatParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Button for a Bool parameter, which is exposed as a Float in the animator.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ButtonSets(AacFlIntParameter parameter, int value)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Button for a Int parameter, setting the value when pressed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ButtonSets(AacFlFloatParameter parameter, float value)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Button for a Float parameter, setting the value when pressed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MaacMenuItem ButtonForcesBoolToFalse(AacFlBoolParameter parameter)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Button for a Bool parameter. However, when pressed, the value of the bool will be forced to false. Pressing will never set the value to true."))),(0,n.kt)("h4",{id:"radial"},"Radial"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MaacMenuItem Radial(AacFlFloatParameter floatParam)")," ",(0,n.kt)("br",null),"\nSet the menu item type as Radial for a Float parameter.")))}c.isMDXComponent=!0}}]);