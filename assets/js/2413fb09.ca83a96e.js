"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Property Finder"},i=void 0,p={unversionedId:"products/property-finder",id:"products/property-finder",title:"Property Finder",description:"Property Finder lets you view the animatable properties of an object.",source:"@site/docs/products/property-finder.md",sourceDirName:"products",slug:"/products/property-finder",permalink:"/docs/products/property-finder",draft:!1,tags:[],version:"current",frontMatter:{title:"Property Finder"},sidebar:"tutorialSidebar",previous:{title:"Lightbox Viewer",permalink:"/docs/products/lightbox-viewer"},next:{title:"\u2b50 VeryHa\xef",permalink:"/docs/products/very-h/"}},l={},s=[{value:"Download",id:"download",level:2},{value:"How to use",id:"how-to-use",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Property Finder")," lets you view the animatable properties of an object."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This does not require VRChat to run. It has been tested to work on Unity 2019, and should work on newer versions.")),(0,o.kt)("video",{controls:!0,autoplay:!0,muted:!0},(0,o.kt)("source",{src:r(6178).Z})),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"The tool is free for download."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hai-vr/miscellaneous-gist/releases/tag/PropertyFinder-V1.0.0"},"hai-vr/miscellaneous-gist/releases/tag/PropertyFinder-V1.0.0"),")"),(0,o.kt)("li",{parentName:"ul"},"gist (",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/hai-vr/1cbb8fa4eb4b8f349e5c995eeeb9020d"},"gist.github.com/hai-vr/1cbb8fa4eb4b8f349e5c995eeeb9020d"),")")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"To begin, choose an object, and click the three vertical dots ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," next to the Transform component, and select ",(0,o.kt)("em",{parentName:"p"},"Ha\xef Property Finder"),"."),(0,o.kt)("p",null,"You can also open it through ",(0,o.kt)("em",{parentName:"p"},"Window > Ha\xef > PropertyFinder"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"property-finder-location.png",src:r(1829).Z,width:"565",height:"398"})),(0,o.kt)("p",null,"Drag and drop the object to inspect in the ",(0,o.kt)("em",{parentName:"p"},"Target Object")," field."),(0,o.kt)("p",null,"Filter the results further by adding search terms. You can separate search terms with a space, so the search query ",(0,o.kt)("inlineCode",{parentName:"p"},"color rim")," can find results such as ",(0,o.kt)("inlineCode",{parentName:"p"},"material._RimLitTexColor"),"."))}d.isMDXComponent=!0},6178:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/medias/sx_2022-05-19_23-47-37_jKkVpl9QvX-e1780095d17354cac0627ec7059d8287.mp4"},1829:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/property-finder-location-090ad786b97e1b77515b1937c2766b60.png"}}]);