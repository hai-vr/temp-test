"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5174],{94395:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/01/05/p0","metadata":{"permalink":"/updates/2024/01/05/p0","source":"@site/updates/2024-01-05-p0.md","title":"\u2699\ufe0f ComboGestureExpressions 3.1.5102","description":"Fixes","date":"2024-01-05T00:00:00.000Z","formattedDate":"January 5, 2024","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"\u2600\ufe0f Assign UV Tile (Prefabulous V1.7)","permalink":"/updates/2024/01/02/p0"}},"content":"### Fixes\\n\\nDeselect old clip before opening clip in Visual Expressions Editor:\\n- Try to fix an issue where Visual Expressions Editor will focus the wrong clip if the Project view already has another clip selected.\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/combo-gesture-expressions#315102-beta)"},{"id":"/2024/01/02/p0","metadata":{"permalink":"/updates/2024/01/02/p0","source":"@site/updates/2024-01-02-p0.md","title":"\u2600\ufe0f Assign UV Tile (Prefabulous V1.7)","description":"New component: Assign UV Tile","date":"2024-01-02T00:00:00.000Z","formattedDate":"January 2, 2024","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2699\ufe0f ComboGestureExpressions 3.1.5102","permalink":"/updates/2024/01/05/p0"},"nextItem":{"title":"\u2600\ufe0f Delete Polygons (Prefabulous V1.6)","permalink":"/updates/2023/12/31/p0"}},"content":"### New component: [Assign UV Tile](/docs/products/prefabulous-avatar/hai-components/assign-uv-tile)\\n\\nA new component, [Assign UV Tile](/docs/products/prefabulous-avatar/hai-components/assign-uv-tile), has been added to Prefabulous Avatar.\\n\\nIf you use Poiyomi Toon shader, this new component can be used in tandem\\nwith [Poiyomi Toon \\"Special FX > UV Tile Discard\\"](https://www.poiyomi.com/special-fx/uv-tile-discard) to toggle portions of a model on and off at runtime.\\n\\n<video controls muted width=\\"816\\">\\n    <source src={require(\'/docs/products/prefabulous-avatar/img/13rQ7HGwPr.mp4\').default}/>\\n</video>\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar/hai-components/assign-uv-tile)\\n\\n### Update [Delete Polygons](/docs/products/prefabulous-avatar/hai-components/delete-polygons)\\n\\nDelete Polygons now has an option to keep the polygons that are still connected to the mesh.\\n\\nOn blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh.\\n\\nThis might help with some avatar models.\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/prefabulous-avatar#170)"},{"id":"/2023/12/31/p0","metadata":{"permalink":"/updates/2023/12/31/p0","source":"@site/updates/2023-12-31-p0.md","title":"\u2600\ufe0f Delete Polygons (Prefabulous V1.6)","description":"New component: Delete Polygons","date":"2023-12-31T00:00:00.000Z","formattedDate":"December 31, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Assign UV Tile (Prefabulous V1.7)","permalink":"/updates/2024/01/02/p0"},"nextItem":{"title":"\u2600\ufe0f Generate Blendshapes for Face Tracking Extensions (Prefabulous V1.5)","permalink":"/updates/2023/12/24/p0"}},"content":"### New component: [Delete Polygons](/docs/products/prefabulous-avatar/hai-components/delete-polygons)\\n\\nA new component, [Delete Polygons](/docs/products/prefabulous-avatar/hai-components/delete-polygons), has been added to Prefabulous Avatar.\\n\\nUse it to delete polygons affected by conflict prevention blendshapes, and other unused decorations hidden inside the mesh.\\n\\n![delete-polygons-compare.png](../docs/products/prefabulous-avatar/img/delete-polygons-compare.png)\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar/hai-components/delete-polygons)\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/prefabulous-avatar#160)"},{"id":"/2023/12/24/p0","metadata":{"permalink":"/updates/2023/12/24/p0","source":"@site/updates/2023-12-24-p0.md","title":"\u2600\ufe0f Generate Blendshapes for Face Tracking Extensions (Prefabulous V1.5)","description":"V1.5","date":"2023-12-24T00:00:00.000Z","formattedDate":"December 24, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Delete Polygons (Prefabulous V1.6)","permalink":"/updates/2023/12/31/p0"},"nextItem":{"title":"\ud83e\uddea Knowledge sharing \\"Recalculate Normals, Retrospective\\"","permalink":"/updates/2023/12/22/p1-ks"}},"content":"## V1.5\\n\\n### New component: [HaiXT Generate Blendshapes for Face Tracking Extensions](/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions)\\n\\nA new component, [HaiXT Generate Blendshapes for Face Tracking Extensions](/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions), has been added to Prefabulous Avatar.\\n\\nIf you have an avatar that already supports face tracking, a new component in Prefabulous Avatar V1.5 can generate non-standard face tracking blendshapes.\\n\\nWhen your eyes are closed, the shape of your eyes will change when you\'re smiling.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions)\\n\\n<video controls muted width=\\"816\\">\\n<source src={require(\'/docs/products/prefabulous-avatar/img/smile-f.mp4\').default}/>\\n</video>\\n\\n### Other\\n\\nI\'ve also tried to fix compatibility issues with Unity 2019.\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/prefabulous-avatar#150)\\n\\n## V1.4\\n\\n### Update [Recalculate Normals](/docs/products/prefabulous-avatar/hai-components/recalculate-normals)\\n\\nRecalculate Normals has an option to Erase Custom Split Normals data on some blendshapes, which might improve blendshapes that flatten the chest.\\n\\nDo NOT try this option unless defects are visible.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar/hai-components/recalculate-normals)\\n\\n### Update [Change Avatar Scale](/docs/products/prefabulous-avatar/component-reference/change-avatar-scale)\\n\\nChange Avatar Scale now uses the Avatar Descriptor view position as the source size:\\n- ChangeAvatarScale reads the Avatar Descriptor view position Y coordinate and uses it as the source size.\\n- This is now the default behaviour.\\n- Old behaviour can be restored by checking \\"Custom Source Size\\".\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar/component-reference/change-avatar-scale)\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/prefabulous-avatar#140)"},{"id":"/2023/12/22/p1-ks","metadata":{"permalink":"/updates/2023/12/22/p1-ks","source":"@site/updates/2023-12-22-p1-ks.md","title":"\ud83e\uddea Knowledge sharing \\"Recalculate Normals, Retrospective\\"","description":"A new knowledge sharing article has been published, \\"Recalculate Normals, Retrospective\\".","date":"2023-12-22T10:00:00.000Z","formattedDate":"December 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2023-12-22T10:00"},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Generate Blendshapes for Face Tracking Extensions (Prefabulous V1.5)","permalink":"/updates/2023/12/24/p0"},"nextItem":{"title":"\u2600\ufe0f Recalculate Normals (Prefabulous V1.3)","permalink":"/updates/2023/12/22/p0"}},"content":"A new knowledge sharing article has been published, \\"Recalculate Normals, Retrospective\\".\\n\\n- 2023-12-22 [\\"Recalculate Normals, Retrospective\\"](https://hai-vr.notion.site/Recalculate-Normals-Retrospective-e8b319e25c5a4b779c220a4d8286ded4)\\n\\n\ud83d\udd0d [View articles](/docs/other/articles)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'/docs/products/prefabulous-avatar/img/JiHvKYMj8A.mp4\').default}/>\\n</video>"},{"id":"/2023/12/22/p0","metadata":{"permalink":"/updates/2023/12/22/p0","source":"@site/updates/2023-12-22-p0.md","title":"\u2600\ufe0f Recalculate Normals (Prefabulous V1.3)","description":"New component: Recalculate Normals","date":"2023-12-22T00:00:00.000Z","formattedDate":"December 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\ud83e\uddea Knowledge sharing \\"Recalculate Normals, Retrospective\\"","permalink":"/updates/2023/12/22/p1-ks"},"nextItem":{"title":"\u2600\ufe0f ComboGestureExpressions V3 for VCC","permalink":"/updates/2023/12/20/p0"}},"content":"### New component: [Recalculate Normals](/docs/products/prefabulous-avatar/hai-components/recalculate-normals)\\n\\nI am releasing \\"Recalculate Normals\\", a new Prefabulous Avatar component \ud83d\udd25\\n\\nThis component will improve the shading of your avatar by recalculating blendshape normals: Light, reflections, rim lights, matcaps,\\nand many more shader features are affected by the altered mesh surfaces.\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/prefabulous-avatar#130)\\n\\n<video controls muted width=\\"816\\">\\n<source src={require(\'./img/2023-12-22-p0-recalc-norms-f.mp4\').default}/>\\n</video>"},{"id":"/2023/12/20/p0","metadata":{"permalink":"/updates/2023/12/20/p0","source":"@site/updates/2023-12-20-p0.md","title":"\u2600\ufe0f ComboGestureExpressions V3 for VCC","description":"Update ComboGestureExpressions","date":"2023-12-20T00:00:00.000Z","formattedDate":"December 20, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Recalculate Normals (Prefabulous V1.3)","permalink":"/updates/2023/12/22/p0"},"nextItem":{"title":"\ud83e\uddea Knowledge sharing \\"Using Udon MIDI as a data bus, retrospective\\"","permalink":"/updates/2023/12/11/p0-ks"}},"content":"### Update [ComboGestureExpressions](/docs/products/combo-gesture-expressions/v3.0-vcc)\\n\\nStarting from versions 3.x and onwards, ComboGestureExpressions will be distributed on VCC.\\n\\nTransform animations are now generated in the FX layer instead of Gesture, and synchronization should be faster.\\n\\n\ud83d\udd0d [View changelog](/docs/changelogs/combo-gesture-expressions#315101-beta)\\n\\n### New package: [Convert ComboGestureToFaceEmo](/docs/products/combo-gesture-expressions/convert-to-faceemo)\\n\\nThe VCC version of ComboGestureExpressions can be used to convert your existing ComboGesture components to [FaceEmo](https://suzuryg.github.io/face-emo/).\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/combo-gesture-expressions/convert-to-faceemo)"},{"id":"/2023/12/11/p0-ks","metadata":{"permalink":"/updates/2023/12/11/p0-ks","source":"@site/updates/2023-12-11-p0-ks.md","title":"\ud83e\uddea Knowledge sharing \\"Using Udon MIDI as a data bus, retrospective\\"","description":"A new knowledge sharing article has been published, \\"Using Udon MIDI as a data bus, retrospective\\".","date":"2023-12-11T00:00:00.000Z","formattedDate":"December 11, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f ComboGestureExpressions V3 for VCC","permalink":"/updates/2023/12/20/p0"},"nextItem":{"title":"\u2600\ufe0f Prefabulous Avatar","permalink":"/updates/2023/12/05/p0"}},"content":"A new knowledge sharing article has been published, \\"Using Udon MIDI as a data bus, retrospective\\".\\n\\n- 2023-12-10 [\\"Using Udon MIDI as a data bus, retrospective\\"](https://hai-vr.notion.site/Using-Udon-MIDI-as-a-data-bus-retrospective-3fe223a25f81446b8407ca3e2bfc7608)\\n\\n\ud83d\udd0d [View articles](/docs/other/articles)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-12-11-p0-ks-UpkShSw54X.mp4\').default}/>\\n</video>"},{"id":"/2023/12/05/p0","metadata":{"permalink":"/updates/2023/12/05/p0","source":"@site/updates/2023-12-05-p0.md","title":"\u2600\ufe0f Prefabulous Avatar","description":"For those who use Modular Avatar, I\'ve just released an experimental package in VCC called \\"Prefabulous Avatar\\".","date":"2023-12-05T00:00:00.000Z","formattedDate":"December 5, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\ud83e\uddea Knowledge sharing \\"Using Udon MIDI as a data bus, retrospective\\"","permalink":"/updates/2023/12/11/p0-ks"},"nextItem":{"title":"\u2600\ufe0f Auto-reset OSC config","permalink":"/updates/2023/12/02/p0"}},"content":"For those who use Modular Avatar, I\'ve just released an experimental package in VCC called \\"Prefabulous Avatar\\".\\n\\nIt\'s a bunch of non-destructive scripts to automate invasive tasks that are generally unsuitable for distribution.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/prefabulous-avatar)\\n\\n![pvsUzAgoIb.png](..%2Fdocs%2Fproducts%2Fprefabulous-avatar%2Fimg%2FpvsUzAgoIb.png)"},{"id":"/2023/12/02/p0","metadata":{"permalink":"/updates/2023/12/02/p0","source":"@site/updates/2023-12-02-p0.md","title":"\u2600\ufe0f Auto-reset OSC config","description":"I am releasing \\"Auto-reset OSC config\\".","date":"2023-12-02T00:00:00.000Z","formattedDate":"December 2, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Prefabulous Avatar","permalink":"/updates/2023/12/05/p0"},"nextItem":{"title":"\u2600\ufe0f BlendTree Viewer","permalink":"/updates/2023/11/17/p0"}},"content":"I am releasing \\"Auto-reset OSC config\\".\\n\\nDid you forget to reset your OSC config, again? Once installed, this tool will automatically reset the OSC config after every successful VRChat avatar upload.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/auto-reset-osc-config)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'/docs/products/img/auto-reset-osc-config/auto-remove-osc-f.mp4\').default}/>\\n</video>"},{"id":"/2023/11/17/p0","metadata":{"permalink":"/updates/2023/11/17/p0","source":"@site/updates/2023-11-17-p0.md","title":"\u2600\ufe0f BlendTree Viewer","description":"I am releasing \\"BlendTree Viewer\\", which lets you view large blend trees in a compact view.","date":"2023-11-17T00:00:00.000Z","formattedDate":"November 17, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Auto-reset OSC config","permalink":"/updates/2023/12/02/p0"},"nextItem":{"title":"\u2699\ufe0f Lightbox Viewer, Animation Viewer, Blendshape Viewer, Visual Expressions Editor, and Property Finder for VCC","permalink":"/updates/2023/11/17/p1"}},"content":"I am releasing \\"BlendTree Viewer\\", which lets you view large blend trees in a compact view.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/blendtree-viewer)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'/docs/products/img/blendtree-viewer/2023-11-17_00-10-56_ShareX.mp4\').default}/>\\n</video>"},{"id":"/2023/11/17/p1","metadata":{"permalink":"/updates/2023/11/17/p1","source":"@site/updates/2023-11-17-p1.md","title":"\u2699\ufe0f Lightbox Viewer, Animation Viewer, Blendshape Viewer, Visual Expressions Editor, and Property Finder for VCC","description":"I am releasing \\"Lightbox Viewer\\", \\"Animation Viewer\\", \\"Blendshape Viewer\\", \\"Visual Expressions Editor\\", and \\"Property Finder\\" to my VCC listing \u2728","date":"2023-11-17T00:00:00.000Z","formattedDate":"November 17, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f BlendTree Viewer","permalink":"/updates/2023/11/17/p0"},"nextItem":{"title":"\u2728 FaceTra Shape Creator V0.3: Deepen Eye Socket","permalink":"/updates/2023/11/13/p0"}},"content":"I am releasing \\"Lightbox Viewer\\", \\"Animation Viewer\\", \\"Blendshape Viewer\\", \\"Visual Expressions Editor\\", and \\"Property Finder\\" to my VCC listing \u2728\\n\\nAdditional free tools such as ComboGestureExpressions will soon be available there too \ud83d\udcda\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products#vcc-listing)"},{"id":"/2023/11/13/p0","metadata":{"permalink":"/updates/2023/11/13/p0","source":"@site/updates/2023-11-13-p0.md","title":"\u2728 FaceTra Shape Creator V0.3: Deepen Eye Socket","description":"I\'ve added an experimental option to let you modify the eye socket so that it is deeper.","date":"2023-11-13T00:00:00.000Z","formattedDate":"November 13, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2699\ufe0f Lightbox Viewer, Animation Viewer, Blendshape Viewer, Visual Expressions Editor, and Property Finder for VCC","permalink":"/updates/2023/11/17/p1"},"nextItem":{"title":"\u2728 FaceTra Shape Creator V0.2","permalink":"/updates/2023/11/12/p0"}},"content":"I\'ve added an experimental option to let you modify the eye socket so that it is deeper.\\n\\nThis could help on avatars that were not designed with extreme eye angles, which can commonly happen with eye tracking \ud83d\udc40\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/facetra-shape-creator)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-11-12-p0-deepen-f.mp4\').default}/>\\n</video>"},{"id":"/2023/11/12/p0","metadata":{"permalink":"/updates/2023/11/12/p0","source":"@site/updates/2023-11-12-p0.md","title":"\u2728 FaceTra Shape Creator V0.2","description":"- Split Upper and Lower Teeth","date":"2023-11-12T00:00:00.000Z","formattedDate":"November 12, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 FaceTra Shape Creator V0.3: Deepen Eye Socket","permalink":"/updates/2023/11/13/p0"},"nextItem":{"title":"\u2728 FaceTra Shape Creator V0.1","permalink":"/updates/2023/11/09/p0"}},"content":"- Split Upper and Lower Teeth\\n- Lower Jaw movement can affect the tongue and Lower Teeth\\n- Nose can be excluded from Mouth Left/Right\\n- Neck can be ignored on merged meshes\\n- Some Mouth shapes can reuse blendshapes\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/facetra-shape-creator)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-11-12-p0-2023-11-12_19-51-20_ShareX.mp4\').default}/>\\n</video>"},{"id":"/2023/11/09/p0","metadata":{"permalink":"/updates/2023/11/09/p0","source":"@site/updates/2023-11-09-p0.md","title":"\u2728 FaceTra Shape Creator V0.1","description":"- Jaw* optionally excludes the upper mouth","date":"2023-11-09T00:00:00.000Z","formattedDate":"November 9, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 FaceTra Shape Creator V0.2","permalink":"/updates/2023/11/12/p0"},"nextItem":{"title":"\u2728 FaceTra Shape Creator V0.0.5","permalink":"/updates/2023/11/08/p0"}},"content":"- Jaw* optionally excludes the upper mouth\\n- Meshes exported with different scale now supported\\n- LookIn/LookOut can now be built from LookLeft/LookRight\\n- Newtonsoft.Json no longer required for Resonite export\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/facetra-shape-creator)"},{"id":"/2023/11/08/p0","metadata":{"permalink":"/updates/2023/11/08/p0","source":"@site/updates/2023-11-08-p0.md","title":"\u2728 FaceTra Shape Creator V0.0.5","description":"- If your model already has face tracking, you can select which shapes to override","date":"2023-11-08T00:00:00.000Z","formattedDate":"November 8, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 FaceTra Shape Creator V0.1","permalink":"/updates/2023/11/09/p0"},"nextItem":{"title":"\u2600\ufe0f FaceTra Shape Creator (\u2b50)","permalink":"/updates/2023/11/07/p0"}},"content":"- If your model already has face tracking, you can select which shapes to override\\n- \u26a0\ufe0f Fix MouthLowerDown, MouthUpperUp, and symmetry issues on all Eye* shapes and CheekSquint\\n- \u26a0\ufe0f MouthClosed has new handles\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/facetra-shape-creator)"},{"id":"/2023/11/07/p0","metadata":{"permalink":"/updates/2023/11/07/p0","source":"@site/updates/2023-11-07-p0.md","title":"\u2600\ufe0f FaceTra Shape Creator (\u2b50)","description":"The early access for \\"Ha\xef\'s FaceTra Shape Creator\\" tool is starting now for Patreon supporters \u2b50","date":"2023-11-07T00:00:00.000Z","formattedDate":"November 7, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 FaceTra Shape Creator V0.0.5","permalink":"/updates/2023/11/08/p0"},"nextItem":{"title":"\u2728 Vixen V0.1","permalink":"/updates/2023/10/27/p0"}},"content":"The early access for \\"Ha\xef\'s FaceTra Shape Creator\\" tool is starting now for Patreon supporters \u2b50\\n\\nDuring those trials, the tool will be rough to use, and it is strongly recommended that you join Discord when using the tool. Thank you! \u2728\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/facetra-shape-creator)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-11-07-p0-haolan-facetra-test-f.mp4\').default}/>\\n</video>"},{"id":"/2023/10/27/p0","metadata":{"permalink":"/updates/2023/10/27/p0","source":"@site/updates/2023-10-27-p0.md","title":"\u2728 Vixen V0.1","description":"I have updated Vixen to V0.1.0, this is a small change:","date":"2023-10-27T00:00:00.000Z","formattedDate":"October 27, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f FaceTra Shape Creator (\u2b50)","permalink":"/updates/2023/11/07/p0"},"nextItem":{"title":"\u2600\ufe0f Vixen (\u2b50)","permalink":"/updates/2023/10/21/p0"}},"content":"I have updated Vixen to V0.1.0, this is a small change:\\n- If you change a material property that affects all SkinnedMeshRenderers on the avatar, it will now also affect all MeshRenderers.\\n- Fix the UI should no longer crash if a toggled object/component is removed from the scene.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/vixen)"},{"id":"/2023/10/21/p0","metadata":{"permalink":"/updates/2023/10/21/p0","source":"@site/updates/2023-10-21-p0.md","title":"\u2600\ufe0f Vixen (\u2b50)","description":"I am releasing \\"Vixen\\", a Unity Editor tool that provides another approach to create interactive elements and toggles on your avatar.","date":"2023-10-21T00:00:00.000Z","formattedDate":"October 21, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 Vixen V0.1","permalink":"/updates/2023/10/27/p0"},"nextItem":{"title":"\u2600\ufe0f IconGen (\u2b50)","permalink":"/updates/2023/09/22/p0"}},"content":"I am releasing \\"Vixen\\", a Unity Editor tool that provides another approach to create interactive elements and toggles on your avatar.\\n\\nThank you for your support! \u2b50\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/vixen)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-10-21-p0-vixen-demo-f.mp4\').default}/>\\n</video>"},{"id":"/2023/09/22/p0","metadata":{"permalink":"/updates/2023/09/22/p0","source":"@site/updates/2023-09-22-p0.md","title":"\u2600\ufe0f IconGen (\u2b50)","description":"I am releasing \\"IconGen\\", a Unity Editor tool which lets you capture icons from objects in your scene, and then decorate and crop them in a few clicks.","date":"2023-09-22T00:00:00.000Z","formattedDate":"September 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Vixen (\u2b50)","permalink":"/updates/2023/10/21/p0"},"nextItem":{"title":"\u2600\ufe0f IconGen Thumbnail","permalink":"/updates/2023/09/13/p0"}},"content":"I am releasing \\"IconGen\\", a Unity Editor tool which lets you capture icons from objects in your scene, and then decorate and crop them in a few clicks.\\n\\nThank you for your support! \u2b50\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/icon-gen)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-09-22-p0-icongen-demo-f.mp4\').default}/>\\n</video>"},{"id":"/2023/09/13/p0","metadata":{"permalink":"/updates/2023/09/13/p0","source":"@site/updates/2023-09-13-p0.md","title":"\u2600\ufe0f IconGen Thumbnail","description":"I\'m releasing \\"IconGen Thumbnail (Play Mode)\\".","date":"2023-09-13T00:00:00.000Z","formattedDate":"September 13, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f IconGen (\u2b50)","permalink":"/updates/2023/09/22/p0"},"nextItem":{"title":"\u2728 Double Hip Tracker V1.1: Double Chest Tracker","permalink":"/updates/2023/08/22/p0"}},"content":"I\'m releasing \\"IconGen Thumbnail (Play Mode)\\".\\n\\nThis tool can cover for VRChat SDK\'s temporarily lost ability to take thumbnails in Play Mode, when the avatar is playing an animation.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/icon-gen#capture-thumbnails-for-vrchat-in-play-mode\')\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-09-12-p0-thumb-trim-f.mp4\').default}/>\\n</video>"},{"id":"/2023/08/22/p0","metadata":{"permalink":"/updates/2023/08/22/p0","source":"@site/updates/2023-08-22-p0.md","title":"\u2728 Double Hip Tracker V1.1: Double Chest Tracker","description":"I am releasing \\"DoubleHipTracker\\" V1.1.0:","date":"2023-08-22T00:00:00.000Z","formattedDate":"August 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f IconGen Thumbnail","permalink":"/updates/2023/09/13/p0"},"nextItem":{"title":"\u2615 VRWare 2023 (World)","permalink":"/updates/2023/08/12/p0-c"}},"content":"I am releasing \\"DoubleHipTracker\\" V1.1.0:\\nAdded Double Chest Tracker.\\n\\nUse two Chest trackers, or two Hip trackers, or all four simultaneously. The functionality of the double Hip tracker remains unchanged.\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/double-hip-tracker/double-chest-tracker)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-08-22-p0-doublechesttrackerprio-f.mp4\').default}/>\\n</video>"},{"id":"/2023/08/12/p0-c","metadata":{"permalink":"/updates/2023/08/12/p0-c","source":"@site/updates/2023-08-12-p0-c.md","title":"\u2615 VRWare 2023 (World)","description":"I\'ve begun updating VRWare throughout the past couple weeks. So far:","date":"2023-08-12T00:00:00.000Z","formattedDate":"August 12, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2728 Double Hip Tracker V1.1: Double Chest Tracker","permalink":"/updates/2023/08/22/p0"},"nextItem":{"title":"\u2600\ufe0f Double Hip Tracker (\u2b50)","permalink":"/updates/2023/07/12/p0"}},"content":"I\'ve begun updating VRWare throughout the past couple weeks. So far:\\n- VRChat Quest is no longer Quest-only\\n- Hard difficulty\\n- Spectator area\\n- StringLoader translations (https://github.com/hai-vr/vrw-t)\\n- New appearance\\n- General project cleanup & VCC upgrade\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-08-12-p0-c-spectator-f.mp4\').default}/>\\n</video>"},{"id":"/2023/07/12/p0","metadata":{"permalink":"/updates/2023/07/12/p0","source":"@site/updates/2023-07-12-p0.md","title":"\u2600\ufe0f Double Hip Tracker (\u2b50)","description":"I am releasing \\"Double Hip Tracker\\" V1.0 for download on Patreon for all Supporter tiers.","date":"2023-07-12T00:00:00.000Z","formattedDate":"July 12, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2615 VRWare 2023 (World)","permalink":"/updates/2023/08/12/p0-c"},"nextItem":{"title":"\ud83e\uddea Knowledge sharing \\"ResilienceVR IK: Bonding interactions\\"","permalink":"/updates/2023/05/07/p0-ks"}},"content":"I am releasing \\"Double Hip Tracker\\" V1.0 for download on Patreon for all Supporter tiers.\\n\\nThis version only works on VRChat as an OSC tracker.\\n\\nPlease join the [Discord](/docs/other/discord) to discuss if you need help!\\n\\nThank you for your support! \u2b50\\n\\n\ud83d\uddd2\ufe0f [Open documentation](/docs/products/double-hip-tracker)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'/docs/products/double-hip-tracker/img/doublehip-demo-f.mp4\').default}/>\\n</video>"},{"id":"/2023/05/07/p0-ks","metadata":{"permalink":"/updates/2023/05/07/p0-ks","source":"@site/updates/2023-05-07-p0-ks.md","title":"\ud83e\uddea Knowledge sharing \\"ResilienceVR IK: Bonding interactions\\"","description":"A new knowledge sharing article has been published, \\"ResilienceVR IK: Bonding interactions\\".","date":"2023-05-07T00:00:00.000Z","formattedDate":"May 7, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2600\ufe0f Double Hip Tracker (\u2b50)","permalink":"/updates/2023/07/12/p0"},"nextItem":{"title":"\u2615 ResilienceVR IK Demo (World)","permalink":"/updates/2023/05/03/p0-c"}},"content":"A new knowledge sharing article has been published, \\"ResilienceVR IK: Bonding interactions\\".\\n\\n- 2023-05-07 [\\"ResilienceVR IK: Bonding interactions\\"](https://hai-vr.notion.site/ResilienceVR-IK-Bonding-interactions-0fbd88f066164ab09e629ece9e542f8a)\\n\\n\ud83d\udd0d [View articles](/docs/other/articles)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-05-03-p0-c-rvrik-demo-f.mp4\').default}/>\\n</video>"},{"id":"/2023/05/03/p0-c","metadata":{"permalink":"/updates/2023/05/03/p0-c","source":"@site/updates/2023-05-03-p0-c.md","title":"\u2615 ResilienceVR IK Demo (World)","description":"I am releasing \\"ResilienceVR IK Demo\\", a VRChat Udon port of my VR app.","date":"2023-05-03T00:00:00.000Z","formattedDate":"May 3, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\ud83e\uddea Knowledge sharing \\"ResilienceVR IK: Bonding interactions\\"","permalink":"/updates/2023/05/07/p0-ks"},"nextItem":{"title":"\ud83e\uddea Knowledge sharing \\"QvPen2Pen retrospective\\"","permalink":"/updates/2023/01/27/p0-ks"}},"content":"I am releasing \\"ResilienceVR IK Demo\\", a VRChat Udon port of my VR app.\\n\\nResilienceVR (RVR) is a standalone social VR app that I\'m developing. It focuses on experimentation \ud83e\uddea and intimacy \ud83d\udc95.\\n\\nThis world is the result of its first experiment: interactions in social VR using IK.\\n\\nWith ResilienceVR, I want to inspire existing social VR users to desire and demand more from their favorite social VR platforms.\\n\\nWorking on my own app lets me experiment and iterate outside of the boundaries of existing platforms, and then share back to the community. \u2728\\n\\n\ud83c\udf03 [Open world](https://vrchat.com/home/launch?worldId=wrld_0a7397db-79ff-46ce-911b-7a022cbb2c52)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-05-03-p0-c-rvrik-demo-f.mp4\').default}/>\\n</video>"},{"id":"/2023/01/27/p0-ks","metadata":{"permalink":"/updates/2023/01/27/p0-ks","source":"@site/updates/2023-01-27-p0-ks.md","title":"\ud83e\uddea Knowledge sharing \\"QvPen2Pen retrospective\\"","description":"A new knowledge sharing article has been published, \\"QvPen2Pen retrospective\\".","date":"2023-01-27T00:00:00.000Z","formattedDate":"January 27, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u2615 ResilienceVR IK Demo (World)","permalink":"/updates/2023/05/03/p0-c"}},"content":"A new knowledge sharing article has been published, \\"QvPen2Pen retrospective\\".\\n\\n- 2023-01-27 [\\"QvPen2Pen retrospective\\"](https://hai-vr.notion.site/QvPen2Pen-retrospective-824415045c85449883fb907f7d9712c8)\\n\\n\ud83d\udd0d [View articles](/docs/other/articles)\\n\\n<video controls width=\\"816\\">\\n    <source src={require(\'./img/2023-01-27-p0-pancake-f.mp4\').default}/>\\n</video>"}]}')}}]);