---
title: Get Started
description: ''
position: 1
category: ''
features:
  - Feature 1
  - Feature 2
  - Feature 3
---

<img src="/bg.jpg" class="light-img" width="1280" height="640" alt=""/>
<img src="/preview-dark.png" class="dark-img" width="1280" height="640" alt=""/>

# Welcome to NuxtSAAS 👋

Follow along with the documentation to get your app up and running. Once you're done, follow this documentation to launch your first SaaS startup in a matter of days. 

### Start a local server & set up environment variables

1. In your terminal, run the following commands one-by-one:

    ```bash
    git clone https://github.com/artjHom00/nuxt3-saas-boilerplate
    cd nuxt3-saas-boilerplate
    npm install
    git remote remove origin
    npm run dev
    ```

    > **Note:** NuxtSAAS requires Node 18+. Type `node -v` in your terminal to check your version.

2. Create a new file `.env` from `.env.example`:

3. Go to the [Supabase dashboard](https://supabase.com/), create a new project and paste  `SUPABASE_URL`, `SUPABASE_KEY` and `SUPABASE_POSTGRES` in your just-created `.env` file. Same with the [LemonSqueezy dashboard](https://lemonsqueezy.com) and `LEMONSQUEEZY_SECRET`, `LEMONSQUEEZY_STORE_ID` and `LEMONSQUEEZY_API_KEY` variables.


4. Open [http://localhost:3000](http://localhost:3000) to see your site.

### NuxtJS project structure

- `/pages` → Pages
- `/server` → API endpoints
- `/components` → Vue components
- - `/components/blocks/landing` → Blocks for [Landing Building](/landing-building)
- `/data` → Static data for content / layout elements
- `/layouts` → Used layouts for pages
- `/middlewares` -> Middlewares for the pages
- `/public`, `/assets` → Images, assets & other stuff

### `/app.config.ts`

It is where you configure your app's meta info: app name, app logo. Support live chat is connected from here

### `/nuxt.config.ts`

It is where you configure your app's nuxt configuration (such as SEO settings, routing rules, connected modules etc)

### `/assets/tailwind.css`

It is where you configure your app's color palette 