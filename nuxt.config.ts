// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    // "@nuxtjs/supabase",
  ],
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      srtipePk: process.env.STRIPE_PK_KEY,
    }
  },
  app:{
    head:{
      script:[
        {src: 'https://js.stripe.com/v3',defer:true}
      ]
    }
  }
})
