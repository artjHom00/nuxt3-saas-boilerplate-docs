# LandingFeatures
## Overview

The LandingFeatures component is designed to showcase a set of features in a grid layout. It includes an optional tagline, heading, and description for context. Each feature is displayed within a card, which includes an icon, title, and description.

```typescript
import LandingFeatures from '@/components/blocks/landing/landing-features/LandingFeatures.vue';
```

<img src="/components/landingFeatures.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The LandingFeatures component accepts the following props

#### Optional Props
1. **tagline** (`string`)
    - **Description**: A brief tagline that introduces the feature section.

2. **heading** (`string`)
    - **Description**: The main heading for the feature section.

3. **description** (`string`)
    - **Description**: A subheading that provides additional context for the features presented.

4. **features** (Array of [`FeaturesProps`](/types/features-props))
    - **Description**: An array of feature items to display in the grid. Each item includes an icon, heading, and description.
