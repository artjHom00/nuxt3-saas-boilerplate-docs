---
title: Connecting Your Solution
description: ''
position: 4
category: Guide
---

To give a user access to your service, you can either integrate external API to your users' dashboard or start building your own solution in the project itself. 

## How it works

After client purchases on the website (subscription plan / one time payment) he will gain access to his own personal dashboard on your website. You can integrate your solution to the dashboard using REST API. 

### Set up dashboard's layout and integrate API

Go to `dashboard/index.vue` and after the **"_*:"** comment add your own layout for main dashboard page.
After that you can integrate your solution using REST API.

<img src="/dashboard.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/dashboard.png" class="dark-img" width="1280" height="640" alt=""/>

### Add more pages to the dashboard

In case you need more pages in users' dashboards, go to `data/dashboard-sidenav.ts` and add more object data in there.
Then, add new page in `views/` folder. More info on [how to create new pages on the website](/guide/static-page)
```typescript[dashboard-sidenav.ts]
[
  {
    id: 'home',
    title: 'Home',
    href: '/dashboard',
    icon: 'material-symbols:person-outline'
  },
  {
    id: 'subscription',
    title: 'Subscription',
    href: '/dashboard/subscription',
    icon: 'mdi:contactless-payment-circle-outline'
  }
]
```

After that you will see a new tab appearing on the aside navigation menu.