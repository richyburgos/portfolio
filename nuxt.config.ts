import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in'
        },
        head: {
            title: `Richy's' Portfolio`,
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'This site was made to showcase my abilities in Vue 3, Nuxt3, CSS and Javascript'
                },
                { name: 'telephone', content: '+(501)-637-0617' },
                { name: 'email', content: 'richyburgos@live.com' },
                { name: 'author', content: 'Richard Alvaro Burgos' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: '/bootstrap.bundle.min.js' }
            ]
        }
    },
    css: [
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    plugins: [
        // '~/plugins/core-components.js'
    ],
    components: true,
    modules: [
        // '@nuxt/content',
        '@nuxt/eslint',
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
    }
})
