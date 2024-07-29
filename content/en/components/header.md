---
title: Header
description: ''
position: 7
category: Components
---

## Overview

The `Header` component is designed to provide a customizable header for your landing page. It includes properties for the application name, logo, navigation links, buttons, and an optional announcement section.

```typescript
import Header from '@/components/blocks/header/Header.vue';
```

<img src="/components/header.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/components/header.png" class="dark-img" width="1280" height="640" alt=""/>


## Props

The `Header` component accepts the following props

### Required Props

1. **appName** (`string`)
    - **Description**: The name of the application.
    - **Default**: `app.config.ts` -> `appName`

2. **links** (Array of [`LinkProps`](/types/link-props))
    - **Description**: An array of objects defining the navigation links.

### Optional Props

1. **appLogo** (`string` | `null`)
    - **Description**: The URL of the application logo.
    - **Default**: `app.config.ts` -> `appLogo`
    - **Example**: `/logo.png"`

2. **buttons** (Array of [`ButtonProps`](/types/button-props))
    - **Description**: An array of objects defining the buttons to be displayed in the header.

3. **announcement** (`object`)
    - **Description**: An optional announcement section to be displayed in the header.
    - **Properties**:
        - **title** (`string`)
            - **Description**: The title of the announcement.
            - **Example**: `"New Feature Released!"`
        - **backgroundClass** (`string`)
            - **Description**: A CSS class to style the background of the announcement.
            - **Example**: `"bg-red-500"`
        - **link** (`string`)
            - **Description**: A URL for more details about the announcement.
            - **Example**: `"https://example.com/new-feature"`
