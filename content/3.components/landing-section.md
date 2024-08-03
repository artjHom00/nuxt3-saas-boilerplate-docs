# LandingSection

## Overview

The `LandingSection` component provides a flexible section layout for your landing page. It includes properties for a heading, description, feature list, image, buttons, and styling options for alignment and background.

```typescript
import LandingSection from '@/components/blocks/landing/landing-section/LandingSection.vue';
```

<img src="/components/landingSection.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingSection` component accepts the following props

#### Optional Props

1. **tagline** (`string`)
    - **Description**: The tagline before the heading

2. **heading** (`string`)
    - **Description**: The heading text for the section.
    - **Default**: "No heading provided in the attributes"

3. **description** (`string`)
    - **Description**: An optional description text for the section.
    - **Example**: "This is a description for the section."

4. **links** (Array of [`LinkProps`](/types/link-props))
    - **Description**: A list of links to be displayed in the section.

5. **buttons** (Array of [`ButtonProps`](/types/button-props))
    - **Description**: An optional array of buttons to be displayed in the section.

6. **secondBlock** ([`ImageProps`](/types/image-props) | Array of [`FeatureProps`](/types/feature-props))
    - **Description**: Definition of second block. Could be either an image OR a block with features
    - **Default**: Placeholder image

7. **filled** (`boolean`)
    - **Description**: Determines if the section should have a filled background.
    - **Default**: false
    - **Example**: `true` for a filled background, `false` for a transparent background.

8. **align** (`'left'` | `'center'` | `'right'`)
    - **Description**: The alignment of the text content relative to the image.
    - **Default**: `left`
    - **Example**: `left` for left-aligned text, `center` for centered text, `right` for right-aligned text.
