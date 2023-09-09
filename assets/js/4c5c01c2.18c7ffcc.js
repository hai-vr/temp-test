"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8426],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return i?n.createElement(d,o(o({ref:t},m),{},{components:i})):n.createElement(d,o({ref:t},m))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},198:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={},o="Animation Viewer",l={unversionedId:"animation-viewer",id:"animation-viewer",title:"Animation Viewer",description:"Animation Viewer lets you preview animations in the Project view browser.",source:"@site/docs/animation-viewer.md",sourceDirName:".",slug:"/animation-viewer",permalink:"/temp-test/docs/animation-viewer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-viewer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"All products",permalink:"/temp-test/docs/intro"},next:{title:"Animator As Code",permalink:"/temp-test/docs/animator-as-code/"}},s={},c=[{value:"Download",id:"download",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2},{value:"Having issues? Join my Discord Server",id:"having-issues-join-my-discord-server",level:2},{value:"Check out my other tool \u201cBlendshape Viewer\u201d",id:"check-out-my-other-tool-blendshape-viewer",level:2},{value:"Additional notes",id:"additional-notes",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animation-viewer"},"Animation Viewer"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Animation Viewer")," lets you preview animations in the Project view browser."),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:i(2120).Z},"sx_2022-02-02_03-27-39_uYmmptha2T.mp4")),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"The tool is free for download on GitHub (in the same repository as Blendshape Viewer)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hai-vr/blendshape-viewer"},"https://github.com/hai-vr/blendshape-viewer")),(0,a.kt)("p",null,"It is also available on Booth.pm:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hai-vr.booth.pm/items/3625699"},"Animation Viewer - hai-vr - BOOTH")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select your Animator. In the inspector, click the three dots, and select \u201cHa\xef AnimationViewer\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(5150).Z,width:"586",height:"524"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Move the camera in the scene, and hover your cursor over the Project view to refresh the pictures."),(0,a.kt)("li",{parentName:"ul"},"When the Animation Viewer is activated, the performance of the editor will be impacted. Click \u201cActivate Viewer\u201d to toggle it on/off. The button is red when it is active.")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Animator"),": The animator to use as a preview base.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(347).Z,width:"388",height:"20"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auto Update On Focus"),": If you change the scene camera position, hovering your cursor over the Project view window will refresh the pictures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Updates"),": If you change the scene camera position, it will immediately refresh the pictures. This will lead to a dramatic slow down of the editor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update Speed"),": Specifies the number of animations files to update per batch.\nA lower value such as 5 causes the Project view to update 5 thumbnails per update tick, which will result in slower load times but less hitches in folders that contain a lot of animation files.\nA higher value like 20 causes the Project view to update 20 thumbnails per update tick, which will result in faster load times but more hitches in folders that contain a lot of animation files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Thumbnail Size"),": Change the thumbnail size of the Project view. This can be larger than the Project view allows (Unity\u2019s maximum value is normally 96).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(8793).Z,width:"642",height:"197"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(643).Z,width:"1213",height:"473"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Activate Viewer button"),": Click to enable the previews.\nWhen the Animation Viewer is activated, the performance of the editor will be impacted. Click \u201cActivate Viewer\u201d to toggle it on/off. The button is red when it is active.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(8202).Z,width:"387",height:"22"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update button"),": Click to refresh the pictures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Force button"),": Click to refresh the pictures, additionally clearing the thumbnail cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced/Focused Bone"),": When animations are playing, the animator\u2019s muscles will move.\nThis option specifies on which bone to attach the camera. By default, it is focusing on the Head bone."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced/Normalized Time"),": The normalized time at which the animation will be sampled. By default, the first frame of the animation will be sampled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced/Base Pose"),": Animator pose to use before the animation is applied.\nThis lets you preview the avatar in a different pose than the bicycle pose (see Additional notes below)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced/Update On Activate"),": When this is turned off, the thumbnails will not refresh when pressing Activate Viewer. This can let you toggle the thumbnail on and off and keep the same thumbnails after having moved the Scene view around.")),(0,a.kt)("h2",{id:"having-issues-join-my-discord-server"},"Having issues? Join my Discord Server"),(0,a.kt)("p",null,"I will try to provide help on the #main channel when I can."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/58fWAUTYF8"},"Join the Invitation Discord Server!")),(0,a.kt)("h2",{id:"check-out-my-other-tool-blendshape-viewer"},"Check out my other tool \u201cBlendshape Viewer\u201d"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.notion.so/Blendshape-Viewer-d9e139664ff74677ad004b6f7cf9b1a7?pvs=21"},"Blendshape Viewer"))," lets you visually browse blendshapes."),(0,a.kt)("p",null,"It\u2019s also free! ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Blendshape-Viewer-d9e139664ff74677ad004b6f7cf9b1a7?pvs=21"},"Blendshape Viewer")," "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(4641).Z,width:"668",height:"640"})),(0,a.kt)("h2",{id:"additional-notes"},"Additional notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remember you can change the field of view of the scene camera.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:i(4161).Z,width:"646",height:"290"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Advanced/Base Pose")," to specify an animation that applies before the animation is previewed.\nThis can be used to choose a pose to preview clothing toggle animations.\nThis can also be used to hide hats and other objects, letting you generate more relevant previews.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[sx_2022-02-02_03-05-20_QdOYmOWyly.mp4](animation-viewer-img/sx_2022-02-02_03-05-20_QdOYmOWyly.mp4)\n")))))}p.isMDXComponent=!0},2120:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/sx_2022-02-02_03-27-39_uYmmptha2T-c9d687806c4d15c9a8b5bf8a51a44b9a.mp4"},347:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8793:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Untitled 2-2666b6f9ee09c03b12618e548c32d37c.png"},643:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Untitled 3-d9528128e35e529c070b48b20dd9b9dc.png"},8202:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4641:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Untitled 5-db5f8391dcac6b9548297c2137bd39cc.png"},4161:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Untitled 6-74c4dbc2ae0571e5c3606993e7f819c6.png"},5150:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Untitled-876c6448e18b9dac248079de623c258a.png"}}]);