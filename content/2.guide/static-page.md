# Static & Protected Pages

In this guide, you will learn how to set up server-side rendering for better SEO optimization and protect specific pages to ensure they are accessible only to authenticated users.

## Creating a page

#### Step 1: Create a New Page File

1. Create a new file in the `pages` directory of your Nuxt project. For example, `home.vue`.
2. This file will be accessible at the route `/home`.

#### Step 2: Set Up Server-Side Rendering (SSR)

To optimize the page for SEO purposes, we need to configure server-side rendering for this route.

1. Open the `nuxt.config.ts` file.
2. Locate the `routeRules` key and add a new key-value pair for the `/home` route.

Example `routeRules` object:

```typescript
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { isr: true },
    '/home': { prerender: true },
  },
});
```

In this example, the /home route is set to be prerendered, meaning it will be generated on the server side.

For more information on available rendering options, visit the Nuxt rendering documentation.

## Creating a Protected Page (e.g. dashboard pages)

#### Step 1: Create a New Page File
Create a new file in the pages directory. For example, dashboard.vue.

#### Step 2: Import the Auth Middleware
To protect the page and ensure that only authenticated users can access it, we need to use the auth middleware.

In the newly created page file (dashboard.vue), import the auth middleware:

```vue
<script setup>
import { auth } from '@/middleware/auth'
</script>
```

#### Step 3: Define Page Meta with Middleware

Add the auth middleware to the definePageMeta object to protect the page.

```vue
<script setup>
import { auth } from '@/middleware/auth'

definePageMeta({
  layout: false,
  middleware: [auth]
})
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to the protected dashboard page.</p>
  </div>
</template>
```

Now, the `dashboard` page is protected, and users must be authenticated to access it.

## Conclusion
By following these steps, you can create new static and protected pages in your NuxtSAAS project. Static pages are optimized for SEO with server-side rendering, while protected pages ensure only authenticated users can access them. This approach enhances both the performance and security of your Nuxt application.
