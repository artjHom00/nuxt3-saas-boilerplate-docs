# LandingQuote

## Overview

The `LandingQuote` component is designed to display a styled quote with optional author details and an avatar.

```typescript
import LandingQuote from '@/components/blocks/landing/landing-quote/LandingQuote.vue';
```

<img src="/components/landingQuote.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingQuote` component accepts the following props

### Required Props

1. **content** (`string`)
    - **Description**: The text content of the quote.

2. **author** (`string`)
    - **Description**: The name of the person who authored the quote.

### Optional Props

1. **avatar** ([`ImageProps`](/types/image-props))
    - **Description**: An optional avatar image for the author.

2. **asideInfo** (`string`)
    - **Description**: Additional information about the author displayed next to their name.
