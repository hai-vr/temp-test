"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={title:"\u2b50 Double Hip Tracker"},i="Double Hip Tracker",s={unversionedId:"products/double-hip-tracker/index",id:"products/double-hip-tracker/index",title:"\u2b50 Double Hip Tracker",description:"Double Hip Tracker lets you use two hip trackers on VRChat.",source:"@site/docs/products/double-hip-tracker/index.md",sourceDirName:"products/double-hip-tracker",slug:"/products/double-hip-tracker/",permalink:"/docs/products/double-hip-tracker/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u2b50 Double Hip Tracker"},sidebar:"tutorialSidebar",previous:{title:"Reference manual",permalink:"/docs/products/constraint-track-animation-creator/reference"},next:{title:"Double Chest Tracker",permalink:"/docs/products/double-hip-tracker/double-chest-tracker"}},l={},u=[{value:"Download \u2b50",id:"download-",level:2},{value:"<strong>Installation instructions</strong>",id:"installation-instructions",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Other info",id:"other-info",level:2},{value:"Optional: Double Chest Tracker",id:"optional-double-chest-tracker",level:2},{value:"What counts as a loss of tracking?",id:"what-counts-as-a-loss-of-tracking",level:3},{value:"Can it be used alongside IMU-based trackers/pose estimators?",id:"can-it-be-used-alongside-imu-based-trackerspose-estimators",level:3},{value:"Does it run on Unity?",id:"does-it-run-on-unity",level:3},{value:"Third party acknowledgements",id:"third-party-acknowledgements",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"double-hip-tracker"},"Double Hip Tracker"),(0,o.kt)("p",null,"Double Hip Tracker lets you use two hip trackers on VRChat."),(0,o.kt)("p",null,"When one of the trackers temporarily loses tracking, the other one is used instead."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This tool requires VRChat, because it uses VRChat\u2019s OSC trackers. It is not compatible with other VR applications.")),(0,o.kt)("h2",{id:"download-"},"Download \u2b50"),(0,o.kt)("p",null,"Double Hip Tracker is currently available to Patreon supporters at any tier (",(0,o.kt)("a",{parentName:"p",href:"https://www.patreon.com/vr_hai"},"https://www.patreon.com/vr_hai"),")."),(0,o.kt)("h2",{id:"installation-instructions"},(0,o.kt)("strong",{parentName:"h2"},"Installation instructions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If you don\'t have it already, download .NET 7.0 Runtime "Run console apps" ',(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/7.0/runtime"},"https://dotnet.microsoft.com/en-us/download/dotnet/7.0/runtime")),(0,o.kt)("li",{parentName:"ul"},"Download the application on Patreon")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start SteamVR"),(0,o.kt)("li",{parentName:"ul"},"Start ",(0,o.kt)("inlineCode",{parentName:"li"},"double-hip-tracker.exe")),(0,o.kt)("li",{parentName:"ul"},"Wear your double hip tracker; ideally the trackers should be on opposite sides of the belt, but they don't have to"),(0,o.kt)("li",{parentName:"ul"},"Shake your hips for 2 seconds and the OSC tracker should appear"),(0,o.kt)("li",{parentName:"ul"},"In VRChat, click Calibrate ")),(0,o.kt)("h2",{id:"other-info"},"Other info"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must enable OSC in VRChat, Settings > Avatars > OSC"),(0,o.kt)("li",{parentName:"ul"},"In VRChat, Settings > Tracking and IK, make sure you lower the calibration radius so that the double hip trackers don't try to bind themselves as being a chest tracker"),(0,o.kt)("li",{parentName:"ul"},'If you need to readjust your tracking belt because some of your trackers have moved, you may need to click the "Realign trackers" button on the window, and maybe recalibrate in VRChat')),(0,o.kt)("h2",{id:"optional-double-chest-tracker"},"Optional: Double Chest Tracker"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./double-hip-tracker/double-chest-tracker"},"Double Chest Tracker"),"."),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-counts-as-a-loss-of-tracking"},"What counts as a loss of tracking?"),(0,o.kt)("p",null,"Whenever a tracker loses sight of the lighthouses, or the tracker loses radio signal, or the tracker turns off, it is considered as a loss of tracking."),(0,o.kt)("p",null,"Double Hip Tracker only makes use of the internal tracker status provided by the driver to figure out if a tracker has been lost (",(0,o.kt)("inlineCode",{parentName:"p"},"Running_OK")," status)."),(0,o.kt)("p",null,"It doesn\u2019t guess if a tracker has been lost in any other way. In particular, if your room has reflective surfaces, or if SteamVR thinks the tracker is healthy but still incorrectly estimates the position of a tracker, Double Hip Tracker will not be able to help during those situations."),(0,o.kt)("h3",{id:"can-it-be-used-alongside-imu-based-trackerspose-estimators"},"Can it be used alongside IMU-based trackers/pose estimators?"),(0,o.kt)("p",null,"No, you should not use it alongside IMU-based trackers or pose estimators. The majority of IMU-based trackers rely on a pose estimator software, so any tracker mixing should be handled on that pose estimator software."),(0,o.kt)("p",null,"If your hip is driven by a lighthouse tracker, then the pose estimator must also reposition your feet accordingly, therefore it is the job of the pose estimator to take into account lighthouse trackers."),(0,o.kt)("p",null,"Also, this application has only been tested with lighthouse-based trackers. I do not know if this system works or not with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vive.com/resources/tracker/"},"self-tracking trackers"),"."),(0,o.kt)("h3",{id:"does-it-run-on-unity"},"Does it run on Unity?"),(0,o.kt)("p",null,"Double Hip Tracker is not an Unity application."),(0,o.kt)("p",null,"It is written in C#, and uses the OpenVR API directly, with a standalone math library."),(0,o.kt)("p",null,"The idea is to keep Double Hip Tracker as lightweight and as pragmatic as I can."),(0,o.kt)("h3",{id:"third-party-acknowledgements"},"Third party acknowledgements"),(0,o.kt)("p",null,"You can find third party acknowledgements here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Double-Hip-Tracker-Third-party-acknowledgements-cefe0ac8d42a4f5d9b2e3a8e4154b9e1?pvs=21"},"Double Hip Tracker: Third party acknowledgements")))}d.isMDXComponent=!0}}]);