// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//
// })
import { defineNuxtConfig } from 'nuxt/config'


// export default {
// @ts-ignore
export default defineNuxtConfig<NuxtConfig>({
    title: 'Portfolio',
    dev: true,
    env: { ...process.env },
    css: [
        '@/assets/css/theme-6.css',
        'bootstrap/dist/css/bootstrap.min.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    head: {
        title: 'portfolio',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'author', content: 'Richard Alvaro Burgos' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/gt_favicon.png' }
        ],
        script: []
    },
    loading: {
        color: 'red',
        height: '100px',
        duration: 5000
    },
    plugins: [
        // '~/plugins/core-components.js'
    ],
    components: true,
    buildModules: [],
    modules: [
        // '@nuxt/content',
        '@sidebase/nuxt-pdf'
    ],
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome'
        ]
    },
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
})
