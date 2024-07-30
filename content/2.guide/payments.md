# Payments

By default, we use [LemonSqueezy](https://lemonsqueezy.com/) for payments.
Read more about LemonSqueezy here: [Documentation](https://docs.lemonsqueezy.com/help)

## Get started

####  Step 1: Setting up a store
Go to [LemonSqueezy](https://lemonsqueezy.com/) and get started by signing in or creating a new account. After that, go to your dashboard & create a new store there.

####  Step 2: Create products
To accept payments on your website - create your very first product under the `Store` -> `Products` tab. Enter required data, such as **name, description, pricing type & other**.


<img src="/lemonsqueezy-products.png" class="light-img" width="1280" height="640" alt=""/>

####  Step 3: Integrate your products into the website
After you've created the product, **copy it's ID** and when setting up your [`LandingPricings`](/components/landing-pricings) component - add this ID under the `lemonsqueezyId` key.

```typescript
const pricingPlans: PricingPlanProps[] = [{
    heading: 'Starter',
    subheading: 'Best option for personal use & for your next project.',
    pricing: '$29',
    period: 'year',
    features: ['Individual configuration', 'No setup, or hidden fees', 'Team size: 1 developer', 'Premium support: 6 months', 'Free updates: 6 months'],
    action: {
        title: 'Get started',
    },
    // **paste your product id here (create in the store, lemonsqueezy dashboard)
    lemonsqueezyId: 000000,
}]
```

#### Step 4: Add webhooks
In your store dashboard, to `Settings` -> `Webhooks`. From there create a new webhook, setting `Callback URL` as `%YOUR_HOST%/api/webhook`. \
Create a signing secret and put it in `.env` file under the `LEMONSQUEEZY_SECRET` key. \
Mark 3 events as checked: `order_created`, `subscription_cancelled`, `subscription_expired`. 

<img src="/lemonsqueezy-webhook.png" class="light-img" width="1280" height="640" alt=""/>