﻿import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 💬 Blank Gesture Animator

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Replaces the Gesture animator of the avatar with a blank one, as early as possible.

This ensures that Gesture layers created by other non-destructive tooling will begin with a blank state.

:::info
This component exists so that you can drop a prefab containing this component into an avatar in order to reset it,
without having to modify the original avatar descriptor by hand.
:::

## Versions

- **1.10.0**: Blank Gesture Animator now generates one animator layer that VRChat requires, instead of zero layers.
- **1.2.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
