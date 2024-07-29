---
title: Supabase
description: ''
position: 5
category: Guide
---

We use [Supabase](https://supabase.com/) for authentication and cloud database services. It's completely free to use for starting products.


## Setting up Supabase

### Step 1: Authentication

Go to [Supabase](https://supabase.com/) and get started by signing in or creating a new account. After that, go to your dashboard & create a **"New Project"**.

<img src="/supabase-auth.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/supabase-auth.png" class="dark-img" width="1280" height="640" alt=""/>

After project creation, go to **"Project Settings"** tab in aside menu. From there, go to **"API"** and copy `SUPABASE_URL` & `SUPABASE_KEY` project API keys. Copy them and paste into `.env` file.

<img src="/supabase-api-credentials.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/supabase-api-credentials.png" class="dark-img" width="1280" height="640" alt=""/>

### Step 2: Database
Go to **"Project Settings"** tab in aside menu. From there, go to **"Database"** and copy the **Connection string**. Paste it into `.env` file, replacing the `[YOUR-PASSWORD]` part.


<img src="/supabase-postgre.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/supabase-postgre.png" class="dark-img" width="1280" height="640" alt=""/>

> All set! You've set up Supabase for your project. Now you're able to authenticate & sign up using Supabase.