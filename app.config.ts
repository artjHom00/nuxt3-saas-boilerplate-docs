// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'NuxtSAAS Documentation',
    url: 'localhost:3000',
    image: '/preview.png',
    socials: {
      twitter: 'artjhom',
      github: 'artjHom00/nuxt3-saas-boilerplate',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      // fluid: true
    },
    header: {
      // logo: true,
      title: 'NuxtSAAS',
      showLinkIcon: true,
      exclude: [],
      // fluid: true
    }
  }
})
