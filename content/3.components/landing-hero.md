# LandingHero

## Overview

The `LandingHero` component is designed for the main section of a landing page, displaying a prominent heading, description, image, and optional buttons and testimonials.

```typescript
import LandingHero from '@/components/blocks/landing/landing-hero/LandingHero.vue';
```

<img src="/components/landingHero.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingHero` component accepts the following props.
> Note: you can use \***Text**\* markdown for text styling in `heading` and `description` properties

### Optional Props

1. **heading** (`Object`)
    - **Description**: The main heading of the hero section.
    - **Properties**: 
        - **title** (`string`)
            - **Description**: The title of the heading.
        - **styling** (`number`)
            - **Description**: A styling of formatted heading
            - **Default**: 1

2. **description** (`Object`)
    - **Description**: A descriptive text that accompanies the heading.
    - **Properties**: 
        - **title** (`string`)
            - **Description**: The title of the description.
        - **styling** (`number`)
            - **Description**: A styling of formatted heading
            - **Default**: 1

3. **image** ([`ImageProps`](/types/image-props))
    - **Description**: Image displayed in the hero section.

4. **buttons** (Array [`ButtonProps`](/types/button-props))
    - **Description**: An array of buttons to display below the heading and description.

5. **alreadyUsing** (`Object`)
    - **Description**: Displays user testimonials with images and optional star ratings.
    - **Properties**: 
        - **images** (Array of [`ImageProps`](/types/image-props))
            - **Description**: Avatars of people, who've used the service
        - **showStars** (`boolean`)
            - **Description**: Either show or not show 5-stars
        - **Description** (`string`)
            - **Description**: Small description
  
6. **align** (`'left'` | `'center'`)
    - **Description**: Alignment of the content in the hero section.
    - **Default**: `'left'`