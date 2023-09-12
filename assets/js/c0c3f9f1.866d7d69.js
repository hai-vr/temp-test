"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6089],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9565:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Cloth Transfer",l={unversionedId:"products/cloth-transfer",id:"products/cloth-transfer",title:"Cloth Transfer",description:"Cloth Transfer is a Unity Editor tool that lets you transfer cloth constraints of a mesh from a Unity 2018 project into a Unity 2019 project.",source:"@site/docs/products/cloth-transfer.md",sourceDirName:"products",slug:"/products/cloth-transfer",permalink:"/docs/products/cloth-transfer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blendshape Viewer",permalink:"/docs/products/blendshape-viewer"},next:{title:"ComboGestureExpressions",permalink:"/docs/products/combo-gesture-expressions/"}},s={},p=[{value:"Download",id:"download",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Error tolerance: <em>Allow inexact</em>",id:"error-tolerance-allow-inexact",level:2},{value:"Additional notes",id:"additional-notes",level:2}],c={toc:p},m="wrapper";function h(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloth-transfer"},"Cloth Transfer"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Cloth Transfer")," is a Unity Editor tool that lets you transfer cloth constraints of a mesh from a Unity 2018 project into a Unity 2019 project."),(0,a.kt)("p",null,"It was created mainly to assist migration from Unity 2018 to Unity 2019 in the VRChat social platform."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This does not require VRChat to run. It has been tested to work on Unity 2018, Unity 2019, Unity 2022.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/illustration.gif",alt:null})),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"The tool is free for download."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/releases"},"hai-vr/unity-2018-2019-cloth-transfer/releases"),")"),(0,a.kt)("li",{parentName:"ul"},"Booth (",(0,a.kt)("a",{parentName:"li",href:"https://booth.pm/en/items/3136328"},"Cloth Transfer - hai-vr - BOOTH"),")")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"You need to have two projects, the first in ",(0,a.kt)("strong",{parentName:"p"},"Unity 2018"),", the other in ",(0,a.kt)("strong",{parentName:"p"},"Unity 2019")," or above."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Cloth")," component must be enabled and visible in the scene. Please make sure that the ",(0,a.kt)("em",{parentName:"p"},"GameObject")," and its parents are enabled in the hierarchy, and that the ",(0,a.kt)("em",{parentName:"p"},"Cloth")," component is enabled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1) First, in ",(0,a.kt)("strong",{parentName:"p"},"Unity 2018"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1.1) Install ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer"),"."),(0,a.kt)("li",{parentName:"ul"},"1.2) Select your ",(0,a.kt)("em",{parentName:"li"},"Cloth")," component."),(0,a.kt)("li",{parentName:"ul"},"1.3) Click on the cog on the top right of the component and select ",(0,a.kt)("em",{parentName:"li"},"Ha\xef Cloth Transfer"),".\n",(0,a.kt)("img",{parentName:"li",src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/ct1.png",alt:null}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Warning:")," If you do not see this menu item, make sure your project does not have compile errors. If your project does have compile errors, ",(0,a.kt)("strong",{parentName:"li"},"it is very important that you do NOT delete the VRChat SDK"),"! Use a backup of your project, or create a new Unity 2018 project and copy the minimum necessary over to proceed."))),(0,a.kt)("li",{parentName:"ul"},"1.4) In the ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," window, click ",(0,a.kt)("em",{parentName:"li"},"Save cloth data")," button, and choose a location to save the asset."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2) Then, in ",(0,a.kt)("strong",{parentName:"p"},"Unity 2019"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2.1) Install ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer"),"."),(0,a.kt)("li",{parentName:"ul"},"2.2) Copy the asset that you saved earlier from ",(0,a.kt)("strong",{parentName:"li"},"Unity 2018")," to ",(0,a.kt)("strong",{parentName:"li"},"Unity 2019")," (in step 1.4)"),(0,a.kt)("li",{parentName:"ul"},"2.3) Select your ",(0,a.kt)("em",{parentName:"li"},"Cloth")," component."),(0,a.kt)("li",{parentName:"ul"},"2.4) Click on the three dots on the top right of the component and select ",(0,a.kt)("em",{parentName:"li"},"Ha\xef Cloth Transfer"),".\n",(0,a.kt)("img",{parentName:"li",src:"https://github.com/hai-vr/unity-2018-2019-cloth-transfer/raw/z-res-pictures/Documentation/ct2.png",alt:null})),(0,a.kt)("li",{parentName:"ul"},"2.5) In the ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," window, select the copied asset in the ",(0,a.kt)("em",{parentName:"li"},"Data")," field."),(0,a.kt)("li",{parentName:"ul"},"2.6) In the ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," window, click on ",(0,a.kt)("em",{parentName:"li"},"Load cloth data")," button.")))),(0,a.kt)("h2",{id:"error-tolerance-allow-inexact"},"Error tolerance: ",(0,a.kt)("em",{parentName:"h2"},"Allow inexact")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Cloth Transfer")," uses the exact vertex positions to transfer weights. You must use the same mesh, with mesh compression setting set to ",(0,a.kt)("em",{parentName:"p"},"Off"),"."),(0,a.kt)("p",null,"Despite this, if the vertex positions end up being different, you can choose to tick the ",(0,a.kt)("em",{parentName:"p"},"Allow inexact")," checkbox as a last resort. It will copy the data of the closest vertex whenever it cannot find an exact vertex."),(0,a.kt)("p",null,"When using ",(0,a.kt)("em",{parentName:"p"},"Allow inexact"),", please check that you are copying the data of the correct cloth, and not the data of another cloth by accident!"),(0,a.kt)("h2",{id:"additional-notes"},"Additional notes"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Cloth Transfer")," was built specifically to handle cloth constraint migration between Unity 2018 and Unity 2019. ",(0,a.kt)("strong",{parentName:"p"},"It assumes the mesh is identical.")," If you want to update the mesh data itself after migrating, ",(0,a.kt)("em",{parentName:"p"},"Cloth Transfer")," might work using the ",(0,a.kt)("em",{parentName:"p"},"Allow inexact")," option; otherwise you can use another tool like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Taremin/CopyComponentsByRegex"},"CopyComponentsByRegex by Taremin"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," only copies the cloth constraints. It does not copy the other data of the cloth component itself."),(0,a.kt)("li",{parentName:"ul"},"Transferring from Unity 2019 back to Unity 2018 is possible by expanding the ",(0,a.kt)("em",{parentName:"li"},"Other")," section at the bottom of the ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," window.\nBy default, ",(0,a.kt)("em",{parentName:"li"},"Cloth Transfer")," will suggest saving data in an Unity 2018 project, and loading data in a Unity 2019 project or above.")))}h.isMDXComponent=!0}}]);