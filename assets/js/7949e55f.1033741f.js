"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,d=h["".concat(i,".").concat(m)]||h[m]||k[m]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o=r.p+"assets/medias/double-hip-tracker_pFdyyLdeVF-344afda122d81ff0ca9d102895579740.mp4",c={},s="Double Chest Tracker",i={unversionedId:"products/double-hip-tracker/double-chest-tracker",id:"products/double-hip-tracker/double-chest-tracker",title:"Double Chest Tracker",description:"In addition to the Double Hip Tracker, you can also enable the Double Chest Tracker.",source:"@site/docs/products/double-hip-tracker/double-chest-tracker.md",sourceDirName:"products/double-hip-tracker",slug:"/products/double-hip-tracker/double-chest-tracker",permalink:"/documentation/docs/products/double-hip-tracker/double-chest-tracker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/products/double-hip-tracker/double-chest-tracker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2b50 Double Hip Tracker",permalink:"/documentation/docs/products/double-hip-tracker/"},next:{title:"Expressions Menu Hierarchy Editor",permalink:"/documentation/docs/products/expressions-menu-hierarchy-editor"}},l={},u=[{value:"Configuration of the Double Chest Tracker",id:"configuration-of-the-double-chest-tracker",level:2},{value:"Ignore trackers in VRChat",id:"ignore-trackers-in-vrchat",level:2},{value:"Optional: Prioritize Tracker A",id:"optional-prioritize-tracker-a",level:2}],h={toc:u},k="wrapper";function m(e){let{components:t,...c}=e;return(0,a.kt)(k,(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"double-chest-tracker"},"Double Chest Tracker"),(0,a.kt)("p",null,"In addition to the Double Hip Tracker, you can also enable the Double Chest Tracker."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Double Chest Tracker is completely optional.")),(0,a.kt)("h2",{id:"configuration-of-the-double-chest-tracker"},"Configuration of the Double Chest Tracker"),(0,a.kt)("p",null,"Once enabled, you need to select the serial numbers of your two chest trackers by hand."),(0,a.kt)("p",null,"You can find out which tracker is the correct one by spinning your tracker quickly, and an indicator ",(0,a.kt)("inlineCode",{parentName:"p"},"<<<")," will show up in the list of available hardware."),(0,a.kt)("video",{controls:!0,width:"816",autostart:"false"},(0,a.kt)("source",{src:o})),(0,a.kt)("p",null,"Spin your tracker to find it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<<<")," indicator, and then select them in the ",(0,a.kt)("em",{parentName:"p"},"Double Chest Tracker")," tab panel."),(0,a.kt)("h2",{id:"ignore-trackers-in-vrchat"},"Ignore trackers in VRChat"),(0,a.kt)("p",null,"If you try to calibrate in VRChat, there is no guarantee that our Double Chest Tracker will be the one bound to the chest in VRChat. Unlike the hip, there is a good chance that one of the two hardware trackers will be closer to the chest than our tracker."),(0,a.kt)("p",null,"To fix this, you need to tell VRChat to ignore the serial numbers of your trackers."),(0,a.kt)("p",null,"On the Double Chest Tracker tab panel, select and copy the line called ",(0,a.kt)("em",{parentName:"p"},"Launch args.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(5809).Z,width:"289",height:"204"})),(0,a.kt)("p",null,"On your Steam library, right click VRChat, and select ",(0,a.kt)("em",{parentName:"p"},"Properties\u2026")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(8530).Z,width:"247",height:"200"})),(0,a.kt)("p",null,"Paste the line you copied in the Launch options, and make sure the serial numbers are correct (for example, the last characters could be missing)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(1384).Z,width:"842",height:"601"})),(0,a.kt)("p",null,"Once done, VRChat should no longer try to bind to those hardware trackers during calibration."),(0,a.kt)("h2",{id:"optional-prioritize-tracker-a"},"Optional: Prioritize Tracker A"),(0,a.kt)("p",null,"If you are wearing your two chest trackers in locations where one of the trackers is more advantageous than the other in terms of tracking quality, you can choose to Prioritize Tracker A."),(0,a.kt)("p",null,"For example, if you\u2019re wearing a tracker on the chest like you normally would, and a tracker somewhere below your armpit, it could be advantageous to prioritize the tracker located on the chest."),(0,a.kt)("p",null,"Select the serial number of the tracker that has a better position in the ",(0,a.kt)("strong",{parentName:"p"},"Tracker A")," slot."),(0,a.kt)("p",null,"Check the Prioritize Tracker A checkbox."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(7184).Z,width:"289",height:"204"})),(0,a.kt)("p",null,"By using Prioritize Tracker A, the Double Chest Tracker will be positioned at the same position as the Tracker A. It will no longer act as an average measurement of the two chest trackers."),(0,a.kt)("p",null,"The position of the Tracker B will be ignored completely, unless Tracker A loses tracking."),(0,a.kt)("p",null,"When Tracker A loses tracking, the position of the Tracker A will be simulated using the known position of the Tracker B."),(0,a.kt)("p",null,"You must tell VRChat to ",(0,a.kt)("a",{parentName:"p",href:"#ignore-trackers-in-vrchat"},"ignore the serial number of the trackers")," when using Prioritize Tracker A."))}m.isMDXComponent=!0},8530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled 1-2691a6bc74a9b9a3c6ef8a0634cdad6b.png"},1384:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled 2-6905ea7c772759899e89ddde4df4e1e1.png"},7184:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5809:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAADMCAYAAAA8sBXzAAAZ70lEQVR4Ae1dPY9k21WdP4FfQuAACVmykHCGSPBkoGcyYyxZEPAHwIMTpAcBsuSxXmAsZGtw9vgQJrEsQA7IbAIHzhGRE0cgMstYTsraNb16Vq/e5+Pee+qeW1XrStX7a+19zj13n1Wnq3umX7z68M3JL6+Be8A9MKsHXswa2OO66d0D7oHogUcSev8LH5z88hq4B9wDe/UA3oSekNAnfu8vTn55DdwD7oFL90AQnUnIhOs3HPfAtB4wCbn5pjXfpd9hXf86TnEmIZOQScg9MLUHFpHQyz/+6umvvv6d5itwe74LnU6n6ngRj2uPOe01zh73snSMe773pWtl/LtT2iISioX7m4/+47yhS18iXltgzathe2M9zd+D6R0POL4X9kEfKZfOn+em+sh5ca2lc+Rc6+825b2txWISigX68U/+V/v6bIe/tYDaqGq38rN4T40eTFa75NN6sCFLeWv9W+puyV0y373GWTInY49PbqtI6Etf/Xb027Prz1//82ISiiaJC83CReFTjNqcw7Vq+YhxLnwtWRoj8vTSWhyvxXQMztOY1lE7w8OHulnO0hhqolZmZzWBy2KoZXl8Mln7jFaRUAz2gx/9N3rmLMPumQQajrHwQSLGNusRZ5t1jWW1Sj6tA5zKGk5jbLMeNdlmXcdTbBav+bLa58GF/Es1OJ91nRfHWFec2oGNC+OzDp+lSeixQdAMn/uzb77tnIevYSNWk1mDwQeJfLZZjzjbrGssq8W+cyH6glhN6niM1RjbNMyjqrmM1xjbS/SsZubjmo8TfFAQq+UhBomckNmFeIZHzPJ2yQfPdvVJKAr807/98NxbIVGwJbOGgw8SNdhmPeJss66xrFbNh1hN6niM1RjbrHOO6hku82leyc5yMx/yNcY268BDRgwXfJDhh66yFlOs7dsjpU0k9Nuf//Lppz/7+Slkb3Now7HNetRjm/UlMcxL87VGZiM3k1oPNiRy2Ga9Nd4SLMYqSa21ZWytxXZJz8arYUv3Yf/tEVA8000kFAVef+vfuwko8HppY3G8FtMmruVhXK0HP3KzeM2HPJ0L53CsNh7X0hzUYwx8PTKrl/m4Fo+lWI5pTstGbg3HMeu3STz8XDeTEBezfvsN42fsZzy6B0xC/pX9RSfZ0Q3oeiY1k5BJyCTkHpjaAyYhN+DUBvRJyCchk5BJyCTkHpjaAykJvXz5/ulXPvaeX14D94B74OI9EHzz7H9WNAmZgP0m5B7YqwdMQn6nu/g73V7N7HGukzhNQiYhk5B7YGoPmITcgFMb0KeX6zy9jHxuJiGTkEnIPTC1B0xCbsCpDTjyHdW1rvNUZRIyCZmE3ANTe2AVCX38U585jXrd6rvXqPWJOre6Rr6v6zy5jH5uJqELvQuahLzBRm/WW61nEjIJ+aR1oR64VdIYfV8moQs1oE9CPgmN3qy3Ws8kZBLySehCPXCrpDH6vnYjod/4wjdOL7/xi2cfaI++oVK9+G9FS7Hw46phlsSOfhJqrceSewV2bc21eRj3qPJW72v0eu9CQiCgICElouyG4uHpleGW+KJeC9+DadVA/NIkNHp9MO9LyJHrunZ+ul5sr63Zypt137i31vyOEr84CSkBffKzr5+chrKFuMTD66nZg8nmm/n2ICEed+Tcue4I/Whz22s+e42jzyjGjUv9R7UvSkItAoqNmi1MbQHfLu+7r5r/LvL0IbA/dM0Lu+ZHfpaX+WaSEO6jNOeSH2uQxUfVRB2sWTaWziPDwKf1ULcmsxz4UFfz4QeO46WYYjMbuVovbFwca+k8BuutvJnxISQU32L95p989OSE00NANRLCA9CFbNm8mIxlPTBq9/qyPB4T+mwS4nmyjvn1+BgTelxL8mtYxEJyXfazzhjWe/NLteA/T6Jxf4zN9PDx3Eq64tReMhfMA7I2JjBHk5tJ6NN/+//nz3mYiHoJqEZCpYXiRQ5MZp+dD19QJ8MhBqkY1Od6GQb5LPcgIZ4Xj90zxwyjPrZZ57FYL2FKfuQujQdeL9TqkZGruMzHmNJ4tTzEIGv1GMM65/TokctXT85szGYS+sTvf3BSIsIH0CH1MyDdnNkCxCJm/vBpjG3WFVuLYSzFaA3geqTe5xY7Gy+bK3C1WA2jeWyzjhoqS5iSH/m1eBbLfKjVI7P8zIdaGmObdeAhI4YLPsjwQ1dZiymW7Swv83HOEfTNJBSbS4kIJNQioMjNFqG2cBpjm/WoyzbrGsMcFJPhMgzyWW4hHc3lutBr86jFavmaxzbrqKGyhCn5kV+K9/pLONRXmeEzH/I0xjbrgWe7pCtObc7DHHpklpf5emrtiRlCQhkR9RBQjYRi8fjCooQPesjMLuVl/lotxFp5wLFUItlic13oet/wh6zFgCthzskPX4DdWhP5qM11Ect8wEMyBr6Q7O/Rs5zMx7V4PMVyTHNaNnJrOI7VdJ1XYDNfrcaM2DASYiLqJaASCc1YiNFjbiEdzR09N9fzPyk5Ug8MJSEQkW6imn2kxRg5l9o9L42NnJdrmYCO1gPDScgb7G2TL12HGv5oTeP5mMhG9oBJ6EL/eLFGKktjIx+4a5lAjtYDJiGT0OIPdo/WxJ7PdRPrKhLyQ7/uh+7n5+d3pB4wCV3oJHSkh+y5mHSO3AMmIZOQvx1zD0ztAZOQG3BqAx75Hdpz2+cEaRIyCZmE3ANTe8Ak5Aac2oA+bexz2jjyOpuEOknoGv4NzpEbzXMz2ZR6YDMJnf+F3MOX0iCz/SMIZESN2evg8U0ER+yBTSSkG1Pto9zwiHmNqHGU9fA8TEZH6oHVJNTalBHHxTcMH2RvLHB8cd6SWNTg3N6amsc1rHtTuwfW98BFSEg3LNusx4Njm/VRMa3DzbJ2PK5hfX3zee28dtEDV0VCZ8aiL2hiJRP4IUtxKvWolnJKNYC39IZyD6zrgasiodJDbhFEKV7yxzgaU7s0F/vXNaLX7X7XbTUJ1Taqbli2Wdcal4jpGNzsa8fjGtbvd/P42Y959ptIKB4CX/xQan7Fwa6RQm2sVqwWL81Tc3RuEffLa+Ae2N4Dm0nID2H7Q/Aaeg3vuQdMQj7R+ETnHpjaAyYhN+DUBrznE4Dv/e0J2CRkEjIJuQem9oBJyA04tQF9GvDnYSYhk5BJyD0wtQdMQm7AqQ3ok5BPQiYhk5BJyD0wtQduhoTwS4eld1b/suFl3nG9rpdZ11If36L/6kioRjbXviHWzh9rsjS/lleL8UZYOibnWjeBRQ+YhA50FF+zoTVH7dJGVxzbrEe+2lyzFmOcdRNOqQeuioS44VnHzWW+iOECjiVikIjBhsz84cOFOPsiVvJrTPOyONeCrji1gVOpOLZZj7zMPjsfvnDtkh91anGuY/1+SOsuSAgbQBs7NgT72Gad89mf6ezjPNV77MC0XhhP5ZY8rQW7NWfGKbYWa83V8XYfXPMaXR0JRTPj0oUPv/pgZzH1sc161IANyT7Wz0D5UpoD1+IawPdI1FDZylU8bJ4HfJAcQ32Nhc1XhsvqAGd524STPd+rIaFobL0B9anN+CymPrZZjzqwIdnHOsd5fMbAr1i1gatJzVG7lKs4tlmPfLZZb8V47Foe46ybhE6vPnxz/rT6aM2gTRzzU5/afA9ZTH1ss85jsT/T2cd5qvfYgWm9auNlY6BeLW/vGOZk2X7et7hGd30SigeqFx5yaSOyv6ajLuphrJoNTJbLeaoDz/MBJvNxDLnwQcKf5XNM4xxDLUiOaR4wlvdHRFdDQns0pzfGfhvAa73fWu+xd7aMYRKib3m8MfbbGF7r/dZ6C0HskXv3JBSbAdceC37PY2CdQ97zOvjenxLw3ZOQG+JpQ3g9vB5794BJiL4d23vxPZ43vHvgCv/tmB+aN6574LZ6YNVJ6Nd/94snv7wG7gH3QG8P1N44TEImVL+huAcu3gMmITfZxZus9x3RuPs8PZmETEImIffA1B4wCbkBpzagTz/3efrh524SMgmZhNwDU3vAJOQGnNqA/I5o/T5PRSYhk5BJyD0wtQdMQm7AqQ3o0899nn74uZuETEImIffA1B4wCd1BA+JfqPO7D+sRZ/tW9Fu9r1t5PrgPk9CBSAhkAYmHNEIeZUPuOY89xxrxjO61hknoYCTEjThyE42sxXNcqu85jz3HWroOxr/7LMwkdEUkFJsKlzYx/CE1FnbN34qdk6kubMhsvJIPOZDAhY15QkeM/Utiis3s8MWlY/GYHGP/Q+qTXMXafkc2pbUwCV0JCZU2SvZgFRuYzIfcLKY+tllv1cYYkJrLfo6xDgwkx1iPONslXXFqn4sQMdXqYE6WbbIprZFJ6GAkhA3AjY9NwrFWXB+44jmexdTHNuuYG9er6ZoLbMnP8cDgYj90lYENHyTHUYcl4hkeMdRrYRhvvU5QJqGDkRAaVptcbeBCakztDFPLz/Bck/UMy7VV11zES/6sPmNZRy3IiOGCDzL80FXWYoztxXGO9eeEZBI6KAlFs3KTs74khqbXfPi1FvyKZ5v1Uj7qqNRcxEv+rD5jWVcsx1hXnNqKjXjptQRbqnHvfpNQpcH2bo6sodkXOi6dG/yQWVx9sCMHOkvUgkRM8WoDV5Kox3msZ3mco1iOcW6G0zhy1c8268BDcsx6maxra2MSOhAJ1R7U7Jhu6Nnz8fjrNvwR180kZBJKT0HarCah29n0+mxn2yYhk1CRhPAthwnIBHRJojIJmYSKJHTJxnNtExt6wCRkEjIJuQem9oBJyA04tQHxbmh5vycjk5BJyCTkHpjaAyYhN+DUBvQJ6H5PQHj2JiGTkEnIPTC1B0xCbsCpDYh3Q8v7PRGZhExCJiH3wNQeGE5CtYKOvXfyGngN3AP9PfDy5funVx++Ob9eQAmnF7F/Eb1WXiv3wPoeMAl9bP3iufG8du6B7T1gEjIJ+dTrHpjaA6tI6OOf+szJL6/B0Xpg5E/ffMLZfsLpXUOTkAn1Zt5QTEL7EUcvwfTgTEImIZNQ8uP7ns1jzBjSMwmZhExCJiF/JnS0zxY8n+v8vMvfjo05mex9wvNJyCehmz0J/c4f/fXpg6//S/MVOCWwvTdiNl78b5eZ/9Z8w0goFqx0gshi8IXkq1Qj89fySjH2Q0dt2JDwQ8IfEj6WiLNPdc1Fjvo1z3b7dKZEEvbXPvoeL/EzPeJZnm70Z4nkUOwoO4YYVWtJHdzakpwt2EOQEG+wWAC2S7ri2GY98tlmXWtrjG3WtWZma21guA7riGd59rUJKNYoI5Pw/fgn/xNL/ewKfymntqmiUC0+KrbXODpfLJT6L2VfLQnpxoyFg4/18LHNOvCQWSzzLamptUv1tCbyLPsIKNapRCivXv9DLPuz64uv/76YU9twUUjj8GGQLL40hpqoldlZTeCyGGqVJHIjznoJP8K/GwlhQVhmGy/iSzee5sBWifHCj4vHCh/bwLd8qAVZw2djlMbROrbrhFQiofB//0f/hcdzlmHX8LXNFQU0juLwZ5gspji2S3rU4Zja5yDNUbGYRyYZy3qGHeXbjYR0A8UNYvOFjotx8LHkOPJLvshTDHyaozjEFa92lscY1jNsyYfxLevEw+tTI5U/+NOvxaN4vMKu4WsbLIpoPPMx5nHgBwWxWh5ikMgJmV2IZ3jEWlLrtvAj4ocgITRSLAD0HlnCq59t1nWMLMY+1jlX/WyHnl3Ijxh0y37CydaqRioR+8d//c/zowjZwtY2VxTReOYDRmNssw48ZMRwwQcZfugqazHFsp3lZT7OGaEfioSiseLKGkx9NZzG2Ga9VZOxrC/Jq2FrNTXPdpugWsTyW3/4l6ef/uznp5AtbG1zxXPTeOYDRmNssx54tku64tTmPMyhR2Z5ma+n1hLMUBKKCfOFjRM+6JDwQcIfMvNxHJgzkL4whtxPxmY/dOTBhoR/y3hcA3XgwzgsEbNsk46uUYtYIv6Vv/tuk4ACV9tE8bw0nvkYw89YsRzTnJaN3BqOYzVd5xXYzFersSY2jIS0IWwv30Res21r1kNCvZg1m8k5635j2yTk35h+clK8ZiLsJZgenAllHaGsWTeTkEnIJOR/wPrs28s1ZLI2xyRkEjIJmYRMQtf8LYDnvu1znJHr1/NtVi9m7bu685Z/G7fqJOSFXr7QXjOvmXsg7wGTkP+T86lHcW/MfGPe07qYhExCJiH3wNQeMAm5Aac24D294/te81PfKhIa+WGiax3ng91rfxa9Hzr34EwYOWFcYl1MQv4RvX9E7x/RTz0Nm4RMQiYhk5BJ6Nq/DfD8j/EtZc+3Wb2YS3zb4Zr5t3g+Cfkk5JOQT0I+CfkkcYyTxLU/Bz3l+E/+5CePo53Ihp2E4v8dKTVxFoMvJF+lGurnHOglDPuBZcnx0HGxHz6WiLMPOmIqI97jU4ztNlErCYXtP/nTT0ToXci9yOoQJMQbLNukHC/pWR4Wk3MyHMdDx6V+trkO64xRPaub+TTPdpuAYo0yEgqf/+RPHxFFLzLxqM2xkfpNkFAslm5U9pV0zQm7B8sYzclqMoZzoUOWcu3fRkL+kz8modhj6cWbExstgNB7ZZbDPtXDxqVjhB8+1uELqf6zg74wVvGaq3HNtd1HQLFOpZNQ+P0nf9pERC38qI488ZRqHeIk9HjHRADYnBwLXTdl5stykVfCc5zHhB8yy898JXyGzXzItxxDQv6TP30kpEQRvam+0fYhSAgbbc1mzHJqvixWG1/xakdu5uOaZ4B8QbyVzzjrdUKqnYQi5j/5UyeiaFElmMynmK32oUho6YaMBco2ZuaHD3JpXm1utZo6TobNfJpnu05AsT4tEvKf/LkDEorNxBc2TvigQ8IHCX/IzMdx6CVc5ocvpF61eoGtxSPGGGBLkrHnRPlSyrN/OwkFSflP/pSJSFrxbG495fTkDzsJeZO0N4nX6LJr1DoJLYn3bB5jyoS2ZG1MQv5nG48nvWsnySUk08Iu2UTGbiOjlIT+71d/7eSX18A94B7YqwdeffjmFK8XUPYa2OO4yd0D7oHoAXCPScgnQJ+A3QNTesAk5Mab0ng+BfkUhB4wCZmETELugak90EVC/gnAtp8AeP28fu6Btz2A0w9Lk5D/7M+zX9f3hjFpXqoHmHygLyaha/99Es//sr80eAvre6kN6Lrvpd/2mYT8C4s38wuLowjQZHG5kyBOPyw3k9AnP/v65JfX4JZ6wCRkEjKpmdin9oBJ6MpIKP657S29C/pefKozCd0hCZnI+je+16p/rda+oRydhKIHjj7H0vz4syDomz8T8qZ4HUuw22lwz7Fam7g2lywGX0i+WuNwvJZXirEfOmrChgx/toEinvln+I40l6X3D+JhaRIa8PlLNAWa+tJyz7Fa91KbSxaDDxL11YZfpeLYZj3y2Ga9p2a2saJG5p/hO9Jclt4/kw/06SQUCxqXNgca6SH8BMO+LJfjXBdYxDmm42msZqMeJLBbxkMt1NCaNRu5wIREnSyGOGLAcn6m13BZDD5I1FQb/pbkPNYjj23WtWYWyzZW4DI/fBHHBV/IuEo28JCMQ24Wgw9S82o2ckIyDjbiHAtdL47XYowLHcTDcjoJacOgSeLGoCtmS4xzS7qOx/PIdK7D8fDHBR/r8EFyjPWIs13SFaf2uUhhLlwT84FEnkqtDzyk4mFneRFDXq/UHNgqMV74cfEY4WM7dN04YceV+TMfY1nXOpeIZfMp+Xj80OMCtqS37gH5JcnkA30ICb2d/tOveLBPvW8txCDDCx1SfWyzHni2WW/FMBZw50L0BXFyPaqIIZdt6AGGnsnHYg8KMLU8xCCREzK7EM/wiHEu+1p6rWYWgy8kXzwO+6FzPPS4Sj7EIEt45DMOvmwDBS7zwxdxvtgPPWRcsFlvxZCjuMxmrOo8Rx6f9SyHfYpFTcaUdBAPyyEkhIe3VsZNaK762GY98thmvRXjMTWPYy29lFvy67zUbuVFPC6dV+YDphYDRucB+zyYfEGMc1nPxoMPslWD60HnXPiyOoxjnXOyvPBlGyhqZP7waYxt1hW7JMZj1/IYp3otT2OcqzG1gS35EQ/J5APdJPTwwXQsIDeo2hxTvYQt+SNfY2yzrliOsa44tRUb8dKrF1vDZTH4IDG+2vCrrOE0xjbrrZqB5U0DveSPuMbYZl2xl4hhvplcMh7n1/IYF3oLC+JheVgSimbRCw0UfujAqY1c9bOtOnK0vuIyO8tt1eEcxXKMx8twGkeu+tlmHXhIjtV04FkCHz7okPBBwh8y83EcmDOQvjCG3E/GZj905MGGDL9uLGwuYCAZBx9kTyywilO7VE9xbNd01IMEVucCPyTwkC0/x6GHZPKBfggSQkPUZNx8Le5Y+WTjtVm2NrxprD//7ekWYdXWDMTDcjMJ7dXgJqFlG2mv53KL49Q2kWPPv+VasiZMPtAPTUI4+pmATEB7kt2STXUvWN6LW+4ZxMPy0CS0Z+N5LBMdemDLJnPu82/feE2YfKBvJqFR/5GU6/h/PDxKD/CmsV4nlaXrA+JhuZiElg5q/NiH6PX0el5zDzD5QDcJ+T+6f/Jj4mtucM/9+AQN4mHZRUKcYN1/tM494B4Y2QMmIf/hu/QXyEY2mWuZtGo9YBIyCZmE3ANTe8Ak5Aac2oC1d0jH7uMEZRIyCZmE3ANTe+AZCb18+b5/WuKfmLkH3AO79EDwjUnIzbZLs/nH58f/8fmMZ2QSMgGZgNwDU3vAJOQGnNqAM955PeaxTmQmIZOQScg9MLUHTEJuwKkN6FPJsU4lM56HScgkZBJyD0ztAZOQG3BqA8545/WYxzp9mYRMQiYh98DUHiiSUAT88hq4B9wDe/TAs19WhMPyzeNvcnotvBbugcv3wAsv8uUX2WvsNXYPlHvgl3qhvmHgM616AAAAAElFTkSuQmCC"}}]);