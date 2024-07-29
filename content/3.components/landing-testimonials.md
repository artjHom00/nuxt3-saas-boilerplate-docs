# LandingTestimonials

## Overview

The `LandingTestimonials` component is designed to showcase user testimonials on a landing page. It displays a list of testimonials, each with an optional image and content, using `PersonCard` components to present user details.

```typescript
import LandingTestimonials from '@/components/blocks/landing/landing-testimonials/LandingTestimonials.vue';
```

<img src="/components/landingTestimonials.png" class="light-img" width="1280" height="640" alt=""/>

## Props

The LandingTestimonials component accepts the following props

### Required Props
1. **testimonials** (Array of [`TestimonialProps`](/types/testimonial-props))
    - **Description**: An array of testimonials to be displayed. Each testimonial includes user details, content, and an optional image.