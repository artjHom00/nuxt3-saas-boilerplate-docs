---
title: AccordionItemProps
description: ''
position: 8
category: Types
---

```typescript
import { type AccordionItemProps} from '@/components/blocks/types.ts';
```

```typescript
export type AccordionItemProps = {
    value: string,
    title: string,
    content: string
}
```

## Props

The `AccordionItemProps` type accepts the following props

### Required Props

1. **value** (`string`)
    - **Description**: id of a question

2. **title** (`string`)
    - **Description**: title of a question

3. **content** (`string`)
    - **Description**: content (answer) for a question