---
title: PricingPlanProps
description: ''
position: 8
category: Types
---

```typescript
import { type PricingPlanProps} from '@/components/blocks/types.ts';
```

```typescript
export type PricingPlanProps = {
    heading: string,
    subheading?: string,
    pricing: string,
    period: string,
    features: string[],
    action: {
        title: string,
        event?: any
    },
    lemonsqueezyId?: number // imported from lemonsqueezy
}
```