# Live Support Chat

We support integrating a live support chat system to your website in couple clicks.

> We recommend connecting [Tawk.to](https://www.tawk.to/) or [Tidio](https://www.tidio.com/) as they are free to use for starting projects and cover enough solutions.

## Installation

#### Step 1: Get started
First, create an account on any of your chosen services. After that - get to install the service. They will provide you with the embed code, that you need to copy.

#### Step 2: Integrate with the website
Once you've done configuring the live chat widget - open the `app.config.ts` and paste the code you've copied in `supportChat.embed` object key. 
> Don't forget to set the `isEnabled` setting as `true`

```typescript
// _*: define the application's meta info & support chat embed code (if got one)
export default defineAppConfig({
    appName: '',
    appLogo: null,
    supportChat: {
        isEnabled: true,
        embed: '' /* PASTE THE CODE YOU'VE COPIED HERE */
    }
});
```