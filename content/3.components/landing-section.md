# LandingSection

## Overview

The `LandingSection` component provides a flexible section layout for your landing page. It includes properties for a heading, description, feature list, image, buttons, and styling options for alignment and background.

```typescript
import LandingSection from '@/components/blocks/landing/landing-section/LandingSection.vue';
```

<img src="/components/landingSection.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingSection` component accepts the following props

### Optional Props

1. **heading** (`string`)
    - **Description**: The heading text for the section.
    - **Default**: "No heading provided in the attributes"

2. **description** (`string`)
    - **Description**: An optional description text for the section.
    - **Example**: "This is a description for the section."

3. **features** (Array of `string`)
    - **Description**: A list of feature descriptions to be displayed in the section.
    - **Example**: ["Feature 1", "Feature 2", "Feature 3"]

4. **image** ([`ImageProps`](/types/image-props))
    - **Description**: An optional image to display in the section.

5. **buttons** (Array of [`ButtonProps`](/types/button-props))
    - **Description**: An optional array of buttons to be displayed in the section.

6. **filled** (`boolean`)
    - **Description**: Determines if the section should have a filled background.
    - **Default**: false
    - **Example**: `true` for a filled background, `false` for a transparent background.

7. **align** (`'left'` | `'center'` | `'right'`)
    - **Description**: The alignment of the text content relative to the image.
    - **Default**: `left`
    - **Example**: `left` for left-aligned text, `center` for centered text, `right` for right-aligned text.
