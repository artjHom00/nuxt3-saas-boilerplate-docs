---
title: Footer
description: ''
position: 8
category: Components
---

## Overview

The `Footer` component is designed to provide a customizable footer for your landing page. It includes properties for the application name, logo, subheading, sections with links, and social media icons.

```typescript
import Footer from '@/components/blocks/footer/Footer.vue';
```

<img src="/components/footer.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/components/footer.png" class="dark-img" width="1280" height="640" alt=""/>

## Props

The `Footer` component accepts the following props

### Required Props

1. **appName** (`string`)
    - **Description**: The name of the application.
    - **Default**: `app.config.ts` -> `appName`

2. **sections** (Array of [`SectionProps`](/types/section-props))
    - **Description**: An array of objects defining the sections in the footer.

### Optional Props

1. **appLogo** (`string` | `null`)
    - **Description**: The URL of the application logo.
    - **Default**: `app.config.ts` -> `appLogo`
    - **Example**: `/logo.png`

2. **subheading** (`string` | `null`)
    - **Description**: An optional subheading for the footer.
    - **Default**: `null`
    - **Example**: `"Your trusted partner"`

3. **socials** ([`FooterSocialsProps`](/types/footer-socials-props) | `null`)
    - **Description**: An optional object defining the social media links.