# ButtonProps

```typescript
import { type ButtonProps} from '@/components/blocks/types.ts';
```

```typescript
export interface ButtonProps extends Props {
    title: string,
    icon?: {
        name: string,
        color: string,
        size?: string
    },
    link?: {
        url: string,
        target?: '_blank'
    }
}
```

## Props

The `ButtonProps` type accepts the following props
> Besides of these properties, it also accepts all the properties from [**shadcn-vue Button Component**](https://www.shadcn-vue.com/docs/components/button)

### Required Props

1. **title** (`string`)
    - **Description**: The text displayed on the button.
2. **icon** (`Object`)
    - **Description**: Configuration for an optional icon to display on the button.
    - **Properties**:
        - **name** (`string`)
            - **Description**: The name of the icon to display.
        - **color** (`string`)
            - **Description**: The color of the icon.
        - **size** (`string`)
            - **Description**: The size of the icon.

3. **link** (`Object`)
    - **Description**: Configuration for an optional link associated with the button.
    - **Properties**:
        - **url** (`string`)
            - **Description**: The URL to navigate to when the button is clicked.
        - **target** (`'_blank'`)
            - **Description**: Specifies where to open the linked document. If set to - **_blank**, the URL opens in a new tab.
            - **Default**: Not specified