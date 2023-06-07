import {defineNuxtConfig} from 'nuxt/config'

// @ts-ignore
export default defineNuxtConfig<NuxtConfig>({
    app: {
        head: {
            title: `Richy's' Portfolio`,
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'This site was made to showcase my abilities in Vue 3, Nuxt3, CSS and Javascript'
                },
                {name: 'telephone', content: '+(501)-637-0617'},
                {name: 'email', content: 'richyburgos@live.com'},
                {name: 'author', content: 'Richard Alvaro Burgos'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
            script: [
                {src: '/bootstrap.bundle.min.js'}
            ]
        }
    },
    dev: true,
    env: {...process.env},
    css: [
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
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
