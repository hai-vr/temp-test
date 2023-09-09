"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Animator As Code",s={unversionedId:"animator-as-code/index",id:"animator-as-code/index",title:"Animator As Code",description:"Animator As Code is a small Unity Editor facility to generate Avatars 3.0 Animator layers and animations from a fluent builder syntax written in C#.",source:"@site/docs/animator-as-code/index.md",sourceDirName:"animator-as-code",slug:"/animator-as-code/",permalink:"/temp-test/docs/animator-as-code/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animator-as-code/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Animation Viewer",permalink:"/temp-test/docs/animation-viewer"},next:{title:"Examples",permalink:"/temp-test/docs/animator-as-code/examples"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"animator-as-code"},"Animator As Code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Animator As Code")," is a small Unity Editor facility to generate Avatars 3.0 Animator layers and animations from a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fluent_interface"},"fluent builder")," syntax written in C#."),(0,o.kt)("p",null,"Describing your animators as code provides the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you do not need to edit your animations by hand every time you add remove or change the location of a component in your hierarchy"),(0,o.kt)("li",{parentName:"ul"},"you will not need to edit a hundred transitions by hand if you need to rectify your animator")),(0,o.kt)("p",null,"It is written with VRChat Avatars 3.0 use cases in mind; the API is opinionated to facilitate writing such animators in a concise way, hopefully requiring as little additional tweaking."),(0,o.kt)("video",{controls:!0,width:"816",autostart:"false"},(0,o.kt)("source",{src:"https://user-images.githubusercontent.com/60819407/157751278-475538c7-3310-4fa5-9a87-3651c85eaa1c.mp4"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"AnimatorAsCode does not require VRChat unless you use VRChat-specific functions.")),(0,o.kt)("h1",{id:"interested-join-my-discord-server"},"Interested? Join my Discord Server"),(0,o.kt)("p",null,"This is a work in progress, I am looking for feedback!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/58fWAUTYF8"},"Join the Invitation Discord Server!")),(0,o.kt)("h1",{id:"install"},"Install"),(0,o.kt)("p",null,"There are currently no releases."),(0,o.kt)("p",null,"Clone the repository within a subfolder of your Unity project, or download the source code and install in any subfolder of your project."),(0,o.kt)("p",null,"The project can be located within ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/AnimatorAsCodeFramework")," but you can choose any location."))}p.isMDXComponent=!0}}]);