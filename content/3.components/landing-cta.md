# LandingCTA

## Overview

The `LandingCTA` component is designed to create a call-to-action section for your landing page.

```typescript
import LandingCTA from '@/components/blocks/landing/landing-cta/LandingCTA.vue';
```

<img src="/components/landingCTA.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingCTA` component accepts the following props

#### Required Props

1. **heading** (`string`)
    - **Description**: The main heading of the call-to-action section.

2. **subheading** (`string`)
    - **Description**: A subheading providing additional information about the call-to-action.

3. **buttons** (Array of [`ButtonProps`](/types/button-props))
    - **Description**: An array of objects defining the buttons to be displayed in the call-to-action section.