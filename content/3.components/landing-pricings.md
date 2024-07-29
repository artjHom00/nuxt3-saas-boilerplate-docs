# LandingPricings

## Overview

The `LandingPricings` component displays pricing plans in a responsive grid layout. Each plan includes a heading, subheading, pricing details, features list, and an action button. The component supports dynamic grid column counts based on the number of pricing plans and includes a default action for each plan if not provided.

```typescript
import LandingPricings from '@/components/blocks/landing/landing-pricings/LandingPricings.vue';
```

<img src="/components/landingPricings.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The `LandingPricings` component accepts the following props

### Required Props

1. **pricingPlans** (Array of [`PricingPlanProps`](/types/pricing-plan-props))
    - **Description**: An array of objects defining the pricing plans to be displayed.