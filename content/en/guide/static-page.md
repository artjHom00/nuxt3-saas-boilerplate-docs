---
title: Static & Protected Pages
description: ''
position: 3
category: Guide
---

NuxtSAAS includes blocks & commponents to help you build pages (like a landing page) in no time.
It also includes built-in components from [shadcn-vue](https://www.shadcn-vue.com/docs/components/) library

The /components folder contains all the components.

The /libs/seo.js file helps you set SEO tags to better rank on Google. Make sure to customize SEO tags.

A simple landing page can done like this:

## Installation

Add `@nuxtjs/xxx` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxtjs/xxx
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/xxx
  ```

  </code-block>
</code-group>

Then, add `@nuxtjs/xxx` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    '@nuxtjs/xxx'
  ],
  xxx: {
    // Options
  }
}
```
