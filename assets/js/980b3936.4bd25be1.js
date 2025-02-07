"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4001],{91148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(74848),s=a(28453),n=a(89618),o=a(85041);a(66926);const r={sidebar_position:101,unlisted:!0},h="2025-02-07 Material collision effects and breakable objects",l={id:"research/other/collision-effects",title:"2025-02-07 Material collision effects and breakable objects",description:"I was building a new home world after being bored by the one that I had been using for over a year.",source:"@site/docs/research/other/collision-effects.md",sourceDirName:"research/other",slug:"/research/other/collision-effects",permalink:"/docs/research/other/collision-effects",draft:!1,unlisted:!0,tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101,unlisted:!0},sidebar:"researchSidebar"},c={},d=[{value:"Continuous Speculative outputs often 0 newton collisions",id:"continuous-speculative-outputs-often-0-newton-collisions",level:2},{value:"If a thrown object breaks another open, it should not bounce away",id:"if-a-thrown-object-breaks-another-open-it-should-not-bounce-away",level:2},{value:"Getting the material hit in a multi-material mesh",id:"getting-the-material-hit-in-a-multi-material-mesh",level:2},{value:"Manual Sync arrives way sooner than IK/VRCObjectSync",id:"manual-sync-arrives-way-sooner-than-ikvrcobjectsync",level:2},{value:"Using Player pools to send and receive packets (Player Objects)",id:"using-player-pools-to-send-and-receive-packets-player-objects",level:3},{value:"Damage packets arrive too soon, before the visual cause of damage happens",id:"damage-packets-arrive-too-soon-before-the-visual-cause-of-damage-happens",level:3},{value:"Breaking objects from collisions are intentionally delayed",id:"breaking-objects-from-collisions-are-intentionally-delayed",level:3},{value:"Bullet hits do not transfer ownership",id:"bullet-hits-do-not-transfer-ownership",level:2},{value:"Lookup tables",id:"lookup-tables",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"2025-02-07-material-collision-effects-and-breakable-objects",children:"2025-02-07 Material collision effects and breakable objects"}),"\n",(0,i.jsx)(t.p,{children:"I was building a new home world after being bored by the one that I had been using for over a year."}),"\n",(0,i.jsxs)(t.p,{children:["Initially, I just wanted to make sure that shooting walls would produce decals and the correct sound effects depending on the material being hit\nbecause of a ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=TbZ3HzvFEto&t=908s",children:"Half-Life 1 documentary starring Gabe Newell on the topic of fun and world interactivity (2-minute watch, between 15:08-17:03)"}),",\nbut the whole idea went out of control and I ended up building an analogue of throwable and breakable objects."]}),"\n",(0,i.jsx)(t.p,{children:"Below is a random assortment of things I have learned while building this system."}),"\n",(0,i.jsx)(t.h2,{id:"continuous-speculative-outputs-often-0-newton-collisions",children:"Continuous Speculative outputs often 0 newton collisions"}),"\n",(0,i.jsxs)(t.p,{children:["When a rigidbody is thrown and hits another collider, a ",(0,i.jsx)(t.code,{children:"OnCollisionEnter"})," event will be raised, containing information about the collision.\nIn order to apply an appropriate sound effect volume and damage amount, we need to read the collision force."]}),"\n",(0,i.jsxs)(t.p,{children:["The issue is that depending on the collision type of the rigidbody, the reported amount may equal to ",(0,i.jsx)(t.strong,{children:"0 newton"})," too often.\nThis especially happens when the rigidbody is set to ",(0,i.jsx)(t.em,{children:"Continuous Speculative"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The fix is to set the collision type to ",(0,i.jsx)(t.em,{children:"Continuous Dynamic"}),", as long as we care about these objects reporting the correct forces to produce sounds or be damaged on impact.\nFor instance, this is not necessary on the individual debris emitted out of breakable objects."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(o.F,{requiresVRChat:!0,short:!0})," A ",(0,i.jsx)(t.a,{href:"https://x.com/MMMaellon/status/1732068213780103650",children:"tweet also suggests that"})," objects with VRCObjectSync ",(0,i.jsx)(t.em,{children:'"forces your rigid bodies to continuous speculative"'}),",\nso you may need to force the collision type to be ",(0,i.jsx)(t.em,{children:"Continuous Dynamic"})," through an Udon script."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(90200).A+"",width:"585",height:"549"})}),"\n",(0,i.jsx)(t.h2,{id:"if-a-thrown-object-breaks-another-open-it-should-not-bounce-away",children:"If a thrown object breaks another open, it should not bounce away"}),"\n",(0,i.jsx)(t.p,{children:"If you throw a bowling ball against a fragile window, the bowling ball should go through the window because it conserves most of its energy."}),"\n",(0,i.jsx)(t.p,{children:"The issue is that collisions with all non-moving objects will cause the thrown object to bounce away from it.\nThis also applies to some heavy breakable objects that can be moved."}),"\n",(0,i.jsxs)(t.p,{children:["The fix that I chose is to save the velocity and angular velocity of thrown objects every physics frame in ",(0,i.jsx)(t.code,{children:"FixedUpdate"}),".\nWhen an object breaks apart, it needs to inform the other object that collided with it, so that it cancels the bounce and re-applies most of\nits energy based on the velocity and angular velocity of the last saved physics frame."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-the-material-hit-in-a-multi-material-mesh",children:"Getting the material hit in a multi-material mesh"}),"\n",(0,i.jsx)(t.p,{children:"If an environment mesh/world mesh is made out of multiple materials, hitting it with bullets or collisions should\nproduce different sounds based on what that material represents, for example if it's glass."}),"\n",(0,i.jsx)(t.p,{children:"This information can be encoded in the Physics Material type of the collider, but there is another approach."}),"\n",(0,i.jsxs)(t.p,{children:["When a mesh has multiple materials, ",(0,i.jsx)(t.strong,{children:"it is possible"})," to use Mesh Colliders with raycasts to get the material that is hit.\n(Whether you should use this approach is a different question)"]}),"\n",(0,i.jsx)(t.p,{children:"To do this, raycasts will report a triangle index if a Mesh Collider has been hit by the raycast."}),"\n",(0,i.jsxs)(t.p,{children:["To convert the triangle index to a material, you need to get the mesh asset of that Mesh Collider, and for each sub-mesh of that mesh,\nuse ",(0,i.jsx)(t.code,{children:"triangleCount[subMeshIndex] = mesh.GetSubMesh(subMeshIndex).indexCount / 3;"})," to get the number of triangles for that sub-mesh (notice how we divide by three)."]}),"\n",(0,i.jsxs)(t.p,{children:["If a mesh has 3 sub-meshes, and their triangle count are ",(0,i.jsx)(t.code,{children:"70, 50, 40"})," in that order, then a triangle index of 74 will mean you hit the sub-mesh at index 1 (which is the second one),\nso you can get the material slot at index 1. A triangle index of 122 would be index 2, because it is greater or equal to ",(0,i.jsx)(t.code,{children:"70 + 50"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(o.F,{requiresVRChat:!0,short:!0})," Submesh data is not accessible with Udon, so you need to bake this data in Edit mode however you like."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(o.F,{requiresVRChat:!0,short:!0})," Batching will cause issues with this technique as you ",(0,i.jsx)(t.em,{children:"might"})," not be able to bake the triangle data."]}),"\n",(0,i.jsx)(t.p,{children:"Again, whether you should use this technique over splitting into different meshes, or using different colliders for each material, is a different question."}),"\n",(0,i.jsx)(t.h2,{id:"manual-sync-arrives-way-sooner-than-ikvrcobjectsync",children:"Manual Sync arrives way sooner than IK/VRCObjectSync"}),"\n",(0,i.jsx)(n.w,{children:(0,i.jsx)(o.F,{requiresVRChat:!0,short:!0})}),"\n",(0,i.jsx)(t.h3,{id:"using-player-pools-to-send-and-receive-packets-player-objects",children:"Using Player pools to send and receive packets (Player Objects)"}),"\n",(0,i.jsx)(t.p,{children:"When an object breaks apart, this information arrives through Manual Sync information which is located outside the VRCObjectSync hierarchy."}),"\n",(0,i.jsx)(t.p,{children:"The way I have designed the damage networking in my world is through the use of many player pools (now known as Player Objects, in this case non-persistent ones)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Each player gets their own set of Manual Sync for each specialized ",(0,i.jsx)(t.em,{children:'"packet"'})," it needs to send."]}),"\n",(0,i.jsx)(t.li,{children:"To damage an object, players would submit a packet containing all the individual pieces of damage instances this player has dealt since last serialization."}),"\n",(0,i.jsx)(t.li,{children:"Everyone receives that packet and applies the damage."}),"\n",(0,i.jsx)(t.li,{children:"The default network owner (also known as master) would track the actual health of these objects, and makes sure everyone else agrees on the actual health of the object."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Each player individually tracks the health of those objects locally."})," This has the advantage of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"avoiding ownership transfers altogether, letting multiple players damage the same object simultaneously,"}),"\n",(0,i.jsx)(t.li,{children:"it also avoids a round-trip between the person dealing the damage, and the default network owner confirming that the damage has been dealt,"}),"\n",(0,i.jsxs)(t.li,{children:["if the local player performs an action that breaks the object, it breaks instantly ",(0,i.jsx)(t.strong,{children:"without waiting for any response from the network"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As a consequence, the objects break as soon as the message is received, and if the local player breaks the object, it also breaks locally with no delay, even if they do not own the object itself,\nmaking for a very responsive system that emphasizes visual effects over correctness and proper damage attribution."}),"\n",(0,i.jsx)(t.h3,{id:"damage-packets-arrive-too-soon-before-the-visual-cause-of-damage-happens",children:"Damage packets arrive too soon, before the visual cause of damage happens"}),"\n",(0,i.jsx)(t.p,{children:"This works great with damage coming from bullets."}),"\n",(0,i.jsx)(t.p,{children:"However, this causes a major problem: Damage caused by collisions with walls are always transmitted by the network owner of the rigidbody itself,\nbut the damage packets from this collision often arrive to other players before the object is even close to hitting the walls."}),"\n",(0,i.jsx)(t.p,{children:"This causes objects to break in midair, or worse, break before they are even thrown."}),"\n",(0,i.jsx)(t.p,{children:"The solution I chose to fix this is to create a 2nd specialized damage packet, dedicated to collisions with walls. The network owner of the rigidbody\nwill sumbit those specialized damage packets, containing the position of the rigidbody when it collides with anything."}),"\n",(0,i.jsx)(t.h3,{id:"breaking-objects-from-collisions-are-intentionally-delayed",children:"Breaking objects from collisions are intentionally delayed"}),"\n",(0,i.jsxs)(t.p,{children:["On other clients, if receiving that specialized damage packet would have resulted in the health going from non-zero value to zero, then the breaking visual effect\nwould be ",(0,i.jsx)(t.strong,{children:"intentionally delayed"})," until either of the following happens:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The rigidbody position reaches the position indicated within that specialized packet, or"}),"\n",(0,i.jsx)(t.li,{children:"A maximum time limit of 1 second since receiving that packet is reached, or"}),"\n",(0,i.jsx)(t.li,{children:"The object ends up damaged by any other reason than a collision, such as a bullet hitting it."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are edges cases to this approach, for instance if the object breaks from a collision, but not as a result of itself being thrown,\nbut as a result of another object being thrown into it. This is still something I may have to fix."}),"\n",(0,i.jsxs)(t.p,{children:["In addition, ",(0,i.jsx)(t.strong,{children:"this approach is really sensitive to deserialization order"}),", which is a flaw. In particular, the default network owner will submit updates\nabout the actual health of the objects so that other players may try to resync in case of a disagreement on the health of the object."]}),"\n",(0,i.jsx)(t.p,{children:"There is a special case when the default network owner declares that the health went from non-zero to zero,\ncausing the object to break instantly if it was not already broken by a damage packet; this is a problem if the default network owner also happens to be the\nrigidbody owner, because the damage packets will often be received at the same time as the confirmations of changes in health. This has not been solved in a sane way."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"I have not tried other approaches yet, such as using Udon Continuous sync, or abusing the state of another VRCObjectSync,\nor using some alternative to VRCObjectSync or a custom implementation."})}),"\n",(0,i.jsx)(t.p,{children:"Also, when the object gets broken, the GameObject that contains the VRCObjectSync must not be disabled, otherwise the rigidbody\nstate updates may not reach other clients. For this reason, I disable the renderer, and force the position, rotation, velocity, and\nangular velocity of the rigidbody to be constants."}),"\n",(0,i.jsx)(t.p,{children:"This object is also respawned invisibly with an advance delay on the rigidbody owner, before it is enabled back on all clients,\nso that the non-owners will not interpolate the position of the rigidbody and cause unintentional collisions with other objects."}),"\n",(0,i.jsx)(t.h2,{id:"bullet-hits-do-not-transfer-ownership",children:"Bullet hits do not transfer ownership"}),"\n",(0,i.jsx)(n.w,{children:(0,i.jsx)(o.F,{requiresVRChat:!0,short:!0})}),"\n",(0,i.jsx)(t.p,{children:"If a player shoots at a movable object, that object should be pushed away a little."}),"\n",(0,i.jsx)(t.p,{children:"When two or more players shoot at the same object simultaneously, we want to avoid intensive ownership transfers."}),"\n",(0,i.jsx)(t.p,{children:"For this reason, when a player shoots an object, that player transmits a specialized packet in the same way as described in the previous section using Player Objects.\nThis packet describes where the bullet was shot from, what was the direction of that bullet, and where the bullet hit in the local space of that object."}),"\n",(0,i.jsx)(t.p,{children:"When that packet is received by the owner of the rigidbody, it reapplies the force of that bullet onto the object.\nThis allows the object to be pushed away a little by both players, without ownership transfers, although there is a visible delay from the shooter's perspective."}),"\n",(0,i.jsx)(t.h2,{id:"lookup-tables",children:"Lookup tables"}),"\n",(0,i.jsx)(t.p,{children:"In order to do this project, I ended up having a bunch of lookup tables which are baked in Edit mode:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["When a bullet hits a collider, the decals needs to stick to the visual representation of that collider, even if it's a moving object.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Moving objects are not necessarily object-synced. For instance, doors are networked, but the rigidbody of the door is not itself a networked object,\nso ",(0,i.jsx)(t.strong,{children:"even some non-networked objects need to have a way to identify them"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Therefore, I associated a numerical identifier to every object that may need one, creating a parallel Network ID of some sorts."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"If an object can be damaged, then we need to identify this object for transmission of damage packets, so that damage effects can be applied back on every client."}),"\n",(0,i.jsx)(t.li,{children:"When a collider is hit for any reason, we need to produce a sound effect, so each collider is associated with a collision sound effect identifier\nbased on either its Physics Material or the materials of the renderer; or multiple ones if there are sub-meshes, so the triangle index lookup table is part of that too."}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85041:(e,t,a)=>{a.d(t,{F:()=>o});a(96540);var i=a(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var n=a(74848);function o(e){let{requiresVRChat:t,isUniversal:a,requiresBasis:o,notVRChat:r,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:u,compatibleWithVSeeFace:b,compatibleWithWarudo:p,compatibleWithBeatSaber:m,requiresWarudo:g,notCompatibleWithGltf:f,compatibleWithVNyan:w,short:j,supporter:y}=e,v=j?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:"Compatible with "}),_=j?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:"Requires "});return(0,n.jsxs)("span",{children:[t?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",_,"VRChat"]}):"",h?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",_,"Resonite"]}):"",o?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_basis),children:["\ud83d\udd3a ",_,"Basis"]}):"",d?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",_,"VRM"]}):"",l?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[_,"SteamVR"]}):"",c?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",_,"ChilloutVR"]}):"",u?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[v,"VSFAvatar"]}):"",b?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[v,"VSeeFace"]}):"",w?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[v,"VNyan"]}):"",p?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[v,"Warudo"]}):"",m?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[v,"Beat Saber"]}):"",f?(0,n.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:["\ud83d\udcf9 ",_,"Warudo"]}):"",a?(0,n.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",r?(0,n.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",y?(0,n.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,n.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,t,a)=>{a.d(t,{w:()=>s});a(96540);var i=a(74848);function s(e){let{children:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}},66926:(e,t,a)=>{a.d(t,{U:()=>o});a(96540);var i=a(74848);const s="https://large.docs.cdn.hai-vr.dev",n=s+"/assets/docs/";function o(e){const t=null!=e.cdn?s+e.cdn:n+e.src.substring(e.src.lastIndexOf("/")+1);return(0,i.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,i.jsx)("source",{src:t})})}},90200:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/collision-effects-f2dc82b8c6d285f0b109459785e7208d.jpg"}}]);