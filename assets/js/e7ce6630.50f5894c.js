"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5668,4353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(y,s(s({ref:t},p),{},{components:a})):r.createElement(y,s({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},276:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var r=a(7462),n=a(7294),o=a(3905),s=a(6010),i=a(9960);const c={gallery_card_image:"gallery_card_image_t0wh",gallery_card_overall:"gallery_card_overall_SqE_"};function l(e){let{name:t,image:a,url:r,urlTS:o,children:l}=e;return n.createElement("div",{className:"col col--4 margin-bottom--lg"},n.createElement("div",{className:(0,s.Z)("card",c.gallery_card_overall)},n.createElement("div",{className:(0,s.Z)("card__image",c.gallery_card_image)},n.createElement(i.Z,{to:r},n.createElement("img",{src:a}))),n.createElement("div",{className:"card__body"},n.createElement("h3",null,n.createElement(i.Z,{to:r},t)),n.createElement("p",null,l))))}const p={},m=void 0,d={type:"mdx",permalink:"/gallery",source:"@site/src/pages/gallery.mdx",frontMatter:{}},u=[],y={toc:u},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"row"},(0,o.kt)(l,{name:"ResilienceVR",image:a(4781).Z,url:"/docs/resilience",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ResilienceVR")," is a standalone social VR app which focuses on experimentation and intimacy.")),(0,o.kt)(l,{name:"Double Hip Tracker",image:a(423).Z,url:"/docs/products/double-hip-tracker",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Double Hip Tracker")," lets you use two hip trackers on VRChat. If one loses tracking, the other is used instead.")),(0,o.kt)(l,{name:"VeryHa\xef",image:a(567).Z,url:"/docs/products/very-h",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"VeryHa\xef")," is an application that communicates with OSC, OpenVR, and haptic devices, for various uses.")),(0,o.kt)(l,{name:"Lightbox Viewer",image:a(8664).Z,url:"/docs/products/lightbox-viewer",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Lightbox Viewer")," lets you simultaneously visualize changes in shader material settings under different lighting conditions.")),(0,o.kt)(l,{name:"Animation Viewer",image:a(5754).Z,url:"/docs/products/animation-viewer",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Animation Viewer")," lets you preview animations in the Project view browser.")),(0,o.kt)(l,{name:"Blendshape Viewer",image:a(4830).Z,url:"/docs/products/blendshape-viewer",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Blendshape Viewer")," lets you visually browse blendshapes.")),(0,o.kt)(l,{name:"Property Finder",image:a(3668).Z,url:"/docs/products/property-finder",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Property Finder")," lets you view the animatable properties of an object.")),(0,o.kt)(l,{name:"ComboGestureExpressions",image:a(1468).Z,url:"/docs/products/combo-gesture-expressions",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ComboGestureExpressions")," lets you attach face expressions to hand gestures, and make it react to other Avatars 3.0 features.")),(0,o.kt)(l,{name:"Constraint Track Animation Creator",image:a(1144).Z,url:"/docs/products/constraint-track-animation-creator",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Constraint Track Animation Creator")," lets you animate an object to slide along a track using constraints.")),(0,o.kt)(l,{name:"Expressions Menu Hierarchy Editor",image:a(6974).Z,url:"/docs/products/expressions-menu-hierarchy-editor",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Expressions Menu Hierarchy Editor")," lets you edit Avatars 3.0 menus as if they were objects in your scene hierarchy.")),(0,o.kt)(l,{name:"IconGen",image:a(8821).Z,url:"/docs/products/icon-gen",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"IconGen")," lets you capture icons and generate icons.")),(0,o.kt)(l,{name:"Visual Expressions Editor",image:a(638).Z,url:"/docs/products/visual-expressions-editor",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Visual Expressions Editor")," lets you edit face expression animations.")),(0,o.kt)(l,{name:"Animator As Code",image:a(7335).Z,url:"/docs/products/animator-as-code",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Animator As Code")," is a Unity Editor API to generate Avatars 3.0 Animator layers and animations from a fluent builder syntax written in C#.")),(0,o.kt)(l,{name:"Modular Avatar As Code",image:a(3867).Z,url:"/docs/products/animator-as-code/functions/modular-avatar",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Modular Avatar As Code")," contains facilities to automate the creation of Modular Avatar components using Animator As Code.")),(0,o.kt)(l,{name:"Cloth Transfer",image:a(1261).Z,url:"/docs/products/cloth-transfer",mdxType:"GalleryItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cloth Transfer")," lets you transfer cloth constraints across incompatible Unity versions."))))}g.isMDXComponent=!0},6833:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),o=a(6010),s=a(276);const i={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"},c={title:"All products \ud83d\uddd2\ufe0f",sidebar_position:1,hide_table_of_contents:!0,hide_title:!0,description:"Documentation and gallery of Ha\xef's tools and apps"},l=void 0,p={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx",title:"All products \ud83d\uddd2\ufe0f",description:"Documentation and gallery of Ha\xef's tools and apps",frontMatter:{title:"All products \ud83d\uddd2\ufe0f",sidebar_position:1,hide_table_of_contents:!0,hide_title:!0,description:"Documentation and gallery of Ha\xef's tools and apps"}},m=[],d={toc:m},u="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",{className:(0,o.Z)("hero hero--primary",i.heroBanner)},(0,n.kt)("div",{className:"container"},(0,n.kt)("h1",{className:"hero__title"},"Ha\xef~"),(0,n.kt)("p",{className:"hero__subtitle"},"Tools and apps for VR"))),(0,n.kt)("br",null),(0,n.kt)(s.default,{mdxType:"Gallery"}))}y.isMDXComponent=!0},5754:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/animation-viewer-30e58a1effe5ecf97536d14e7bea09cb.png"},7335:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/animator-as-code-8583c7a1a2997fcaf5e1a42488956a35.jpg"},4830:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blendshape-viewer-db5f8391dcac6b9548297c2137bd39cc.png"},1261:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloth-transfer-4c65000dcfd643c8f81f7bf578113245.png"},1468:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/combo-gesture-expressions-9197a02790f5631d1d426828aba1161b.png"},1144:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/constraint-track-animation-creator-3d78c4c4bd8a5455acbfd4e0e3642a21.png"},423:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/double-hip-tracker-d90789ec73d481489381f17b7bab08fd.png"},6974:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/expressions-menu-hierarchy-editor-23411d8e9ee616421a650cfacea4adcc.png"},8821:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/icon-gen-84c2ce124135bcc160f5f405e0796f20.png"},8664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lightbox-viewer-a1d7cb083721a58f4ecf595a9f8ab5af.png"},3867:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/modular-avatar-as-code-d9aae3d91536ecf91171484150dfa1d0.png"},3668:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/property-finder-c2596bde6fd67a58563e43835c16faa6.png"},4781:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/resilience-temp-d543b4b2992f4ef0dc6c86af54f25ee0.png"},567:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/very-h-273c3ca08c4b763d4c03d11556f58308.png"},638:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/visual-expressions-editor-12a53e5271cd8f536ae0e9365f4c51c6.png"}}]);