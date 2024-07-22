---
title: Deployment & Analytics
description: ''
position: 6
category: Guide
---

By default, we recommend you to deploy your SAAS project on Vercel. Vercel also includes by-default installed analytics system. This guide will walk you through the steps to get your NuxtSAAS website up and running on Vercel.

## Prerequisites

Before you begin, make sure you have the following:

1. **A GitHub, GitLab, or Bitbucket account.**
2. **Vercel account** (If you don't have one, you can sign up at [Vercel](https://vercel.com/signup)).

<img src="/vercel-dashboard.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/vercel-dashboard.png" class="dark-img" width="1280" height="640" alt=""/>

## Step-by-Step Guide

### Step 1: Prepare Your NuxtSAAS Project

Ensure your NuxtSAAS project is ready for deployment. Your project **should be in a Git repository** on GitHub, GitLab, or Bitbucket.

### Step 2: Configure Project Settings
After selecting your repository, Vercel will auto-detect that you are using Nuxt 3.
Ensure **the Framework Preset is set to Nuxt.js.**
For the Build Command, use `npm run build` (or `yarn build` if you use Yarn).
For the Output Directory, use `.output/public`.
### Step 3: Environment Variables
If your NuxtSAAS application requires environment variables, add them in the **Environment Variables section under Settings**.

Go to the Settings tab of your project.
Scroll down to **Environment Variables**.
Add any required variables by clicking **Add** and filling in the Key and Value.
### Step 4: Deploy Your Project
Click on the **Deploy button**.
Vercel will build and deploy your project. This process may take a few minutes.
### Step 5: Check Your Deployment
Once the deployment is complete, you will receive a live URL for your NuxtSAAS application. Open this URL in your browser to ensure your site is running as expected.

### Step 6: Set Up Custom Domain (Optional)
If you have a custom domain, you can set it up in Vercel.

Go to the **Domains** section of your project.
Click on **Add Domain** and follow the instructions to link your custom domain.

### Access analytics of your website
To access full analytics data of your website, go to **Analytics** tab in your dashboard

<img src="/vercel-analytics.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/vercel-analytics.png" class="dark-img" width="1280" height="640" alt=""/>

### Conclusion
Vercel's integration with Git repositories, automated build process, and scalability make it an excellent choice for deploying Nuxt 3 applications.

For more detailed information, refer to the [Vercel Documentation](https://vercel.com/docs) and the [Nuxt 3 Documentation](https://nuxt.com/docs/).