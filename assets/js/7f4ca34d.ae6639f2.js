"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1574],{81346:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=i(85893),t=i(11151);const o={title:"Assign UV Tile (UDIM)"},l="Assign UV Tile",a={id:"products/prefabulous-avatar/hai-components/assign-uv-tile",title:"Assign UV Tile (UDIM)",description:"Sets the UV Tile of vertices that are moved by a blendshape, or optionally an entire mesh.",source:"@site/docs/products/prefabulous-avatar/hai-components/assign-uv-tile.md",sourceDirName:"products/prefabulous-avatar/hai-components",slug:"/products/prefabulous-avatar/hai-components/assign-uv-tile",permalink:"/docs/products/prefabulous-avatar/hai-components/assign-uv-tile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Assign UV Tile (UDIM)"},sidebar:"tutorialSidebar",previous:{title:"Ha\xef~ Components",permalink:"/docs/products/prefabulous-avatar/hai-components"},next:{title:"Delete Polygons",permalink:"/docs/products/prefabulous-avatar/hai-components/delete-polygons"}},r={},h=[{value:"How to use",id:"how-to-use",level:2},{value:"About &quot;Entire Mesh&quot; mode",id:"about-entire-mesh-mode",level:2},{value:"Shader-specific uses",id:"shader-specific-uses",level:2},{value:"Poiyomi Toon &quot;UV Tile Discard&quot;",id:"poiyomi-toon-uv-tile-discard",level:3},{value:"lilToon &quot;UV Tile Discard&quot;",id:"liltoon-uv-tile-discard",level:3},{value:"SCSS &quot;Inventory System&quot;",id:"scss-inventory-system",level:3},{value:"Option: Keep Partial Polygons",id:"option-keep-partial-polygons",level:2},{value:"Special thanks",id:"special-thanks",level:2},{value:"Versions",id:"versions",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"assign-uv-tile",children:"Assign UV Tile"}),"\n",(0,n.jsx)(s.p,{children:"Sets the UV Tile of vertices that are moved by a blendshape, or optionally an entire mesh."}),"\n",(0,n.jsx)(s.p,{children:"This is meant to be used in tandem with shader features, especially:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),","]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon 1.7.1 and above using UV Tile Discard"})," since mid-January 2024."]}),"\n"]}),"\n",(0,n.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,n.jsx)("source",{src:i(59671).Z})}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsx)(s.p,{children:"This component will assign the UV tile of vertices that are moved by a blendshape, or optionally an entire mesh."}),"\n",(0,n.jsxs)(s.p,{children:["This is meant to be used in tandem with shader features, especially ",(0,n.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"})," and ",(0,n.jsx)(s.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon UV Tile Discard"}),' (since mid-January 2024),\nwhich in this case "',(0,n.jsx)(s.em,{children:"provides an efficient way to toggle portions of a model on and off at runtime"}),'".']}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Using ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon"})})," or ",(0,n.jsx)(s.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon"})," UV Tile Discard makes this effectively similar to ",(0,n.jsx)(s.a,{href:"./delete-polygons",children:"Delete Polygons"}),",\nexcept that this will ",(0,n.jsx)(s.strong,{children:"not"})," lower your avatar polygon count; instead it will ease the rendering load when the toggle is off."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.em,{children:["If you do not animate the shader feature, use ",(0,n.jsx)(s.a,{href:"./delete-polygons",children:"Delete Polygons"})," instead, which will lower your avatar polygon count."]}),"\nTo use this component:"]}),"\n",(0,n.jsx)(s.li,{children:'Add one or several "PA-H Assign UV Tile" component anywhere in your avatar.'}),"\n",(0,n.jsxs)(s.li,{children:["Then:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If you want to affect some blendshapes:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Keep the Mode to ",(0,n.jsx)(s.strong,{children:'"Blend Shapes"'}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Add blendshapes which move the polygons that you want shader features to affect. Any SkinnedMeshRenderer that has that blendshape will be affected."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["If you want to affect the entire mesh:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Set the Mode to ",(0,n.jsx)(s.strong,{children:'"Entire Mesh"'}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click on ",(0,n.jsx)(s.em,{children:"Meshes"})," to edit the list with the meshes you want to affect (or drag and drop meshes to it)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["For each component, assign the channel and the corresponding checkbox. The UI is built to closely mirror ",(0,n.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),", and ",(0,n.jsx)(s.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon"}),"'s layout is just as similar."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact."}),"\n",(0,n.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,n.jsx)("source",{src:i(93023).Z})}),"\n",(0,n.jsx)(s.h2,{id:"about-entire-mesh-mode",children:'About "Entire Mesh" mode'}),"\n",(0,n.jsxs)(s.p,{children:['"Entire Mesh" should be used alongside an avatar optimization tool that will merge existing meshes, such as ',(0,n.jsx)(s.a,{href:"https://github.com/d4rkc0d3r/d4rkAvatarOptimizer",children:"d4rkpl4y3r's d4rkAvatarOptimizer"}),"\nor ",(0,n.jsx)(s.a,{href:"https://github.com/anatawa12/AvatarOptimizer",children:"anatawa12's AvatarOptimizer"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Prefabulous Avatar does not provide any mesh optimization components that rectifies animation paths at this time."}),"\n",(0,n.jsx)(s.h2,{id:"shader-specific-uses",children:"Shader-specific uses"}),"\n",(0,n.jsx)(s.h3,{id:"poiyomi-toon-uv-tile-discard",children:'Poiyomi Toon "UV Tile Discard"'}),"\n",(0,n.jsxs)(s.p,{children:["If you use ",(0,n.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),":"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"If you use Poiyomi Toon version 8.0 or lower and you notice an obvious graphical glitch when using UV Tile Discard,\nplease upgrade to Poiyomi Toon version 8.1 or higher."})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.'}),"\n",(0,n.jsx)(s.li,{children:"Use the checkbox grid. The UI is built to closely mirror Poiyomi Toon UV Tile Discard."}),"\n",(0,n.jsxs)(s.li,{children:['Keep the "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Do Not Clear"}),".","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Set to Zero"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsx)(s.p,{children:'Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,\nas this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.'}),(0,n.jsxs)(s.p,{children:['That said, if you really want to use UV0, then set the "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Shift"}),"."]})]}),"\n",(0,n.jsx)(s.h3,{id:"liltoon-uv-tile-discard",children:'lilToon "UV Tile Discard"'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If you use ",(0,n.jsx)(s.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon UV Tile Discard"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"You must use lilToon 1.7.1 or above."})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.',"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["It is ",(0,n.jsx)(s.strong,{children:"strongly recommended"})," that you switch the UV channel of the material to something other than UV0."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Use the checkbox grid to match your setting from the UV Tile Discard tab."}),"\n",(0,n.jsxs)(s.li,{children:['Keep the "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Do Not Clear"}),".","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Set to Zero"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsx)(s.p,{children:'Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,\nas this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.'}),(0,n.jsxs)(s.p,{children:['That said, if you really want to use UV0, then set the "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Shift"}),"."]})]}),"\n",(0,n.jsx)(s.h3,{id:"scss-inventory-system",children:'SCSS "Inventory System"'}),"\n",(0,n.jsxs)(s.p,{children:["If you use ",(0,n.jsx)(s.a,{href:"https://gitlab.com/s-ilent/SCSS/-/wikis/Manual/Inventory-System",children:"SCSS's Inventory System"}),":"]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsx)(s.p,{children:"You cannot use the SCSS Inventory System to partially hide meshes that are part of the body flesh, as this would result in the texture visibly warping along the seams of the blendshape."}),(0,n.jsx)(s.p,{children:"In SCSS, this feature should only be used with individual pieces of clothing or accessories."})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'Set the "UV Channel" to UV0.'}),"\n",(0,n.jsxs)(s.li,{children:['Set "Existing UV Data" to ',(0,n.jsx)(s.em,{children:"Shift"}),"."]}),"\n",(0,n.jsx)(s.li,{children:'Set the "U" value to the corresponding Inventory System slot.'}),"\n",(0,n.jsx)(s.li,{children:'Keep the "V" value to zero.'}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"option-keep-partial-polygons",children:"Option: Keep Partial Polygons"}),"\n",(0,n.jsx)(s.p,{children:'If you want to exclude the vertices of polygons that are still connected to the mesh from being affected, check "Keep Partial Polygons".'}),"\n",(0,n.jsx)(s.p,{children:"On blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh."}),"\n",(0,n.jsx)(s.p,{children:"This might help with some avatar models, however, this will have no effect on blendshapes that have no edge loops separating vertices apart."}),"\n",(0,n.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,n.jsx)("source",{src:i(45752).Z})}),"\n",(0,n.jsx)(s.h2,{id:"special-thanks",children:"Special thanks"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/d4rkc0d3r/",children:"d4rkpl4y3r"})," for the references on ",(0,n.jsx)(s.a,{href:"https://github.com/d4rkc0d3r/d4rkAvatarOptimizer",children:"mesh reconstruction"}),"!"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"versions",children:"Versions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"1.9.0"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Assign UV Tile can now assign the ",(0,n.jsx)(s.strong,{children:"entire mesh"})," to an UV Tile."]}),"\n",(0,n.jsxs)(s.li,{children:["NDMF Compatibility: This component now runs before ",(0,n.jsx)(s.code,{children:"com.anatawa12.avatar-optimizer"})," in order to make sure meshes are not merged and blendshapes are not lost before this runs."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"1.7.0"}),": Added."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Classification: ",(0,n.jsx)(s.em,{children:"This component is application-agnostic."})]})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},59671:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/medias/13rQ7HGwPr-ec5d550ea5727a70033b65daa55d19b7.mp4"},45752:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/medias/YkcjjmKw2G-3b7706e7e78e9616e228b4090ed209c3.mp4"},93023:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/medias/pOxhnkOYpj-883feecc7587a41344c18c262c87efd2.mp4"}}]);