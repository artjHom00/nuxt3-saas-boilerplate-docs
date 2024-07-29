---
title: LandingFAQ
description: ''
position: 11
category: Components
---

## Overview

The `LandingFAQ` component is designed to present a list of frequently asked questions in an accordion format. It includes an optional heading and subheading for context, and allows users to expand and collapse each FAQ item.

```typescript
import LandingFAQ from '@/components/blocks/landing/landing-faq/LandingFAQ.vue';
```

<img src="/components/landingFAQ.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/components/landingFAQ.png" class="dark-img" width="1280" height="640" alt=""/>

## Props
The LandingFAQ component accepts the following props

### Optional Props
1. **heading** (`string`)
    - **Description**: The main heading for the FAQ section.

2. **subheading** (`string`)
    - **Description**: A subheading that provides additional context for the FAQ section.

3. **accordionItems** (Array of [`AccordionItemProps`](/types/accordion-item-props))
    - **Description**: An array of FAQ items to display in the accordion. Each item includes a title and content.