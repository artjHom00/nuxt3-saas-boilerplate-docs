# LandingHero

## Overview

The `LandingHero` component is designed for the main section of a landing page, displaying a prominent heading, description, image, and optional buttons and testimonials.

```typescript
import LandingHero from '@/components/blocks/landing/landing-hero/LandingHero.vue';
```

<img src="/components/landingHero.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/components/landingHero-2.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingHero` component accepts the following props.
> Note: you can use \***Text**\* markdown for text styling in `heading` and `description` properties

#### Optional Props

1. **badge** (`object`)
    - **Description**: Badge before the heading
    - **Properties**:
        - **tag** (`string`)
            - **Description**: badge's tag (optional),
        - **content** (`string`)

2. **heading** (`object`)
    - **Description**: The main heading of the hero section.
    - **Properties**: 
        - **title** (`string`)
            - **Description**: The title of the heading.
        - **styling** (`number`)
            - **Description**: A styling of formatted heading
            - **Default**: 1

3. **description** (`object`)
    - **Description**: A descriptive text that accompanies the heading.
    - **Properties**: 
        - **title** (`string`)
            - **Description**: The title of the description.
        - **styling** (`number`)
            - **Description**: A styling of formatted heading
            - **Default**: 1

4. **image** ([`ImageProps`](/types/image-props))
    - **Description**: Image displayed in the hero section.

5. **buttons** (Array [`ButtonProps`](/types/button-props))
    - **Description**: An array of buttons to display below the heading and description.

6. **alreadyUsing** (`object`)
    - **Description**: Displays user testimonials with images and optional star ratings.
    - **Properties**: 
        - **images** (Array of [`ImageProps`](/types/image-props))
            - **Description**: Avatars of people, who've used the service
        - **showStars** (`boolean`)
            - **Description**: Either show or not show 5-stars
        - **description** (`string`)
            - **Description**: Small description
  
7. **align** (`'left'` | `'center'`)
    - **Description**: Alignment of the content in the hero section.
    - **Default**: `'left'`