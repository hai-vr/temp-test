"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3361],{51771:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453),o=i(66926);const r={title:"FaceTra Shape Creator"},l=void 0,a={id:"changelogs/facetra-shape-creator",title:"FaceTra Shape Creator",description:"0.9.0",source:"@site/docs/changelogs/facetra-shape-creator.md",sourceDirName:"changelogs",slug:"/changelogs/facetra-shape-creator",permalink:"/docs/changelogs/facetra-shape-creator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FaceTra Shape Creator"},sidebar:"changelogsSidebar",previous:{title:"Double Hip Tracker",permalink:"/docs/changelogs/double-hip-tracker"},next:{title:"H-View",permalink:"/docs/changelogs/h-view"}},h={},d=[{value:"0.9.0",id:"090",level:2},{value:"Faster Edit mode performance",id:"faster-edit-mode-performance",level:3},{value:"Additions in generation capabilities",id:"additions-in-generation-capabilities",level:3},{value:"Blendshapes for all Shapes",id:"blendshapes-for-all-shapes",level:4},{value:"Deformers are now optional",id:"deformers-are-now-optional",level:4},{value:"Tailoring improvements",id:"tailoring-improvements",level:4},{value:"Construction Pose",id:"construction-pose",level:4},{value:"Jaw Calibration",id:"jaw-calibration",level:4},{value:"New shape: NoseSneer Left/Right",id:"new-shape-nosesneer-leftright",level:4},{value:"Other additions",id:"other-additions",level:4},{value:"Fixes",id:"fixes",level:3},{value:"UI and Miscellaneous",id:"ui-and-miscellaneous",level:3},{value:"0.8.0-2024-04-08-2020",id:"080-2024-04-08-2020",level:2},{value:"New Construction Line: Blush Modifier Selection",id:"new-construction-line-blush-modifier-selection",level:3},{value:"Convert from Unified Expressions to ARKit",id:"convert-from-unified-expressions-to-arkit",level:3},{value:"0.7.0-2024-03-29-0903",id:"070-2024-03-29-0903",level:2},{value:"Major feature: Add Tailoring",id:"major-feature-add-tailoring",level:3},{value:"Fix: Add workaround for small meshes",id:"fix-add-workaround-for-small-meshes",level:3},{value:"Other fixes",id:"other-fixes",level:3},{value:"0.6.0-2024-01-18-0056",id:"060-2024-01-18-0056",level:2},{value:"0.5.1-2024-01-13-1051",id:"051-2024-01-13-1051",level:2},{value:"0.5.0-2024-01-08-0549",id:"050-2024-01-08-0549",level:2},{value:"0.4.0-2024-01-05-0349",id:"040-2024-01-05-0349",level:2},{value:"0.3.0-2023-11-13-2123",id:"030-2023-11-13-2123",level:2},{value:"0.2.0-2023-11-12-1935",id:"020-2023-11-12-1935",level:2},{value:"Fixes",id:"fixes-1",level:3},{value:"Better handling of Jaw (Lower) movement",id:"better-handling-of-jaw-lower-movement",level:3},{value:"Some of the Mouth shapes can have blendshapes",id:"some-of-the-mouth-shapes-can-have-blendshapes",level:3},{value:"Neck can be ignored on face meshes that contains the upper body",id:"neck-can-be-ignored-on-face-meshes-that-contains-the-upper-body",level:3},{value:"Nose can be excluded from Mouth Left/Mouth Right",id:"nose-can-be-excluded-from-mouth-leftmouth-right",level:3},{value:"0.1.0-2023-11-09-0044",id:"010-2023-11-09-0044",level:2},{value:"0.0.5-2023-11-08-0052",id:"005-2023-11-08-0052",level:2},{value:"0.0.4-2023-11-07-1618",id:"004-2023-11-07-1618",level:2},{value:"0.0.3-2023-11-07-0201",id:"003-2023-11-07-0201",level:2},{value:"0.0.2-2023-11-07-0046",id:"002-2023-11-07-0046",level:2},{value:"0.0.1",id:"001",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"090",children:"0.9.0"}),"\n",(0,s.jsx)(n.h3,{id:"faster-edit-mode-performance",children:"Faster Edit mode performance"}),"\n",(0,s.jsx)(n.p,{children:"The overall performance of the application in Edit mode has been improved."}),"\n",(0,s.jsx)(n.p,{children:"On my machine, some operations that used to take 110ms now take 15ms."}),"\n",(0,s.jsx)(n.p,{children:"During uploads and builds, the performance improvements are negligible. It turns out, the majority of the time is spent invoking an internal\nUnity function to create blendshapes."}),"\n",(0,s.jsx)(n.p,{children:"This seemingly cannot be improved in a non-destructive manner as the execution duration entirely depends on the number of vertices\nmoved by existing blendshapes on the base face mesh."}),"\n",(0,s.jsx)(o.U,{src:"/updates/img/2024-11-25-p0-6JaYH1MJ0A.mp4"}),"\n",(0,s.jsx)(n.h3,{id:"additions-in-generation-capabilities",children:"Additions in generation capabilities"}),"\n",(0,s.jsx)(n.h4,{id:"blendshapes-for-all-shapes",children:"Blendshapes for all Shapes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All shapes can now have blendshapes added to them."}),"\n",(0,s.jsx)(n.li,{children:"Shapes that don't normally use the Mouth Divider can now have blendshapes that use the Mouth Divider."}),"\n",(0,s.jsx)(n.li,{children:"Shapes that move a muscle in the middle of the face can now have blendshapes that the Mouth Divider."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"deformers-are-now-optional",children:"Deformers are now optional"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deformers can be turned off per shape, in cases where you only use blendshapes instead of deformers."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"tailoring-improvements",children:"Tailoring improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The result of Tailoring can now be exported to a new FaceTra File that does not require tailoring."}),"\n",(0,s.jsx)(n.li,{children:"Blendshapes from the Adaptive File can now be optionally included."}),"\n",(0,s.jsxs)(n.li,{children:["Deformers can be overriden per shape.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'When a deformer is overriden in tailoring mode, a new "Restore from adaptive" button copies the position, rotation, distance, and curve from the tailored version.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"construction-pose",children:"Construction Pose"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can now explicitly define base blendshapes that will serve as the rest pose of the face in the Construction Pose panel in the construction lines."}),"\n",(0,s.jsx)(n.li,{children:"Deformations will now be applied relative to that Construction Pose."}),"\n",(0,s.jsx)(n.li,{children:"The Construction Pose does not necessarily have to be the blendshapes used for the stylization of the avatar, it only needs to be\nthe blendshapes used at the time the contents of the FaceTra File is created."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"jaw-calibration",children:"Jaw Calibration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In order to fix a design mistake in all versions of FaceTra prior to 0.9, this update introduces a new construction line called ",(0,s.jsx)(n.em,{children:"Jaw Calibration"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"Jaw Calibration"})," construction line is the blendshape that is going to be used as a base to select features inside the mouth,\nsuch as the Mouth Divider, Teeth, and Tongue."]}),"\n",(0,s.jsxs)(n.li,{children:["In previous versions, we used to use the same blendshape as the one used for the ",(0,s.jsx)(n.em,{children:"JawOpen"})," shape. This is a problem, because this leads to all\nprevious construction lines becoming incorrect as soon as you decide to customize the style of the JawOpen shape."]}),"\n",(0,s.jsxs)(n.li,{children:["In terms of migration:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is not a breaking change. Old FaceTra files will continue to produce the same face as they used to."}),"\n",(0,s.jsx)(n.li,{children:"New FaceTra files will use the new Jaw Calibration by default."}),"\n",(0,s.jsx)(n.li,{children:"Old FaceTra files will not use the new Jaw Calibration. It must be manually enabled by the user."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"new-shape-nosesneer-leftright",children:"New shape: NoseSneer Left/Right"}),"\n",(0,s.jsx)(n.p,{children:"A new shape has been added: NoseSneer Left/Right."}),"\n",(0,s.jsx)(n.p,{children:"In VR, this is known to be supported by the Quest Pro headset."}),"\n",(0,s.jsx)(n.p,{children:"If you choose to define NoseSneer using blendshapes, the left and right blendshapes are separate, and do not use any divider."}),"\n",(0,s.jsx)(n.h4,{id:"other-additions",children:"Other additions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upper teeth can now be included in the deformation of Jaw Open, Jaw Left/Right, and Jaw Forward."}),"\n",(0,s.jsxs)(n.li,{children:["When applying the same FaceTra file on multiple avatars with distinct model files that share the same base (i.e. both avatars are Manuka),\nbut the head of the two models have an offset (i.e. because the character wears high heels), the FaceTra Shape Creator component can\nnow specify a corrective offset that will be applied to one of the avatars, in order to re-align the head.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Since this is set at the component level, this does not modify the contents of the FaceTra file data."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Add new construction line "Eye Visualization". This construction line has no effect on the final result of the avatar,\nand is only used as a hint to determine which vertices are part of the eyelashes, so that the Eye Divider can show a preview\nbefore you define the shape later on.'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix remapping blendshape conventions should no longer generate incorrect names."}),"\n",(0,s.jsx)(n.li,{children:"Support cases where the skinned mesh has no Head bone."}),"\n",(0,s.jsx)(n.li,{children:"Support cases where the skinned mesh has no bone number 0 assigned to it."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ui-and-miscellaneous",children:"UI and Miscellaneous"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can now hold the ALT key to preview one side of the face or both sides. This can be turned off in the component settings."}),"\n",(0,s.jsx)(n.li,{children:"Add a button to bake specifically to perform a VSFAvatar export."}),"\n",(0,s.jsx)(n.li,{children:"Gizmos are no longer shown when the component is not selected."}),"\n",(0,s.jsx)(n.li,{children:"Gizmos are now forced to be shown when entering Vertex selection."}),"\n",(0,s.jsx)(n.li,{children:'In the UI, "Pupil" has been renamed "Pupil and Iris". There is no change in specification, as it was always meant to be both.'}),"\n",(0,s.jsx)(n.li,{children:"Make it possible to install the NDMF classes of FaceTra even if NDMF is not installed (i.e. for Resonite export)."}),"\n",(0,s.jsx)(n.li,{children:"FaceTra Shape Creator has internally migrated to part of the codebase used in Starmesh."}),"\n",(0,s.jsx)(n.li,{children:"Uninitialized deformers are now ignored instead of causing a deformation."}),"\n",(0,s.jsxs)(n.li,{children:["Performance improvement details:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In Edit mode, we will only create one blendshape per iteration (instead of three per open panel).","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is because creating blendshapes is an expensive operation, which entirely depends on the complexity of the existing blendshapes of the current avatar base model."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In Edit Mode, will keep a history of the last 60 iterations until the component becomes unselected or a build is triggered.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This avoids creating copies of the mesh, which is expensive."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Move the generation of the mesh in Edit mode to a dedicated update loop, as some of the previous update locations\nhad the possibility of being executed multiple times per frame (i.e. multiple keystrokes since the last frame)."}),"\n",(0,s.jsxs)(n.li,{children:["In Edit mode, generating meshes will be faster when the construction line panels are closed.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is because there is no need to recalculate masks when construction lines are not changed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Avoid repetitive mesh data access, like vertex count, bones, or bindposes."}),"\n",(0,s.jsx)(n.li,{children:"Avoid repeating vector operations inside for loops."}),"\n",(0,s.jsx)(n.li,{children:"In Edit mode and during builds, skip blendshape removal when not necessary."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"080-2024-04-08-2020",children:"0.8.0-2024-04-08-2020"}),"\n",(0,s.jsxs)(n.h3,{id:"new-construction-line-blush-modifier-selection",children:["New Construction Line: ",(0,s.jsx)(n.a,{href:"/docs/products/facetra-shape-creator/construction-lines#optional-blush-modifier-selection",children:"Blush Modifier Selection"})]}),"\n",(0,s.jsx)(n.p,{children:"Many avatars have blendshapes hidden inside the head to make the character blush."}),"\n",(0,s.jsx)(n.p,{children:"However, when you squint, or when you puff your cheeks, these blush blendshapes will visibly clip through your face expressions."}),"\n",(0,s.jsx)(n.p,{children:"To address this, Blush Modifier Selection is a new construction line, which can only be selected using blendshapes (it is not a traditional vertex selection).\nIt can be left empty."}),"\n",(0,s.jsx)(n.p,{children:"When blendshapes are added to the Blush Modifier Selection, the blendshape will be simulated to be active, so that they will be moved by the following shapes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cheek Squint"}),"\n",(0,s.jsx)(n.li,{children:"Cheek Puff"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, this will not work with all avatar bases. The density of the blush mesh needs to be similar (or half as similar) to the face mesh itself. If it's a gigantic polygon, it will not work so well."}),"\n",(0,s.jsx)(o.U,{src:"/docs/products/facetra-shape-creator/img/blush-facetra-f.mp4"}),"\n",(0,s.jsx)(n.h3,{id:"convert-from-unified-expressions-to-arkit",children:"Convert from Unified Expressions to ARKit"}),"\n",(0,s.jsxs)(n.p,{children:["Functionality almost identical to ",(0,s.jsx)(n.a,{href:"/docs/products/prefabulous/universal/convert-blendshape-conventions",children:"Prefabulous Convert Blendshape Conventions"})," has been added natively to FaceTra Shape Creator, in the Output section.\nThis only affects blendshapes that FaceTra creates, and will not affect any other non-face tracking related blendshapes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Contrary to Prefabulous, the VRChat SDK is not required."}),"\n",(0,s.jsxs)(n.li,{children:["This allows you to export blendshapes using the ARKit naming convention. It will still be a bit messy as FaceTra creates many more blendshapes than ARKit needs, such as left/right variants for blendshapes that do not have left/right variants in ARKit.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The blendshapes will only be converted when entering Play mode, or baking the avatar using NDMF, or preparing a Resonite bake using FaceTra. Edit mode will still display the blendshapes using the Unified Expressions naming convention."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"070-2024-03-29-0903",children:"0.7.0-2024-03-29-0903"}),"\n",(0,s.jsxs)(n.h3,{id:"major-feature-add-tailoring",children:["Major feature: Add ",(0,s.jsx)(n.a,{href:"/docs/products/facetra-shape-creator/tailoring",children:"Tailoring"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tailoring allows you to transfer a FaceTra file made for one avatar base, to a completely different avatar base."}),"\n",(0,s.jsx)(n.li,{children:"For example: Transfer from Karin to Lime, or transfer from Kikyo to Moe."}),"\n",(0,s.jsxs)(n.li,{children:["Tailoring works by transferring deformations relative to the Construction Lines of the original avatar base, to the Construction Lines of your new avatar base.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The difference in size of the Construction Lines is taken into account. For example, when the width of the mouth differs greatly between the two avatar bases, the deformations will be scaled accordingly."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"When using Tailoring, you only need to specify the Construction Lines of your new avatar base, and the blendshapes of your new avatar base."}),"\n",(0,s.jsx)(n.li,{children:"This feature is experimental."}),"\n"]}),"\n",(0,s.jsx)(o.U,{src:"/docs/products/facetra-shape-creator/img/tailoring/T5A5uJCB8L.mp4"}),"\n",(0,s.jsx)(n.h3,{id:"fix-add-workaround-for-small-meshes",children:"Fix: Add workaround for small meshes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Some meshes exported from Blender have an incorrect scale of 0.01 or similar."}),"\n",(0,s.jsx)(n.li,{children:"This triggers an internal conflict with Unity."}),"\n",(0,s.jsx)(n.li,{children:"Due to the nature of purchased avatars and reimporting models with different scale or coordinate system, it is preferable not ask the user to fix the export themselves."}),"\n",(0,s.jsxs)(n.li,{children:["To fix this, if the Workaround for small meshes is enabled in Data Calibration, then:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We create a blendshape with a maximum weight of 10000 instead of the usual 100 (a hundred times larger)."}),"\n",(0,s.jsx)(n.li,{children:"The components (vertex, normal, tangent) are a hundred times larger."}),"\n",(0,s.jsx)(n.li,{children:"This hundred times factor prevent the vertices from being discarded."}),"\n",(0,s.jsx)(n.li,{children:"Since the controlling animators only animate blendshapes to the value of 100 (and even then, in the case of VRChat, it clamps to 100), the blendshapes are effectively at the expected weight at 100."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other-fixes",children:"Other fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Unassigning the Face Mesh is now done by pressing a "\xd7" button, so that the face tracking mesh is safely removed from the mesh.'}),"\n",(0,s.jsx)(n.li,{children:"The user is warned if the model was imported with no normals or tangents, as this is not supported."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"060-2024-01-18-0056",children:"0.6.0-2024-01-18-0056"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If your model already has face tracking blendshapes, you can now reuse the those existing blendshapes to build new shapes.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Previously, using existing face tracking blendshapes was not supported as they were renamed before FaceTra creates its own blendshapes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"051-2024-01-13-1051",children:"0.5.1-2024-01-13-1051"}),"\n",(0,s.jsx)(n.p,{children:"Try to fix an issue with direction vectors when the avatar has an offset:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Direction vectors may have been miscalculated in avatars that have an offset."}),"\n",(0,s.jsx)(n.li,{children:"Direction vectors are now converted between spaces by converting the start and end position between spaces."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"050-2024-01-08-0549",children:"0.5.0-2024-01-08-0549"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add option for a less greedy vertex selection:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On some models, the tongue may share vertices with the rest of the face."}),"\n",(0,s.jsx)(n.li,{children:"Add an option on each vertex selection section to switch to a less greedy vertex selection."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The documentation has been moved from Notion to ",(0,s.jsx)(n.a,{href:"/docs/products/facetra-shape-creator",children:"this location"}),",\nwith additional illustrations."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"040-2024-01-05-0349",children:"0.4.0-2024-01-05-0349"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change mesh calibration to support meshes that have a non-zero origin (offset)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mesh calibration is now done by converting vertices to avatar space through the 0th bindpose, which is generally the hip bone."}),"\n",(0,s.jsxs)(n.li,{children:["\u26a0\ufe0f\u26a1 This means ",(0,s.jsx)(n.strong,{children:"if the user shifts the hip up or down"}),", this could cause existing FaceTra rigs to cease functioning as expected.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Contact me on ",(0,s.jsx)(n.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'For this reason there is now a "Override Bone Zero" option in mesh calibration to recalibrate the existing FaceTra data if necessary.'}),"\n",(0,s.jsx)(n.li,{children:"Existing mesh calibration options have been grayed out."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make vertex selection more aggressive."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vertex selection will now add neighbours of vertices that have the exact same position."}),"\n",(0,s.jsx)(n.li,{children:"This is intended to correct for teeth/tongue selection issues some users were having."}),"\n",(0,s.jsxs)(n.li,{children:["\u26a0\ufe0f\u26a1 Since the selection is more aggressive, ",(0,s.jsx)(n.strong,{children:"this might expand the existing selections"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Contact me on ",(0,s.jsx)(n.a,{href:"/docs/other/discord",children:"Discord"})," if this happens to you."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add FTWireMeshDebugger component for support requests."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"030-2023-11-13-2123",children:"0.3.0-2023-11-13-2123"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(fix) The component is now removed from the baked version"}),"\n",(0,s.jsxs)(n.li,{children:["Add experimental option to deepen the eye socket","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Eye socket vertices can now be projected into a plane to deepen it"}),"\n",(0,s.jsx)(n.li,{children:"This is meant to help if the iris is clipping into the eye socket when using eye tracking"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"020-2023-11-12-1935",children:"0.2.0-2023-11-12-1935"}),"\n",(0,s.jsx)(n.h3,{id:"fixes-1",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(fix) MouthApeShape now uses the same pullers as MouthClosed","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u26a0\ufe0f\u26a1 ",(0,s.jsx)(n.em,{children:"The appearance of MouthApeShape will change, but most face tracking animators do not use this shape."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(fix) originalMesh must now be non-null for our systems to run"}),"\n",(0,s.jsx)(n.li,{children:"Add error messages when configuration may be incorrect"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"better-handling-of-jaw-lower-movement",children:"Better handling of Jaw (Lower) movement"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"Teeth Selection" renamed to "Teeth Upper Selection"'}),"\n",(0,s.jsx)(n.li,{children:'Add new "Teeth Lower Selection"'}),"\n",(0,s.jsx)(n.li,{children:'"Puller Only Lower" renamed to "Exclude Upper Mouth"'}),"\n",(0,s.jsx)(n.li,{children:'Add "Exclude Upper Mouth" to JawOpen'}),"\n",(0,s.jsx)(n.li,{children:'Add new "Include Teeth Lower" to all Jaw* shapes'}),"\n",(0,s.jsx)(n.li,{children:'Add new "Include Tongue Lower" to all Jaw* shapes'}),"\n",(0,s.jsx)(n.li,{children:"Add blendshape construction to JawOpen for Teeth Upper, Teeth Lower, and Tongue"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"some-of-the-mouth-shapes-can-have-blendshapes",children:"Some of the Mouth shapes can have blendshapes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add Mouth Upper and Mouth Lower blendshapes construction","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add to all Lip* and Mouth* shapes that use the left/right divider except MouthPress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"neck-can-be-ignored-on-face-meshes-that-contains-the-upper-body",children:"Neck can be ignored on face meshes that contains the upper body"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add Neck Separator","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The neck separator is by default OFF"}),"\n",(0,s.jsx)(n.li,{children:"Use the neck separator if your head mesh is merged with the rest of the body"}),"\n",(0,s.jsx)(n.li,{children:"Use it to prevent jaw movement from affecting the rest of your body"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nose-can-be-excluded-from-mouth-leftmouth-right",children:"Nose can be excluded from Mouth Left/Mouth Right"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add Nose projection","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The nose projection is by default OFF"}),"\n",(0,s.jsx)(n.li,{children:"Use the nose projection if the nose needs to be excluded from some shapes"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Add Exclude Nose Power to Mouth Left/MouthRight","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cancels the movement of the nose by the given power"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"010-2023-11-09-0044",children:"0.1.0-2023-11-09-0044"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add a opt-in checkbox so that the Jaw puller on JawLeftRight and JawForward only affect the lower part of the mouth divider on avatars with large jaws"}),"\n",(0,s.jsx)(n.li,{children:"Add support for non-1 scaled meshes"}),"\n",(0,s.jsxs)(n.li,{children:["Add support for optional EyeLook pupil blendshapes:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EyeLook Up/Down/In/Out now have additional optional blendshapes for moving the pupil Up/Down/In/Out"}),"\n",(0,s.jsx)(n.li,{children:"EyeLook In/Out should now have two additional optional blendshapes to move the left pupil and the right pupil individually"}),"\n",(0,s.jsx)(n.li,{children:"This is to allow converting traditional LookLeft/LookRight blendshapes to EyeLookIn/EyeLookOut"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Organize mesh data calibration into its own category","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Opening that category will show debug data in the scene"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Newtonsoft.Json is no longer required to use the tool for Resonite/VRM:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Newtonsoft.Json is no longer required"}),"\n",(0,s.jsx)(n.li,{children:"This allows using the tool for Resonite or VRM projects in a new Unity project"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"005-2023-11-08-0052",children:"0.0.5-2023-11-08-0052"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["(bug) Fix eye divider was incorrect is now mirrored on the X axis\n\u26a0\ufe0f\u26a1 ",(0,s.jsx)(n.strong,{children:"Fixes the incorrect appearance of all Eye shapes"}),": Please reupload your avatar on your respective platforms"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(bug) Fix null dereference on serialized object"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["MouthClosed now has its own shapes for the mouth, and only reuses JawOpen's Jaw Puller\n\u26a0\ufe0f\u26a1 ",(0,s.jsx)(n.strong,{children:"Changes the appearance of MouthClosed"}),": You ",(0,s.jsx)(n.strong,{children:"must"})," check MouthClosed again."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Overwrite and choose which blendshapes to export"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Existing blendshapes are now overwritten instead of skipped"}),"\n",(0,s.jsx)(n.li,{children:"In the component, the new Output section can be used to choose which shapes to write"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a huge space at the bottom of the editor to allow double clicking foldouts without scrolling"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"004-2023-11-07-1618",children:"0.0.4-2023-11-07-1618"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix MouthLowerDown and MouthUpperUp were not processed using Left/Right dividers"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"003-2023-11-07-0201",children:"0.0.3-2023-11-07-0201"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix vertex display was incorrect on Blender coordinate system"}),"\n",(0,s.jsx)(n.li,{children:"On Editor Enable, require generation of the mesh"}),"\n",(0,s.jsx)(n.li,{children:"Show less vertices on dividers"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"002-2023-11-07-0046",children:"0.0.2-2023-11-07-0046"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix an issue where vertices could not be selected if the avatar mesh is using Blender coordinate system"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"001",children:"0.0.1"}),"\n",(0,s.jsx)(n.p,{children:"Beginning of trials."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},66926:(e,n,i)=>{i.d(n,{U:()=>r});i(96540);var s=i(74848);const t="https://downscale.srv.hai-vr.dev",o=t+"/assets/docs/";function r(e){const n=null!=e.cdn?t+e.cdn:o+e.src.substring(e.src.lastIndexOf("/")+1);return(0,s.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,s.jsx)("source",{src:n})})}}}]);