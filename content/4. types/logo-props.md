# LogoProps

```typescript
import { type LogoProps} from '@/components/blocks/types.ts';
```

```typescript
export type LogoProps = {
    type: 'svg' | 'img';
    data: string;
    link?: string;
    alt?: string;
}
```

## Props

The `LogoProps` type accepts the following props

### Required Props

1. **type** (`svg` | `img`)
    - **Description**: format of a logo

2. **data** (`string`)
    - **Description**: if it's an `svg` - enter it's data here. if an `img` - href source

3. **link** (`string`)
    - **Description**: makes logo clickable, url

4. **alt** (`string`)
    - **Description**: `alt` for `img`