# PricingPlanProps

```typescript
import { type PricingPlanProps} from '@/components/blocks/types.ts';
```

```typescript
export type PricingPlanProps = {
    heading: string,
    subheading?: string,
    featured?: boolean,
    pricing: { 
        actual: string,
        discount?: string,
    },
    period: string,
    features: string[],
    unavailable?: string[],
    action: {
        title: string,
        event?: any
    },
    paymentLink?: string // imported from Stripe
}
```